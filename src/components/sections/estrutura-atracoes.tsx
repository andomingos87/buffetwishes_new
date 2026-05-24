"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkle } from "@/components/decor/party-shapes";
import { GaleriaLightbox } from "@/components/sections/galeria-lightbox";
import { ATRACOES } from "@/content/atracoes";

type Destaque = {
  index: number;
  shortLabel: string;
  description: string;
  accent: "primary" | "mustard" | "mint" | "rose";
  /** Tailwind grid span classes for sm+ */
  span: string;
  size: "hero" | "wide" | "regular";
};

// 4-tile bento — one hero card + three supporting tiles
//   sm grid is 4×2:
//   [hero 2×2] [s 1×1] [s 1×1]
//              [s 2×1 wide]
const DESTAQUES: Destaque[] = [
  {
    index: 0,
    shortLabel: "Brinquedão",
    description: "A atração que faz qualquer criança correr da porta para dentro.",
    accent: "primary",
    span: "sm:col-span-2 sm:row-span-2",
    size: "hero",
  },
  {
    index: 4,
    shortLabel: "Torre de 6 metros",
    description: "Aventura para os teens — com toda a segurança que os pais precisam.",
    accent: "mustard",
    span: "sm:col-span-1 sm:row-span-1",
    size: "regular",
  },
  {
    index: 9,
    shortLabel: "Kinect & jogos",
    description: "Disputas eletrônicas que viram a virada da festa.",
    accent: "mint",
    span: "sm:col-span-1 sm:row-span-1",
    size: "regular",
  },
  {
    index: 12,
    shortLabel: "Pista de Dança com DJ",
    description: "Onde a festa acaba — e ninguém quer ir embora.",
    accent: "rose",
    span: "sm:col-span-2 sm:row-span-1",
    size: "wide",
  },
];

const ACCENT = {
  primary: { chip: "bg-cream text-primary", overlay: "from-wine-900/85 via-wine-900/30" },
  mustard: { chip: "bg-mustard-500 text-wine-900", overlay: "from-wine-900/85 via-wine-900/30" },
  mint: { chip: "bg-mint-300 text-wine-900", overlay: "from-wine-900/80 via-wine-900/20" },
  rose: { chip: "bg-rose-300 text-wine-900", overlay: "from-wine-900/85 via-wine-900/35" },
} as const;

const TITLE_SIZE = {
  hero: "text-3xl sm:text-4xl lg:text-5xl",
  wide: "text-xl sm:text-2xl",
  regular: "text-base sm:text-lg",
} as const;

const DESC_SIZE = {
  hero: "text-sm sm:text-base",
  wide: "text-sm",
} as const;

export function EstruturaAtracoes() {
  const reduce = useReducedMotion();

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      {/* Editorial header */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-primary/55"
        >
          — Cap. 02 / Atrações —
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-balance font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl lg:text-6xl"
        >
          + de 30 motivos para{" "}
          <span className="relative inline-block italic">
            <span className="relative z-10">não querer ir embora</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-1 z-0 h-3 -skew-y-1 bg-mustard-500/45"
            />
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-pretty text-base text-foreground/70 sm:text-lg"
        >
          Atrações pensadas para todas as idades — dos pequeninos curiosos aos
          aventureiros que querem altura. Comece pelos quatro destaques abaixo.
        </motion.p>
      </div>

      {/* DESTAQUES BENTO — 4 cards */}
      <ul className="mb-14 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[230px] sm:grid-cols-4 sm:gap-4">
        {DESTAQUES.map((d, i) => {
          const a = ATRACOES[d.index];
          const accent = ACCENT[d.accent];
          return (
            <motion.li
              key={d.shortLabel}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.07,
                ease: [0.21, 0.65, 0.36, 1],
              }}
              whileHover={!reduce ? { y: -4 } : undefined}
              className={`group relative overflow-hidden rounded-[22px] ring-1 ring-border ${d.span}`}
            >
              <Image
                src={a.full}
                alt={a.titulo}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                aria-hidden
                className={`absolute inset-0 bg-gradient-to-t ${accent.overlay} to-transparent`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <span
                  className={`mb-2 inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] shadow-sm ${accent.chip}`}
                >
                  <Sparkle className="h-2.5 w-2.5" />
                  Destaque {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`text-balance font-display font-extrabold leading-[1.05] text-white drop-shadow ${TITLE_SIZE[d.size]}`}
                >
                  {d.shortLabel}
                </h3>
                {d.size !== "regular" && (
                  <p
                    className={`mt-2 max-w-md text-pretty leading-snug text-white/85 ${DESC_SIZE[d.size]}`}
                  >
                    {d.description}
                  </p>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>

      {/* "Tour completo" divider */}
      <div className="mb-10 flex items-center justify-center gap-4">
        <span className="h-px flex-1 max-w-[200px] bg-primary/20" />
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-primary/55">
          Tour completo · 17 ambientes fotografados
        </span>
        <span className="h-px flex-1 max-w-[200px] bg-primary/20" />
      </div>

      {/* FULL GALLERY — bigger 3-col tiles, all 17 atrações */}
      <GaleriaLightbox
        items={ATRACOES.map((a) => ({
          thumb: a.thumb,
          full: a.full,
          caption: a.titulo,
          alt: a.titulo,
        }))}
        cols={3}
      />
    </section>
  );
}
