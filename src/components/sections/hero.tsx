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
import { ArrowRight, Star, MapPin } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { useConfetti } from "@/components/decor/confetti-burst";
import { Marquee } from "@/components/decor/marquee";
import { FloatingDecor } from "@/components/decor/floating-decor";

const HEADLINE_PREFIX = "Quer descobrir até onde seus";
const HEADLINE_KEY = "desejos";
const HEADLINE_SUFFIX = "podem te levar?";

const SPECS = [
  { n: "01", label: "1000m² de espaço" },
  { n: "02", label: "26 atrações exclusivas" },
  { n: "03", label: "10+ anos no Tatuapé" },
] as const;

const TICKER_ITEMS = [
  "Reservas abertas para 2026",
  "Buffet Wishes",
  "Tatuapé · São Paulo",
  "Desde 2014",
  "5000+ festas realizadas",
  "★ ★ ★ ★ ★",
];

/**
 * Vintage rotating badge — circular text on path that spins slowly.
 * Sits at the seam between text and photo, doubles as a focal point.
 */
function RotatingSeal() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      initial={{ scale: 0, rotate: -45, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{
        delay: 1.1,
        duration: 0.7,
        ease: [0.21, 0.65, 0.36, 1],
      }}
      className="pointer-events-none absolute -left-10 top-[40%] z-20 h-32 w-32 -translate-y-1/2 sm:-left-16 sm:h-40 sm:w-40 lg:-left-20 lg:h-44 lg:w-44"
    >
      <motion.div
        animate={!reduce ? { rotate: 360 } : undefined}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="relative h-full w-full"
      >
        <svg viewBox="0 0 200 200" className="h-full w-full drop-shadow-xl">
          <defs>
            <path
              id="seal-circle"
              d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
            />
          </defs>
          <circle
            cx="100"
            cy="100"
            r="92"
            fill="var(--color-mustard-500)"
            stroke="var(--color-wine-900)"
            strokeWidth="2"
          />
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="var(--color-wine-900)"
            strokeWidth="1"
            strokeDasharray="2 4"
            opacity="0.5"
          />
          <text
            fontSize="13"
            letterSpacing="3"
            fill="#4b0210"
            fontWeight="700"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            <textPath href="#seal-circle" startOffset="0%">
              ★ BUFFET WISHES ★ EST. 2014 ★ TATUAPÉ — SP ★ FESTAS DOS SONHOS ★
            </textPath>
          </text>
        </svg>
      </motion.div>
      {/* Inner star (counter-rotates so it stays still relative to viewer) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Star className="h-7 w-7 fill-wine-900 text-wine-900 sm:h-9 sm:w-9" />
      </div>
    </motion.div>
  );
}

/**
 * Hand-drawn squiggle that draws itself under "desejos".
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
        transition={{ delay: 1.3, duration: 1.1, ease: "easeOut" }}
      />
    </svg>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { fire, node: confettiNode } = useConfetti();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    fire(r.left + r.width / 2, r.top + r.height / 2, 36);
  };

  const prefixWords = HEADLINE_PREFIX.split(" ");
  const suffixWords = HEADLINE_SUFFIX.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-gradient-to-b from-cream via-cream-soft to-background pb-0 pt-8 sm:pt-12"
    >
      {confettiNode}

      {/* Atmospheric orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-mustard-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-32 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl"
      />
      <FloatingDecor preset="light" />

      <div className="relative mx-auto grid max-w-[88rem] items-center gap-y-10 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-x-10 lg:px-10 lg:pb-24">
        {/* LEFT — copy */}
        <div className="relative flex flex-col justify-center lg:col-span-6 xl:col-span-5">
          {/* Editorial issue label */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-primary/70"
          >
            <span className="inline-block h-px w-10 bg-primary/40" />
            <span>Edição Nº 26</span>
            <span aria-hidden className="text-mustard-500">
              ★
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Tatuapé · SP
            </span>
          </motion.div>

          {/* Headline — magazine-cover scale */}
          <h1 className="mt-6 font-display text-[clamp(2.6rem,6.4vw,5.6rem)] font-extrabold leading-[0.96] tracking-[-0.02em] text-primary text-balance">
            <span className="block">
              {reduce
                ? HEADLINE_PREFIX
                : prefixWords.map((w, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.15 + i * 0.05,
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
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative mt-2 inline-block italic"
            >
              <span className="relative z-10 font-display text-[1.05em] text-primary">
                {HEADLINE_KEY}
              </span>
              <SquiggleUnderline />
            </motion.span>{" "}
            {reduce
              ? HEADLINE_SUFFIX
              : suffixWords.map((w, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.85 + i * 0.05,
                      duration: 0.6,
                      ease: [0.21, 0.65, 0.36, 1],
                    }}
                    className="mr-[0.22ch] inline-block"
                  >
                    {w}
                  </motion.span>
                ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-7 max-w-xl text-pretty font-display text-lg italic leading-relaxed text-foreground/75 sm:text-xl"
          >
            Estrutura única, profissionais qualificados e mais de 26 atrações
            para tornar a festa dos seus sonhos inesquecível.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.55 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCTAClick}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_12px_36px_-12px_rgba(118,5,27,0.6)] transition-all hover:scale-[1.03] hover:shadow-[0_18px_44px_-12px_rgba(118,5,27,0.7)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Reservar nossa data</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/estrutura"
              className="group inline-flex items-center justify-center gap-2 px-2 py-3 text-sm font-medium text-primary underline-offset-[6px] transition-all hover:underline"
            >
              Conhecer o espaço
              <span
                aria-hidden
                className="text-mustard-500 transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </motion.div>

          {/* Editorial spec list */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-4 border-t border-primary/15 pt-6"
          >
            {SPECS.map((s) => (
              <div key={s.n} className="flex flex-col">
                <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary/55">
                  — {s.n} —
                </dt>
                <dd className="mt-1 font-display text-sm font-semibold leading-tight text-foreground sm:text-base">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* RIGHT — single editorial photo */}
        <div className="relative lg:col-span-6 xl:col-span-7">
          <RotatingSeal />

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.21, 0.65, 0.36, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-[0_30px_80px_-20px_rgba(76,2,16,0.45)] ring-1 ring-primary/15 sm:aspect-[5/6] lg:aspect-[4/5]"
          >
            <motion.div
              style={
                !reduce
                  ? { y: photoY, scale: photoScale }
                  : undefined
              }
              className="absolute inset-0"
            >
              <Image
                src="/img/banner-wishes.jpg"
                alt="Festa real no Buffet Wishes"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </motion.div>

            {/* Photo overlays — magazine framing */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-wine-900/45 via-transparent to-wine-900/10"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-wine-900/15 via-transparent to-transparent"
            />

            {/* Magazine corner stamp */}
            <div className="absolute right-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mustard-500" />
              Festa real
            </div>

            {/* Bottom caption — like a magazine photo credit */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute inset-x-5 bottom-5 z-10 flex items-end justify-between gap-3 text-white"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
                  Cap. 01 / Estrutura
                </div>
                <div className="mt-1 font-display text-xl font-bold leading-tight sm:text-2xl">
                  Onde a infância acontece
                </div>
              </div>
              <a
                href="/estrutura"
                className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mustard-500 text-wine-900 shadow-lg transition-transform hover:scale-110 sm:flex"
                aria-label="Conhecer a estrutura"
              >
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Festive ticker — magazine bottom strip */}
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
    </section>
  );
}
