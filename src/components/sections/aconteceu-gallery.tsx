"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export type FestaItem = {
  id: number;
  nome: string;
  foto_url: string;
  link: string | null;
};

type Props = {
  festas: FestaItem[];
};

type CardProps = {
  festa: FestaItem;
  index: number;
  /** When true, render as a tall feature tile (col-span-2 on lg). */
  featured?: boolean;
  /** When true, use 3:4 portrait aspect; otherwise 4:5. */
  variant?: "tall" | "wide" | "square";
};

function FestaCard({ festa, index, featured = false, variant = "tall" }: CardProps) {
  const reduce = useReducedMotion();
  const aspect =
    variant === "wide"
      ? "aspect-[4/3]"
      : variant === "square"
        ? "aspect-square"
        : "aspect-[4/5]";

  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.04, 0.4),
        ease: [0.21, 0.65, 0.36, 1],
      }}
      whileHover={!reduce ? { y: -6 } : undefined}
      className="h-full"
    >
      <a
        href={festa.link ?? "#"}
        target={festa.link ? "_blank" : undefined}
        rel={festa.link ? "noopener noreferrer" : undefined}
        className={`group relative block h-full w-full overflow-hidden rounded-[24px] bg-muted shadow-[0_18px_44px_-20px_rgba(76,2,16,0.35)] ring-1 ring-primary/10 transition-all duration-500 hover:shadow-[0_28px_60px_-20px_rgba(76,2,16,0.5)] hover:ring-primary/30 ${aspect}`}
      >
        <Image
          src={festa.foto_url}
          alt={festa.nome}
          fill
          sizes={
            featured
              ? "(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />

        {/* Wine vignette */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-wine-900/85 via-wine-900/15 to-transparent transition-opacity duration-500 group-hover:from-wine-900/95"
        />

        {/* Magazine "Nº" stamp top-left */}
        <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mustard-500" />
          Nº {number}
        </div>

        {/* "Festa real" pill top-right (only on featured) */}
        {featured && (
          <div className="absolute right-4 top-4 z-10 rounded-full border border-mustard-300/50 bg-mustard-500/20 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-mustard-300 backdrop-blur-md">
            ★ Festa real
          </div>
        )}

        {/* Caption */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-5 text-cream sm:p-6">
          <div className="min-w-0">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/70">
              {featured ? "Cap. Festa em destaque" : "Capítulo das festas"}
            </div>
            <h3
              className={`mt-1 font-display font-extrabold leading-tight ${
                featured
                  ? "text-2xl sm:text-3xl lg:text-4xl"
                  : "text-xl sm:text-2xl"
              }`}
            >
              {festa.nome}
            </h3>
          </div>
          {festa.link && (
            <span
              aria-label="Ver no Instagram"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mustard-500 text-wine-900 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            >
              <ExternalLink className="h-4 w-4" />
            </span>
          )}
        </div>

        {/* Reveal-on-hover "ver no Instagram" ribbon */}
        {festa.link && (
          <div className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 px-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-cream/95 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-primary shadow-xl backdrop-blur">
              ver no Instagram
              <ExternalLink className="h-3.5 w-3.5" />
            </div>
          </div>
        )}
      </a>
    </motion.div>
  );
}

/**
 * Editorial cinematic gallery for /aconteceu.
 *
 * Layout:
 *   - Featured row: first 3 festas in an asymmetric magazine spread
 *     (1 large 2-col tall tile + 2 stacked smaller tiles).
 *   - Flowing 3-col grid for the rest, with a subtle masonry feel via
 *     alternating aspect ratios.
 */
export function AconteceuGallery({ festas }: Props) {
  const featured = festas.slice(0, 3);
  const rest = festas.slice(3);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-mint-300 bg-mint-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-wine-900"
        >
          Galeria de festas
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-5 text-balance font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl lg:text-6xl"
        >
          Cada festa tem uma{" "}
          <span className="relative inline-block italic">
            <span className="relative z-10">história</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-1 z-0 h-3 -skew-y-1 bg-mustard-500/45"
            />
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-5 max-w-xl text-pretty text-base text-foreground/70 sm:text-lg"
        >
          Um recorte de algumas das celebrações que aconteceram aqui — clique
          em qualquer foto para ver no Instagram.
        </motion.p>
      </div>

      {/* Featured row — asymmetric magazine spread */}
      {featured.length > 0 && (
        <div className="mb-6 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {/* Big left tile (2 cols) */}
          <div className="lg:col-span-2">
            <FestaCard
              festa={featured[0]}
              index={0}
              featured
              variant="wide"
            />
          </div>
          {/* Right column: two stacked tiles */}
          <div className="grid gap-5 lg:gap-6">
            {featured[1] && (
              <FestaCard festa={featured[1]} index={1} variant="square" />
            )}
            {featured[2] && (
              <FestaCard festa={featured[2]} index={2} variant="square" />
            )}
          </div>
        </div>
      )}

      {/* Flowing grid for the rest */}
      {rest.length > 0 && (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {rest.map((festa, i) => (
            <li key={festa.id}>
              <FestaCard
                festa={festa}
                index={i + 3}
                variant={i % 5 === 2 ? "square" : "tall"}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
