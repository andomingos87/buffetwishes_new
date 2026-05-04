"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Baby,
  Snowflake,
  Wifi,
  Accessibility,
  Shield,
  Car,
  Sofa,
} from "lucide-react";
import { DIFERENCIAIS, type Diferencial } from "@/content/atracoes";

const ICONS = {
  baby: Baby,
  snowflake: Snowflake,
  wifi: Wifi,
  accessibility: Accessibility,
  shield: Shield,
  car: Car,
  sofa: Sofa,
} as const;

const ACCENT_CYCLE = ["primary", "mustard", "mint", "rose"] as const;

const ACCENT_CLASSES = {
  primary: {
    bg: "bg-cream",
    iconBg: "bg-primary text-primary-foreground",
    border: "border-primary/15 hover:border-primary/40",
  },
  mustard: {
    bg: "bg-mustard-50",
    iconBg: "bg-mustard-500 text-wine-900",
    border: "border-mustard-300/50 hover:border-mustard-500",
  },
  mint: {
    bg: "bg-mint-50",
    iconBg: "bg-mint-500 text-wine-900",
    border: "border-mint-300/50 hover:border-mint-500",
  },
  rose: {
    bg: "bg-rose-50",
    iconBg: "bg-rose-500 text-white",
    border: "border-rose-300/50 hover:border-rose-500",
  },
} as const;

export function DiferenciaisGrid() {
  const reduce = useReducedMotion();

  return (
    <ul className="mx-auto grid max-w-6xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-4 lg:px-8">
      {DIFERENCIAIS.map((d: Diferencial, i) => {
        const Icon = ICONS[d.icon];
        const accent = ACCENT_CYCLE[i % ACCENT_CYCLE.length];
        const c = ACCENT_CLASSES[accent];
        return (
          <motion.li
            key={d.titulo}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
              ease: [0.21, 0.65, 0.36, 1],
            }}
            whileHover={!reduce ? { y: -6, rotate: -1 } : undefined}
            className={`group relative flex flex-col items-start gap-4 rounded-3xl border-2 ${c.bg} ${c.border} p-6 shadow-sm transition-all hover:shadow-xl hover:shadow-primary/10`}
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-2xl ${c.iconBg} shadow-md transition-transform group-hover:rotate-6 group-hover:scale-110`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold leading-tight text-foreground">
                {d.titulo}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">
                {d.descricao}
              </p>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}
