import naturaCover from "@/assets/cover-natura.png.asset.json";
import globoCover from "@/assets/cover-globo.png.asset.json";
import bradescoCover from "@/assets/cover-bradesco.png.asset.json";
import liveloCover from "@/assets/cover-livelo.png.asset.json";
import stpaulCover from "@/assets/case-stpaul.png.asset.json";
import stpaulEvidWorkshop from "@/assets/stpaul-evid-01-workshop.jpg.asset.json";
import stpaulEvidPlanejamento from "@/assets/stpaul-evid-02-planejamento.jpg.asset.json";
import stpaulEvidJornada from "@/assets/stpaul-evid-03-jornada.jpg.asset.json";

export type CaseEvidence = {
  src: string;
  caption: string;
  alt?: string;
};

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
  evidencias?: CaseEvidence[];
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
    highlight: { label: "CSAT de atendimento", value: "40% → 80%" },
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
      "CSAT de 40% para 80%, −25% no tempo de processamento de pedidos, −13% nos chamados ao suporte, 97% de aprovação entre gerentes de loja.",
    aprendizado:
      "A integração de tecnologia em processos físicos exige mais do que ferramentas digitais: depende de um profundo entendimento das jornadas dos usuários.",
    metricas: [

      { label: "CSAT de atendimento", value: "40% → 80%" },
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
    role: "Senior Product Designer · Discovery e estratégia de experiência",
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
      { label: "Prazo de entrega", value: "2 meses" },
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
  {
    id: "livelo-design-servicos",
    cover: liveloCover.url,
    index: "04",
    title: "Design de Serviços no Atendimento",
    org: "Try/WPP · Livelo",
    year: "2018–2019",
    role: "Designer Líder · 4 designers",
    highlight: { label: "NPS de atendimento", value: "+3,3 → +6,7" },
    duotone: "duotone-graphite",
    contexto:
      "O atendimento da Livelo apresentava baixo NPS (+3,3) e alto turnover de funcionários (60% ao ano). O sistema de suporte era lento, os fluxos de atendimento desorganizados e a experiência multicanal fragmentada.",
    problema:
      "Melhorar a qualidade do atendimento, aumentando o NPS e reduzindo a fricção entre canais, ao mesmo tempo em que se criavam condições melhores de trabalho para os atendentes.",
    escopo:
      "Liderei o design de serviços do atendimento Livelo como Designer Líder, com um time de 4 designers, conduzindo o processo do mapeamento do serviço à prototipação.",
    estrategia:
      "Entrevistas com funcionários e clientes para mapear dores. Shadowing em atendimentos reais. Service Blueprint para entender conexões entre processos, sistemas e pessoas. Reclassificação de atendimentos, dos mais comuns aos mais raros. Prototipação: redesign da interface, redesign de processos, protótipos de features e chatbot.",
    alinhamento:
      "O Service Blueprint conectou as decisões de design às restrições reais de sistemas, processos e times de atendimento, alinhando a solução entre design, operação e tecnologia.",
    solucao:
      "Redesign da interface de atendimento, reduzindo informações em tela e simplificando tarefas; chatbot com storytelling e diálogos mais humanos; jornadas omnichannel integradas, evitando que clientes precisassem repetir problemas em diferentes canais; programa de treinamento e materiais de apoio para os atendentes.",
    resultados:
      "NPS de atendimento de +3,3 para +6,7, com redução do tempo médio de atendimento e maior agilidade na priorização de chamados. A experiência ficou mais consistente entre canais e os atendentes passaram a contar com ferramentas mais rápidas e materiais de suporte atualizados.",
    aprendizado:
      "A análise mostrou que o tempo de solução é mais relevante que o tempo de atendimento em si — pequenas falhas no roteiro do chatbot e na priorização de chamados tinham impacto desproporcional na experiência do cliente.",
    metricas: [
      { label: "NPS de atendimento", value: "+3,3 → +6,7" },
      { label: "Time de design", value: "4 designers" },
    ],
  },
  {
    id: "stpaul",
    cover: stpaulCover.url,
    index: "05",
    title: "Jornada de Matrícula com I.A.",
    org: "St. Paul Escola de Negócios",
    year: "2018–2019",
    role: "UX Designer Lead · Liderança de projeto e pesquisa",
    highlight: { label: "Atendimento por chat", value: "−70%" },
    duotone: "duotone-graphite",
    contexto:
      "A principal plataforma de matrícula da St. Paul Escola de Negócios estava desatualizada, com navegação pouco fluida e alto volume de atendimentos via chat e e-mail. Isso gerava custos operacionais altos e perda de relevância frente aos concorrentes.",
    problema:
      "Era preciso recriar todo o fluxo de matrícula em harmonia com o fluxo físico do serviço, mantendo os processos existentes e reduzindo o custo de atendimento por chat e e-mail. Ao mesmo tempo, gerar interesse nos candidatos a partir das suas perspectivas de evolução profissional e do seu poder de investimento disponível.",
    escopo:
      "Atuei como UX Designer Lead, liderando o projeto e a pesquisa de mercado: entrevistas, facilitação de workshop com stakeholders, definição de business goals, wireframes em Axure, avaliação heurística de usabilidade e acessibilidade e apresentação de reports.",
    estrategia:
      'Benchmark, TaskFlow, Personas, Design Thinking, Workshop, Wireframes e Jobs to Be Done. A pesquisa em colaboração com stakeholders levou à descoberta central do projeto: o candidato não escolhe um curso, ele busca evolução profissional. A jornada foi então construída sobre os interesses futuros do candidato, e não sobre a comparação entre cursos.',
    alinhamento:
      "O workshop com os stakeholders alinhou os objetivos de negócio — reduzir custo de aquisição e atualizar a relevância da escola no mercado — às restrições do processo físico de matrícula, que precisava ser preservado. Isso garantiu que o redesenho digital fosse implementável sem romper a operação existente.",
    solucao:
      'Fluxo de matrícula redesenhado e integrado ao processo físico existente. Plataforma interativa que abria com a pergunta "Onde você quer chegar?" e montava trilhas personalizadas com a I.A. da IBM, considerando orçamento, área de interesse, tempo, disponibilidade e deslocamento presencial. Menu lateral expandido para navegação fluida e adaptável a diferentes dispositivos. Conteúdo cross conectando cursos, trilhas e sugestões geradas pela I.A.',
    resultados:
      "Redução de 70% no atendimento por chat e aumento de 65% no número de matrículas. A plataforma passou a resolver sozinha os esclarecimentos que antes chegavam por chat e e-mail.",
    aprendizado:
      "O maior insight foi entender que os candidatos não escolhem apenas cursos — buscam evolução profissional. Reposicionar a jornada a partir desse ponto de vista foi o que produziu os resultados.",
    evidencias: [
      {
        src: stpaulEvidWorkshop.url,
        caption:
          "Workshop de cocriação com 13 participantes. Benchmark de oito escolas, Crazy 8s e mapa de empatia geraram mais de 100 ideias — conduzi a facilitação.",
        alt: "Página de processo do workshop: foto da sala em atividade, tabela de benchmark com oito escolas de negócios, painel de Crazy 8s e mapa de empatia.",
      },
      {
        src: stpaulEvidPlanejamento.url,
        caption:
          "Cinco fases em três meses, com alocação diária de quatro pessoas — do entendimento aos testes de guerrilha.",
        alt: "Planejamento do projeto: diagrama das cinco fases e cronograma diário de fevereiro a abril com as atividades de cada integrante do time.",
      },
      {
        src: stpaulEvidJornada.url,
        caption:
          "A jornada abria perguntando onde o candidato queria chegar, não que curso queria fazer. Em seis passos a I.A. traduzia a ambição em trilhas — e passou a resolver 70% do que antes ia para o chat.",
        alt: "Primeira tela da jornada de matrícula: a pergunta \"Onde você quer chegar?\" com quatro opções de ambição profissional e indicador de passo 1 de 6.",
      },
    ],
    metricas: [
      { label: "Atendimento por chat", value: "−70%" },
      { label: "Número de matrículas", value: "+65%" },
      { label: "Duração do projeto", value: "3 meses" },
    ],
  },
];

export type TimelineItem = {
  period: string;
  role: string;
  org: string;
  description: string;
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

// URL base do site. Trocar pelo domínio definitivo ao publicar:
// og:image, og:url e o JSON-LD dependem dela para gerar URLs absolutas.
export const siteUrl = "https://id-preview--6723f2a1-65ec-4a0f-823f-6b297d115237.lovable.app";

export const contact = {
  email: "meiodoton@gmail.com",
  linkedin: "https://linkedin.com/in/toncavalcanti",
  behance: "https://behance.net/quattro",
  cv: "https://drive.google.com/uc?export=download&id=1rbA3k0bmXsh3mllrTn5R95aKfmmqIzRL",
};

export type LeadershipProof = {
  label: string;
  value: string;
  context: string;
};

export const leadershipProofs: LeadershipProof[] = [
  {
    label: "Time",
    value: "Até 25 designers",
    context:
      "Times multidisciplinares com engenharia, pesquisa, design e negócios. Pico no Bradesco, entre 2019 e 2020.",
  },
  {
    label: "Processo",
    value: "−30% no tempo de entrega",
    context:
      "Práticas de design estruturadas na Motrix: design reviews semanais, ritual de handoff com engenharia e operação de pesquisa. Hoje, uso de IA para acelerar pesquisa e prototipação.",
  },
  {
    label: "Pessoas",
    value: "100+ designers",
    context: "Liderados e mentorados ao longo da carreira.",
  },
];

export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "MBA em Design Thinking",
    institution: "ESPM",
    location: "São Paulo, Brasil",
    period: "jun 2019 – jul 2020",
  },
  {
    degree: "Pós-graduação em Service Design",
    institution: "Auckland University of Technology",
    location: "Nova Zelândia",
    period: "abr 2018 – nov 2019",
  },
  {
    degree: "Graduação em Design Gráfico",
    institution: "Instituto Superior de Tecnologia",
    location: "Marília, Brasil",
    period: "jan 2004 – dez 2006",
  },
  {
    degree: "Graduação em Administração",
    institution: "Fundação Eurípides Soares da Rocha",
    location: "Marília, Brasil",
    period: "jan 1999 – 2005",
  },
];

export type Certification = {
  title: string;
};

export const certifications: Certification[] = [
  { title: "Soluções de Alto Impacto com MIT designX" },
  { title: "Get Your Product Used: Adoption and Appropriation" },
  { title: "Accessibility: How to Design for All" },
  { title: "UX Management: Strategy and Tactics" },
  { title: "Design de Processos" },
  { title: "Emotional Design — How to Make Products People Will Love" },
  { title: "Operacionalização em Design" },
  { title: "Planejamento e Técnicas de Design" },
];

