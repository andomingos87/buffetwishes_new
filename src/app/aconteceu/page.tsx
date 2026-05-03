import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { createServerClient } from "@/lib/supabase/server";
import { Reveal } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

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
      <section className="bg-gradient-to-b from-cream to-background pt-20 pb-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">
              As melhores festas estão aqui
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
              Você já viu como uma festa pode ser inesquecível? Nossa equipe
              especializada cuida de cada detalhe para que sua celebração
              aconteça exatamente como você sempre sonhou. Veja algumas dessas
              festas inesquecíveis:
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <SectionHeading>Galeria de festas</SectionHeading>
        </Reveal>

        {festas.length === 0 ? (
          <Reveal>
            <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-border bg-card p-10 text-center text-foreground/70">
              <p className="font-display text-2xl text-primary">Em breve</p>
              <p className="mt-2 text-sm">
                Nossa galeria está sendo atualizada com as últimas festas. Volte
                em breve para conferir.
              </p>
            </div>
          </Reveal>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {festas.map((f) => (
              <li key={f.id}>
                <a
                  href={f.link ?? "#"}
                  target={f.link ? "_blank" : undefined}
                  rel={f.link ? "noopener noreferrer" : undefined}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-muted ring-1 ring-border shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 hover:ring-primary/30"
                >
                  <Image
                    src={f.foto_url}
                    alt={f.nome}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-primary-foreground">
                    <h3 className="font-display text-2xl font-bold leading-tight">
                      {f.nome}
                    </h3>
                    {f.link && (
                      <ExternalLink
                        className="h-5 w-5 shrink-0 opacity-80 transition-opacity group-hover:opacity-100"
                        aria-hidden
                      />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
