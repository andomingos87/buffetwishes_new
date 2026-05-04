"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { useConfetti } from "@/components/decor/confetti-burst";
import { FloatingDecor } from "@/components/decor/floating-decor";

/** Official WhatsApp glyph — same monochrome usage as cta-final.tsx. */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden className={className}>
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.493-.502 2.84-1.262.207-.46.215-.888.07-1.39-.244-.443-1.85-.84-2.205-.84zM16 4C9.37 4 4 9.37 4 16c0 2.41.717 4.65 1.946 6.534L4 28l5.59-1.832C11.398 27.328 13.638 28 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4zm0 21.81c-2.27 0-4.39-.687-6.16-1.86l-3.46 1.13 1.124-3.323A9.75 9.75 0 0 1 6.19 16c0-5.42 4.39-9.81 9.81-9.81 5.42 0 9.81 4.39 9.81 9.81 0 5.42-4.39 9.81-9.81 9.81z" />
    </svg>
  );
}

/**
 * Final CTA for /aconteceu — wine background photo with parallax,
 * floating decor, official WhatsApp green button + secondary
 * /orcamento link. Mirrors the recipe of cta-final.tsx.
 */
export function AconteceuCTA() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { fire, node } = useConfetti();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const onCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    fire(r.left + r.width / 2, r.top + r.height / 2, 60);
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden py-32 sm:py-40"
    >
      {node}

      {/* Background photo with parallax */}
      <motion.div
        aria-hidden
        style={!reduce ? { y: bgY, scale: bgScale } : { scale: 1.05 }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/img/banner-fim.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
      </motion.div>

      {/* Wine overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-wine-900/95 via-primary/85 to-wine-800/95"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 28%, rgba(232,184,75,0.35), transparent 45%), radial-gradient(circle at 82% 72%, rgba(217,122,122,0.35), transparent 45%)",
        }}
      />
      {/* Grain texture for cinematic feel */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />

      <FloatingDecor
        items={[
          { type: "balloon", className: "left-[6%] top-[18%] text-mustard-500/85", rotate: -8, size: 56 },
          { type: "balloon", className: "right-[8%] top-[10%] text-rose-300/70", rotate: 6, delay: 1.4, size: 64 },
          { type: "star", className: "left-[14%] bottom-[18%] text-mustard-500/90", rotate: 14, delay: 0.6, size: 28 },
          { type: "sparkle", className: "right-[18%] top-[58%] text-mint-300/80", delay: 1.8, size: 24 },
          { type: "sparkle", className: "left-[42%] top-[6%] text-mustard-300/80", delay: 2.2, size: 20 },
          { type: "confetti", className: "right-[32%] bottom-[20%] text-rose-300/85", rotate: 30, delay: 0.9, size: 16 },
          { type: "confetti", className: "left-[36%] top-[40%] text-mint-300/85", rotate: -20, delay: 1.5, size: 14 },
        ]}
      />

      <motion.div
        style={!reduce ? { y: titleY } : undefined}
        className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-mustard-300/40 bg-mustard-500/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-mustard-300 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mustard-300" />
          A sua festa, o próximo capítulo
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.65, 0.36, 1] }}
          className="mt-6 text-balance font-display text-5xl font-extrabold leading-[1.02] text-cream sm:text-6xl lg:text-7xl"
        >
          Faltou só uma festa
          <br />
          nessa galeria.{" "}
          <span className="italic text-mustard-300">A sua.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-cream/85 sm:text-lg"
        >
          Cada uma dessas memórias começou com uma conversa simples. Bora
          começar a sua?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.55 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onCTA}
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[#25D366] px-8 py-4 font-display text-base font-bold text-white shadow-[0_18px_44px_-12px_rgba(37,211,102,0.55)] ring-2 ring-[#25D366]/30 transition-all hover:scale-[1.04] hover:bg-[#1ebe5b] hover:shadow-[0_22px_52px_-12px_rgba(37,211,102,0.7)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-700 group-hover:translate-x-full" />
            <WhatsAppIcon className="relative h-5 w-5" />
            <span className="relative">Falar no WhatsApp</span>
            <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <Link
            href="/orcamento"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-7 py-4 text-base font-medium text-cream backdrop-blur-sm transition-all hover:border-cream/60 hover:bg-cream/10"
          >
            Quero um orçamento
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-cream/50"
        >
          Tatuapé · São Paulo — desde 2014
        </motion.p>
      </motion.div>
    </section>
  );
}
