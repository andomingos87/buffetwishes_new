import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { GaleriaLightbox } from "@/components/sections/galeria-lightbox";
import { FOTOS_BUFFET } from "@/content/atracoes";

export const metadata: Metadata = {
  title: "Buffet infantil | O Buffet Wishes",
  description:
    "Conheça o Buffet Wishes — mais de uma década realizando festas infantis no Tatuapé com estrutura única e profissionais qualificados.",
  alternates: { canonical: "/buffet" },
};

export default function BuffetPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream to-background pt-20 pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-primary sm:text-7xl">
              O Buffet Wishes
            </h1>
            <p className="mt-4 font-display text-xl italic text-primary/80 sm:text-2xl">
              Quer descobrir até onde seus desejos podem te levar?
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="space-y-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
            <p>
              Há mais de uma década realizando festas inesquecíveis no Tatuapé,
              o Buffet Wishes é referência em eventos infantis em São Paulo. Nossa
              equipe é formada por profissionais experientes, treinados para
              cuidar de cada detalhe e garantir que o seu evento seja exatamente
              como você sempre sonhou.
            </p>
            <p>
              Com uma estrutura ímpar, espaço climatizado, lounge premium,
              camarim com suíte, fraldário, sistema completo de segurança e mais
              de 26 atrações, oferecemos tudo o que sua festa precisa em um
              lugar só.
            </p>
            <p>
              Mais do que um buffet, somos um espaço dedicado a transformar
              desejos em memórias. Venha conhecer o lugar onde todos os seus
              desejos podem se realizar.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <figure className="grid items-center gap-8 sm:grid-cols-[180px,1fr]">
              <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full ring-4 ring-background sm:w-44">
                <Image
                  src="/img/sophia-valverde.jpg"
                  alt="Sophia Valverde"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
              <blockquote className="text-center sm:text-left">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mb-2 h-10 w-10 text-primary/30"
                  aria-hidden
                >
                  <path d="M9.5 6c-3 0-5.5 2.5-5.5 5.5 0 1.4.5 2.5 1.3 3.4-1 .5-1.7 1.6-1.7 2.7v.4h6v-.4c0-1.5-1-2.7-2.4-3.1.7-.6 1.2-1.4 1.2-2.5 0-1.5 1.3-2.8 2.8-2.8h.3V6h-.5zm10 0c-3 0-5.5 2.5-5.5 5.5 0 1.4.5 2.5 1.3 3.4-1 .5-1.7 1.6-1.7 2.7v.4h6v-.4c0-1.5-1-2.7-2.4-3.1.7-.6 1.2-1.4 1.2-2.5 0-1.5 1.3-2.8 2.8-2.8h.3V6h-.5z" />
                </svg>
                <p className="font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
                  A melhor festa da minha vida foi realizada no Buffet Wishes!
                </p>
                <figcaption className="mt-3 text-sm font-medium text-primary">
                  — Sophia Valverde
                </figcaption>
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <SectionHeading>Nosso espaço</SectionHeading>
        </Reveal>
        <Reveal delay={0.1}>
          <GaleriaLightbox items={FOTOS_BUFFET} cols={4} />
        </Reveal>
      </section>
    </>
  );
}
