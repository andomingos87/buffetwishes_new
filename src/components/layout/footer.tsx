import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/social";
import { NAV, SITE, whatsappLink } from "@/lib/site";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Star, Sparkle, Balloon } from "@/components/decor/party-shapes";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate mt-24 overflow-hidden">
      {/* === NEWSLETTER BAND — mustard, dramatic === */}
      <div className="relative overflow-hidden bg-mustard-500 text-wine-900">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(118,5,27,0.18), transparent 50%), radial-gradient(circle at 80% 30%, rgba(217,122,122,0.25), transparent 50%)",
          }}
        />
        <Star
          aria-hidden
          className="pointer-events-none absolute -left-6 top-6 h-24 w-24 rotate-12 text-wine-900/10"
        />
        <Sparkle
          aria-hidden
          className="pointer-events-none absolute right-12 bottom-6 h-16 w-16 text-wine-900/15"
        />
        <Balloon
          aria-hidden
          className="pointer-events-none absolute -right-2 -top-4 h-28 w-28 rotate-12 text-wine-900/15"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr,1fr] lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-wine-900/25 bg-wine-900/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-wine-900">
              <Sparkle className="h-3 w-3" />
              Newsletter
            </span>
            <h3 className="mt-4 text-balance font-display text-3xl font-extrabold leading-[1.05] sm:text-4xl lg:text-5xl">
              Receba primeiro as
              <br />
              <span className="italic">novidades da casa</span>
            </h3>
            <p className="mt-3 max-w-md text-pretty text-sm text-wine-900/75 sm:text-base">
              Datas especiais, dicas pra festa e bastidores das nossas
              comemorações — direto no seu e-mail.
            </p>
          </div>

          <div className="relative">
            <NewsletterForm origem="footer" />
            <p className="mt-3 text-[11px] text-wine-900/60">
              Sem spam. Cancele quando quiser.
            </p>
          </div>
        </div>
      </div>

      {/* === MAIN FOOTER — wine === */}
      <div className="relative overflow-hidden bg-primary text-cream">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 28%, rgba(232,184,75,0.15), transparent 45%), radial-gradient(circle at 82% 72%, rgba(217,122,122,0.2), transparent 45%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          {/* Brand row */}
          <div className="grid items-end gap-8 border-b border-cream/15 pb-12 lg:grid-cols-[auto,1fr,auto]">
            <Link href="/" aria-label="Buffet Wishes — início" className="block">
              <Image
                src="/img/logo.png"
                alt="Buffet Wishes"
                width={180}
                height={72}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="font-display text-2xl italic leading-snug text-cream/85 sm:text-3xl lg:max-w-md">
              Onde os desejos das crianças viram memórias da família.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-mustard-500 px-6 py-3 text-sm font-semibold text-wine-900 shadow-lg transition-all hover:scale-[1.04] hover:bg-mustard-300"
            >
              Reservar nossa data
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="grid gap-12 pt-12 lg:grid-cols-12">
            {/* Address & Map */}
            <div className="lg:col-span-5">
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-mustard-300">
                Onde estamos
              </h4>
              <a
                href={SITE.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-4 block overflow-hidden rounded-2xl ring-1 ring-cream/15 transition-all hover:ring-mustard-300/60"
              >
                <Image
                  src="/img/mapa-tatuape.jpg"
                  alt={`Mapa Buffet Wishes — ${SITE.address.street}, ${SITE.address.neighborhood}`}
                  width={500}
                  height={260}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-wine-900/60 via-wine-900/10 to-transparent"
                />
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-mustard-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-wine-900 shadow">
                  <MapPin className="h-3 w-3" />
                  Tatuapé · SP
                </div>
                <div className="absolute inset-x-4 bottom-3 flex items-center justify-between gap-2 text-cream">
                  <span className="font-display text-sm font-semibold">
                    Abrir no Maps
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>
              <address className="mt-5 not-italic">
                <div className="flex items-start gap-3 text-sm leading-relaxed text-cream/85">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mustard-300" />
                  <div>
                    <strong className="block font-display text-base text-cream">
                      {SITE.address.street}
                    </strong>
                    {SITE.address.neighborhood} — {SITE.address.state} · CEP{" "}
                    {SITE.address.zip}
                  </div>
                </div>
              </address>
            </div>

            {/* Nav + Contato */}
            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4">
              <div>
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-mustard-300">
                  Páginas
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {NAV.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group inline-flex items-center gap-1.5 text-sm text-cream/80 transition-colors hover:text-mustard-300"
                      >
                        <span className="h-1 w-1 rounded-full bg-mustard-300/0 transition-colors group-hover:bg-mustard-300" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link
                      href="/politica-de-privacidade"
                      className="text-xs text-cream/55 transition-colors hover:text-cream/80"
                    >
                      Política de privacidade
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-mustard-300">
                  Contato direto
                </h4>
                <ul className="mt-4 space-y-3 text-sm">
                  {SITE.phones.map((p) => (
                    <li key={p}>
                      <a
                        href={`tel:+55${p.replace(/\D/g, "")}`}
                        className="group inline-flex items-center gap-2 text-cream/85 transition-colors hover:text-mustard-300"
                      >
                        <Phone className="h-3.5 w-3.5 text-mustard-300/70 transition-colors group-hover:text-mustard-300" />
                        {p}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="group inline-flex items-center gap-2 text-cream/85 transition-colors hover:text-mustard-300"
                    >
                      <Mail className="h-3.5 w-3.5 text-mustard-300/70 transition-colors group-hover:text-mustard-300" />
                      {SITE.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-2 pt-1 text-cream/60">
                    <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mustard-300/70" />
                    <div className="text-xs leading-relaxed">
                      Atendimento por WhatsApp
                      <br />
                      todos os dias · 9h às 21h
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Socials */}
            <div className="lg:col-span-3">
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-mustard-300">
                Siga a gente
              </h4>
              <p className="mt-4 text-sm leading-relaxed text-cream/75">
                As últimas festas, bastidores e dicas pra animar a sua —{" "}
                <span className="font-display italic text-mustard-300">
                  {SITE.socials.instagramHandle}
                </span>
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href={SITE.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 bg-cream/5 text-cream transition-all hover:scale-110 hover:border-mustard-300 hover:bg-mustard-500 hover:text-wine-900"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={SITE.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 bg-cream/5 text-cream transition-all hover:scale-110 hover:border-mustard-300 hover:bg-mustard-500 hover:text-wine-900"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#25D366]/15 text-[#25D366] transition-all hover:scale-110 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                >
                  <svg viewBox="0 0 32 32" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.493-.502 2.84-1.262.207-.46.215-.888.07-1.39-.244-.443-1.85-.84-2.205-.84zM16 4C9.37 4 4 9.37 4 16c0 2.41.717 4.65 1.946 6.534L4 28l5.59-1.832C11.398 27.328 13.638 28 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4zm0 21.81c-2.27 0-4.39-.687-6.16-1.86l-3.46 1.13 1.124-3.323A9.75 9.75 0 0 1 6.19 16c0-5.42 4.39-9.81 9.81-9.81 5.42 0 9.81 4.39 9.81 9.81 0 5.42-4.39 9.81-9.81 9.81z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === BOTTOM RIBBON — wine darker, fine print === */}
      <div className="bg-wine-900 text-cream/65">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} <span className="font-display text-cream">Buffet Wishes</span>.
            Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2 text-center italic">
            <Star className="h-3 w-3 text-mustard-300" />
            Entrega o teu caminho ao Senhor; confia nele, e ele o fará. Salmos
            37:5
            <Star className="h-3 w-3 text-mustard-300" />
          </p>
        </div>
      </div>
    </footer>
  );
}
