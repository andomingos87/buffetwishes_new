"use server";

import { headers } from "next/headers";
import { createAdminClient } from "@/lib/supabase/server";
import { newsletterSchema } from "@/lib/schemas/newsletter";
import { getResend, FROM, TO } from "@/lib/resend";

export type ActionResult = { ok: true } | { ok: false; error: string };

export async function subscribeNewsletter(input: unknown): Promise<ActionResult> {
  const parsed = newsletterSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "E-mail inválido." };
  }
  const { email, origem, website } = parsed.data;
  if (website) {
    // honeypot tripped — silently succeed to confuse bots
    return { ok: true };
  }

  // Persist to Supabase (best-effort; ignore unique conflict).
  try {
    const supabase = createAdminClient();
    const { error } = await supabase
      .from("newsletter_inscricoes")
      .insert({ email, origem: origem ?? "footer" });
    if (error && !/duplicate key|unique/i.test(error.message)) {
      console.error("newsletter insert", error);
    }
  } catch (err) {
    console.error("newsletter supabase", err);
  }

  // Notify owner via Resend (best-effort).
  try {
    const resend = getResend();
    if (resend) {
      await resend.emails.send({
        from: FROM,
        to: TO,
        subject: `Nova inscrição na newsletter — ${email}`,
        text: `Origem: ${origem ?? "footer"}\nE-mail: ${email}\n`,
      });
    }
  } catch (err) {
    console.error("newsletter resend", err);
  }

  // Read header to suppress unused-import lint if Resend unavailable.
  await headers();
  return { ok: true };
}
