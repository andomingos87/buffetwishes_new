"use client";

import { useReducedMotion } from "framer-motion";
import { Balloon, Star, Sparkle, Confetti } from "./party-shapes";
import { cn } from "@/lib/utils";

type Item = {
  type: "balloon" | "star" | "sparkle" | "confetti";
  className: string;
  rotate?: number;
  delay?: number;
  size?: number;
};

const PRESETS: Record<string, Item[]> = {
  hero: [
    { type: "balloon", className: "left-[6%] top-[12%] text-mustard-500/80", rotate: -8, delay: 0, size: 48 },
    { type: "balloon", className: "right-[4%] top-[8%] text-mint-500/70", rotate: 6, delay: 1.2, size: 56 },
    { type: "star", className: "left-[12%] bottom-[18%] text-mustard-500/70", rotate: 12, delay: 0.6, size: 22 },
    { type: "sparkle", className: "right-[14%] top-[44%] text-rose-500/70", rotate: 0, delay: 1.8, size: 18 },
    { type: "sparkle", className: "left-[44%] top-[6%] text-primary/30", rotate: 0, delay: 2.4, size: 16 },
  ],
  light: [
    { type: "star", className: "left-[8%] top-[10%] text-mustard-500/40", rotate: 8, delay: 0, size: 18 },
    { type: "sparkle", className: "right-[10%] top-[60%] text-mint-500/50", rotate: 0, delay: 1, size: 14 },
    { type: "confetti", className: "left-[20%] bottom-[12%] text-rose-500/60", rotate: 30, delay: 0.5, size: 12 },
  ],
  dense: [
    { type: "balloon", className: "left-[3%] top-[15%] text-rose-500/50", rotate: -10, delay: 0, size: 40 },
    { type: "balloon", className: "right-[6%] top-[5%] text-mustard-500/60", rotate: 8, delay: 1.4, size: 44 },
    { type: "star", className: "left-[18%] bottom-[10%] text-mint-500/60", rotate: 14, delay: 0.6, size: 20 },
    { type: "star", className: "right-[14%] bottom-[28%] text-mustard-500/50", rotate: -6, delay: 2, size: 16 },
    { type: "sparkle", className: "left-[48%] top-[8%] text-primary/30", rotate: 0, delay: 1.2, size: 18 },
    { type: "confetti", className: "right-[28%] top-[32%] text-rose-500/60", rotate: 30, delay: 0.8, size: 12 },
    { type: "confetti", className: "left-[32%] bottom-[20%] text-mint-500/70", rotate: -15, delay: 1.8, size: 12 },
  ],
};

const COMPONENT_MAP = {
  balloon: Balloon,
  star: Star,
  sparkle: Sparkle,
  confetti: Confetti,
} as const;

type Props = {
  preset?: keyof typeof PRESETS;
  items?: Item[];
  className?: string;
};

export function FloatingDecor({ preset = "light", items, className }: Props) {
  const reduce = useReducedMotion();
  const list = items ?? PRESETS[preset];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {list.map((item, i) => {
        const Shape = COMPONENT_MAP[item.type];
        const size = item.size ?? 24;
        return (
          <span
            key={i}
            className={cn("absolute block", item.className, !reduce && "animate-float")}
            style={{
              ["--rot" as string]: `${item.rotate ?? 0}deg`,
              animationDelay: `${item.delay ?? 0}s`,
              width: size,
              height: size,
            }}
          >
            <Shape className="h-full w-full" />
          </span>
        );
      })}
    </div>
  );
}
