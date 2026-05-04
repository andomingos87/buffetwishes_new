"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

/**
 * Premium "celeb endorsement" card for Sophia Valverde.
 * Asymmetric layout, big portrait, framed pull-quote, gold accents.
 */
export function BuffetSophia() {
  return (
    <section className="relative overflow-hidden bg-cream-soft py-24">
      <Quote
        aria-hidden
        className="pointer-events-none absolute -left-6 top-10 h-44 w-44 text-primary/[0.05]"
      />
      <Quote
        aria-hidden
        className="pointer-events-none absolute -right-6 bottom-10 h-44 w-44 rotate-180 text-primary/[0.05]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.65, 0.36, 1] }}
          className="relative grid items-center gap-10 rounded-[32px] bg-card p-6 shadow-[0_30px_80px_-30px_rgba(76,2,16,0.35)] ring-1 ring-primary/10 sm:p-10 lg:grid-cols-[minmax(0,1fr),1.4fr] lg:gap-14 lg:p-14"
        >
          {/* Decorative gold accent strip */}
          <span
            aria-hidden
            className="absolute left-6 top-6 inline-flex h-1 w-16 rounded-full bg-mustard-500 sm:left-10 sm:top-10"
          />
          <span
            aria-hidden
            className="absolute right-6 bottom-6 inline-flex h-1 w-16 rounded-full bg-mustard-500 sm:right-10 sm:bottom-10"
          />

          {/* LEFT — Portrait */}
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative aspect-[4/5] overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(76,2,16,0.4)] ring-4 ring-mustard-500/40"
            >
              <Image
                src="/img/sophia-valverde.jpg"
                alt="Sophia Valverde no Buffet Wishes"
                fill
                sizes="(max-width: 1024px) 80vw, 30vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-wine-900/30 via-transparent to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mustard-500" />
                Festa real · Sophia Valverde
              </div>
            </motion.div>

            {/* Floating gold seal */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0.6, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -right-3 -top-3 flex h-20 w-20 items-center justify-center rounded-full bg-mustard-500 text-wine-900 shadow-xl sm:h-24 sm:w-24"
            >
              <div className="text-center font-display leading-tight">
                <div className="text-[9px] font-bold uppercase tracking-[0.18em]">
                  Endosso
                </div>
                <div className="mt-0.5 text-[10px] font-extrabold tracking-tight">
                  ★ ★ ★ ★ ★
                </div>
                <div className="mt-0.5 text-[8px] uppercase tracking-[0.16em] opacity-80">
                  oficial
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Quote */}
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-mustard-300 bg-mustard-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-wine-900">
              <Star className="h-3 w-3 fill-current" />
              Depoimento de quem viveu
            </span>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-pretty font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-primary sm:text-4xl lg:text-5xl"
            >
              <span className="font-display text-mustard-500">&ldquo;</span>
              A melhor festa da
              <br />
              <span className="italic">minha vida</span> foi realizada
              <br className="hidden sm:block" /> no Buffet Wishes
              <span className="font-display text-mustard-500">&rdquo;</span>
            </motion.blockquote>

            <div className="mt-8 flex items-center gap-4 border-t border-primary/10 pt-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-mustard-500 text-mustard-500"
                  />
                ))}
              </div>
              <div className="h-6 w-px bg-primary/15" />
              <div>
                <div className="font-display text-base font-bold text-foreground">
                  Sophia Valverde
                </div>
                <div className="text-xs text-foreground/60">
                  Atriz · Festa de aniversário
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
