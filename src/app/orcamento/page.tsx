import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { OrcamentoForm } from "@/components/forms/orcamento-form";
import { whatsappLink, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Faça um orçamento online e gratuito",
  description:
    "Solicite um orçamento personalizado para sua festa no Buffet Wishes. Nossa equipe responde em até 1 dia útil.",
  alternates: { canonical: "/orcamento" },
};

export default function OrcamentoPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream to-background pt-20 pb-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">
              Seu desejo pode se tornar realidade
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
              A festa dos seus sonhos é possível e está aqui! Venha comemorar
              conosco. Nossa equipe aguarda o seu contato através do formulário
              abaixo. Em breve entraremos em contato com boas notícias para você.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <SectionHeading>Orçamento</SectionHeading>
        </Reveal>
        <Reveal delay={0.1}>
          <OrcamentoForm />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-primary/20 bg-secondary/40 p-6 text-center sm:p-8">
            <p className="text-sm text-foreground/70">
              Prefere falar agora?
            </p>
            <a
              href={whatsappLink(
                "Olá! Gostaria de fazer um orçamento para uma festa.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-md transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp {SITE.whatsappDisplay}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
