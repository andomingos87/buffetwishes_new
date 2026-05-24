/**
 * 17 atrações do Buffet Wishes (página /estrutura).
 * Imagens em /img/estrutura/ — numeradas 01-17 (preservadas do site original).
 */

export type Atracao = {
  titulo: string;
  thumb: string;
  full: string;
};

const TITULOS = [
  "Área Lúdica com Brinquedão",
  "Escorregador com piscina de bolinhas",
  "Mini Pet Shop interativo",
  "Labamba",
  "Torre de 6 metros",
  "Tombo-legal",
  "Mini Roda",
  "Simulador de Corrida",
  "Simuladores duplos",
  "Kinect e Jogos Eletrônicos Diversos",
  "Guitar Hero e Simulador de Basquete",
  "Snooker Profissional",
  "Pista de Dança com DJ",
  "Quadras de Basquete e Futebol",
  "Casinha de bonecas",
  "Área Baby com Gira-gira e Carrossel",
  "Guarda-volumes",
];

export const ATRACOES: Atracao[] = TITULOS.map((titulo, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    titulo,
    thumb: `/img/estrutura/mini_buffet_wishes_${n}.jpg`,
    full: `/img/estrutura/foto_buffet_wishes_${n}.jpg`,
  };
});

export type Diferencial = {
  titulo: string;
  descricao: string;
  icon:
    | "baby"
    | "snowflake"
    | "wifi"
    | "accessibility"
    | "shield"
    | "car"
    | "sofa"
    | "zap";
};

/**
 * Diferenciais visíveis na home — cobertura completa da copy original
 * (lounge, fraldário, segurança, gerador, climatização, acessibilidade, valet, wifi).
 */
export const DIFERENCIAIS: Diferencial[] = [
  { titulo: "Fraldário", descricao: "Espaço dedicado e equipado para os bebês.", icon: "baby" },
  { titulo: "Ar-condicionado", descricao: "Climatização em todo o espaço.", icon: "snowflake" },
  { titulo: "WiFi", descricao: "Internet liberada para todos os convidados.", icon: "wifi" },
  { titulo: "Acessibilidade", descricao: "Elevador entre os pisos e WCs adaptados.", icon: "accessibility" },
  { titulo: "Segurança", descricao: "Sistema de segurança completo e monitorado.", icon: "shield" },
  { titulo: "Gerador", descricao: "Energia de backup — festa não para por queda de luz.", icon: "zap" },
  { titulo: "Valet", descricao: "Serviço de manobrista para sua tranquilidade.", icon: "car" },
  { titulo: "Lounge", descricao: "Ambiente premium para receber bem.", icon: "sofa" },
];

/**
 * Galeria do Buffet Wishes (página /buffet) — fotos em /img/obuffet/.
 */
export type FotoBuffet = { thumb: string; full: string };

export const FOTOS_BUFFET: FotoBuffet[] = Array.from({ length: 12 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    thumb: `/img/obuffet/mini_buffet_wishes_${n}.jpg`,
    full: `/img/obuffet/foto_buffet_wishes_${n}.jpg`,
  };
});
