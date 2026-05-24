import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/sections/reveal";
import { GaleriaLightbox } from "@/components/sections/galeria-lightbox";
import { Marquee } from "@/components/decor/marquee";
import { FloatingDecor } from "@/components/decor/floating-decor";
import { FOTOS_BUFFET } from "@/content/atracoes";
import { BuffetStats } from "@/components/sections/buffet-stats";
import { BuffetValores } from "@/components/sections/buffet-valores";
import { BuffetEditorial } from "@/components/sections/buffet-editorial";
import { BuffetSophia } from "@/components/sections/buffet-sophia";
import { BuffetCTA } from "@/components/sections/buffet-cta";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Buffet infantil | O Buffet Wishes",
  description:
    "Conheça o Buffet Wishes — mais de uma década realizando festas infantis no Tatuapé com estrutura única e profissionais qualificados.",
  alternates: { canonical: "/buffet" },
};

const TICKER_ITEMS = [
  "Desde 2014",
  "Tatuapé · São Paulo",
  "5000+ festas realizadas",
  "+ de 30 atrações exclusivas",
  "1000m² climatizados",
  "Buffet Wishes",
  "★ ★ ★ ★ ★",
];

export default function BuffetPage() {
  return (
    <>
      {/* HERO — editorial magazine */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-cream via-cream-soft to-background pb-12 pt-16 sm:pt-20">
        {/* Atmospheric orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-mustard-500/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl"
        />
        <FloatingDecor preset="light" />

        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-primary/70">
              <span className="inline-block h-px w-10 bg-primary/40" />
              <span>Edição Nº 30</span>
              <span aria-hidden className="text-mustard-500">
                ★
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Tatuapé · SP
              </span>
              <span className="inline-block h-px w-10 bg-primary/40" />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-7 font-display text-[clamp(2.6rem,7vw,6rem)] font-extrabold leading-[0.96] tracking-[-0.02em] text-primary text-balance">
              O Buffet
              <br />
              <span className="relative inline-block italic">
                <span className="relative z-10">Wishes</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-2 z-0 h-4 -skew-y-1 bg-mustard-500/45 sm:bottom-3 sm:h-5"
                />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-7 max-w-2xl text-pretty font-display text-lg italic leading-relaxed text-foreground/75 sm:text-2xl">
              Quer descobrir até onde seus desejos podem te levar?
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-3 items-center gap-6 border-t border-primary/15 pt-6 text-left">
              {[
                { n: "01", label: "1000m² de espaço" },
                { n: "02", label: "+ de 30 atrações exclusivas" },
                { n: "03", label: "10+ anos no Tatuapé" },
              ].map((s) => (
                <div key={s.n} className="flex flex-col">
                  <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary/55">
                    — {s.n} —
                  </dt>
                  <dd className="mt-1 font-display text-xs font-semibold leading-tight text-foreground sm:text-base">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* INTRO — editorial copy */}
      <section className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-primary/55">
            — Cap. 01 / Apresentação —
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Há mais de uma década realizando festas{" "}
            <span className="italic text-mustard-700">inesquecíveis</span> no
            Tatuapé.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-extrabold first-letter:leading-none first-letter:text-primary">
              O Buffet Wishes é referência em eventos infantis em São Paulo.
              Nossa equipe é formada por profissionais experientes, treinados
              para cuidar de cada detalhe e garantir que o seu evento seja
              exatamente como você sempre sonhou.
            </p>
            <p>
              Com uma estrutura ímpar, espaço climatizado, lounge premium,
              camarim com suíte, fraldário, sistema completo de segurança e
              mais de <strong className="text-primary">30 atrações</strong>,
              oferecemos tudo o que sua festa precisa em um lugar só.
            </p>
            <p className="border-l-4 border-mustard-500 pl-5 font-display text-xl italic leading-snug text-primary sm:text-2xl">
              Mais do que um buffet, somos um espaço dedicado a transformar
              desejos em memórias.
            </p>
          </div>
        </Reveal>
      </section>

      {/* TICKER — wine strip */}
      <div className="relative z-10 border-y border-primary/15 bg-primary py-4 text-cream">
        <Marquee speed="normal">
          {TICKER_ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-6 font-display text-base italic sm:text-lg"
            >
              <span>{item}</span>
              <span aria-hidden className="text-mustard-500">
                ✦
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* STATS — wine bg, cream text */}
      <BuffetStats />

      {/* VALORES — mustard bg, 4 cards */}
      <BuffetValores />

      {/* EDITORIAL — big photo + pull quote */}
      <BuffetEditorial />

      {/* SOPHIA — premium testimonial */}
      <BuffetSophia />

      {/* GALERIA — bigger 3-col tiles */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-mint-300 bg-mint-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-wine-900">
              Galeria
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl lg:text-6xl">
              Cada canto tem uma{" "}
              <span className="relative inline-block italic">
                <span className="relative z-10">história</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 z-0 h-3 -skew-y-1 bg-mustard-500/45"
                />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-foreground/70 sm:text-lg">
              Um passeio pelos ambientes do Buffet Wishes — clique em qualquer
              foto para ver em tamanho grande.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          {/* Bigger tiles via cols={3} — addresses the "galeria minúscula" feedback */}
          <GaleriaLightbox items={FOTOS_BUFFET} cols={3} />
        </Reveal>
      </section>

      {/* TINY FOOTER STRIP — building photo with caption */}
      <section className="relative isolate overflow-hidden bg-cream-soft py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr,1fr] lg:gap-12 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] shadow-xl ring-1 ring-primary/10">
              <Image
                src="/img/foto-criancas.jpg"
                alt="Crianças se divertindo no Buffet Wishes"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-wine-900/35 via-transparent to-transparent"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-primary/55">
                — Cap. 03 / Convite —
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
                Venha conhecer o lugar onde todos os seus desejos podem se
                realizar.
              </h3>
              <p className="mt-5 text-pretty text-base leading-relaxed text-foreground/75 sm:text-lg">
                Agende uma visita, traga a criança, sinta o espaço. A gente
                acredita que a melhor forma de escolher é estando aqui — e
                quando você estiver, vai entender por que tantas famílias
                voltam.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA — wine bg with confetti */}
      <BuffetCTA />
    </>
  );
}
