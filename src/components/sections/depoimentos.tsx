"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { DEPOIMENTOS } from "@/content/depoimentos";
import { cn } from "@/lib/utils";

export function Depoimentos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden bg-cream-soft py-24">
      {/* Background ornamental */}
      <Quote
        aria-hidden
        className="pointer-events-none absolute -left-6 top-10 h-40 w-40 text-primary/[0.04]"
      />
      <Quote
        aria-hidden
        className="pointer-events-none absolute -right-6 bottom-10 h-40 w-40 rotate-180 text-primary/[0.04]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-300 bg-rose-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-wine-900">
            <Star className="h-3 w-3 fill-current" />
            O que dizem as famílias
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl">
            Histórias que viraram memória
          </h2>
        </div>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {DEPOIMENTOS.map((d, i) => (
                <motion.article
                  key={d.nome}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: selected === i ? 1 : 0.55 }}
                  transition={{ duration: 0.4 }}
                  className="min-w-0 shrink-0 grow-0 basis-full px-2 sm:basis-[80%] sm:px-4 lg:basis-[60%]"
                >
                  <div className="relative flex h-full flex-col gap-5 rounded-3xl bg-card p-8 shadow-lg ring-1 ring-border sm:p-10">
                    <span aria-hidden className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-mustard-500 text-wine-900 shadow-md">
                      <Quote className="h-4 w-4" />
                    </span>
                    <div className="flex gap-1">
                      {Array.from({ length: d.rating }).map((_, k) => (
                        <Star
                          key={k}
                          className="h-4 w-4 fill-mustard-500 text-mustard-500"
                        />
                      ))}
                    </div>
                    <p className="text-pretty font-display text-xl italic leading-relaxed text-foreground/90 sm:text-2xl">
                      &ldquo;{d.texto}&rdquo;
                    </p>
                    <div className="mt-2 flex items-center gap-3 border-t border-border pt-5">
                      {d.foto ? (
                        <Image
                          src={d.foto}
                          alt={d.nome}
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-full object-cover ring-2 ring-mustard-500/30"
                        />
                      ) : (
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg font-bold">
                          {d.nome.charAt(0)}
                        </span>
                      )}
                      <div>
                        <div className="font-display text-base font-bold text-foreground">
                          {d.nome}
                        </div>
                        <div className="text-xs text-foreground/60">{d.papel}</div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Depoimento anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary transition-all hover:scale-105 hover:border-primary/50 hover:shadow"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    selected === i
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/25 hover:bg-primary/50",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Próximo depoimento"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary transition-all hover:scale-105 hover:border-primary/50 hover:shadow"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
