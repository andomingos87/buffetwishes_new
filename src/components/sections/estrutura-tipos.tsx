"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cake, Music, GlassWater, Briefcase } from "lucide-react";

type Tipo = {
  numero: string;
  titulo: string;
  descricao: string;
  icon: typeof Cake;
  accent: "mustard" | "mint" | "rose" | "primary";
};

const TIPOS: Tipo[] = [
  {
    numero: "01",
    titulo: "Kids",
    descricao:
      "Aniversários infantis com brinquedão, piscina de bolinhas, área baby e monitores treinados — do primeiro ao décimo aniversário.",
    icon: Cake,
    accent: "mustard",
  },
  {
    numero: "02",
    titulo: "Teens",
    descricao:
      "Pista de dança com DJ, simuladores, kinect e torre de 6 metros — a estrutura certa para a fase em que tudo começa a mudar.",
    icon: Music,
    accent: "mint",
  },
  {
    numero: "03",
    titulo: "Sociais",
    descricao:
      "Bodas, debutantes, formaturas e chás de bebê — lounge premium, camarim com suíte e ambientes para receber bem.",
    icon: GlassWater,
    accent: "rose",
  },
  {
    numero: "04",
    titulo: "Corporativos",
    descricao:
      "Confraternizações, lançamentos e eventos de empresa — wifi liberado, valet, gerador próprio e estrutura para até 250 convidados.",
    icon: Briefcase,
    accent: "primary",
  },
];

const ACCENT_CLASSES = {
  primary: {
    card: "bg-cream",
    border: "border-primary/15 hover:border-primary/45",
    iconBg: "bg-primary text-primary-foreground",
    numero: "text-primary/60",
    accentBar: "bg-primary",
  },
  mustard: {
    card: "bg-mustard-50",
    border: "border-mustard-300/60 hover:border-mustard-500",
    iconBg: "bg-mustard-500 text-wine-900",
    numero: "text-mustard-700/70",
    accentBar: "bg-mustard-500",
  },
  mint: {
    card: "bg-mint-50",
    border: "border-mint-300/60 hover:border-mint-500",
    iconBg: "bg-mint-500 text-wine-900",
    numero: "text-mint-500",
    accentBar: "bg-mint-500",
  },
  rose: {
    card: "bg-rose-50",
    border: "border-rose-300/60 hover:border-rose-500",
    iconBg: "bg-rose-500 text-white",
    numero: "text-rose-500/80",
    accentBar: "bg-rose-500",
  },
} as const;

/**
 * Editorial spread for the 4 tipos de festa — same visual recipe as
 * BuffetValores: rotating mustard/mint/rose/wine accents, Lucide icons,
 * Nº 01-04 labels.
 */
export function EstruturaTipos() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-cream-soft py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(122,168,160,0.18), transparent 35%), radial-gradient(circle at 90% 88%, rgba(232,184,75,0.14), transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-primary/55">
            — Cap. 03 / Tipos de festa —
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
            Pra todo tipo de festa,
            <br className="hidden sm:block" />{" "}
            <span className="relative inline-block italic">
              <span className="relative z-10">o mesmo cuidado</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 z-0 h-3 -skew-y-1 bg-mustard-500/45"
              />
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-foreground/70 sm:text-lg">
            A estrutura é a mesma — a celebração é só sua. Adaptamos o espaço
            para qualquer público, em qualquer fase da vida.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TIPOS.map((t, i) => {
            const Icon = t.icon;
            const c = ACCENT_CLASSES[t.accent];
            return (
              <motion.li
                key={t.titulo}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.07,
                  ease: [0.21, 0.65, 0.36, 1],
                }}
                whileHover={
                  !reduce ? { y: -8, rotate: i % 2 === 0 ? -1 : 1 } : undefined
                }
                className={`group relative flex flex-col gap-5 rounded-3xl border-2 p-7 shadow-sm transition-all hover:shadow-xl hover:shadow-primary/10 ${c.card} ${c.border}`}
              >
                <span
                  aria-hidden
                  className={`absolute left-0 top-7 h-10 w-1 rounded-r ${c.accentBar}`}
                />
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-md transition-transform group-hover:rotate-6 group-hover:scale-110 ${c.iconBg}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`font-mono text-xs font-bold uppercase tracking-[0.2em] ${c.numero}`}
                  >
                    Nº {t.numero}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-extrabold leading-tight text-foreground">
                    {t.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {t.descricao}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
