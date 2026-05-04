"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Ruler } from "lucide-react";
import { FloatingDecor } from "@/components/decor/floating-decor";

const TIPOS_FESTA = [
  { label: "Kids", accent: "mustard" },
  { label: "Teens", accent: "mint" },
  { label: "Sociais", accent: "rose" },
  { label: "Corporativos", accent: "primary" },
] as const;

const CHIP_CLASSES = {
  mustard:
    "border-mustard-300/70 bg-mustard-50 text-wine-900 hover:border-mustard-500",
  mint: "border-mint-300/70 bg-mint-50 text-wine-900 hover:border-mint-500",
  rose: "border-rose-300/70 bg-rose-50 text-wine-900 hover:border-rose-500",
  primary: "border-primary/25 bg-cream text-primary hover:border-primary",
} as const;

const SPECS = [
  { n: "01", label: "1000m² em um único piso" },
  { n: "02", label: "26 atrações exclusivas" },
  { n: "03", label: "4 ambientes para celebrar" },
] as const;

/**
 * Squiggle underline that draws itself under the headline keyword.
 */
function SquiggleUnderline() {
  return (
    <svg
      viewBox="0 0 300 18"
      preserveAspectRatio="none"
      aria-hidden
      className="absolute inset-x-0 -bottom-1 h-3 w-full text-mustard-500 sm:-bottom-2 sm:h-4"
    >
      <motion.path
        d="M3 9 Q 30 1, 60 9 T 120 9 T 180 9 T 240 9 T 297 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.9, duration: 1.1, ease: "easeOut" }}
      />
    </svg>
  );
}

export function EstruturaHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-cream via-cream-soft to-background pb-16 pt-16 sm:pt-20">
      {/* Atmospheric orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-mustard-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-mint-500/20 blur-3xl"
      />
      <FloatingDecor preset="light" />

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        {/* Eyebrow — magazine issue label */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-primary/70"
        >
          <span className="inline-block h-px w-10 bg-primary/40" />
          <span>Edição Nº 26 · Estrutura</span>
          <span aria-hidden className="text-mustard-500">
            ★
          </span>
          <span className="inline-flex items-center gap-1">
            <Ruler className="h-3 w-3" />
            1000m²
          </span>
          <span className="inline-block h-px w-10 bg-primary/40" />
        </motion.div>

        {/* Title — magazine cover scale */}
        <motion.h1
          initial={!reduce ? { opacity: 0, y: 20 } : undefined}
          animate={!reduce ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.21, 0.65, 0.36, 1] }}
          className="mt-7 font-display text-[clamp(2.6rem,7vw,6rem)] font-extrabold leading-[0.96] tracking-[-0.02em] text-primary text-balance"
        >
          Tudo{" "}
          <span className="relative inline-block italic">
            <span className="relative z-10">cabe</span>
            <SquiggleUnderline />
          </span>{" "}
          aqui.
          <br />
          <span className="font-display text-[0.7em] not-italic text-primary/85">
            Em <span className="italic text-mustard-700">1000m²</span> de festa.
          </span>
        </motion.h1>

        {/* Italic subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mx-auto mt-7 max-w-2xl text-pretty font-display text-lg italic leading-relaxed text-foreground/75 sm:text-2xl"
        >
          Um único piso, sem desníveis, com 26 atrações pensadas para cada
          idade — dos bebês aos avós.
        </motion.p>

        {/* Tipos de festa — elevated chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.55 }}
          className="mt-10"
        >
          <div className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-primary/55">
            — Pra todo tipo de festa —
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {TIPOS_FESTA.map((t, i) => (
              <motion.li
                key={t.label}
                initial={!reduce ? { opacity: 0, y: 14, scale: 0.92 } : undefined}
                animate={!reduce ? { opacity: 1, y: 0, scale: 1 } : undefined}
                transition={{
                  delay: 0.85 + i * 0.06,
                  duration: 0.5,
                  ease: [0.21, 0.65, 0.36, 1],
                }}
                whileHover={!reduce ? { y: -3, rotate: i % 2 === 0 ? -1.5 : 1.5 } : undefined}
                className={`inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 font-display text-sm font-bold shadow-sm transition-all ${CHIP_CLASSES[t.accent]}`}
              >
                <span className="font-mono text-[10px] font-bold opacity-70">
                  Nº {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-3 w-px bg-current opacity-30" />
                {t.label}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Editorial spec strip 01/02/03 */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-3 items-center gap-6 border-t border-primary/15 pt-6 text-left"
        >
          {SPECS.map((s) => (
            <div key={s.n} className="flex flex-col">
              <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary/55">
                — {s.n} —
              </dt>
              <dd className="mt-1 font-display text-xs font-semibold leading-tight text-foreground sm:text-base">
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35, duration: 0.5 }}
          className="mx-auto mt-10 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] text-primary/55"
        >
          <MapPin className="h-3 w-3" />
          Tatuapé · São Paulo
        </motion.div>
      </div>
    </section>
  );
}
