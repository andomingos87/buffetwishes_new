"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { Balloon, Star, Confetti, Sparkle } from "@/components/decor/party-shapes";

/**
 * Editorial empty state for /aconteceu — used when Supabase is not
 * configured or no festas are returned. Replaces the previous flat
 * "Em breve" card with a centered illustration, oversized Fraunces
 * title, and an inviting CTA to WhatsApp.
 */
export function AconteceuEmpty() {
  const reduce = useReducedMotion();

  return (
    <section className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="relative">
        {/* Floating illustration cluster */}
        <div className="relative mx-auto mb-10 h-44 w-full max-w-md sm:h-56">
          <motion.span
            aria-hidden
            initial={{ opacity: 0, y: 12 }}
            animate={!reduce ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className={`absolute left-[12%] top-2 block h-16 w-16 text-mustard-500 sm:h-20 sm:w-20 ${
              !reduce ? "animate-float" : ""
            }`}
            style={{ ["--rot" as string]: "-8deg" }}
          >
            <Balloon className="h-full w-full" />
          </motion.span>

          <motion.span
            aria-hidden
            initial={{ opacity: 0, y: 16 }}
            animate={!reduce ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`absolute right-[14%] top-0 block h-20 w-20 text-rose-500/80 sm:h-24 sm:w-24 ${
              !reduce ? "animate-float" : ""
            }`}
            style={{
              ["--rot" as string]: "10deg",
              animationDelay: "1.2s",
            }}
          >
            <Balloon className="h-full w-full" />
          </motion.span>

          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute left-1/2 top-10 block h-10 w-10 -translate-x-1/2 text-primary sm:h-12 sm:w-12"
          >
            <Star className="h-full w-full" />
          </motion.span>

          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="absolute left-[28%] bottom-2 block h-7 w-7 text-mint-500"
          >
            <Sparkle className="h-full w-full" />
          </motion.span>

          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute right-[26%] bottom-6 block h-6 w-6 text-rose-500"
            style={{ transform: "rotate(28deg)" }}
          >
            <Confetti className="h-full w-full" />
          </motion.span>
        </div>

        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-mustard-300 bg-mustard-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-wine-900"
        >
          ★ Em breve, mais memórias
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-balance font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl lg:text-6xl"
        >
          A próxima festa que vai{" "}
          <span className="relative inline-block italic">
            <span className="relative z-10">aparecer aqui</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-1 z-0 h-3 -skew-y-1 bg-mustard-500/45"
            />
          </span>{" "}
          pode ser a sua.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-pretty font-display text-lg italic leading-relaxed text-foreground/75 sm:text-xl"
        >
          Nossa galeria está sendo atualizada com as últimas festas. Enquanto
          isso, que tal começar a planejar a celebração que vai virar memória?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 font-display text-base font-bold text-primary-foreground shadow-[0_12px_36px_-12px_rgba(118,5,27,0.6)] transition-all hover:scale-[1.04] hover:shadow-[0_18px_44px_-12px_rgba(118,5,27,0.7)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Seja a próxima festa</span>
            <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
