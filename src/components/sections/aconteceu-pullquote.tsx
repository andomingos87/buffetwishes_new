"use client";

import { motion } from "framer-motion";

/**
 * Wine pull-quote band intercutting the gallery — short, dramatic,
 * Fraunces italic at magazine scale. Mirrors the editorial tone from
 * BuffetEditorial without lifting its layout.
 */
export function AconteceuPullquote() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-20 text-cream sm:py-24">
      {/* Soft glows for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 22% 30%, rgba(232,184,75,0.35), transparent 40%), radial-gradient(circle at 80% 70%, rgba(217,122,122,0.3), transparent 42%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-mustard-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-mustard-300"
        >
          <span className="inline-block h-px w-10 bg-mustard-300/50" />
          <span>Cap. 02 / Memória</span>
          <span aria-hidden>★</span>
          <span className="inline-block h-px w-10 bg-mustard-300/50" />
        </motion.span>

        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mx-auto mt-7 h-10 w-10 text-mustard-300"
          aria-hidden
        >
          <path d="M9.5 6c-3 0-5.5 2.5-5.5 5.5 0 1.4.5 2.5 1.3 3.4-1 .5-1.7 1.6-1.7 2.7v.4h6v-.4c0-1.5-1-2.7-2.4-3.1.7-.6 1.2-1.4 1.2-2.5 0-1.5 1.3-2.8 2.8-2.8h.3V6h-.5zm10 0c-3 0-5.5 2.5-5.5 5.5 0 1.4.5 2.5 1.3 3.4-1 .5-1.7 1.6-1.7 2.7v.4h6v-.4c0-1.5-1-2.7-2.4-3.1.7-.6 1.2-1.4 1.2-2.5 0-1.5 1.3-2.8 2.8-2.8h.3V6h-.5z" />
        </svg>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.65, 0.36, 1] }}
          className="mt-6 text-balance font-display text-3xl font-extrabold italic leading-[1.1] sm:text-5xl lg:text-6xl"
        >
          Há festa que vira memória.
          <br />
          E memória que{" "}
          <span className="text-mustard-300">vira história.</span>
        </motion.blockquote>

        <motion.figcaption
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 font-mono text-[11px] uppercase tracking-[0.24em] text-cream/60"
        >
          — Equipe Wishes · Tatuapé desde 2014
        </motion.figcaption>
      </div>
    </section>
  );
}
