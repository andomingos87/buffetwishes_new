"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Camera } from "lucide-react";
import { Marquee } from "@/components/decor/marquee";

const ROW_A = [
  "/img/estrutura/foto_buffet_wishes_01.jpg",
  "/img/estrutura/foto_buffet_wishes_03.jpg",
  "/img/estrutura/foto_buffet_wishes_05.jpg",
  "/img/estrutura/foto_buffet_wishes_07.jpg",
  "/img/estrutura/foto_buffet_wishes_09.jpg",
  "/img/estrutura/foto_buffet_wishes_11.jpg",
  "/img/estrutura/foto_buffet_wishes_13.jpg",
  "/img/estrutura/foto_buffet_wishes_15.jpg",
];

const ROW_B = [
  "/img/obuffet/foto_buffet_wishes_02.jpg",
  "/img/obuffet/foto_buffet_wishes_04.jpg",
  "/img/obuffet/foto_buffet_wishes_06.jpg",
  "/img/obuffet/foto_buffet_wishes_08.jpg",
  "/img/obuffet/foto_buffet_wishes_10.jpg",
  "/img/obuffet/foto_buffet_wishes_12.jpg",
  "/img/estrutura/foto_buffet_wishes_02.jpg",
  "/img/estrutura/foto_buffet_wishes_04.jpg",
];

function Tile({ src, idx }: { src: string; idx: number }) {
  return (
    <div className="relative h-44 w-72 shrink-0 overflow-hidden rounded-2xl ring-1 ring-primary/10 transition-transform duration-500 hover:scale-[1.04] hover:ring-primary/30 sm:h-56 sm:w-80">
      <Image
        src={src}
        alt=""
        fill
        sizes="320px"
        className="object-cover"
        loading={idx < 4 ? "eager" : "lazy"}
      />
    </div>
  );
}

export function GaleriaTeaser() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="mb-12 px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-mustard-300 bg-mustard-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-wine-900"
        >
          <Camera className="h-3 w-3" />
          Galeria
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-balance font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl"
        >
          Cada festa é uma história
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-foreground/70 sm:text-lg">
          Mais de 5.000 festas realizadas — uma rolagem rápida pelas mais recentes.
          Passe o mouse para pausar.
        </p>
      </div>

      <div className="space-y-4">
        <Marquee speed="slow">
          {ROW_A.map((src, i) => (
            <Tile key={src} src={src} idx={i} />
          ))}
        </Marquee>
        <Marquee speed="slow" reverse>
          {ROW_B.map((src, i) => (
            <Tile key={src} src={src} idx={i} />
          ))}
        </Marquee>
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/aconteceu"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.03]"
        >
          Ver galeria completa
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
