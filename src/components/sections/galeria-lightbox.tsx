"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

type Item = { thumb: string; full: string; alt?: string; caption?: string };

export function GaleriaLightbox({
  items,
  className,
  cols = 3,
}: {
  items: Item[];
  className?: string;
  cols?: 2 | 3 | 4;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const colClass =
    cols === 4
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      : cols === 3
        ? "grid-cols-2 sm:grid-cols-3"
        : "grid-cols-2";

  return (
    <>
      <ul className={`grid gap-3 sm:gap-4 ${colClass} ${className ?? ""}`}>
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
            className="group relative aspect-square overflow-hidden rounded-xl bg-muted ring-1 ring-border"
          >
            <button
              type="button"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="absolute inset-0"
              aria-label={item.alt || item.caption || `Foto ${i + 1}`}
            >
              <Image
                src={item.thumb}
                alt={item.alt || item.caption || ""}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {item.caption && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 text-left text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.caption}
                </div>
              )}
            </button>
          </motion.li>
        ))}
      </ul>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={items.map((it) => ({
          src: it.full,
          alt: it.alt || it.caption || "",
          description: it.caption,
        }))}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}
