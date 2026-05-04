"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkle } from "@/components/decor/party-shapes";

const STATS = [
  { value: "10+", label: "anos no Tatuapé", sub: "desde 2014" },
  { value: "5.000+", label: "festas realizadas", sub: "memórias eternas" },
  { value: "26", label: "atrações exclusivas", sub: "em um só lugar" },
  { value: "1.000m²", label: "de espaço", sub: "climatizado" },
] as const;

/**
 * Wine-tone stats band — breaks the cream monotony with `bg-primary text-cream`.
 * Editorial big-number treatment: each value is a magazine pull-stat.
 */
export function BuffetStats() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-primary py-20 text-cream sm:py-24">
      {/* Soft radial glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 25%, rgba(232,184,75,0.35), transparent 38%), radial-gradient(circle at 82% 75%, rgba(217,122,122,0.3), transparent 42%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-mustard-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-rose-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-mustard-300/50 bg-mustard-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-mustard-300"
          >
            <Sparkle className="h-3 w-3" />
            Uma década de festas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Os números de quem
            <br className="hidden sm:block" />
            <span className="italic text-mustard-300">vive de celebrar</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-5 max-w-xl text-pretty text-base text-cream/75 sm:text-lg"
          >
            Mais do que um buffet, um espaço dedicado a transformar desejos em
            memórias — uma família por vez.
          </motion.p>
        </div>

        <ul className="grid grid-cols-2 gap-y-12 gap-x-6 sm:gap-x-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.21, 0.65, 0.36, 1],
              }}
              className="group relative flex flex-col items-center text-center"
              whileHover={!reduce ? { y: -4 } : undefined}
            >
              <span
                aria-hidden
                className="absolute -top-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-mustard-300/70"
              >
                — {String(i + 1).padStart(2, "0")} —
              </span>
              <div className="font-display text-5xl font-extrabold leading-none text-mustard-300 sm:text-6xl lg:text-7xl">
                {s.value}
              </div>
              <div className="mt-3 font-display text-base font-semibold leading-tight text-cream sm:text-lg">
                {s.label}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/55">
                {s.sub}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
