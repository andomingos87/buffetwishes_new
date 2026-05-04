import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  ParkingSquare,
  Phone,
  Train,
} from "lucide-react";
import { Reveal } from "@/components/sections/reveal";
import { FloatingDecor } from "@/components/decor/floating-decor";
import { Balloon, Star } from "@/components/decor/party-shapes";
import { SITE, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fale conosco",
  description:
    "Entre em contato com o Buffet Wishes — Tatuapé/SP. Endereço, telefones e e-mail. Atendemos sua família com carinho.",
  alternates: { canonical: "/contato" },
};

const HORARIOS = [
  { dia: "Segunda a sexta", horario: "10h às 19h" },
  { dia: "Sábado e domingo", horario: "Conforme reservas" },
] as const;

const COMO_CHEGAR = [
  {
    icon: Train,
    title: "Pertinho da estação Tatuapé",
    description:
      "A 10 minutos a pé da Estação Tatuapé (Linha 3 — Vermelha do Metrô e CPTM Linha 11 — Coral). Fácil para todo mundo chegar.",
  },
  {
    icon: ParkingSquare,
    title: "Manobrista cortesia",
    description:
      "Estacionamento com manobrista gratuito para você e seus convidados — sem dor de cabeça no dia da festa.",
  },
  {
    icon: Navigation,
    title: "Acesso por todas as zonas",
    description:
      "Saídas rápidas para Marginal Tietê, Radial Leste e Av. Salim Farah Maluf. A região conecta toda a cidade.",
  },
] as const;

export default function ContatoPage() {
  const enderecoLinha1 = SITE.address.street;
  const enderecoLinha2 = `${SITE.address.neighborhood} — ${SITE.address.city}/${SITE.address.state}`;
  const enderecoLinha3 = `CEP ${SITE.address.zip}`;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-cream via-cream-soft to-background pb-20 pt-20 sm:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-mustard-500/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl"
        />
        <FloatingDecor preset="light" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-primary/70">
              <span className="inline-block h-px w-10 bg-primary/40" />
              <span>Edição Nº 26 · Contato</span>
              <span aria-hidden className="text-mustard-500">
                ★
              </span>
              <span className="inline-block h-px w-10 bg-primary/40" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,5.4rem)] font-extrabold leading-[0.96] tracking-[-0.02em] text-primary text-balance">
              Vamos{" "}
              <span className="relative inline-block italic">
                <span className="relative z-10">conversar</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-1 h-3 bg-mustard-500/50 sm:-bottom-2 sm:h-4"
                />
              </span>
              ?
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-7 max-w-2xl text-pretty font-display text-lg italic leading-relaxed text-foreground/75 sm:text-xl">
              Tire dúvidas, conte o que está planejando ou só mande um oi.
              Estamos no Tatuapé esperando para tornar a festa dos seus sonhos
              realidade.
            </p>
          </Reveal>

          {/* Floating balloon decor anchored to title */}
          <span
            aria-hidden
            className="pointer-events-none absolute right-[8%] top-[20%] hidden animate-float text-rose-500/60 sm:block"
            style={{ width: 56, height: 84 }}
          >
            <Balloon className="h-full w-full" />
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute left-[10%] top-[55%] hidden animate-float text-mint-500/70 sm:block"
            style={{ width: 24, height: 24, animationDelay: "1.2s" }}
          >
            <Star className="h-full w-full" />
          </span>
        </div>
      </section>

      {/* CONTACT CARDS CLUSTER */}
      <section className="relative -mt-10 pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {/* Endereço — mustard */}
            <Reveal delay={0.05}>
              <a
                href={SITE.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-mustard-100 p-7 ring-1 ring-mustard-300/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-12px_rgba(184,136,40,0.4)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mustard-500 text-wine-900 shadow-sm">
                  <MapPin className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <div className="mt-5">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-mustard-700">
                    — Endereço —
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-wine-900">
                    Onde a gente está
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-wine-900/80">
                    {enderecoLinha1}
                    <br />
                    {enderecoLinha2}
                    <br />
                    {enderecoLinha3}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-wine-900">
                  Ver no mapa
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>

            {/* Telefones — mint */}
            <Reveal delay={0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-mint-100 p-7 ring-1 ring-mint-300/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-12px_rgba(143,191,163,0.5)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-500 text-wine-900 shadow-sm">
                  <Phone className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <div className="mt-5">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-wine-900/60">
                    — Telefones —
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-wine-900">
                    Liga pra gente
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {SITE.phones.map((p) => (
                      <li key={p}>
                        <a
                          href={`tel:+55${p.replace(/\D/g, "")}`}
                          className="inline-flex items-center gap-2 text-sm font-medium text-wine-900/85 transition-colors hover:text-primary"
                        >
                          <span aria-hidden className="text-mustard-700">
                            ›
                          </span>
                          {p}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="mt-6 text-xs italic text-wine-900/60">
                  Atendimento humano, sem robôs.
                </span>
              </div>
            </Reveal>

            {/* E-mail — rose */}
            <Reveal delay={0.15}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-rose-100 p-7 ring-1 ring-rose-300/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-12px_rgba(217,122,122,0.45)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500 text-cream shadow-sm">
                  <Mail className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <div className="mt-5">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-wine-900/60">
                    — E-mail —
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-wine-900">
                    Manda um e-mail
                  </h3>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="block text-sm font-medium text-wine-900/85 transition-colors hover:text-primary"
                      >
                        <span className="block text-[10px] uppercase tracking-wider text-wine-900/55">
                          Geral
                        </span>
                        {SITE.email}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${SITE.emailComercial}`}
                        className="block text-sm font-medium text-wine-900/85 transition-colors hover:text-primary"
                      >
                        <span className="block text-[10px] uppercase tracking-wider text-wine-900/55">
                          Comercial
                        </span>
                        {SITE.emailComercial}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* WhatsApp — wine (destaque) */}
            <Reveal delay={0.2}>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-primary p-7 text-cream ring-1 ring-wine-900/40 shadow-[0_14px_40px_-16px_rgba(118,5,27,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-12px_rgba(118,5,27,0.7)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mustard-500/20 blur-2xl"
                />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-mustard-500 text-wine-900 shadow-sm">
                  <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <div className="relative mt-5">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-mustard-300">
                    — Resposta rápida —
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold leading-tight">
                    WhatsApp
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/85">
                    Bate-papo direto pelo {SITE.whatsappDisplay}. A gente
                    costuma responder em poucos minutos no horário comercial.
                  </p>
                </div>
                <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-mustard-300">
                  Iniciar conversa
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MAPA EM DESTAQUE */}
      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <div className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-primary/70">
                  — Capítulo 02 —
                </div>
                <h2 className="mt-2 font-display text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl">
                  Encontre a gente <span className="italic">no mapa</span>
                </h2>
              </div>
              <a
                href={SITE.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_-12px_rgba(118,5,27,0.5)] transition-all hover:scale-[1.03] hover:shadow-[0_18px_40px_-12px_rgba(118,5,27,0.65)]"
              >
                <Navigation className="h-4 w-4" />
                Abrir rotas no Google Maps
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              {/* Decorative pin marker */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-6 left-8 z-10 hidden items-center gap-2 rounded-full border-2 border-wine-900 bg-mustard-500 px-4 py-2 font-display text-sm font-bold text-wine-900 shadow-lg sm:inline-flex"
              >
                <MapPin className="h-4 w-4" strokeWidth={2.5} />
                Buffet Wishes · Tatuapé
              </div>

              {/* Polaroid-style frame */}
              <div className="relative overflow-hidden rounded-[28px] bg-white p-3 shadow-[0_30px_80px_-20px_rgba(76,2,16,0.35)] ring-1 ring-primary/15 sm:p-4">
                <div className="overflow-hidden rounded-[20px] ring-1 ring-wine-900/10">
                  <iframe
                    title="Mapa Buffet Wishes"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.84!2d-46.559198!3d-23.540417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x26cca31a4baa469e!2sBuffet%20Wishes!5e0!3m2!1spt-BR!2sbr!4v0"
                    width="100%"
                    height="640"
                    className="block h-[480px] w-full sm:h-[560px] lg:h-[660px]"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                {/* Caption strip */}
                <div className="flex flex-col items-start justify-between gap-2 px-2 pb-2 pt-4 sm:flex-row sm:items-center sm:px-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/60">
                      Vista 01 / Localização
                    </div>
                    <div className="mt-0.5 font-display text-base font-semibold text-primary sm:text-lg">
                      {enderecoLinha1} · {enderecoLinha2}
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="inline-flex items-center gap-1 text-xs italic text-foreground/60"
                  >
                    <Star className="h-3.5 w-3.5 text-mustard-500" />
                    Desde 2014 no mesmo coração do Tatuapé
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMO CHEGAR & HORÁRIOS */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-background to-cream-soft py-20 sm:py-28">
        <FloatingDecor preset="light" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr] lg:gap-16">
            {/* Como chegar */}
            <Reveal>
              <div>
                <div className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-primary/70">
                  — Capítulo 03 —
                </div>
                <h2 className="mt-2 font-display text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl">
                  Como <span className="italic">chegar</span>
                </h2>
                <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-foreground/75 sm:text-lg">
                  Estamos numa rua tranquila do Tatuapé, com acesso fácil de
                  metrô, carro ou aplicativo. A vinda já começa leve.
                </p>

                <ul className="mt-10 space-y-6">
                  {COMO_CHEGAR.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <Reveal key={item.title} delay={0.05 * (i + 1)}>
                        <li className="flex items-start gap-5 rounded-2xl border border-border bg-card/70 p-5 backdrop-blur-sm transition-shadow hover:shadow-md">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mustard-500/15 text-primary ring-1 ring-mustard-500/30">
                            <Icon className="h-6 w-6" strokeWidth={2} />
                          </span>
                          <div>
                            <h3 className="font-display text-lg font-bold text-primary sm:text-xl">
                              {item.title}
                            </h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-foreground/75 sm:text-base">
                              {item.description}
                            </p>
                          </div>
                        </li>
                      </Reveal>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            {/* Horários — sticky-ish editorial card */}
            <Reveal delay={0.2}>
              <div className="relative h-full">
                <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-cream shadow-[0_20px_60px_-20px_rgba(76,2,16,0.5)] sm:p-10">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-mustard-500/20 blur-3xl"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-rose-500/15 blur-3xl"
                  />

                  <div className="relative flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mustard-500 text-wine-900">
                      <Clock className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-mustard-300">
                      — Atendimento —
                    </div>
                  </div>

                  <h3 className="relative mt-6 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                    Quando <span className="italic">a gente atende</span>
                  </h3>

                  <ul className="relative mt-8 space-y-4">
                    {HORARIOS.map((h) => (
                      <li
                        key={h.dia}
                        className="flex items-center justify-between border-b border-cream/15 pb-3 last:border-0 last:pb-0"
                      >
                        <span className="font-display text-base font-semibold text-cream sm:text-lg">
                          {h.dia}
                        </span>
                        <span className="font-mono text-sm text-mustard-300 sm:text-base">
                          {h.horario}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="relative mt-8 text-sm italic leading-relaxed text-cream/75">
                    Visitas presenciais para conhecer o espaço só com hora
                    marcada — assim a gente recebe sua família com toda atenção
                    que ela merece.
                  </p>

                  <a
                    href={whatsappLink(
                      "Olá! Gostaria de agendar uma visita ao Buffet Wishes.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-mustard-500 px-6 py-3 font-semibold text-wine-900 shadow-lg transition-all hover:scale-[1.03]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Agendar visita
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-cream via-cream-soft to-mustard-50"
        />
        <FloatingDecor
          items={[
            {
              type: "balloon",
              className: "left-[6%] top-[14%] text-rose-500/55",
              rotate: -8,
              size: 52,
            },
            {
              type: "balloon",
              className: "right-[8%] top-[10%] text-mustard-500/65",
              rotate: 6,
              delay: 1.3,
              size: 56,
            },
            {
              type: "star",
              className: "left-[18%] bottom-[18%] text-mint-500/70",
              rotate: 12,
              delay: 0.6,
              size: 22,
            },
            {
              type: "sparkle",
              className: "right-[22%] top-[55%] text-primary/35",
              delay: 1.8,
              size: 18,
            },
            {
              type: "confetti",
              className: "left-[40%] top-[12%] text-rose-500/70",
              rotate: 30,
              delay: 0.9,
              size: 14,
            },
          ]}
        />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-primary/70">
              — Prefere conversar agora? —
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.05] text-primary sm:text-6xl">
              A festa dos sonhos começa com{" "}
              <span className="italic">um oi</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/75 sm:text-lg">
              Mande mensagem no WhatsApp para falar agora com nosso time, ou
              preencha o formulário de orçamento sem compromisso.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 font-display text-base font-bold text-primary-foreground shadow-[0_14px_40px_-12px_rgba(118,5,27,0.55)] transition-all hover:scale-[1.04]"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-700 group-hover:translate-x-full" />
                <MessageCircle className="relative h-5 w-5" />
                <span className="relative">Falar no WhatsApp</span>
                <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/orcamento"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-cream/50 px-7 py-4 text-base font-medium text-primary backdrop-blur-sm transition-all hover:bg-cream"
              >
                Pedir orçamento
                <span aria-hidden className="text-mustard-700">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
