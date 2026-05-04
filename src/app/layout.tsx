import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFAB } from "@/components/layout/whatsapp-fab";
import { MobileCTABar } from "@/components/layout/mobile-cta-bar";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { ConsentAnalytics } from "@/components/layout/analytics";
import { ScrollProgress } from "@/components/decor/scroll-progress";
import { SparkleTrail } from "@/components/decor/sparkle-trail";
import { HiddenBalloon } from "@/components/decor/hidden-balloon";
import { SITE } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Buffet infantil | Tatuapé - SP | Buffet Wishes",
    template: "%s | Buffet Wishes",
  },
  description:
    "Buffet infantil no bairro do Tatuapé em São Paulo, o Buffet Wishes conta com uma estrutura única e profissionais qualificados para realizar a festa dos seus sonhos.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Buffet Wishes",
    images: ["/img/banner-wishes.jpg"],
  },
  robots: { index: true, follow: true },
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phones[0],
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.address.geo.lat,
    longitude: SITE.address.geo.lng,
  },
  sameAs: [SITE.socials.instagram, SITE.socials.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Pular para o conteúdo
        </a>
        <ScrollProgress />
        <SparkleTrail />
        <HiddenBalloon />
        <Header />
        <main id="conteudo" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
        <MobileCTABar />
        <CookieBanner />
        <ConsentAnalytics />
        <Toaster richColors closeButton position="top-center" />
        <Script
          id="ld-local-business"
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
      </body>
    </html>
  );
}
