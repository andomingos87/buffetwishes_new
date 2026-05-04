import { cn } from "@/lib/utils";

type ShapeProps = { className?: string };

export function Balloon({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 60 90" className={cn(className)} aria-hidden>
      <ellipse cx="30" cy="32" rx="22" ry="28" fill="currentColor" />
      <path
        d="M30 60 L26 66 L34 66 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M30 66 Q34 75 28 82 Q26 85 30 88"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      <ellipse cx="22" cy="22" rx="5" ry="8" fill="white" opacity="0.35" />
    </svg>
  );
}

export function Star({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} fill="currentColor" aria-hidden>
      <path d="M12 1.5l2.6 6.7 7.2.5-5.5 4.7 1.8 7-6.1-4-6.1 4 1.8-7-5.5-4.7 7.2-.5z" />
    </svg>
  );
}

export function Confetti({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} fill="currentColor" aria-hidden>
      <rect x="9" y="2" width="6" height="2" rx="1" transform="rotate(20 12 3)" />
    </svg>
  );
}

export function Sparkle({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} fill="currentColor" aria-hidden>
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
  );
}

export function Cake({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn(className)} fill="none" aria-hidden>
      <path d="M8 40 Q8 36 12 36 H52 Q56 36 56 40 V52 Q56 56 52 56 H12 Q8 56 8 52 Z" fill="currentColor" />
      <rect x="14" y="28" width="36" height="10" rx="2" fill="currentColor" opacity="0.7" />
      <rect x="30" y="14" width="4" height="14" rx="1" fill="currentColor" />
      <path d="M32 8 Q34 11 32 14 Q30 11 32 8 Z" fill="currentColor" />
    </svg>
  );
}

export function Gift({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn(className)} fill="currentColor" aria-hidden>
      <rect x="8" y="24" width="48" height="36" rx="3" />
      <rect x="6" y="18" width="52" height="10" rx="2" opacity="0.9" />
      <rect x="28" y="18" width="8" height="42" fill="white" opacity="0.9" />
      <path d="M32 18 Q24 10 18 14 Q14 18 18 22 Q24 24 32 18 Z" opacity="0.9" />
      <path d="M32 18 Q40 10 46 14 Q50 18 46 22 Q40 24 32 18 Z" opacity="0.9" />
    </svg>
  );
}
