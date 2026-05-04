"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Balloon } from "./party-shapes";
import { useConfetti } from "./confetti-burst";

/**
 * Easter egg: a balloon that floats up the side of the page.
 * Click it and confetti bursts. Disappears after.
 */
export function HiddenBalloon() {
  const reduce = useReducedMotion();
  const [popped, setPopped] = useState(false);
  const { fire, node } = useConfetti();

  if (reduce) return null;

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    fire(r.left + r.width / 2, r.top + r.height / 2, 60);
    setPopped(true);
  };

  return (
    <>
      {node}
      <AnimatePresence>
        {!popped && (
          <motion.button
            type="button"
            onClick={onClick}
            aria-label="Surpresa! Clique para soltar confete"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-110vh", opacity: 1, x: [0, 14, -10, 6, 0] }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              y: { duration: 28, ease: "linear", delay: 12 },
              opacity: { duration: 1, delay: 12 },
              x: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 12 },
            }}
            className="fixed left-[5%] bottom-0 z-30 cursor-pointer text-rose-500/85 transition-transform hover:scale-110"
            style={{ width: 38, height: 56 }}
          >
            <Balloon className="h-full w-full drop-shadow-md" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
