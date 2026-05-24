"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Sparkles, Camera } from "lucide-react";

type Valor = {
  titulo: string;
  descricao: string;
  icon: typeof HeartHandshake;
  accent: "primary" | "mustard" | "mint" | "rose";
  numero: string;
};

const VALORES: Valor[] = [
  {
    numero: "01",
    titulo: "Carinho de quem entende",
    descricao:
      "Profissionais experientes treinados para cuidar de cada detalhe — do recepcionista ao monitor — para que você só precise aproveitar.",
    icon: HeartHandshake,
    accent: "rose",
  },
  {
    numero: "02",
    titulo: "Estrutura que impressiona",
    descricao:
      "Lounge premium, camarim com suíte, fraldário, área baby e mais de 30 atrações em 1000m² climatizados.",
    icon: Sparkles,
    accent: "mustard",
  },
  {
    numero: "03",
    titulo: "Segurança em primeiro lugar",
    descricao:
      "Sistema de monitoramento completo, gerador próprio, valet e profissionais certificados para a tranquilidade da família.",
    icon: ShieldCheck,
    accent: "primary",
  },
  {
    numero: "04",
    titulo: "Memórias para sempre",
    descricao:
      "Cada festa é única. Tudo é pensado para virar lembrança — daquelas que a criança lembra na próxima década.",
    icon: Camera,
    accent: "mint",
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
 * Editorial 4-card "valores" — alternates mustard/mint/rose/wine accents
 * to break the cream monotone. Each card has a magazine-style number,
 * Lucide icon and hover tilt.
 */
export function BuffetValores() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-mustard-50 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(232,184,75,0.18), transparent 35%), radial-gradient(circle at 90% 88%, rgba(217,122,122,0.12), transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-cream px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-primary">
            O jeito Wishes
          </span>
          <h2 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
            Tudo o que importa, em um
            <br className="hidden sm:block" />{" "}
            <span className="relative inline-block italic">
              <span className="relative z-10">só lugar</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 z-0 h-3 -skew-y-1 bg-mustard-500/45"
              />
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-foreground/70 sm:text-lg">
            Quatro pilares que sustentam cada festa — do primeiro contato até a
            última fotografia.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALORES.map((v, i) => {
            const Icon = v.icon;
            const c = ACCENT_CLASSES[v.accent];
            return (
              <motion.li
                key={v.titulo}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.07,
                  ease: [0.21, 0.65, 0.36, 1],
                }}
                whileHover={!reduce ? { y: -8, rotate: i % 2 === 0 ? -1 : 1 } : undefined}
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
                    Nº {v.numero}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold leading-tight text-foreground">
                    {v.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {v.descricao}
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
