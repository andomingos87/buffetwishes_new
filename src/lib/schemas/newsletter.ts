import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.email("E-mail inválido").max(160),
  origem: z.string().max(60).optional(),
  website: z.string().max(0).optional(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
