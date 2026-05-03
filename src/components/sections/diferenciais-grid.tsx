"use client";

import { motion } from "framer-motion";
import { Baby, Snowflake, Wifi, Accessibility, Shield, Car, Sofa } from "lucide-react";
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

export function DiferenciaisGrid() {
  return (
    <ul className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
      {DIFERENCIAIS.map((d: Diferencial, i) => {
        const Icon = ICONS[d.icon];
        return (
          <motion.li
            key={d.titulo}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-lg font-semibold text-foreground">
              {d.titulo}
            </h3>
            <p className="text-xs text-foreground/70">{d.descricao}</p>
          </motion.li>
        );
      })}
    </ul>
  );
}
