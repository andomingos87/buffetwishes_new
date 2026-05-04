"use client";

import { useEffect, useRef, useState } from "react";

type Spark = {
  id: number;
  x: number;
  y: number;
  life: number;
  size: number;
  color: string;
};

const COLORS = ["#e8b84b", "#d97a7a", "#76051b", "#8fbfa3"];

let nextId = 0;

/**
 * Subtle sparkle trail that follows the cursor on desktop only.
 * Only fires on pointer:fine devices and respects prefers-reduced-motion.
 * Throttled — easter egg, not constant noise.
 */
export function SparkleTrail() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const lastEmit = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - lastEmit.current < 80) return; // throttle
      lastEmit.current = now;
      if (Math.random() > 0.35) return;
      setSparks((prev) =>
        [
          ...prev,
          {
            id: nextId++,
            x: e.clientX + (Math.random() - 0.5) * 14,
            y: e.clientY + (Math.random() - 0.5) * 14,
            life: 1,
            size: 6 + Math.random() * 8,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
          },
        ].slice(-30),
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    if (sparks.length === 0) return;
    const id = setInterval(() => {
      setSparks((prev) =>
        prev
          .map((s) => ({ ...s, life: s.life - 0.06 }))
          .filter((s) => s.life > 0),
      );
    }, 32);
    return () => clearInterval(id);
  }, [sparks.length]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[58]" aria-hidden>
      {sparks.map((s) => (
        <svg
          key={s.id}
          viewBox="0 0 24 24"
          style={{
            position: "absolute",
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            transform: `translate(-50%, -50%) scale(${0.6 + s.life * 0.4}) rotate(${(1 - s.life) * 90}deg)`,
            opacity: s.life * 0.85,
            color: s.color,
          }}
          fill="currentColor"
        >
          <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
        </svg>
      ))}
    </div>
  );
}
