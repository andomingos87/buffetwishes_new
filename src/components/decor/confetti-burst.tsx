"use client";

import { useEffect, useRef, useState } from "react";

const COLORS = [
  "#76051b", // wine
  "#e8b84b", // mustard
  "#8fbfa3", // mint
  "#d97a7a", // rose
  "#9cc1e3", // sky
  "#f0cf72", // mustard light
];

type Piece = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vrot: number;
  color: string;
  size: number;
  shape: "rect" | "circle" | "triangle";
  life: number;
};

let nextId = 0;

/**
 * Trigger confetti burst at a screen position.
 * Returns a function fire(x, y, count?) you can wire to events.
 */
export function useConfetti() {
  const [bursts, setBursts] = useState<Piece[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastTs = useRef<number>(0);

  useEffect(() => {
    if (bursts.length === 0) return;
    const tick = (ts: number) => {
      const dt = lastTs.current ? Math.min(48, ts - lastTs.current) : 16;
      lastTs.current = ts;
      setBursts((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx * (dt / 16),
            y: p.y + p.vy * (dt / 16),
            vy: p.vy + 0.35 * (dt / 16),
            vx: p.vx * 0.99,
            rot: p.rot + p.vrot * (dt / 16),
            life: p.life - dt,
          }))
          .filter((p) => p.life > 0 && p.y < window.innerHeight + 80),
      );
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTs.current = 0;
    };
  }, [bursts.length]);

  const fire = (x: number, y: number, count = 32) => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const pieces: Piece[] = [];
    for (let i = 0; i < count; i++) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI;
      const speed = 5 + Math.random() * 8;
      pieces.push({
        id: nextId++,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        rot: Math.random() * 360,
        vrot: (Math.random() - 0.5) * 18,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 6 + Math.random() * 8,
        shape: (["rect", "circle", "triangle"] as const)[Math.floor(Math.random() * 3)],
        life: 1500 + Math.random() * 800,
      });
    }
    setBursts((prev) => [...prev, ...pieces]);
  };

  const node = (
    <div
      className="pointer-events-none fixed inset-0 z-[60]"
      aria-hidden
    >
      {bursts.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.shape === "triangle" ? p.size : p.size * (p.shape === "rect" ? 0.5 : 1),
            background: p.shape !== "triangle" ? p.color : undefined,
            borderRadius: p.shape === "circle" ? "50%" : p.shape === "rect" ? "1px" : 0,
            transform: `translate(-50%, -50%) rotate(${p.rot}deg)`,
            opacity: Math.max(0, Math.min(1, p.life / 1200)),
            clipPath:
              p.shape === "triangle"
                ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                : undefined,
            backgroundColor: p.shape === "triangle" ? p.color : undefined,
          }}
        />
      ))}
    </div>
  );

  return { fire, node };
}
