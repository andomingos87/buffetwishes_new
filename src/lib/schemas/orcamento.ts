import { z } from "zod";

const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
const dateBrRegex = /^\d{2}\/\d{2}\/\d{4}$/;

export const TIPOS_EVENTO = [
  "INFANTIL",
  "ADULTO",
  "TEEN",
  "DEBUTANTE",
  "CORPORATIVO",
  "SOCIAL",
  "OUTROS",
] as const;

export const orcamentoSchema = z.object({
  nome: z.string().min(2, "Informe seu nome").max(120),
  email: z.email("E-mail inválido").max(160),
  telefone: z
    .string()
    .regex(phoneRegex, "Formato (11) 1234-5678")
    .or(z.literal(""))
    .optional(),
  celular: z.string().regex(phoneRegex, "Formato (11) 91234-5678"),
  tipo_evento: z.enum(TIPOS_EVENTO, {
    error: "Selecione o tipo de evento",
  }),
  data_evento: z
    .string()
    .regex(dateBrRegex, "Formato dd/mm/aaaa")
    .or(z.literal(""))
    .optional(),
  como_conheceu: z.string().min(2, "Conte como nos conheceu").max(200),
  observacoes: z.string().max(2000).optional(),
  // Honeypot — must remain empty
  website: z.string().max(0).optional(),
  // Cloudflare Turnstile token
  turnstileToken: z.string().optional(),
});

export type OrcamentoInput = z.infer<typeof orcamentoSchema>;
