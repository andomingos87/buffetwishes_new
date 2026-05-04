import { Hero } from "@/components/sections/hero";
import { Reveal } from "@/components/sections/reveal";
import { AtracoesBento } from "@/components/sections/atracoes-bento";
import { DiferenciaisGrid } from "@/components/sections/diferenciais-grid";
import { ComoFunciona } from "@/components/sections/como-funciona";
import { Depoimentos } from "@/components/sections/depoimentos";
import { GaleriaTeaser } from "@/components/sections/galeria-teaser";
import { FAQ } from "@/components/sections/faq";
import { CTAFinal } from "@/components/sections/cta-final";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Manifesto / pull-quote */}
      <section className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-balance font-display text-3xl italic leading-[1.2] text-primary sm:text-4xl lg:text-5xl">
            Mais que um buffet, um espaço dedicado a transformar
            <span className="relative mx-1.5 inline-block">
              <span className="relative z-10">desejos</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 z-0 h-3 -skew-y-1 bg-mustard-500/45 sm:h-4"
              />
            </span>
            em memórias inesquecíveis.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-foreground/75 sm:text-lg">
            Há mais de uma década no Tatuapé, recebemos famílias num espaço
            pensado para encantar os pequenos e tranquilizar os pais — com
            estrutura única em São Paulo, equipe especializada e um cuidado que
            só quem ama o que faz consegue entregar.
          </p>
        </Reveal>
      </section>

      <AtracoesBento />

      {/* Diferenciais */}
      <section className="bg-cream-soft/40 py-24">
        <div className="mb-12 px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-300 bg-rose-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-wine-900">
              Diferenciais
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl">
              Pensado para os pais relaxarem
            </h2>
          </Reveal>
        </div>
        <DiferenciaisGrid />
      </section>

      <ComoFunciona />

      <Depoimentos />

      <GaleriaTeaser />

      <FAQ />

      <CTAFinal />
    </>
  );
}
