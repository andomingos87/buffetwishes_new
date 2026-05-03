import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/sections/reveal";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Política de privacidade do Buffet Wishes — como coletamos, usamos e protegemos seus dados pessoais.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream to-background pt-20 pb-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
              Política de privacidade
            </h1>
            <p className="mt-3 text-sm text-foreground/70">
              Como coletamos, usamos e protegemos suas informações.
            </p>
          </Reveal>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-16 prose-content sm:px-6 lg:px-8">
        <Reveal>
          <div className="space-y-5 text-foreground/85 [&>h2]:mt-10 [&>h2]:font-display [&>h2]:text-2xl [&>h2]:text-primary [&>p]:leading-relaxed">
            <p>
              Todas as suas informações pessoais recolhidas serão usadas para
              ajudar a tornar a sua visita no nosso site o mais produtiva e
              agradável possível.
            </p>
            <p>
              A garantia da confidencialidade dos dados pessoais dos
              utilizadores do nosso site é importante para o Buffet Wishes.
            </p>
            <p>
              Todas as informações pessoais relativas a membros, assinantes,
              clientes ou visitantes que usem o Buffet Wishes serão tratadas em
              concordância com a Lei Geral de Proteção de Dados (LGPD — Lei nº
              13.709/2018).
            </p>
            <p>
              A informação pessoal recolhida pode incluir o seu nome, e-mail,
              número de telefone e/ou celular, endereço, data de nascimento e/ou
              outros dados.
            </p>
            <p>
              O uso do Buffet Wishes pressupõe a aceitação deste acordo de
              privacidade. A equipe do Buffet Wishes reserva-se ao direito de
              alterar este acordo sem aviso prévio. Recomendamos que consulte
              esta política com regularidade.
            </p>

            <h2>Os anúncios</h2>
            <p>
              Como outros sites, coletamos e utilizamos informação contida em
              anúncios. Essa informação inclui seu endereço IP, seu provedor
              (ISP), o navegador utilizado ao visitar o site, o tempo da sua
              visita e quais páginas você acessou.
            </p>

            <h2>Cookies e tecnologias semelhantes</h2>
            <p>
              Utilizamos cookies para armazenar informação, como suas
              preferências quando visita o nosso site. Você detém o poder de
              desligar os cookies nas opções do seu navegador. No entanto, isso
              poderá alterar a forma como interage com o nosso site.
            </p>
            <p>
              Você pode aceitar ou rejeitar cookies não-essenciais através do
              banner exibido na sua primeira visita.
            </p>

            <h2>Ligações a sites de terceiros</h2>
            <p>
              O Buffet Wishes possui ligações para outros sites que, a nosso ver,
              podem conter informações úteis para os visitantes. A nossa
              política de privacidade não se aplica a sites de terceiros — caso
              visite outro site a partir do nosso, leia a política de
              privacidade do mesmo. Não nos responsabilizamos pela política de
              privacidade ou conteúdo presente nesses sites.
            </p>

            <h2>Seus direitos</h2>
            <p>
              Conforme a LGPD, você tem direito de acesso, correção, exclusão e
              portabilidade dos seus dados pessoais. Para exercer esses
              direitos, entre em contato com{" "}
              <Link
                href="/contato"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                nossa equipe
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </article>
    </>
  );
}
