/**
 * Site-wide constants. Single source of truth for contact info,
 * social links, and navigation. Update here, propagates everywhere.
 */

export const SITE = {
  name: "Buffet Wishes",
  tagline: "Quer descobrir até onde seus desejos podem te levar?",
  url: "https://buffetwishes.com.br",
  email: "contato@buffetwishes.com.br",
  emailComercial: "comercial@buffetwishes.com.br",
  phones: ["(11) 3294-0331", "(11) 3294-0332"],
  phoneShort: "11 3294 0331",
  whatsapp: "5511940242266",
  whatsappDisplay: "(11) 94024-2266",
  address: {
    street: "Rua Francisco Marengo, 367",
    neighborhood: "Tatuapé",
    city: "São Paulo",
    state: "SP",
    zip: "03313-000",
    mapUrl:
      "https://www.google.com/maps/place/Buffet+Wishes/@-23.540417,-46.559198,17z/data=!4m2!3m1!1s0x0:0x26cca31a4baa469e",
    geo: { lat: -23.540417, lng: -46.559198 },
  },
  socials: {
    instagram: "https://www.instagram.com/buffetwishes/",
    instagramHandle: "@buffetwishes",
    facebook: "https://facebook.com/BuffetWishes",
  },
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Buffet Wishes", href: "/buffet" },
  { label: "Estrutura", href: "/estrutura" },
  { label: "Aconteceu", href: "/aconteceu" },
  { label: "Orçamento", href: "/orcamento" },
  { label: "Contato", href: "/contato" },
] as const;

export const WHATSAPP_DEFAULT_MSG =
  "Olá! Tenho interesse em fazer um orçamento no Buffet Wishes.";

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MSG) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP || SITE.whatsapp;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
