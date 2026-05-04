"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { useConfetti } from "@/components/decor/confetti-burst";
import { FloatingDecor } from "@/components/decor/floating-decor";

/**
 * Closing CTA for /buffet — wine background, two CTAs (orçamento + WhatsApp).
 * Distinct from the home /CTAFinal so the page can stand alone.
 */
export function BuffetCTA() {
  const { fire, node } = useConfetti();

  const onCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    fire(r.left + r.width / 2, r.top + r.height / 2, 48);
  };

  return (
    <section className="relative isolate overflow-hidden py-24">
      {node}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-primary via-wine-800 to-wine-900"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 22% 28%, rgba(232,184,75,0.5), transparent 40%), radial-gradient(circle at 80% 75%, rgba(217,122,122,0.45), transparent 42%)",
        }}
      />
      <FloatingDecor
        items={[
          { type: "balloon", className: "left-[5%] top-[16%] text-mustard-500/70", rotate: -8, size: 46 },
          { type: "balloon", className: "right-[8%] top-[10%] text-rose-300/60", rotate: 6, delay: 1.4, size: 52 },
          { type: "star", className: "left-[16%] bottom-[18%] text-mustard-500/80", rotate: 14, delay: 0.6, size: 22 },
          { type: "sparkle", className: "right-[22%] top-[58%] text-mint-300/80", delay: 1.8, size: 20 },
          { type: "confetti", className: "right-[34%] bottom-[20%] text-rose-300/80", rotate: 30, delay: 0.9, size: 14 },
        ]}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-mustard-300/40 bg-mustard-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-mustard-300"
        >
          Próximo capítulo · O seu
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
        >
          Vamos transformar o desejo
          <br />
          <span className="italic text-mustard-300">em festa?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mx-auto mt-6 max-w-xl text-pretty text-base text-cream/80 sm:text-lg"
        >
          Conte um pouco sobre a celebração que você imagina — a gente cuida do
          resto, do convite ao bolo da última fatia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/orcamento"
            onClick={onCTA}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-mustard-500 px-8 py-4 font-display text-base font-bold text-wine-900 shadow-2xl shadow-black/30 transition-all hover:scale-[1.04]"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Pedir orçamento</span>
            <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-transparent px-7 py-4 text-base font-medium text-cream transition-all hover:bg-cream/10"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
