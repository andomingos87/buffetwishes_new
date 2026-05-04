"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Editorial big-photo + pull-quote overlay. Asymmetric magazine spread:
 * BIG photo on the right takes ~7 cols, pull-quote pillar on the left.
 * Subtle parallax on the photo for desktop.
 */
export function BuffetEditorial() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-secondary/40 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-12 h-80 w-80 rounded-full bg-rose-500/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[88rem] items-center gap-y-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-x-10 lg:px-10">
        {/* LEFT — pull quote pillar */}
        <div className="relative lg:col-span-5">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-primary/70"
          >
            <span className="inline-block h-px w-10 bg-primary/40" />
            <span>Capítulo 02 / Manifesto</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-[clamp(2.2rem,4.6vw,4.2rem)] font-extrabold leading-[1] tracking-[-0.02em] text-primary text-balance"
          >
            Onde os <span className="italic text-mustard-700">desejos</span>
            <br className="hidden sm:block" />
            viram <span className="italic">memória.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-8 max-w-md space-y-5 text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg"
          >
            <p>
              Toda festa começa com uma vontade pequena: que aquele dia seja
              diferente. Aqui, a gente cuida pra que ele seja inesquecível.
            </p>
            <p>
              A estrutura é nossa, mas o protagonismo é da criança — e da
              família que escolhe parar tudo por algumas horas e celebrar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 flex items-center gap-3"
          >
            <span aria-hidden className="text-mustard-500">
              ✦
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-primary/60">
              Buffet Wishes / Tatuapé
            </span>
          </motion.div>
        </div>

        {/* RIGHT — big editorial photo */}
        <div className="relative lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.21, 0.65, 0.36, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-[0_30px_80px_-20px_rgba(76,2,16,0.4)] ring-1 ring-primary/15 sm:aspect-[5/4]"
          >
            <motion.div
              style={!reduce ? { y } : undefined}
              className="absolute inset-0"
            >
              <Image
                src="/img/obuffet/foto_buffet_wishes_05.jpg"
                alt="Crianças celebrando no Buffet Wishes"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </motion.div>

            {/* Vignette */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-wine-900/60 via-wine-900/10 to-transparent"
            />

            {/* Floating pull-quote card */}
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="absolute inset-x-5 bottom-5 z-10 rounded-2xl bg-cream/95 p-5 shadow-2xl ring-1 ring-primary/10 backdrop-blur sm:inset-auto sm:bottom-6 sm:left-6 sm:max-w-md sm:p-6"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mb-2 h-7 w-7 text-mustard-500"
                aria-hidden
              >
                <path d="M9.5 6c-3 0-5.5 2.5-5.5 5.5 0 1.4.5 2.5 1.3 3.4-1 .5-1.7 1.6-1.7 2.7v.4h6v-.4c0-1.5-1-2.7-2.4-3.1.7-.6 1.2-1.4 1.2-2.5 0-1.5 1.3-2.8 2.8-2.8h.3V6h-.5zm10 0c-3 0-5.5 2.5-5.5 5.5 0 1.4.5 2.5 1.3 3.4-1 .5-1.7 1.6-1.7 2.7v.4h6v-.4c0-1.5-1-2.7-2.4-3.1.7-.6 1.2-1.4 1.2-2.5 0-1.5 1.3-2.8 2.8-2.8h.3V6h-.5z" />
              </svg>
              <blockquote className="font-display text-lg font-semibold italic leading-snug text-primary sm:text-xl">
                Cada criança que sai daqui leva uma história — e a gente leva
                outra junto.
              </blockquote>
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-primary/55">
                — Equipe Wishes, há mais de 10 anos
              </figcaption>
            </motion.figure>

            {/* Top-right magazine stamp */}
            <div className="absolute right-5 top-5 z-10 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Cap. 02
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
