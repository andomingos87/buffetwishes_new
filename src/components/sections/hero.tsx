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
import { Sparkles, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { FloatingDecor } from "@/components/decor/floating-decor";
import { useConfetti } from "@/components/decor/confetti-burst";

const HEADLINE = "Quer descobrir até onde seus desejos podem te levar?";

const STATS = [
  { value: "1000m²", label: "de pura diversão" },
  { value: "26", label: "atrações" },
  { value: "10+", label: "anos de história" },
  { value: "100%", label: "famílias felizes" },
] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const words = HEADLINE.split(" ");
  const { fire, node: confettiNode } = useConfetti();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const yTertiary = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    fire(r.left + r.width / 2, r.top + r.height / 2, 36);
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-gradient-to-b from-cream via-cream-soft to-background pb-20 pt-10 sm:pt-14"
    >
      {confettiNode}

      {/* Decorative orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-mustard-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-rose-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-mint-500/10 blur-3xl"
      />

      <FloatingDecor preset="hero" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* LEFT: copy */}
        <div className="flex flex-col justify-center pt-2 lg:col-span-6">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-background px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Buffet infantil em Tatuapé / SP
          </motion.span>

          <h1 className="mt-5 text-balance font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-primary sm:text-6xl lg:text-[4.2rem]">
            {reduce
              ? HEADLINE
              : words.map((w, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.05,
                      duration: 0.5,
                      ease: [0.21, 0.65, 0.36, 1],
                    }}
                    className="mr-[0.25ch] inline-block"
                  >
                    {w === "desejos" ? (
                      <span className="relative inline-block">
                        <span className="relative z-10">{w}</span>
                        <span
                          aria-hidden
                          className="absolute inset-x-0 bottom-1 z-0 h-3 -skew-y-1 bg-mustard-500/45 sm:h-4"
                        />
                      </span>
                    ) : (
                      w
                    )}
                  </motion.span>
                ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/80"
          >
            Estrutura única, profissionais qualificados e mais de 26 atrações para
            tornar a festa dos seus sonhos inesquecível.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCTAClick}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/35"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Reservar nossa data</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/estrutura"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-background/70 px-7 py-3.5 text-sm font-medium text-primary backdrop-blur-sm transition-all hover:border-primary/60 hover:bg-secondary"
            >
              Conhecer o espaço
            </Link>
          </motion.div>
        </div>

        {/* RIGHT: bento */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-3 grid-rows-3 gap-3 sm:gap-4">
            <motion.div
              style={!reduce ? { y: yMain } : undefined}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.21, 0.65, 0.36, 1] }}
              className="relative col-span-2 row-span-2 overflow-hidden rounded-[28px] shadow-2xl shadow-primary/20 ring-1 ring-primary/10"
            >
              <Image
                src="/img/banner-wishes.jpg"
                alt="Festa no Buffet Wishes"
                fill
                sizes="(max-width: 1024px) 70vw, 35vw"
                priority
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"
              />
              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-mustard-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-wine-900 shadow">
                <Sparkles className="h-3 w-3" />
                Festa real
              </div>
            </motion.div>

            <motion.div
              style={!reduce ? { y: ySecondary } : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative col-span-1 row-span-1 overflow-hidden rounded-[22px] ring-1 ring-primary/10"
            >
              <Image
                src="/img/estrutura/foto_buffet_wishes_05.jpg"
                alt="Atração do Buffet Wishes"
                fill
                sizes="(max-width: 1024px) 25vw, 16vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              style={!reduce ? { y: yTertiary } : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="relative col-span-1 row-span-2 flex flex-col justify-end overflow-hidden rounded-[22px] bg-mustard-500 p-5 ring-1 ring-mustard-700/20"
            >
              <span className="font-display text-3xl font-extrabold leading-none text-wine-900 sm:text-4xl">
                26
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-wine-900/80">
                atrações em <br />
                1000m²
              </span>
              <Sparkles className="absolute right-3 top-3 h-4 w-4 text-wine-900/50" />
            </motion.div>

            <motion.div
              style={!reduce ? { y: ySecondary } : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative col-span-2 row-span-1 overflow-hidden rounded-[22px] ring-1 ring-primary/10"
            >
              <Image
                src="/img/estrutura/foto_buffet_wishes_13.jpg"
                alt="Pista de dança"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-primary/10 ring-1 ring-primary/15 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="group relative bg-background/85 px-6 py-6 text-center backdrop-blur-sm transition-colors hover:bg-mustard-500/10"
            >
              <div className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-foreground/70 sm:text-xs">
                {s.label}
              </div>
              {i < STATS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-0 top-1/2 hidden h-8 w-px -translate-y-1/2 bg-primary/15 sm:block"
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
