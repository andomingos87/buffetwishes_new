import { Marquee } from "@/components/decor/marquee";

const TICKER_ITEMS = [
  "1000m²",
  "26 ATRAÇÕES",
  "CLIMATIZADO",
  "LOUNGE PREMIUM",
  "★ ★ ★ ★ ★",
  "ELEVADOR",
  "GERADOR PRÓPRIO",
  "CAMARIM COM SUÍTE",
  "FRALDÁRIO",
  "VALET",
];

/**
 * Wine-tone marquee strip listing the venue's specs — same recipe as the
 * home Hero's bottom strip and /buffet's ticker.
 */
export function EstruturaTicker() {
  return (
    <div className="relative z-10 border-y border-primary/15 bg-primary py-4 text-cream">
      <Marquee speed="normal">
        {TICKER_ITEMS.map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-6 font-display text-base italic sm:text-lg"
          >
            <span>{item}</span>
            <span aria-hidden className="text-mustard-500">
              ✦
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
