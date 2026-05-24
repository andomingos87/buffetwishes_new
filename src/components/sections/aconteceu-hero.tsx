"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { FloatingDecor } from "@/components/decor/floating-decor";
import { Marquee } from "@/components/decor/marquee";

const HEADLINE_PREFIX = "As melhores festas";
const HEADLINE_KEY = "estão aqui";

const SPECS = [
  { n: "01", label: "5000+ festas reais" },
  { n: "02", label: "10+ anos de memórias" },
  { n: "03", label: "100% sorrisos" },
] as const;

const TICKER_ITEMS = [
  "Festas reais",
  "Memórias de verdade",
  "5000+ eventos",
  "Desde 2014",
  "Tatuapé · São Paulo",
  "★ ★ ★ ★ ★",
];

/**
 * Hand-drawn squiggle that draws itself under the headline keyword.
 * Same visual language as Hero's SquiggleUnderline.
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
        transition={{ delay: 1.2, duration: 1.1, ease: "easeOut" }}
      />
    </svg>
  );
}

/**
 * Magazine-style hero for /aconteceu — eyebrow with edition,
 * oversized Fraunces title with squiggle on the keyword,
 * italic subtitle, spec strip, and a wine ticker beneath.
 */
export function AconteceuHero() {
  const reduce = useReducedMotion();
  const prefixWords = HEADLINE_PREFIX.split(" ");

  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-cream via-cream-soft to-background pb-16 pt-16 sm:pt-20">
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

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          {/* Editorial issue label */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-primary/70"
          >
            <span className="inline-block h-px w-10 bg-primary/40" />
            <span>Edição Nº 30</span>
            <span aria-hidden className="text-mustard-500">
              ★
            </span>
            <span>Aconteceu</span>
            <span aria-hidden className="text-mustard-500">
              ★
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              5000+ festas
            </span>
            <span className="inline-block h-px w-10 bg-primary/40" />
          </motion.div>

          {/* Magazine-cover headline */}
          <h1 className="mt-7 font-display text-[clamp(2.6rem,7vw,6rem)] font-extrabold leading-[0.96] tracking-[-0.02em] text-primary text-balance">
            <span className="block">
              {reduce
                ? HEADLINE_PREFIX
                : prefixWords.map((w, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.15 + i * 0.06,
                        duration: 0.6,
                        ease: [0.21, 0.65, 0.36, 1],
                      }}
                      className="mr-[0.22ch] inline-block"
                    >
                      {w}
                    </motion.span>
                  ))}
            </span>
            <motion.span
              initial={!reduce ? { opacity: 0, y: 24 } : undefined}
              animate={!reduce ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="relative mt-2 inline-block italic"
            >
              <span className="relative z-10">{HEADLINE_KEY}</span>
              <SquiggleUnderline />
            </motion.span>
          </h1>

          {/* Italic subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mx-auto mt-7 max-w-2xl text-pretty font-display text-lg italic leading-relaxed text-foreground/75 sm:text-2xl"
          >
            Você já viu como uma festa pode ser inesquecível? Aqui estão algumas
            das celebrações que viraram memória.
          </motion.p>

          {/* Editorial spec strip */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.35, duration: 0.6 }}
            className="mx-auto mt-10 grid max-w-3xl grid-cols-3 items-center gap-6 border-t border-primary/15 pt-6 text-left"
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
        </div>
      </section>

      {/* Festive ticker — wine bottom strip */}
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
    </>
  );
}
