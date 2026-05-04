"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MessageSquare, CalendarCheck, PartyPopper, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const STEPS = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Conta sua festa",
    text: "Manda no WhatsApp ou pelo formulário a data, número de convidados e tema. A gente responde com o melhor pacote.",
    accent: "mustard",
  },
  {
    n: "02",
    icon: CalendarCheck,
    title: "Visita o espaço",
    text: "Marcamos um tour pelos 1000m² para você e a criança conhecerem cada brinquedo, salão e ambiente reservado.",
    accent: "mint",
  },
  {
    n: "03",
    icon: PartyPopper,
    title: "É festa!",
    text: "No dia, nossa equipe cuida de tudo. Você curte com a família e vê os pequenos correrem por 26 atrações.",
    accent: "rose",
  },
] as const;

const ACCENT_MAP = {
  mustard: { tile: "bg-mustard-100", chip: "bg-mustard-500 text-wine-900", num: "text-mustard-700" },
  mint: { tile: "bg-mint-100", chip: "bg-mint-500 text-wine-900", num: "text-mint-500" },
  rose: { tile: "bg-rose-100", chip: "bg-rose-500 text-white", num: "text-rose-500" },
} as const;

export function ComoFunciona() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-mint-300 bg-mint-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-wine-900"
          >
            Como funciona
          </motion.span>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl">
            Três passos até o grande dia
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const c = ACCENT_MAP[s.accent];
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={!reduce ? { y: -4 } : undefined}
                className={`relative flex flex-col gap-4 rounded-3xl ${c.tile} p-7 shadow-sm transition-shadow hover:shadow-lg`}
              >
                <span
                  aria-hidden
                  className={`absolute right-5 top-4 font-display text-7xl font-extrabold leading-none ${c.num} opacity-20`}
                >
                  {s.n}
                </span>
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${c.chip} shadow-md`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/75">{s.text}</p>
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden lg:absolute lg:-right-3 lg:top-1/2 lg:flex lg:h-8 lg:w-8 lg:-translate-y-1/2 lg:items-center lg:justify-center lg:rounded-full lg:bg-background lg:text-primary lg:shadow"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.03]"
          >
            Começar no WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="/orcamento"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-7 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-secondary"
          >
            Pelo formulário
          </Link>
        </div>
      </div>
    </section>
  );
}
