"use server";

import { headers } from "next/headers";
import { createAdminClient } from "@/lib/supabase/server";
import { contatoSchema, type ContatoInput } from "@/lib/schemas/contato";
import { getResend, FROM, TO } from "@/lib/resend";

export type ActionResult = { ok: true } | { ok: false; error: string };

export async function submitContato(input: ContatoInput): Promise<ActionResult> {
  const parsed = contatoSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Dados inválidos. Confira os campos." };
  }
  const data = parsed.data;
  if (data.website) return { ok: true };

  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "0.0.0.0";

  try {
    const supabase = createAdminClient();
    await supabase.from("contatos").insert({
      nome: data.nome,
      email: data.email,
      telefone: data.telefone || null,
      mensagem: data.mensagem,
      ip,
      user_agent: h.get("user-agent") ?? null,
    });
  } catch (err) {
    console.error("contato supabase", err);
  }

  try {
    const resend = getResend();
    if (resend) {
      await resend.emails.send({
        from: FROM,
        to: TO,
        replyTo: data.email,
        subject: `Buffet Wishes — Contato — ${data.nome}`,
        text: [
          `Nome: ${data.nome}`,
          `E-mail: ${data.email}`,
          `Telefone: ${data.telefone || "—"}`,
          "",
          "Mensagem:",
          data.mensagem,
        ].join("\n"),
      });
    }
  } catch (err) {
    console.error("contato resend", err);
  }

  return { ok: true };
}
