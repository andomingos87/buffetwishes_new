import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/social";
import { NAV, SITE } from "@/lib/site";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Address + Map */}
        <div>
          <h3 className="font-display text-lg text-primary">Onde estamos</h3>
          <a
            href={SITE.address.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block overflow-hidden rounded-lg ring-1 ring-border transition-transform hover:scale-[1.02]"
          >
            <Image
              src="/img/mapa-tatuape.jpg"
              alt={`Mapa Buffet Wishes — ${SITE.address.street}, ${SITE.address.neighborhood}`}
              width={400}
              height={220}
              className="h-auto w-full object-cover"
            />
          </a>
          <p className="mt-4 flex items-start gap-2 text-sm text-foreground/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>
              <strong className="font-display text-base text-foreground">
                {SITE.address.street}
              </strong>
              <br />
              {SITE.address.neighborhood} - {SITE.address.state}
              <br />
              CEP {SITE.address.zip}
            </span>
          </p>
        </div>

        {/* Nav */}
        <div>
          <h3 className="font-display text-lg text-primary">Navegação</h3>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/politica-de-privacidade"
                className="text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                Política de privacidade
              </Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-display text-lg text-primary">Contato</h3>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-primary"
              >
                {SITE.email}
              </a>
            </li>
            {SITE.phones.map((p) => (
              <li key={p}>
                <a
                  href={`tel:+55${p.replace(/\D/g, "")}`}
                  className="hover:text-primary"
                >
                  {p}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-2">
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-background p-2 text-primary transition-transform hover:scale-110"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={SITE.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-background p-2 text-primary transition-transform hover:scale-110"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <Image
            src="/img/logo.png"
            alt="Buffet Wishes"
            width={140}
            height={56}
            className="h-10 w-auto"
          />
          <p className="mt-4 font-display text-base leading-snug text-primary">
            Cadastre-se e esteja por dentro
            <br />
            das novidades do Buffet Wishes
          </p>
          <div className="mt-4">
            <NewsletterForm origem="footer" />
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-background/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} Buffet Wishes. Todos os direitos reservados.</p>
          <p className="italic">
            Entrega o teu caminho ao Senhor; confia nele, e ele o fará. Salmos 37:5
          </p>
        </div>
      </div>
    </footer>
  );
}
