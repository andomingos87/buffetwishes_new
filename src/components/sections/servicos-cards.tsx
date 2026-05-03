"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Card = {
  title: string;
  description: string;
  href: string;
  image: string;
  cta: string;
};

const CARDS: Card[] = [
  {
    title: "O que temos de melhor",
    description:
      "Conheça nossa estrutura, atrações e diferenciais — tudo pensado para a festa dos seus desejos.",
    href: "/buffet",
    image: "/img/home-quem-somos.jpg",
    cta: "Ver o Buffet",
  },
  {
    title: "Orçamento online",
    description:
      "Conte os detalhes da sua festa pelo formulário ou fale conosco direto pelo WhatsApp.",
    href: "/orcamento",
    image: "/img/home-orcamento.jpg",
    cta: "Solicitar orçamento",
  },
];

export function ServicosCards() {
  return (
    <ul className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
      {CARDS.map((c, i) => (
        <motion.li
          key={c.href}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{ y: -6 }}
          className="group"
        >
          <Link
            href={c.href}
            className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-border shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:ring-primary/30"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={c.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-7">
              <h3 className="font-display text-3xl font-bold text-primary">
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/75">
                {c.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-medium text-primary">
                {c.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
