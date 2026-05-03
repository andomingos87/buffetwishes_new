import type { Metadata } from "next";
import { Reveal } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { GaleriaLightbox } from "@/components/sections/galeria-lightbox";
import { DiferenciaisGrid } from "@/components/sections/diferenciais-grid";
import { ATRACOES } from "@/content/atracoes";

export const metadata: Metadata = {
  title: "Estrutura incomparável",
  description:
    "1000 m² com 26 atrações, lounge, camarim com suíte, fraldário, sistema de segurança, gerador, elevador, WCs adaptados e pisos sem desníveis.",
  alternates: { canonical: "/estrutura" },
};

const TIPOS_FESTA = ["Kids", "Teens", "Sociais", "Corporativos"];

export default function EstruturaPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream to-background pt-20 pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-primary sm:text-7xl">
              Estrutura
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
              Mais de <strong>1000 m²</strong> dedicados a você e seus
              convidados, com <strong>26+ atrações</strong>, ambientes
              climatizados e estrutura premium pensada para todos os tipos de
              evento: lounge, camarim com suíte, fraldário, sistema de
              segurança, gerador de energia, elevador, WCs adaptados e pisos
              sem desníveis.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {TIPOS_FESTA.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-primary/20 bg-background px-5 py-2 text-sm font-medium text-primary shadow-sm transition-transform hover:scale-105"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <SectionHeading>Atrações</SectionHeading>
        </Reveal>
        <Reveal delay={0.1}>
          <GaleriaLightbox
            items={ATRACOES.map((a) => ({
              thumb: a.thumb,
              full: a.full,
              caption: a.titulo,
              alt: a.titulo,
            }))}
            cols={4}
          />
        </Reveal>
      </section>

      <section className="bg-secondary/40 py-20">
        <Reveal className="mb-12">
          <SectionHeading>Diferenciais</SectionHeading>
        </Reveal>
        <Reveal delay={0.1}>
          <DiferenciaisGrid />
        </Reveal>
      </section>
    </>
  );
}
