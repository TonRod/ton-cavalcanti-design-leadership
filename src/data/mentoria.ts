/**
 * Conteúdo editável da página de mentoria (/mentoria) — "Pinguins que voam".
 * Toda a copy vive aqui; os componentes só consomem estes dados.
 *
 * Origem: migração das três páginas do Carrd (principal, sobre e preços),
 * reescritas no tom editorial do portfólio.
 */

export const mentoria = {
  brand: "Pinguins que voam",
  kicker: "Mentoria",
  title: "Mentoria para quem está construindo carreira em Product Design.",
  intro:
    "Sou Ton, Product Designer com 16 anos em produto. Nesta mentoria compartilho o que aprendi na prática — sem fórmulas prontas nem promessas milagrosas — para você construir um portfólio mais forte, ganhar confiança e acelerar sua evolução.",
  proof: "Meus mentorados tiveram 100% de satisfação em seus resultados.",
};

/** Links externos — agendamento, diagnóstico e canais diretos. */
export const mentoriaLinks = {
  /** Conversa inicial, sem custo. */
  agendarConversa: "https://calendar.app.google/FE3rKEw29agJ79tn7",
  /** Agendamento a partir da escolha de um plano. */
  agendarPlano: "https://calendar.app.google/kW726cWW8BEShUHh6",
  diagnostico: "https://tally.so/r/EkgvBr",
  whatsapp: "https://wa.me/message/FXEZOVCU562EI1",
  instagram: "https://www.instagram.com/pinguinsquevoam/",
  instagramLabel: "@pinguinsquevoam",
};

/** Os três eixos de trabalho da mentoria. */
export interface MentoriaEixo {
  label: string;
  title: string;
  description: string;
}

export const mentoriaEixos: MentoriaEixo[] = [
  {
    label: "Mercado",
    title: "Entrar no mercado",
    description: "Aprender a construir um portfólio que demonstre raciocínio, e não apenas telas.",
  },
  {
    label: "Confiança",
    title: "Ganhar confiança",
    description: "Apresentar ideias, receber feedback e defender suas decisões sem travar.",
  },
  {
    label: "Senioridade",
    title: "Atuar como profissional pleno",
    description:
      "Entender como lidar com stakeholders, prioridades, conflitos e impacto no negócio.",
  },
];

/** Critérios de autoidentificação — "essa mentoria é para você que...". */
export const mentoriaParaQuem: string[] = [
  "Está tentando conseguir sua primeira vaga em Product Design.",
  "Tem um portfólio, mas não recebe convites para entrevistas.",
  "Entrou em uma empresa e sente insegurança nas reuniões.",
  "Tem dificuldade para defender suas decisões.",
  "Quer acelerar sua evolução para um nível maior.",
];

/**
 * Planos. `price` aceita string livre — deixe `null` para exibir
 * "Valor sob consulta" enquanto o valor não estiver definido.
 * `priceNote` mostra o preço por encontro, que é o que torna a
 * economia dos planos maiores legível na comparação.
 */
export interface MentoriaPlano {
  name: string;
  summary: string;
  /** Formato: quantos encontros e de quanto tempo. */
  format: string;
  price: string | null;
  priceNote?: string;
  cta: string;
}

export const mentoriaPlanos: MentoriaPlano[] = [
  {
    name: "Sessão avulsa",
    summary: "Para necessidades específicas.",
    format: "1 encontro de 60 min",
    price: "R$ 260",
    cta: "Agendar",
  },
  {
    name: "Plano de crescimento",
    summary: "Para evolução estruturada.",
    format: "4 encontros de 60 min",
    price: "R$ 890",
    priceNote: "R$ 222,50 por encontro",
    cta: "Agendar",
  },
  {
    name: "Plano transição",
    summary: "Para mudança de carreira.",
    format: "8 encontros",
    price: "R$ 1.590",
    priceNote: "R$ 198,75 por encontro",
    cta: "Agendar",
  },
];

/** Depoimentos de mentorados. */
export interface MentoriaDepoimento {
  quote: string;
  author: string;
}

export const mentoriaDepoimentos: MentoriaDepoimento[] = [
  {
    quote:
      "É difícil sair da faculdade sem saber como o mercado funciona realmente. Sinto que ganhei tempo.",
    author: "Adriano Schmidt F. Goro",
  },
  {
    quote: "Meu portfólio agora dá orgulho de mostrar.",
    author: "Julia A. Tripoli",
  },
  {
    quote: "Gostei. Ele me explicou coisas que eu nunca tinha pensado.",
    author: "Ivanir E. Toroco",
  },
  {
    quote: "Sair de uma profissão com mais de 30 anos e migrar para UX não é fácil sem orientação.",
    author: "Saulo Messias A.",
  },
  {
    quote: "O Ton me passou a real do que acontece.",
    author: "Ricardo C. Seixas Trale",
  },
  {
    quote: "Me deixou tranquila para a entrevista. Muito satisfeita.",
    author: "Maria Clara S. Tolledo",
  },
];

/** Texto da seção "Sobre" — adaptado da página homônima do Carrd. */
export const mentoriaSobre = {
  title: "Não cheguei ao Design por um caminho tradicional.",
  paragraphs: [
    "Ao longo de 16 anos participei da criação de produtos, serviços e experiências digitais para empresas de portes e segmentos diferentes — Bradesco, Globo, Natura e Porto, entre outras. Trabalhei em experiência do cliente, omnicanalidade, jornadas digitais, plataformas internas, MVPs e produtos que impactam milhares de pessoas todos os dias.",
    "Nesse período aprendi algo que raramente é ensinado em cursos: grande parte do crescimento profissional acontece nos bastidores. Nas conversas difíceis, nos erros, nos projetos complexos, na colaboração com times multidisciplinares e na capacidade de transformar incerteza em decisão.",
    "Foi por isso que criei esta mentoria. Meu objetivo não é ensinar fórmulas prontas nem prometer resultados rápidos, e sim compartilhar a experiência que acumulei para ajudar outros designers a encurtar caminhos, evitar armadilhas comuns e desenvolver uma visão mais estratégica sobre a profissão.",
    "Se você está começando, mudando de área ou tentando dar o próximo passo, talvez eu possa ajudar. Afinal, ninguém precisa aprender tudo sozinho.",
  ],
};
