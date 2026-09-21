import cvAsset from "@/assets/CV.pdf.asset.json";
import naturaCover from "@/assets/cover-natura.png.asset.json";
import globoCover from "@/assets/cover-globo.png.asset.json";
import bradescoCover from "@/assets/cover-bradesco.png.asset.json";
import liveloCover from "@/assets/cover-livelo.png.asset.json";
import stpaulCover from "@/assets/case-stpaul.png.asset.json";
import stpaulEvidWorkshop from "@/assets/stpaul-evid-01-workshop.jpg.asset.json";
import stpaulEvidPlanejamento from "@/assets/stpaul-evid-02-planejamento.jpg.asset.json";
import stpaulEvidJornada from "@/assets/stpaul-evid-03-jornada.jpg.asset.json";

export type CaseChapter =
  | "contexto"
  | "problema"
  | "escopo"
  | "estrategia"
  | "alinhamento"
  | "solucao"
  | "resultados"
  | "aprendizado";

// `apos` ancora cada evidência no capítulo que ela comprova — obrigatório
// para que nenhuma imagem fique órfã e invisível no leitor.
//
// `src` aceita as duas origens que o projeto usa. As primeiras evidências vieram
// de `.asset.json`, com os bytes na infra do Lovable e só o ponteiro no repo;
// as novas moram em `public/cases/` e são referenciadas por caminho, como já
// acontece com o retrato do hero. A segunda via versiona a imagem junto do
// código e não consome crédito do Lovable para subir arquivo.
//
// `par` põe uma segunda imagem ao lado da primeira, sob a mesma legenda. Serve
// para telas de interface que se leem juntas: empilhadas, duas telas verticais
// dobram a altura do painel; lado a lado, cabem na mesma dobra.
export type CaseEvidence = {
  src: string;
  caption: string;
  alt?: string;
  // Tamanho natural, em px. Com ele a imagem reserva o espaço certo antes de
  // carregar e, no leitor largo do desktop, a largura sai da proporção — sem
  // isso uma imagem lazy ainda não carregada colapsa para zero.
  largura?: number;
  altura?: number;
  par?: { src: string; alt: string; largura?: number; altura?: number };
  apos: CaseChapter;
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
    role: "Responsável pelo design · squad autogerida de 4: 2 designers, PO e dev",
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
    evidencias: [
      {
        src: "/cases/natura-evid-01-loja-operacao.jpg",
        largura: 1100,
        altura: 1427,
        caption:
          "O ponto onde o digital encontra a operação: o time de loja consulta o pedido no sistema enquanto separa a sacola. Era aqui que a falta de visibilidade em tempo real virava retrabalho e chamado ao suporte.",
        alt: "Duas pessoas do time de loja atrás do balcão de uma loja Natura; uma delas opera um monitor com o sistema de pedidos enquanto segura uma sacola de papel com o comprovante. Ao fundo, prateleiras com produtos.",
        apos: "contexto",
      },
      {
        src: "/cases/natura-evid-02-sala-omnicanalidade.jpg",
        largura: 1100,
        altura: 1467,
        caption:
          "A sala da frente de Omnicanalidade, onde conduzi o design. Na parede, cada tela do fluxo em coluna própria — home, busca, página de produto, categorias, sacola —, com post-its de feedback e a contagem de dias para o go-live.",
        alt: "Placa suspensa escrita “Omnicanalidade” sobre uma área de trabalho. Na parede de vidro abaixo, colunas de telas impressas anotadas com post-its amarelos, rotuladas Sacola, Busca, Página de Produto, Categorias e Home, ao lado de rascunhos de wireframe.",
        apos: "escopo",
      },
      {
        src: "/cases/natura-evid-03-parede-wireframes.jpg",
        largura: 1100,
        altura: 1375,
        caption:
          "A mesma parede em outro ângulo. As telas do protótipo iam impressas para o vidro e o feedback vinha colado em cima delas — validar era um ato físico, no meio da sala, e não um link enviado por e-mail.",
        alt: "Parede de vidro comprida com a inscrição “Nova XP Natura” em letra manual, um quadro de wireframes desenhado à mão e colunas de telas impressas com post-its amarelos.",
        apos: "estrategia",
      },
      {
        src: "/cases/natura-evid-04-csat-loja.jpg",
        largura: 1100,
        altura: 1330,
        caption:
          "A solução em operação: o cartão convida o cliente a escanear o QR Code e avaliar o atendimento, e o tablet no balcão coleta a nota de 0 a 10. É por esse instrumento que o CSAT foi de 40% para 80%.",
        alt: "Balcão de loja Natura com uma atendente entregando sacolas de papel. Sobre o balcão, um cartão com os dizeres “Queremos ouvir você! Escaneie o QR Code abaixo e avalie o nosso atendimento” e um tablet exibindo uma pesquisa de satisfação com escala de 0 a 10.",
        apos: "solucao",
      },
    ],
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
    evidencias: [
      {
        src: "/cases/bradesco-evid-01-mapa-oportunidades.jpg",
        largura: 1600,
        altura: 1098,
        caption:
          "O mapa de oportunidades sobre a jornada do gerente de relacionamento, da pré-visita à formalização. Cada “Como poderíamos” é uma dor levantada nas entrevistas, e os pontos de votação decidiram o que o painel resolveria primeiro — “controlar o tempo de resposta por departamento” entre os mais votados.",
        alt: "Painel comprido dividido em faixas — Gestão do RM de Relacionamento, Pré-visita, Visita, Pós-visita, Negociação e Formalização — coberto de post-its amarelos, azuis e rosa escritos à mão, muitos com adesivos redondos de votação. Na base, uma faixa impressa com requisitos.",
        apos: "estrategia",
      },
      {
        src: "/cases/bradesco-evid-02-motor-recomendacoes.webp",
        largura: 620,
        altura: 853,
        caption:
          "O motor de recomendações, painel de entrada do gerente de relacionamento. Leads que pedem ação, índice FAL, últimas ordens e a classificação das empresas da carteira dividem a mesma tela — o que antes saía de consultas manuais chega consolidado antes da conversa com o cliente.",
        alt: "Tablet na vertical com o painel Motor de recomendações do Bradesco BBI, perfil Gerente de relacionamento. À esquerda, cartões escuros com a lista Check Leads, o valor ALP de R$ 988.345,00 e a classificação mensal de empresas; à direita, gráfico de barras do Índice FAL de junho a setembro, a lista de últimas ordens e barras percentuais de classificação de empresas.",
        apos: "solucao",
      },
      {
        src: "/cases/bradesco-evid-03-regras-precificacao.webp",
        largura: 343,
        altura: 517,
        caption:
          "Dois dos outros painéis, trocados pelo menu no topo da tela. Regras de precificação põe em primeiro plano o prazo de verificação de crédito e os processos em andamento; indicadores de gestão resume contratos ativos, resultado e performance por serviço.",
        alt: "Tela Regras de Precificação: tarefa com prazo limite às 8h30 para verificação de crédito, lista de leads, avisos sobre limite de crédito e ativação de clientes, linha do tempo de processos em andamento e os valores ADP e ATT.",
        par: {
          src: "/cases/bradesco-evid-04-indicadores-gestao.webp",
          largura: 343,
          altura: 517,
          alt: "Tela Indicadores de Gestão: índices PPG +68 e ATP +14, 304 contratos ativos, resultado de 235 mil, gráfico de performance por serviço e os totais de leads, limite e carteira.",
        },
        apos: "solucao",
      },
    ],
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
    year: "2018",
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
    evidencias: [
      {
        src: "/cases/livelo-evid-01-fluxo-atual.jpg",
        largura: 960,
        altura: 540,
        caption:
          "O fluxo como estava: o cliente informa o CPF e descreve o problema duas vezes, em pontos diferentes do atendimento, e a linha de emoção não sai do negativo em nenhum passo. É essa repetição que a jornada omnichannel foi desenhada para eliminar.",
        alt: "Diagrama do fluxo de atendimento então vigente, numa linha do tempo horizontal com etapas como URA, informa CPF, descrição do problema, confirmação de dados, atendimento backoffice e pesquisa de satisfação. “Informa CPF” e “descrição do problema” aparecem duas vezes. Abaixo de cada etapa, ícones de rosto com expressão negativa.",
        apos: "contexto",
      },
      {
        src: "/cases/livelo-evid-02-tres-frentes.png",
        largura: 575,
        altura: 155,
        caption:
          "A imersão foi dividida em três frentes — processos, pessoas e sistemas. Em trinta dias, cerca de cem profissionais e clientes foram ouvidos e representados em journey maps, que alimentaram o blueprint.",
        alt: "Três ícones lado a lado, rotulados Processos, Pessoas e Sistemas.",
        apos: "estrategia",
      },
      {
        src: "/cases/livelo-evid-04-apresentacao.jpg",
        largura: 1500,
        altura: 1125,
        caption:
          "Apresentação da solução ao time da Livelo, com a jornada mapeada em post-its na parede e sobre a mesa. Interface, chatbot e treinamento foram apresentados como um conjunto — que é como o serviço chega ao cliente.",
        alt: "Sala de reunião corporativa com cerca de oito pessoas ao redor de uma mesa comprida; três delas de pé junto a uma televisão que exibe um diagrama. Nas paredes e sobre a mesa, fileiras de post-its coloridos.",
        apos: "solucao",
      },
      {
        src: "/cases/livelo-evid-03-blueprint.jpg",
        largura: 1356,
        altura: 737,
        caption:
          "O Service Blueprint do atendimento, das quatro fases à linha de emoção na base. É a fileira de sistemas — P3000, Neoassist, CLM, Resolve Fácil, Token, CSC/OCC — que tornou as restrições técnicas discutíveis com design e operação na mesma mesa.",
        alt: "Service blueprint do atendimento em quatro colunas — Identificação, Registro, Atendimento e Backoffice — com faixas de sistemas, KPIs, a jornada do cliente e uma linha de ícones de emoção na base.",
        apos: "alinhamento",
      },
    ],
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
    year: "2019",
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
      "Benchmark, TaskFlow, Personas, Design Thinking, Workshop, Wireframes e Jobs to Be Done. A pesquisa em colaboração com stakeholders levou à descoberta central do projeto: o candidato não escolhe um curso, ele busca evolução profissional. A jornada foi então construída sobre os interesses futuros do candidato, e não sobre a comparação entre cursos.",
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
        largura: 1365,
        altura: 1125,
        caption:
          "Workshop de cocriação que conduzi com 13 participantes. Benchmark de oito escolas, Crazy 8s e mapa de empatia levaram o grupo a mais de 100 ideias.",
        alt: "Sala de workshop em preto e branco, com cerca de treze participantes sentados em círculo e um facilitador em pé junto ao quadro branco.",
        apos: "estrategia",
      },
      {
        src: stpaulEvidPlanejamento.url,
        largura: 1600,
        altura: 947,
        caption:
          "Cinco fases em três meses, com alocação diária de quatro pessoas — do entendimento aos testes de guerrilha.",
        alt: "Planejamento do projeto: diagrama das cinco fases e cronograma diário de fevereiro a abril com as atividades de cada integrante do time.",
        apos: "escopo",
      },
      {
        src: stpaulEvidJornada.url,
        largura: 1460,
        altura: 744,
        caption:
          "A jornada abria perguntando onde o candidato queria chegar, não que curso queria fazer. Em seis passos a I.A. traduzia a ambição em trilhas — e passou a resolver 70% do que antes ia para o chat.",
        alt: 'Primeira tela da jornada de matrícula: a pergunta "Onde você quer chegar?" com quatro opções de ambição profissional e indicador de passo 1 de 6.',
        apos: "solucao",
      },
      {
        src: "/cases/stpaul-evid-05-workshop-escopo.jpg",
        largura: 1280,
        altura: 960,
        caption:
          "Workshop de definição de escopo no innovation hive. Os rascunhos de fluxo sobre a mesa são o primeiro traço do que viraria a jornada — antes de qualquer wireframe no Axure.",
        alt: "Sala do laboratório de inovação com oito participantes sentados em poltronas coloridas diante de uma televisão que exibe um site. Ao fundo, quadros brancos com anotações; em primeiro plano, uma mesa com rascunhos de telas desenhados a caneta verde.",
        apos: "escopo",
      },
      {
        src: "/cases/stpaul-evid-06-priorizacao.jpg",
        largura: 1280,
        altura: 960,
        caption:
          "A convergência do workshop: as mais de cem ideias viraram quase trinta oportunidades numeradas no quadro, e a votação por pontos decidiu quais entravam no escopo.",
        alt: "Três pessoas de pé diante de um quadro branco comprido, coberto por uma lista numerada de oportunidades escritas à mão, com adesivos redondos de votação ao lado de vários itens. Na parede abaixo, o letreiro do innovation hive.",
        apos: "estrategia",
      },
      {
        src: "/cases/stpaul-evid-04-laboratorio.jpg",
        largura: 1500,
        altura: 1125,
        caption:
          "O innovation hive, laboratório que a St. Paul mantinha com a IBM e onde conduzi as cocriações. A parceria que está na parede é a mesma que entrou na jornada: a I.A. que montava as trilhas era da IBM.",
        alt: "Parede branca com um logotipo de favos de mel e os dizeres “innovation hive — welcome to the collaborative era — IBM and Saint Paul”. Abaixo à direita, uma abertura mostra uma sala com mesas e cadeiras amarelas.",
        apos: "alinhamento",
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
    period: "2018 – 2019",
    role: "Designer Líder",
    org: "Try",
    description: "Liderança de design em consultoria para a Livelo, com 4 designers",
  },
  {
    period: "2018 – 2019",
    role: "Líder de Design",
    org: "St. Paul Escola de Negócios",
    description: "Liderança de design em paralelo à Try, na matrícula com IA da St. Paul",
  },
  {
    period: "2019 – 2020",
    role: "UX Strategy Lead",
    org: "Bradesco S.A.",
    description: "Liderança de Discovery, coordenação de designers e parceiros externos",
  },
  {
    period: "2021 – 2022",
    role: "Senior Product Designer",
    org: "Globo S.A.",
    description: "Liderança da estratégia de experiência do produto, da descoberta ao lançamento",
  },
  {
    period: "2023 – 2024",
    role: "Lead Product Designer",
    org: "Motrix Techknowledge",
    description:
      "Atuação autogerida: defini a estratégia de design e estruturei as práticas usadas por múltiplas equipes, reduzindo o tempo de lançamento em 30%",
  },
  {
    period: "2024 – 2025",
    role: "Senior Product Designer",
    org: "Natura &Co",
    description:
      "Responsável pelo design das iniciativas Omnichannel multi-país. Escopo: squad autogerida de 4 pessoas (2 designers, PO e dev), 3 produtos (Omnicanal, Frente de Entrega e Dashboard de Resultados), alcance LATAM",
  },
  {
    period: "2025 – PRESENTE",
    role: "Senior Product Designer",
    org: "PortoBank · Porto Seguro",
    description:
      "Responsável pelo design da jornada de investimentos no PortoBank, braço financeiro do grupo Porto Seguro. Escopo: squad de 3 pessoas, produtos CRM Assessor de Investimentos, Dashboard de Resultados e Painel Online de Acompanhamento CSAT, alcance nacional",
  },
];

// URL base do site — domínio definitivo.
// og:image, og:url e o JSON-LD dependem dela para gerar URLs absolutas.
/**
 * Conteúdo do hero, deliberadamente curto.
 *
 * A versão anterior tinha 51 palavras entre título e apoio — três vezes o
 * que as referências do gênero usam. As empresas saíram do parágrafo e
 * viraram tira própria; o nome saiu porque já está no cabeçalho; a cidade
 * subiu para o kicker.
 */
export const hero = {
  kicker: "Design Leadership · São Paulo",
  title: "Lidero design para transformar estratégia em resultado.",
  support: "Estruturo design onde a função ainda não existe.",
  /** Rótulos curtos: o do meio tinha 38 caracteres e comia duas linhas. */
  metrics: [
    { label: "CSAT · Natura", value: "40% → 80%" },
    { label: "Resposta · Bradesco", value: "24h → 15min" },
    { label: "Lançamento · Motrix", value: "−30%" },
  ],
  /**
   * Marcas na tira do hero, em ordem cronológica. Cada logo é um PNG
   * monocromático usado como máscara: ele assume a cor do texto, então
   * funciona nos dois temas sem uma versão para cada.
   *
   * `proporcao` é largura ÷ altura da marca recortada. `altura`
   * compensa o peso visual: marcas cheias parecem maiores que as vazadas.
   * Sem `logo`, o nome aparece em texto até o arquivo chegar.
   */
  companies: [
    { nome: "Try", logo: "/hero/logos/try.png", proporcao: 1.41 },
    { nome: "Livelo", logo: "/hero/logos/livelo.png", proporcao: 1 },
    { nome: "Saint Paul", logo: "/hero/logos/stpaul.png", proporcao: 1 },
    { nome: "Bradesco BBI", logo: "/hero/logos/bbi.png", proporcao: 5.6, altura: 18 },
    { nome: "Globo", logo: "/hero/logos/globo.png", proporcao: 1 },
    { nome: "Motrix", logo: "/hero/logos/motrix.png", proporcao: 1.4 },
    { nome: "Cielo", logo: "/hero/logos/cielo.png", proporcao: 2.87, altura: 22 },
    { nome: "Credsystem", logo: "/hero/logos/credsystem.png", proporcao: 3.73, altura: 20 },
    { nome: "Natura", logo: "/hero/logos/natura.png", proporcao: 1.32, altura: 30 },
    { nome: "PortoBank", logo: "/hero/logos/porto.png", proporcao: 5, altura: 20 },
  ] as { nome: string; logo?: string; proporcao?: number; altura?: number }[],
  portrait: {
    /* WebP, e não AVIF: o AVIF gerado pelo sips decodifica com o canal alfa
       todo transparente — a foto simplesmente não aparece. Verificado
       desenhando num canvas e contando pixels opacos. */
    webp: "/hero/ton-bracos-cruzados.webp",
    png: "/hero/ton-bracos-cruzados.png",
    alt: "Ton Cavalcanti, de óculos e suéter preto, com os braços cruzados",
    largura: 801,
    altura: 1256,
    /* Linha dos olhos, em fração da altura da imagem — medida com régua de
       pixels sobre a foto. O hero usa esse número para pôr os olhos na altura
       da primeira linha do título. Trocou a foto, mede de novo. */
    olho: 0.2102,
  },
};

export const siteUrl = "https://toncavalcanti.com";

export const contact = {
  email: "meiodoton@gmail.com",
  linkedin: "https://linkedin.com/in/toncavalcanti",
  behance: "https://behance.net/quattro",
  medium: "https://medium.com/@elitonrodrigo",
  cv: cvAsset.url,
};

export type LeadershipProof = {
  label: string;
  value: string;
  context: string;
  /** Link opcional no rodapé do card. */
  link?: { label: string; href: string };
};

/**
 * A liderança aqui é de design, não de pessoas: eu respondo pela direção,
 * coordeno quem trabalha comigo e puxo o direcionamento sem gestor acima.
 * Nenhum card deve sugerir gestão de time nem contagem de liderados.
 */
export const leadershipProofs: LeadershipProof[] = [
  {
    label: "Coordenação",
    value: "Até 25 pessoas",
    context:
      "Discovery do Bradesco, entre 2019 e 2020: designers internos, parceiros externos, engenharia, pesquisa e negócios. Eu conduzia a direção de design e o alinhamento entre as frentes.",
  },
  {
    label: "Processo",
    value: "−30% no tempo de entrega",
    context:
      "Atuação autogerida na Motrix: estruturei as práticas de design usadas por múltiplas equipes — design reviews semanais, ritual de handoff com engenharia e operação de pesquisa. Hoje, uso de IA para acelerar pesquisa e prototipação.",
  },
  {
    label: "Mentoria",
    value: "1:1 e grupos",
    context:
      "Mentoria individual e em grupo, de quem está começando a quem já conduz produto. É onde devolvo o que aprendi estruturando design.",
    link: { label: "Conhecer a mentoria", href: "/mentoria" },
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
