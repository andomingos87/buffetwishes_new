"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ATRACOES } from "@/content/atracoes";
import { Star, Cake, Gift, Sparkle } from "@/components/decor/party-shapes";

type Tile = {
  index: number;
  /** Optional shorter label for narrow tiles. */
  label?: string;
  /** Tailwind classes for sm+ span. Mobile is always 1×1 in 2-col grid. */
  span: string;
  accent: "primary" | "mustard" | "mint" | "rose";
  /** Title font size for this tile. */
  size: "hero" | "wide" | "regular";
};

// 8 tiles → 3 rows × 4 cols = 12 cells
//   Row 1-2: [hero 2×2] [s] [s]
//   Row 1-2 cont:        [s] [s]
//   Row 3   : [wide 2×1]   [s] [s]
const TILES: Tile[] = [
  { index: 0, span: "sm:col-span-2 sm:row-span-2", accent: "primary", size: "hero" },
  { index: 4, span: "sm:col-span-1 sm:row-span-1", accent: "mustard", size: "regular" },
  { index: 14, span: "sm:col-span-1 sm:row-span-1", accent: "mint", size: "regular" },
  { index: 7, label: "Simulador de corrida", span: "sm:col-span-1 sm:row-span-1", accent: "rose", size: "regular" },
  { index: 12, label: "Pista de dança", span: "sm:col-span-1 sm:row-span-1", accent: "primary", size: "regular" },
  { index: 15, label: "Área Baby com Gira-gira", span: "sm:col-span-2 sm:row-span-1", accent: "mustard", size: "wide" },
  { index: 9, label: "Jogos eletrônicos", span: "sm:col-span-1 sm:row-span-1", accent: "mint", size: "regular" },
  { index: 1, label: "Piscina de bolinhas", span: "sm:col-span-1 sm:row-span-1", accent: "rose", size: "regular" },
];

const ACCENT = {
  primary: { chip: "bg-cream text-primary", overlay: "from-wine-900/85 via-wine-900/30" },
  mustard: { chip: "bg-mustard-500 text-wine-900", overlay: "from-wine-900/85 via-wine-900/30" },
  mint: { chip: "bg-mint-300 text-wine-900", overlay: "from-wine-900/80 via-wine-900/20" },
  rose: { chip: "bg-rose-300 text-wine-900", overlay: "from-wine-900/85 via-wine-900/35" },
} as const;

const TITLE_SIZE = {
  hero: "text-2xl sm:text-3xl",
  wide: "text-lg sm:text-xl",
  regular: "text-sm sm:text-base",
} as const;

export function AtracoesBento() {
  const reduce = useReducedMotion();

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-mustard-300 bg-mustard-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-wine-900"
        >
          <Star className="h-3 w-3" />
          + de 30 atrações
        </motion.span>
        <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl">
          Diversão que cabe nos sonhos
          <br className="hidden sm:block" />
          <span className="relative inline-block">
            <span className="relative z-10">de qualquer criança</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-1 z-0 h-3 -skew-y-1 bg-mustard-500/40"
            />
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-base text-foreground/70 sm:text-lg">
          Cada atração foi escolhida para encantar diferentes idades e estilos —
          dos pequeninos curiosos aos aventureiros que querem altura.
        </p>
      </div>

      <ul className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4">
        {TILES.map((t, i) => {
          const a = ATRACOES[t.index];
          const accent = ACCENT[t.accent];
          const label = t.label ?? a.titulo;
          return (
            <motion.li
              key={a.titulo}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              whileHover={!reduce ? { y: -4 } : undefined}
              className={`group relative overflow-hidden rounded-[22px] ring-1 ring-border ${t.span}`}
            >
              <Image
                src={a.full}
                alt={a.titulo}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                aria-hidden
                className={`absolute inset-0 bg-gradient-to-t ${accent.overlay} to-transparent`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <span
                  className={`mb-2 inline-flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-sm ${accent.chip}`}
                >
                  <Sparkle className="h-2.5 w-2.5" />
                  Atração
                </span>
                <h3
                  className={`text-balance font-display font-bold leading-tight text-white drop-shadow ${TITLE_SIZE[t.size]}`}
                >
                  {label}
                </h3>
              </div>
            </motion.li>
          );
        })}
      </ul>

      <div className="mt-10 flex flex-col items-center gap-3">
        <Link
          href="/estrutura"
          className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-7 py-3.5 text-sm font-medium text-primary transition-all hover:border-primary hover:bg-secondary"
        >
          Ver todas as atrações
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <span className="flex items-center gap-1.5 text-xs text-foreground/50">
          <Cake className="h-4 w-4 text-mustard-500" />
          Tour completo na página Estrutura
          <Gift className="h-4 w-4 text-rose-500" />
        </span>
      </div>
    </section>
  );
}
