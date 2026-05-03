import { z } from "zod";

const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

export const contatoSchema = z.object({
  nome: z.string().min(2, "Informe seu nome").max(120),
  email: z.email("E-mail inválido").max(160),
  telefone: z
    .string()
    .regex(phoneRegex, "Formato (11) 91234-5678")
    .or(z.literal(""))
    .optional(),
  mensagem: z.string().min(5, "Conte um pouco mais").max(2000),
  website: z.string().max(0).optional(),
  turnstileToken: z.string().optional(),
});

export type ContatoInput = z.infer<typeof contatoSchema>;
