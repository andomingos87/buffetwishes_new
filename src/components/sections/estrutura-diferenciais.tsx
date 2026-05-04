import { Reveal } from "@/components/sections/reveal";
import { DiferenciaisGrid } from "@/components/sections/diferenciais-grid";

/**
 * Wraps the existing DiferenciaisGrid with editorial framing
 * (eyebrow "Cap. 04 / Diferenciais" + Fraunces headline).
 */
export function EstruturaDiferenciais() {
  return (
    <section className="relative bg-mustard-50 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(232,184,75,0.18), transparent 35%), radial-gradient(circle at 90% 88%, rgba(217,122,122,0.12), transparent 40%)",
        }}
      />

      <div className="relative">
        <div className="mx-auto mb-14 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-primary/55">
              — Cap. 04 / Diferenciais —
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
              Pensado pros pais{" "}
              <span className="relative inline-block italic">
                <span className="relative z-10">relaxarem</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 z-0 h-3 -skew-y-1 bg-mustard-500/45"
                />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-foreground/70 sm:text-lg">
              Cada detalhe da estrutura existe para que você possa,
              literalmente, só aproveitar a festa.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <DiferenciaisGrid />
        </Reveal>
      </div>
    </section>
  );
}
