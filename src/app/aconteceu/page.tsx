import type { Metadata } from "next";
import { createServerClient } from "@/lib/supabase/server";
import { AconteceuHero } from "@/components/sections/aconteceu-hero";
import { AconteceuStats } from "@/components/sections/aconteceu-stats";
import { AconteceuGallery } from "@/components/sections/aconteceu-gallery";
import { AconteceuPullquote } from "@/components/sections/aconteceu-pullquote";
import { AconteceuEmpty } from "@/components/sections/aconteceu-empty";
import { AconteceuCTA } from "@/components/sections/aconteceu-cta";

export const metadata: Metadata = {
  title: "Veja o que rolou por aqui",
  description:
    "Galeria das melhores festas realizadas no Buffet Wishes — Tatuapé/SP. Inspire-se com eventos reais.",
  alternates: { canonical: "/aconteceu" },
};

export const revalidate = 3600;

type Festa = {
  id: number;
  nome: string;
  foto_url: string;
  link: string | null;
};

async function getFestas(): Promise<Festa[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return [];
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from("festas")
      .select("id, nome, foto_url, link")
      .eq("publicado", true)
      .order("ordem", { ascending: true })
      .order("created_at", { ascending: false })
      .limit(60);
    if (error) {
      console.error("aconteceu fetch", error);
      return [];
    }
    return data ?? [];
  } catch (err) {
    console.error("aconteceu fetch", err);
    return [];
  }
}

export default async function AconteceuPage() {
  const festas = await getFestas();

  return (
    <>
      {/* HERO + wine ticker — magazine cover */}
      <AconteceuHero />

      {/* STATS — wine band breaking the cream rhythm */}
      <AconteceuStats />

      {festas.length === 0 ? (
        <AconteceuEmpty />
      ) : (
        <>
          {/* GALLERY — featured row + flowing 3-col grid */}
          <AconteceuGallery festas={festas} />

          {/* PULL-QUOTE — wine intercut between gallery and CTA */}
          <AconteceuPullquote />
        </>
      )}

      {/* FINAL CTA — wine bg with parallax photo */}
      <AconteceuCTA />
    </>
  );
}
