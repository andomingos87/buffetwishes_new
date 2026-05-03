import { Hero } from "@/components/sections/hero";
import { ServicosCards } from "@/components/sections/servicos-cards";
import { Reveal } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-display text-2xl italic text-primary sm:text-3xl">
            Mais que um buffet, um espaço dedicado a transformar desejos em
            memórias inesquecíveis.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-foreground/80 sm:text-lg">
            <p>
              No Buffet Wishes, cada detalhe é pensado para encantar os pequenos e
              tranquilizar os pais. Mais de 1000 m² de pura diversão com 26
              atrações, ambientes climatizados e uma equipe especializada em
              receber a sua família.
            </p>
            <p>
              Com mais de uma década de experiência em festas infantis no
              Tatuapé, oferecemos uma estrutura única em São Paulo, com lounge,
              camarim com suíte, fraldário, sistema de segurança completo,
              gerador de energia, elevador, WCs adaptados e pisos sem desníveis.
            </p>
            <p className="text-center font-display text-2xl text-primary">
              Venha se surpreender!
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl py-20">
        <Reveal className="mb-12">
          <SectionHeading>Conheça o Buffet</SectionHeading>
        </Reveal>
        <ServicosCards />
      </section>
    </>
  );
}
