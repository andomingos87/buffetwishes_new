import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fale conosco",
  description:
    "Entre em contato com o Buffet Wishes — Tatuapé/SP. Endereço, telefones e e-mail. Atendemos sua família com carinho.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream to-background pt-20 pb-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-primary sm:text-7xl">
              Fale conosco
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
              Sua opinião é muito importante para nós. Tire suas dúvidas, conte
              o que está planejando ou simplesmente envie um oi. Nossa equipe
              está pronta para tornar sua festa inesquecível.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <SectionHeading>Contato</SectionHeading>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr]">
          <Reveal delay={0.05}>
            <div className="overflow-hidden rounded-2xl ring-1 ring-border shadow-lg">
              <iframe
                title="Mapa Buffet Wishes"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.84!2d-46.559198!3d-23.540417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x26cca31a4baa469e!2sBuffet%20Wishes!5e0!3m2!1spt-BR!2sbr!4v0"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div>
                <h3 className="font-display text-2xl text-primary">Endereço</h3>
                <p className="mt-2 text-foreground/80">
                  {SITE.address.street}
                  <br />
                  {SITE.address.neighborhood} — {SITE.address.state}
                  <br />
                  CEP {SITE.address.zip}
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-display text-2xl text-primary">Telefones</h3>
                <ul className="mt-2 space-y-1.5">
                  {SITE.phones.map((p) => (
                    <li key={p}>
                      <a
                        href={`tel:+55${p.replace(/\D/g, "")}`}
                        className="inline-flex items-center gap-2 text-foreground/85 hover:text-primary"
                      >
                        <Phone className="h-4 w-4" />
                        {p}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-display text-2xl text-primary">E-mail</h3>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-foreground/85 hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  {SITE.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
