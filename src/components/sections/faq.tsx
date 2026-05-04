"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Qual a capacidade do espaço?",
    a: "Os 1000m² do Buffet Wishes acomodam confortavelmente festas de 80 a 250 convidados, com áreas distintas para crianças e adultos.",
  },
  {
    q: "A decoração está inclusa?",
    a: "Trabalhamos com pacotes flexíveis. A estrutura, equipe e atrações estão sempre inclusas; decoração temática é cotada à parte para combinar com o desejo da criança.",
  },
  {
    q: "Como funciona o estacionamento?",
    a: "Oferecemos serviço de manobrista (valet) próprio para os convidados, sem complicação para os pais.",
  },
  {
    q: "É possível visitar antes de fechar?",
    a: "Sim, e recomendamos. Marcamos um tour pelo espaço com toda a família — incluindo a criança, claro.",
  },
  {
    q: "Vocês atendem festas para bebês?",
    a: "Sim. Temos área baby dedicada, com gira-gira e carrossel, e fraldário equipado. Festas de 1 ano são uma de nossas especialidades.",
  },
  {
    q: "Quais formas de pagamento aceitam?",
    a: "Trabalhamos com PIX, transferência, cartão de crédito (parcelado) e dinheiro. Os detalhes são acertados após a proposta.",
  },
] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-mint-300 bg-mint-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-wine-900">
            <HelpCircle className="h-3 w-3" />
            Perguntas frequentes
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl">
            Tudo o que você precisa saber
          </h2>
        </div>

        <ul className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={cn(
                    "overflow-hidden rounded-2xl border-2 bg-card transition-colors",
                    isOpen
                      ? "border-primary/30 shadow-lg shadow-primary/5"
                      : "border-border hover:border-primary/20",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-display text-lg font-semibold text-foreground sm:text-xl">
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        isOpen
                          ? "rotate-45 bg-primary text-primary-foreground"
                          : "bg-secondary text-primary",
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.65, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-pretty text-base leading-relaxed text-foreground/75">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
