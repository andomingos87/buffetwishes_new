import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    "",
    "/buffet",
    "/estrutura",
    "/aconteceu",
    "/orcamento",
    "/contato",
    "/politica-de-privacidade",
  ];
  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: path === "/aconteceu" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
