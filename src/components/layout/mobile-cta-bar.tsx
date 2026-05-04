"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { whatsappLink, SITE } from "@/lib/site";
import { useConfetti } from "@/components/decor/confetti-burst";

export function MobileCTABar() {
  const [show, setShow] = useState(false);
  const { fire, node } = useConfetti();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onWhatsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    fire(r.left + r.width / 2, r.top + r.height / 2 - 30, 28);
  };

  return (
    <>
      {node}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <div className="flex items-center gap-2 rounded-full border border-border bg-background/95 p-1.5 shadow-2xl shadow-primary/20 backdrop-blur-md">
              <a
                href={`tel:+55${SITE.phoneShort.replace(/\D/g, "")}`}
                aria-label="Ligar para Buffet Wishes"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onWhatsClick}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-md"
              >
                <Calendar className="h-4 w-4" />
                Reservar nossa data
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
