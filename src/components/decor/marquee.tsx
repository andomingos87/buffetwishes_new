"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
};

const SPEED_MAP = {
  slow: "90s",
  normal: "60s",
  fast: "35s",
} as const;

export function Marquee({
  children,
  speed = "normal",
  reverse = false,
  pauseOnHover = true,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        className,
      )}
      role="presentation"
    >
      <div
        className={cn(
          "flex w-max shrink-0 items-stretch gap-6 pr-6 animate-drift",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        style={{ animationDuration: SPEED_MAP[speed] }}
      >
        <div className="flex shrink-0 items-stretch gap-6 pr-6">{children}</div>
        <div className="flex shrink-0 items-stretch gap-6 pr-6" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
