/**
 * Depoimentos exibidos no carrossel da home.
 * TODO: substituir pelas avaliações reais (Google, Instagram).
 */

export type Depoimento = {
  nome: string;
  papel: string;
  texto: string;
  foto?: string;
  rating: number;
};

export const DEPOIMENTOS: Depoimento[] = [
  {
    nome: "Família Almeida",
    papel: "Festa da Sophia, 5 anos",
    texto:
      "Foi mágico do começo ao fim. As crianças não pararam de correr de uma atração para outra, e a equipe cuidou de cada detalhe. Voltaríamos com certeza.",
    foto: "/img/sophia-valverde.jpg",
    rating: 5,
  },
  {
    nome: "Carolina M.",
    papel: "Festa da Antonella, 7 anos",
    texto:
      "Estrutura impecável, fraldário e camarim fizeram toda diferença. Os pais relaxaram no lounge enquanto a criançada se divertia. Recomendo de olhos fechados.",
    foto: "/img/antonella.jpg",
    rating: 5,
  },
  {
    nome: "Família Pereira",
    papel: "Festa do Davi, 4 anos",
    texto:
      "Mais de 30 atrações não é exagero. O simulador de corrida e a torre foram sucesso entre os mais velhos, e a área baby surpreendeu. Atendimento de outro nível.",
    foto: "/img/giovanna-grigio.jpg",
    rating: 5,
  },
  {
    nome: "Renata S.",
    papel: "Festa da Helena, 6 anos",
    texto:
      "O que mais gostei foi a tranquilidade. Sistema de segurança, valet, ar-condicionado em tudo. Festa boa começa pelo conforto dos pais.",
    rating: 5,
  },
];
