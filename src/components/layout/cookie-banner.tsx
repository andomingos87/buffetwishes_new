"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const STORAGE_KEY = "bw-cookie-consent";

type Consent = "all" | "essential";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      const t = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function decide(value: Consent) {
    localStorage.setItem(STORAGE_KEY, value);
    setOpen(false);
    if (value === "all") {
      window.dispatchEvent(new CustomEvent("bw-consent", { detail: "all" }));
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-md"
          role="dialog"
          aria-labelledby="cookie-title"
        >
          <div className="rounded-xl border border-border bg-background p-5 shadow-[0_12px_40px_rgba(76,2,16,0.15)]">
            <h2
              id="cookie-title"
              className="font-display text-lg text-primary"
            >
              Sua privacidade
            </h2>
            <p className="mt-2 text-sm text-foreground/80">
              Usamos cookies para melhorar sua experiência e entender como o site é
              usado. Você pode aceitar todos ou apenas os essenciais.{" "}
              <Link
                href="/politica-de-privacidade"
                className="underline underline-offset-2 hover:text-primary"
              >
                Saiba mais
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Button
                onClick={() => decide("essential")}
                variant="outline"
                className="flex-1"
              >
                Apenas essenciais
              </Button>
              <Button onClick={() => decide("all")} className="flex-1">
                Aceitar todos
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
