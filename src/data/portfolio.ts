import naturaCover from "@/assets/case-natura.png.asset.json";
import globoCover from "@/assets/case-globo.png.asset.json";
import bradescoCover from "@/assets/case-bradesco.png.asset.json";
import liveloCover from "@/assets/case-livelo.jpg";

export type CaseStudy = {
  cover: string;
  id: string;
  index: string;
  title: string;
  org: string;
  year: string;
  role: string;
  highlight: { label: string; value: string };
  duotone: string;
  contexto: string;
  problema: string;
  escopo: string;
  estrategia: string;
  alinhamento: string;
  solucao?: string;
  resultados: string;
  aprendizado?: string;
  metricas: { label: string; value: string }[];
};

export const cases: CaseStudy[] = [
  {
    id: "natura",
    cover: naturaCover.url,
    index: "01",
    title: "Experiência Omnichannel",
    org: "Natura &Co",
    year: "2024",
    role: "Líder de design da frente Omnichannel · 2 designers",
    highlight: { label: "NPS", value: "40 → 60" },
    duotone: "duotone-1",
    contexto:
      "A Natura enfrentava queda na satisfação do cliente e aumento de retrabalho operacional nos fluxos de Retira em Loja e Entrega Super Expressa — experiências que atravessam o digital e a operação física das lojas.",
    problema:
      "Os fluxos omnichannel geravam atrito para o cliente e sobrecarga para os times de loja: falta de visibilidade em tempo real, comunicação reativa e processos manuais que multiplicavam o retrabalho e os chamados ao suporte.",
    escopo:
      "Liderei a solução de design da iniciativa Omnichannel, conduzindo o redesenho estratégico da experiência, do mapeamento de jornadas às soluções digitais.",
    estrategia:
      "Pesquisas com clientes e times de loja; mapeamento de jornada ponta a ponta; prototipação em Figma validada com usuários reais; Design Thinking na descoberta e ideação.",
    alinhamento:
      "Conduzi o alinhamento entre stakeholders de negócio, operações de loja e tecnologia, garantindo decisões sustentadas por evidência de pesquisa e restrições operacionais reais.",
    solucao:
      "Dashboards em tempo real, notificações proativas, redesenho do Retira em Loja com QR Code e interface simplificada para uso em loja.",
    resultados:
      "NPS de 40 para 60, −25% no tempo de processamento de pedidos, −13% nos chamados ao suporte, 97% de aprovação entre gerentes de loja.",
    aprendizado:
      "A integração de tecnologia em processos físicos exige mais do que ferramentas digitais: depende de um profundo entendimento das jornadas dos usuários.",
    metricas: [
      { label: "NPS", value: "40 → 60" },
      { label: "Processamento de pedidos", value: "−25%" },
      { label: "Chamados ao suporte", value: "−13%" },
      { label: "Aprovação dos gerentes", value: "97%" },
    ],
  },
  {
    id: "globo",
    cover: globoCover.url,
    index: "02",
    title: "Globo SIM · Plataforma de Autoatendimento",
    org: "Globo S.A.",
    year: "2021",
    role: "Decisão de conduzir o discovery completo (Double Diamond, 37 entrevistas) antes de qualquer redesenho de interface.",
    highlight: { label: "Abandono da jornada", value: "−50%" },
    duotone: "duotone-2",
    contexto:
      "O Globo SIM é a plataforma de autoatendimento por onde PMEs anunciam na Globo e afiliadas. Precisava ficar mais intuitiva, acessível e competitiva.",
    problema:
      "A jornada de compra era complexa para um público que não domina o mercado publicitário, gerando abandono antes da conclusão do anúncio.",
    escopo:
      "Responsável pela fase de discovery, direcionando arquitetura e UI para atender negócio, processos internos e experiência do usuário.",
    estrategia:
      "Double Diamond como estrutura do discovery; 37 entrevistas com usuários, mapa de empatia e atualização de personas; workshop com negócio e engenharia; wireframes, testes de usabilidade e guia de estilo.",
    alinhamento:
      "O workshop com negócio e engenharia garantiu que a nova arquitetura respeitasse os processos internos existentes.",
    solucao:
      "Nova jornada com recomendação inteligente de horários e pacotes conforme investimento do anunciante, e simplificação da criação de anúncios.",
    resultados:
      "Redução de 50% no abandono da jornada de compra e aumento do tempo de permanência até a conclusão.",
    metricas: [
      { label: "Abandono da jornada", value: "−50%" },
      { label: "Entrevistas com usuários", value: "37" },
      { label: "Tempo até conclusão", value: "Aumento" },
    ],
  },
  {
    id: "bradesco",
    cover: bradescoCover.url,
    index: "03",
    title: "Dashboard de Relacionamento",
    org: "Bradesco BBI",
    year: "2020",
    role: "UX Strategy Lead",
    highlight: { label: "Entrega de resposta", value: "24h → 15min" },
    duotone: "duotone-3",
    contexto:
      "Gerentes de relacionamento de clientes especiais precisavam de informação consolidada para negociações, mas dependiam de dados físicos e consultas manuais.",
    problema:
      "O tempo entre a demanda do cliente e a resposta do gerente era medido em horas ou dias.",
    escopo:
      "Atuei como UX Designer e lead de equipe — estratégia, entrevistas com stakeholders, condução do processo e prototipação ao longo de 6 sprints.",
    estrategia:
      "Levantamento de escopo e entrevistas com gerentes; mapa de empatia, personas e journey map; arquitetura da informação orientada à decisão; três protótipos testados, um por perfil de gerente.",
    alinhamento:
      "Traduzi as necessidades dos gerentes em requisitos claros para negócio e tecnologia, mantendo cadência de validação a cada sprint.",
    solucao:
      "Aplicativo para tablet consumindo dados diretamente da base, com painéis priorizados e personalizáveis por perfil de gerente.",
    resultados:
      "Tempo de entrega de resposta caiu de 24h para 15min; aprovação de contrato caiu de 48h para 4h.",
    metricas: [
      { label: "Entrega de resposta", value: "24h → 15min" },
      { label: "Aprovação de contrato", value: "48h → 4h" },
      { label: "Protótipos por perfil", value: "3" },
    ],
  },
];

export type TimelineItem = {
  period: string;
  role: string;
  org: string;
  description: string;
  transition?: boolean;
};

export const timeline: TimelineItem[] = [
  {
    period: "2010–2017",
    role: "Coordenador de Qualidade e Design",
    org: "Mercosistem",
    description:
      "Coordenação do departamento de Qualidade e Design, equipe de 5 pessoas, em projetos de software de gestão e PDV.",
  },
  {
    period: "nov 2018–ago 2019",
    role: "Designer Líder",
    org: "Try",
    description: "Liderança de design em consultoria para a Livelo, com 4 designers.",
  },
  {
    period: "nov 2018–ago 2019",
    role: "Líder de Design",
    org: "St. Paul Escola de Negócios",
    description: "Liderança de design em paralelo à Try, na matrícula com IA da St. Paul.",
  },
  {
    period: "jul 2019–jan 2020",
    role: "UX Strategy Lead",
    org: "Bradesco S.A.",
    description: "Liderança de Discovery, coordenação de designers e parceiros externos.",
  },
  {
    period: "jan 2020–mar 2021",
    role: "Mentoria de Design Ops para líder de time",
    org: "Mentoria profissional",
    description: "Consultoria independente de mentoria em projetos de design.",
    transition: true,
  },
  {
    period: "mar 2021–jan 2022",
    role: "Senior Product Designer",
    org: "Globo S.A.",
    description: "Liderança da estratégia de experiência do produto, da descoberta ao lançamento.",
  },
  {
    period: "jan 2022–jan 2024",
    role: "Lead Product Designer",
    org: "Motrix Techknowledge",
    description:
      "Estruturei práticas de Design usadas por múltiplas equipes, reduzindo o tempo de lançamento em 30%.",
  },
  {
    period: "jan 2024–abr 2024",
    role: "Mentoria de construção de workshop personalizado",
    org: "Mentoria profissional",
    description: "Consultoria independente de mentoria em projetos de design.",
    transition: true,
  },
  {
    period: "abr 2024–set 2025",
    role: "Senior Product Designer",
    org: "Natura &Co",
    description:
      "Liderança de design para iniciativas Omnichannel multi-país. Escopo: time de 4 pessoas, 3 produtos (Omnicanal, Frente de Entrega e Dashboard de Resultados), alcance LATAM.",
  },
  {
    period: "out 2025–presente",
    role: "Senior Product Designer",
    org: "Porto Seguro",
    description:
      "Liderança de design para a jornada de investimentos. Escopo: time de 3 pessoas, produtos CRM Assessor de Investimentos, Dashboard de Resultados e Painel Online de Acompanhamento CSAT, alcance nacional.",
  },
];

export const contact = {
  email: "meiodoton@gmail.com",
  linkedin: "https://linkedin.com/in/toncavalcanti",
  behance: "https://behance.net/quattro",
  cv: "https://drive.google.com/uc?export=download&id=1rbA3k0bmXsh3mllrTn5R95aKfmmqIzRL",
};
