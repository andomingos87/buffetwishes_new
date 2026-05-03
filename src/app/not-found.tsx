import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <p className="font-display text-7xl font-extrabold text-primary sm:text-9xl">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
        Esse desejo a gente não encontrou.
      </h1>
      <p className="mt-4 text-foreground/70">
        A página que você procura não existe ou foi movida. Que tal voltar para
        o início?
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
      >
        Voltar para a Home
      </Link>
    </section>
  );
}
