"use server";

import { headers } from "next/headers";
import { createAdminClient } from "@/lib/supabase/server";
import { orcamentoSchema, type OrcamentoInput } from "@/lib/schemas/orcamento";
import { dateBRtoISO } from "@/lib/masks";
import { getResend, FROM, TO } from "@/lib/resend";

export type ActionResult = { ok: true } | { ok: false; error: string };

// Naive in-memory rate limit (per server instance). Good enough for low-traffic
// site; for stricter limits in production move to Upstash/Redis.
const recentByIp = new Map<string, number[]>();
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 3;

async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured → skip
  if (!token) return false;
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token, remoteip: ip }),
      },
    );
    const json = (await res.json()) as { success?: boolean };
    return Boolean(json.success);
  } catch {
    return false;
  }
}

export async function submitOrcamento(input: OrcamentoInput): Promise<ActionResult> {
  const parsed = orcamentoSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Dados inválidos. Confira os campos." };
  }
  const data = parsed.data;
  if (data.website) {
    // honeypot
    return { ok: true };
  }

  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "0.0.0.0";
  const userAgent = h.get("user-agent") ?? null;

  // Rate limit
  const now = Date.now();
  const list = (recentByIp.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (list.length >= RATE_MAX) {
    return {
      ok: false,
      error: "Muitas tentativas. Tente novamente em alguns minutos.",
    };
  }

  // Turnstile
  const ok = await verifyTurnstile(data.turnstileToken, ip);
  if (!ok) {
    return { ok: false, error: "Falha na verificação anti-spam. Recarregue a página." };
  }

  // Persist
  let inserted = false;
  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from("orcamentos").insert({
      nome: data.nome,
      email: data.email,
      telefone: data.telefone || null,
      celular: data.celular,
      tipo_evento: data.tipo_evento,
      data_evento: data.data_evento ? dateBRtoISO(data.data_evento) : null,
      como_conheceu: data.como_conheceu,
      observacoes: data.observacoes || null,
      ip,
      user_agent: userAgent,
    });
    if (error) {
      console.error("orcamento insert", error);
    } else {
      inserted = true;
    }
  } catch (err) {
    console.error("orcamento supabase", err);
  }

  // Send email
  try {
    const resend = getResend();
    if (resend) {
      const text = [
        `Nome: ${data.nome}`,
        `E-mail: ${data.email}`,
        `Telefone: ${data.telefone || "—"}`,
        `Celular: ${data.celular}`,
        `Tipo de evento: ${data.tipo_evento}`,
        `Data do evento: ${data.data_evento || "—"}`,
        `Como conheceu: ${data.como_conheceu}`,
        "",
        "Observações:",
        data.observacoes || "—",
      ].join("\n");
      await resend.emails.send({
        from: FROM,
        to: TO,
        replyTo: data.email,
        subject: `Buffet Wishes — Orçamento — ${data.nome}`,
        text,
      });
    }
  } catch (err) {
    console.error("orcamento resend", err);
  }

  recentByIp.set(ip, [...list, now]);

  if (!inserted && !process.env.RESEND_API_KEY) {
    return {
      ok: false,
      error: "Não foi possível enviar agora. Tente pelo WhatsApp.",
    };
  }
  return { ok: true };
}
