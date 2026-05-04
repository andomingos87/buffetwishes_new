"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { useConfetti } from "@/components/decor/confetti-burst";
import { FloatingDecor } from "@/components/decor/floating-decor";

export function CTAFinal() {
  const reduce = useReducedMotion();
  const { fire, node } = useConfetti();

  const onCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    fire(r.left + r.width / 2, r.top + r.height / 2, 50);
  };

  return (
    <section className="relative isolate overflow-hidden py-28">
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
            "radial-gradient(circle at 20% 30%, rgba(232,184,75,0.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(217,122,122,0.4), transparent 40%)",
        }}
      />

      <FloatingDecor
        items={[
          { type: "balloon", className: "left-[6%] top-[18%] text-mustard-500/70", rotate: -8, size: 50 },
          { type: "balloon", className: "right-[10%] top-[12%] text-rose-300/60", rotate: 6, delay: 1.4, size: 56 },
          { type: "star", className: "left-[14%] bottom-[20%] text-mustard-500/80", rotate: 14, delay: 0.6, size: 24 },
          { type: "sparkle", className: "right-[18%] top-[60%] text-mint-300/80", delay: 1.8, size: 22 },
          { type: "sparkle", className: "left-[40%] top-[8%] text-mustard-300/70", delay: 2.2, size: 18 },
          { type: "confetti", className: "right-[30%] bottom-[18%] text-rose-300/80", rotate: 30, delay: 0.9, size: 14 },
        ]}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-balance font-display text-4xl font-extrabold leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
        >
          Sua data favorita ainda está livre.
          <br />
          <span className="italic text-mustard-300">Vamos celebrar?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-6 max-w-xl text-pretty text-base text-cream/80 sm:text-lg"
        >
          A gente reserva agora, você relaxa o resto do mês. No grande dia,
          é só chegar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onCTA}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-mustard-500 px-8 py-4 font-display text-base font-bold text-wine-900 shadow-2xl shadow-black/30 transition-all hover:scale-[1.04]"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />
            <MessageCircle className="relative h-5 w-5" />
            <span className="relative">Reservar nossa data</span>
            <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/orcamento"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-transparent px-7 py-4 text-base font-medium text-cream transition-all hover:bg-cream/10"
          >
            Quero um orçamento
          </a>
        </motion.div>

        {!reduce && (
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mt-12 h-px w-32 origin-center bg-gradient-to-r from-transparent via-mustard-500 to-transparent"
          />
        )}
      </div>
    </section>
  );
}
