"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const HEADLINE = "Quer descobrir até onde seus desejos podem te levar?";

export function Hero() {
  const reduce = useReducedMotion();
  const words = HEADLINE.split(" ");

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-cream via-cream-soft to-background pb-24 pt-12 sm:pt-16">
      {/* Decorative orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-wine-300 opacity-60 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col justify-center pt-6">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-background px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Buffet infantil em Tatuapé / SP
          </motion.span>

          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-primary sm:text-6xl lg:text-7xl">
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
                    className="mr-[0.3ch] inline-block"
                  >
                    {w}
                  </motion.span>
                ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80"
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
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/30"
            >
              Pedir orçamento no WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/estrutura"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-background px-7 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-secondary"
            >
              Conhecer o espaço
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.21, 0.65, 0.36, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl shadow-primary/20 ring-1 ring-primary/10 sm:aspect-[3/4] lg:aspect-[4/5]"
        >
          <Image
            src="/img/banner-wishes.jpg"
            alt="Festa no Buffet Wishes"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
