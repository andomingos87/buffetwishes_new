import type { Metadata } from "next";
import { EstruturaHero } from "@/components/sections/estrutura-hero";
import { EstruturaTicker } from "@/components/sections/estrutura-ticker";
import { EstruturaAtracoes } from "@/components/sections/estrutura-atracoes";
import { EstruturaTipos } from "@/components/sections/estrutura-tipos";
import { EstruturaStats } from "@/components/sections/estrutura-stats";
import { EstruturaDiferenciais } from "@/components/sections/estrutura-diferenciais";
import { EstruturaCTA } from "@/components/sections/estrutura-cta";

export const metadata: Metadata = {
  title: "Estrutura incomparável",
  description:
    "1000 m² com 26 atrações, lounge, camarim com suíte, fraldário, sistema de segurança, gerador, elevador, WCs adaptados e pisos sem desníveis.",
  alternates: { canonical: "/estrutura" },
};

export default function EstruturaPage() {
  return (
    <>
      {/* HERO — editorial magazine */}
      <EstruturaHero />

      {/* TICKER — wine strip */}
      <EstruturaTicker />

      {/* ATRAÇÕES — bento destaques + 17-foto lightbox (cream bg) */}
      <EstruturaAtracoes />

      {/* TIPOS DE FESTA — 4 cards Kids/Teens/Sociais/Corporativos (cream-soft) */}
      <EstruturaTipos />

      {/* STATS — wine band */}
      <EstruturaStats />

      {/* DIFERENCIAIS — 8-card grid with editorial framing (mustard-50) */}
      <EstruturaDiferenciais />

      {/* CTA — wine bg with WhatsApp + orçamento */}
      <EstruturaCTA />
    </>
  );
}
