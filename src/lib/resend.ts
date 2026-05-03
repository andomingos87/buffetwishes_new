import { Resend } from "resend";

let cached: Resend | null = null;

export function getResend(): Resend | null {
  if (cached) return cached;
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  cached = new Resend(key);
  return cached;
}

export const FROM = process.env.RESEND_FROM || "Buffet Wishes <onboarding@resend.dev>";
export const TO = process.env.CONTACT_EMAIL_TO || "comercial@buffetwishes.com.br";
