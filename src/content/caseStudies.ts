import { home, type Lang, type ProjectCopy } from './copy';

export interface SplitSectionCopy {
  label: string;
  body: string;
}

export interface KeyInsightsCopy {
  label: string;
}

export interface InsightCopy {
  label: string;
  title: string;
  body: string;
}

export interface ResultsCopy {
  label: string;
  items: string[];
}

export interface DualMediaItem {
  src?: string;
  video?: string;
  videoWebm?: string;
  poster?: string;
}

export interface DualMediaCopy {
  left: DualMediaItem;
  right: DualMediaItem;
}

export interface CaseStudyCopy {
  lang: Lang;
  backLabel: string;
  title: string;
  client: string;
  category: string;
  year: string;
  summary: string;
  accent: 'blue' | 'green' | 'sage';
  heroImage1?: string;
  heroImage1AspectRatio?: string;
  heroImage1Dual?: DualMediaCopy;
  details: { label: string; value: string }[];
  problem: SplitSectionCopy;
  solution: SplitSectionCopy;
  impact: SplitSectionCopy;
  keyInsightsSummary: KeyInsightsCopy;
  heroImage2?: string;
  insight1: InsightCopy;
  gallery?: string[];
  insight1Image?: string;
  insight1ImageAspectRatio?: string;
  insight1Dual?: DualMediaCopy;
  insight2: InsightCopy;
  heroImage3?: string;
  heroImage3Dual?: DualMediaCopy;
  insight3: InsightCopy;
  heroImage4?: string;
  heroImage4AspectRatio?: string;
  heroVideo4?: string;
  heroVideo4Webm?: string;
  heroVideo4Poster?: string;
  results: ResultsCopy;
  moreProjectsTitle: string;
  relatedProjects: ProjectCopy[];
  contactTitle: string;
  contact: { label: string; href: string; icon: 'mail' | 'linkedin' | 'medium' | 'github' }[];
  footerRole: string;
  footerClockSuffix: string;
}

export const mapbiomas: Record<Lang, CaseStudyCopy> = {
  en: {
    lang: 'en',
    backLabel: 'Back to Index',
    title: 'Designing the tool that turned 40 years of environmental data into autonomous analyses',
    client: 'MapBiomas',
    category: 'Environmental Monitoring',
    year: '2026',
    summary:
      "MapBiomas is a leading initiative in land use and land cover mapping in Brazil. Meu MapBiomas is the product that gives organizations the autonomy to build their own analyses from this data, setting up dashboards with custom branding, territories of interest, and data layers to monitor. This unlocked a demand that led Meu MapBiomas to hit its annual adoption goal in five days.",
    accent: 'blue',
    heroImage1: '/assets/mapbiomas/featured-image.png',
    details: [
      { label: 'My role', value: 'Product Designer' },
      { label: 'Scope', value: 'End-to-end, from discovery to delivery' },
      {
        label: 'Team',
        value: 'Product Managers, developers, geoprocessing and environmental monitoring specialists',
      },
    ],
    problem: {
      label: 'The problem',
      body: "Although MapBiomas makes its data publicly available, using that data within an organization's specific context depended on a geoprocessing specialist, who handled the territorial clipping, cross-referenced indicators, and produced custom analyses. As the platform grew, the backlog of requests revealed a pent-up demand from organizations increasingly seeking analyses tailored to their own contexts. Addressing this was a major opportunity to scale MapBiomas' impact.",
    },
    solution: {
      label: 'The solution',
      body: "Meu MapBiomas was created in this context, with the goal of giving organizations the autonomy to combine MapBiomas' public data with their own datasets to build territorial analyses without relying on a geoprocessing specialist. More than just browsing maps, the product enables each organization to build its own analysis around a real-world problem.",
    },
    impact: {
      label: 'The impact',
      body: "The annual goal of 100 registered organizations on Meu MapBiomas was reached in just five days after launch. The platform is now adopted by Brazil's leading environmental organizations, including SOS Mata Atlântica, the Ministry of Environment, IPAM, and OTCA.",
    },
    keyInsightsSummary: {
      label: 'Three key insights',
    },
    heroImage2: '/assets/mapbiomas/ui-overview.png',
    insight1: {
      label: 'Insight 01',
      title: 'Fewer decisions per screen, more clarity for a non-technical audience',
      body: "The onboarding was designed to reduce the cognitive load of a flow that requires multiple decisions: branding setup, territory selection, data layers, and legend configuration. By designing a progressive form with one decision per step, optional steps, and free navigation to go back, users can stay focused on the current task while the complexity behind the dashboard setup stays hidden from the platform's target audience of non-technical users.",
    },
    gallery: [
      '/assets/mapbiomas/onboarding-step-2.png',
      '/assets/mapbiomas/onboarding-step-3.png',
      '/assets/mapbiomas/onboarding-step-4.png',
    ],
    insight2: {
      label: 'Insight 02',
      title: 'Real-time feedback that builds credibility at every step',
      body: "As the user configures the dashboard, the platform renders a real-time preview using actual MapBiomas data. Every choice of territory, data layer, or time period is immediately reflected on screen, providing visibility into what's being built and confidence in data quality before finalizing. To sustain this without impacting performance, we pre-processed the geoprocessing data from Google Earth Engine.",
    },
    heroImage3: '/assets/mapbiomas/insight-2.png',
    insight3: {
      label: 'Insight 03',
      title: 'A scope constraint that led to a simpler interface to use and maintain',
      body: "With three months to go from zero to production, building separate flows for creating a new dashboard and editing an existing one wasn't feasible. The short-term solution was to design a single interface that serves both moments. In the end, what started as a way to meet a tight deadline proved strong enough to be adopted as the permanent solution, simplifying maintenance and giving users a single mental model for creating and editing.",
    },
    heroVideo4: '/assets/mapbiomas/editing-flow.mp4',
    heroVideo4Webm: '/assets/mapbiomas/editing-flow.webm',
    heroVideo4Poster: '/assets/mapbiomas/editing-flow-poster.jpg',
    results: {
      label: 'Results',
      items: [
        "Organizations started creating their own analyses without relying on MapBiomas' technical team. Onçafari publicly described this gain after using the platform autonomously.",
        "Autonomy led to concrete environmental decisions. Onçafari cross-referenced monitoring data with land use history and identified 60,000 hectares converted to soy within a monitored jaguar's home range.",
        'The annual goal of 100 organizations was reached in five days. One month after launch, over 200 organizations had requested access, double the target for the entire year.',
      ],
    },
    moreProjectsTitle: 'More projects',
    relatedProjects: [home.en.projects[1], home.en.projects[2]],
    contactTitle: home.en.contactTitle,
    contact: home.en.contact,
    footerRole: home.en.footerRole,
    footerClockSuffix: home.en.footerClockSuffix,
  },
  pt: {
    lang: 'pt',
    backLabel: 'Voltar para Início',
    title: 'Projetando a ferramenta que transformou 40 anos de dados ambientais em análises autônomas',
    client: 'MapBiomas',
    category: 'Monitoramento Ambiental',
    year: '2026',
    summary:
      'O MapBiomas é referência em mapeamento do uso e cobertura da terra no Brasil. O Meu MapBiomas é o produto da iniciativa que dá às organizações autonomia para criar suas próprias análises a partir desses dados, montando painéis com personalização visual, territórios de interesse e camadas a monitorar. Isso revelou uma demanda que levou o Meu MapBiomas a bater a meta de adoção do ano em cinco dias.',
    accent: 'blue',
    heroImage1: '/assets/mapbiomas/featured-image.png',
    details: [
      { label: 'Meu papel', value: 'Product Designer' },
      { label: 'Escopo', value: 'Da descoberta à entrega, ponta a ponta' },
      {
        label: 'Time',
        value: 'Product Managers, desenvolvedores, técnicos de geoprocessamento e monitoramento ambiental',
      },
    ],
    problem: {
      label: 'O problema',
      body: 'Apesar do MapBiomas disponibilizar seus dados publicamente, usar esses dados no contexto de uma organização dependia de um técnico em geoprocessamento, que fazia o recorte por território, cruzava indicadores e gerava as análises personalizadas. Com o crescimento da plataforma, a fila de pedidos revelou uma demanda reprimida de organizações que buscavam cada vez mais obter análises dentro dos seus contextos de atuação. Atender a isso era uma grande oportunidade de escalar o impacto do MapBiomas.',
    },
    solution: {
      label: 'A solução',
      body: 'A plataforma Meu MapBiomas foi criada nesse contexto, com o objetivo de dar às organizações autonomia para combinar dados públicos do MapBiomas com dados próprios para construir análises territoriais sem depender de um especialista em geoprocessamento. Mais do que consultar mapas, o produto permite que cada organização construa sua própria análise em torno de um problema real.',
    },
    impact: {
      label: 'O impacto',
      body: 'A meta anual de 100 organizações cadastradas no Meu MapBiomas foi atingida em cinco dias após o lançamento da plataforma, que hoje é adotada pelas principais organizações ambientais do Brasil, como SOS Mata Atlântica, Ministério do Meio Ambiente, IPAM e OTCA.',
    },
    keyInsightsSummary: {
      label: 'Três insights principais',
    },
    heroImage2: '/assets/mapbiomas/ui-overview.png',
    insight1: {
      label: 'Insight 01',
      title: 'Menos decisões por tela e mais clareza para um público não-técnico',
      body: 'O onboarding foi desenhado para reduzir a carga cognitiva de um fluxo que exige várias decisões: definição da identidade visual, seleção de territórios, camadas de dados e configuração de legendas. Ao projetar um formulário progressivo com uma decisão por vez, passos opcionais e navegação livre para voltar, é possível manter o foco na tarefa atual e reduzir a complexidade por trás do fluxo de configuração para o público-alvo da plataforma, formado por pessoas não técnicas.',
    },
    gallery: [
      '/assets/mapbiomas/onboarding-step-2.png',
      '/assets/mapbiomas/onboarding-step-3.png',
      '/assets/mapbiomas/onboarding-step-4.png',
    ],
    insight2: {
      label: 'Insight 02',
      title: 'Feedback em tempo real, que garante credibilidade a cada passo',
      body: 'À medida que o usuário configura o dashboard, a plataforma monta uma prévia em tempo real com os dados reais do MapBiomas. Cada escolha de território, camada ou período se reflete imediatamente na tela, dando visibilidade do que está sendo construído e confiança na qualidade dos dados antes mesmo de finalizar. Para sustentar isso sem pesar na performance e garantir o preview, pré-processamos os dados de geoprocessamento vindos do Google Earth Engine.',
    },
    heroImage3: '/assets/mapbiomas/insight-2.png',
    insight3: {
      label: 'Insight 03',
      title: 'Uma restrição de escopo levou a uma interface mais simples de usar e manter',
      body: 'Com três meses para ir do zero à produção, criar fluxos específicos para configurar um dashboard novo e editar um já existente não era viável. A solução de curto prazo foi criar uma interface única que serve aos dois momentos. No fim, o que nasceu para viabilizar a versão 1 em um prazo curto se provou forte o suficiente para ser adotada como definitiva, simplificando a manutenção e dando ao usuário um único modelo mental para criar e editar.',
    },
    heroVideo4: '/assets/mapbiomas/editing-flow.mp4',
    heroVideo4Webm: '/assets/mapbiomas/editing-flow.webm',
    heroVideo4Poster: '/assets/mapbiomas/editing-flow-poster.jpg',
    results: {
      label: 'Resultados',
      items: [
        'Organizações passaram a criar suas próprias análises sem depender do time técnico do MapBiomas. O Onçafari descreveu publicamente esse ganho ao usar a plataforma de forma autônoma.',
        'A autonomia gerou decisões ambientais concretas. O Onçafari cruzou dados de monitoramento com histórico de uso da terra e identificou 60 mil hectares convertidos em soja na área de vida de uma onça monitorada.',
        'A meta anual de 100 organizações foi batida em cinco dias. Um mês após o lançamento, mais de 200 organizações já tinham solicitado acesso, o dobro do previsto para o ano inteiro.',
      ],
    },
    moreProjectsTitle: 'Outros projetos',
    relatedProjects: [home.pt.projects[1], home.pt.projects[2]],
    contactTitle: home.pt.contactTitle,
    contact: home.pt.contact,
    footerRole: home.pt.footerRole,
    footerClockSuffix: home.pt.footerClockSuffix,
  },
};

export const drip: Record<Lang, CaseStudyCopy> = {
  en: {
    lang: 'en',
    backLabel: 'Back to Index',
    title: 'Automating a two-day operational process into an autonomous experience completed in seconds',
    client: 'Questrade',
    category: 'Fintech',
    year: '2025',
    summary:
      "Questrade is Canada's largest independent online brokerage, managing billions in assets. In this project, I led the design of the dividend reinvestment program automation, which eliminated the operations team's manual work and reduced processing time from 2 business days to 8 seconds.",
    accent: 'green',
    heroImage1: '/assets/drip/featured-image.png',
    details: [
      { label: 'My role', value: 'Product Designer' },
      { label: 'Scope', value: 'End-to-end, from discovery to delivery' },
      { label: 'Team', value: 'Product Managers and developers' },
    ],
    problem: {
      label: 'The problem',
      body: 'The Dividend Reinvestment Program (DRIP) allows clients to use received dividends to automatically purchase more shares. At Questrade, enrolling a client in DRIP involved a PDF, manual approval from 3 operational teams, and a 2 business day wait, consuming about 6 hours per day of operations. Meanwhile, competitors like Wealthsimple and Robinhood already offered the same process 100% digitally, completed in minutes.',
    },
    solution: {
      label: 'The solution',
      body: 'I redesigned enrollment as a self-service flow the client completes in seconds, without PDF forms or manual approval. Beyond solving the operational bottleneck, the new experience lets users view, manage, and change their enrollment at any time, something no direct competitor offered at the time.',
    },
    impact: {
      label: 'The impact',
      body: 'In the first 3 months after launch, 55% of eligible clients enrolled in the program. Enrollment, which previously took 2 business days, was now completed in 8 seconds, and the operations team recovered about 6 hours per day previously spent on manual approvals.',
    },
    keyInsightsSummary: {
      label: 'Three key insights',
    },
    heroImage2: '/assets/drip/project-snapshot.png',
    insight1: {
      label: 'Insight 01',
      title: 'From operational bottleneck to competitive advantage, the research that redefined the project scope',
      body: 'An internal mapping revealed the bottleneck that became our starting point: about 6 hours per day were dedicated by the operations team to manually processing DRIP enrollments. It wasn\'t clear yet, however, how the client perceived this process. On Reddit, I found comments describing the experience as "archaic", and some clients reported giving up on enrolling new assets just because of the effort involved. This initial research led me to recruit 20 users who invested through both Questrade and competitors, to hear from people who had experienced the difference between manual and digital. The findings redefined the project scope by highlighting the need to digitize the process and revealing users\' interest in controlling reinvestment at a granular level, choosing which stocks to reinvest in each account they held, something no competitor offered.',
    },
    insight1Image: '/assets/drip/reddit-comments.png',
    insight1ImageAspectRatio: '3576 / 2933',
    insight2: {
      label: 'Insight 02',
      title: 'The ideal experience as the starting point for the new API',
      body: "I mapped the 11 steps distributed across 3 operational teams behind the 2-day wait and discovered that the bottleneck wasn't the analysis itself, but the request queue and manual rework with spreadsheets. This discovery changed the conversation with engineering, because instead of digitizing the existing flow, we decided that the new API requirements should start from the experience we wanted to deliver. This meant giving the user visibility and ongoing control of their enrollment, which required building a single source of truth per asset and per user, something that didn't exist in the legacy system. It was this requirement that unlocked both continuous management and automatic enrollment of new assets.",
    },
    heroImage3: '/assets/drip/previous-journey.png',
    insight3: {
      label: 'Insight 03',
      title: 'A technical limitation can work in favor of the experience when approached strategically',
      body: 'The system required that DRIP enrollment cover all assets in the account at once, a strategy to enable automatic migration of users already registered in the legacy system. Initially, this seemed like a blocker for offering the individual asset control that research revealed as an opportunity. But when I looked at usage data, I found that 84% of the user base already enrolled all their assets in DRIP, meaning this requirement was, in practice, the default most users followed. From there, I redesigned the flow so that the technical limitation worked in favor of the experience, combining the granular customization users asked for, the continuous management from the new API, and a default aligned with actual behavior.',
    },
    heroVideo4: '/assets/drip/new-journey.mp4',
    heroVideo4Webm: '/assets/drip/new-journey.webm',
    heroVideo4Poster: '/assets/drip/new-journey-poster.jpg',
    results: {
      label: 'Results',
      items: [
        'From 2 business days to 8 seconds in a self-service enrollment process, without going through any team.',
        '55% conversion in 3 months for a feature that was previously avoided due to the effort of the manual process.',
        '~6h/day freed from operations by eliminating manual approval.',
      ],
    },
    moreProjectsTitle: 'More projects',
    relatedProjects: [home.en.projects[0], home.en.projects[2]],
    contactTitle: home.en.contactTitle,
    contact: home.en.contact,
    footerRole: home.en.footerRole,
    footerClockSuffix: home.en.footerClockSuffix,
  },
  pt: {
    lang: 'pt',
    backLabel: 'Voltar para Início',
    title: 'Automatizando um processo operacional de dois dias em uma experiência autônoma concluída em segundos',
    client: 'Questrade',
    category: 'Fintech',
    year: '2025',
    summary:
      'A Questrade é a maior corretora online independente do Canadá, gerenciando bilhões em ativos como alternativa aos bancos tradicionais. Nesse projeto, liderei o design da automatização do programa de reinvestimento de dividendos, que eliminou o trabalho manual do time operacional e reduziu o tempo de processamento de 2 dias úteis para 8 segundos.',
    accent: 'green',
    heroImage1: '/assets/drip/featured-image.png',
    details: [
      { label: 'Meu papel', value: 'Product Designer' },
      { label: 'Escopo', value: 'Da descoberta à entrega, ponta a ponta' },
      { label: 'Time', value: 'Product Managers e desenvolvedores' },
    ],
    problem: {
      label: 'O problema',
      body: 'O Reinvestimento de Dividendos (DRIP) é um programa que permite ao cliente usar dividendos recebidos para comprar mais ações automaticamente. Na Questrade, inscrever um cliente no DRIP envolvia PDF, aprovação manual de 3 times operacionais e 2 dias úteis de espera, consumindo cerca de 6 horas por dia da operação. Enquanto isso, concorrentes como Wealthsimple e Robinhood já ofereciam o mesmo processo 100% digital, concluído em minutos.',
    },
    solution: {
      label: 'A solução',
      body: 'Redesenhei a inscrição como um fluxo self-service que o cliente conclui em segundos, sem formulários em PDF nem aprovação manual. Além de resolver o gargalo operacional, a nova experiência permite que o usuário veja, gerencie e altere sua inscrição a qualquer momento, algo que nenhum concorrente direto oferecia na época.',
    },
    impact: {
      label: 'O impacto',
      body: 'Nos primeiros 3 meses após o lançamento, 55% dos clientes elegíveis se inscreveram no programa. A inscrição, que antes levava 2 dias úteis, passou a ser concluída em 8 segundos, e o time operacional recuperou cerca de 6 horas por dia que antes eram gastas em aprovações manuais.',
    },
    keyInsightsSummary: {
      label: 'Três insights principais',
    },
    heroImage2: '/assets/drip/project-snapshot.png',
    insight1: {
      label: 'Insight 01',
      title: 'Do gargalo operacional ao diferencial competitivo: a pesquisa que redefiniu o escopo do projeto',
      body: 'Um mapeamento interno revelou o gargalo que foi nosso ponto de partida: cerca de 6 horas por dia eram dedicadas pelo time operacional para processar inscrições do DRIP manualmente. Ainda não estava claro, porém, como o cliente percebia esse processo. No Reddit, encontrei comentários que descreviam a experiência como "arcaica", e alguns clientes relatavam ter desistido de inscrever novos ativos só pelo esforço envolvido. Essa pesquisa inicial me levou a recrutar 20 usuários que investiam pela Questrade e por concorrentes ao mesmo tempo, para ouvir quem vivia a diferença entre o manual e o digital. O resultado definiu o escopo do projeto ao evidenciar a necessidade de digitalizar o processo e revelar o interesse dos usuários em controlar o reinvestimento de forma granular, escolhendo quais ações reinvestir em cada conta que possuíam, algo que nenhum concorrente oferecia.',
    },
    insight1Image: '/assets/drip/reddit-comments.png',
    insight1ImageAspectRatio: '3576 / 2933',
    insight2: {
      label: 'Insight 02',
      title: 'A experiência ideal como ponto de partida para a nova API',
      body: 'Mapeei as 11 etapas distribuídas entre 3 times operacionais por trás dos 2 dias de espera e descobri que o gargalo não era a análise em si, mas a fila de solicitações e o retrabalho manual com planilhas. Essa descoberta mudou a conversa com engenharia, porque em vez de digitalizar o fluxo existente, decidimos que os requisitos da nova API deveriam partir da experiência que queríamos entregar. Isso significava dar ao usuário visibilidade e controle contínuo da sua inscrição, o que exigia construir uma fonte única da verdade por ativo e por usuário, algo que não existia no sistema legado. Foi esse requisito que destravou tanto o gerenciamento contínuo quanto a inscrição automática de novos ativos.',
    },
    heroImage3: '/assets/drip/previous-journey.png',
    insight3: {
      label: 'Insight 03',
      title: 'Uma limitação técnica pode jogar a favor da experiência quando olhada estrategicamente',
      body: 'O sistema exigia que a inscrição no DRIP cobrisse todos os ativos da conta de uma vez, uma estratégia para possibilitar a migração automática dos usuários já cadastrados no sistema antigo. Inicialmente, isso parecia um bloqueio para oferecer o controle individual por ativo que a pesquisa revelou como oportunidade. Mas, ao olhar para os dados de uso, descobri que 84% da base já inscrevia todos os ativos no DRIP, o que significava que essa exigência já era o default que a maioria seguia. A partir disso, redesenhei o fluxo para que a limitação técnica funcionasse a favor da experiência, unindo a customização granular que os usuários pediam, o gerenciamento contínuo da nova API e um default alinhado ao comportamento real.',
    },
    heroVideo4: '/assets/drip/new-journey.mp4',
    heroVideo4Webm: '/assets/drip/new-journey.webm',
    heroVideo4Poster: '/assets/drip/new-journey-poster.jpg',
    results: {
      label: 'Resultados',
      items: [
        'De 2 dias úteis para 8 segundos em um processo de inscrição self-service, sem passar por nenhum time.',
        '55% de conversão em 3 meses em uma funcionalidade que antes era evitada pelo esforço do processo manual.',
        '~6h/dia liberadas da operação com a eliminação da aprovação manual.',
      ],
    },
    moreProjectsTitle: 'Outros projetos',
    relatedProjects: [home.pt.projects[0], home.pt.projects[2]],
    contactTitle: home.pt.contactTitle,
    contact: home.pt.contact,
    footerRole: home.pt.footerRole,
    footerClockSuffix: home.pt.footerClockSuffix,
  },
};

export const documents: Record<Lang, CaseStudyCopy> = {
  en: {
    lang: 'en',
    backLabel: 'Back to Index',
    title: "Establishing the navigation pattern for self-service tabs in Questrade's app",
    client: 'Questrade',
    category: 'Fintech',
    year: '2025',
    summary:
      "QuestMobile is Questrade's official investment app, the largest independent online brokerage in Canada. In this project, I created the navigation pattern for the app's self-service tabs, starting with the Documents tab, which includes document uploads, form search, statements, and tax slips. The delivery was phased into two releases to ensure tax documents were available in time for the Canadian tax season.",
    accent: 'sage',
    heroImage1: '/assets/documents/featured-image.png',
    heroImage1AspectRatio: '3576 / 1512',
    details: [
      { label: 'My role', value: 'Product Designer' },
      { label: 'Scope', value: 'From discovery to delivery, end to end' },
      { label: 'Team', value: 'Product Managers and developers' },
    ],
    problem: {
      label: 'The problem',
      body: 'With tax season approaching, Questrade needed to make tax slips and statements accessible in the app. Until then, these features only existed on the web portal, along with other self-service areas that also needed to be adapted to mobile. Since all of them were built around the desktop experience, the project became an opportunity to create a single navigation pattern, starting with the tab with the highest seasonal impact.',
    },
    solution: {
      label: 'The solution',
      body: 'By analyzing the self-service tabs, I identified that they all shared the same content nature, which opened the opportunity to create a replicable navigation pattern instead of a custom solution for each tab. This pattern was born in Documents, where I designed the statements and tax slips experience for on-the-go use. Since tax season imposed a real deadline, I phased the delivery into two releases, prioritizing tax slips in phase one to ensure they were in the app on time.',
    },
    impact: {
      label: 'The impact',
      body: 'The navigation pattern created in Documents was adopted by the other self-service tabs in the app, becoming the reference for future implementations. Statements and tax slips became accessible in the app during peak annual demand, with an experience designed for mobile use. The phased delivery in two releases ensured tax documents were available without compromising the tax season deadline.',
    },
    keyInsightsSummary: {
      label: 'Three key insights',
    },
    heroImage2: '/assets/documents/project-snapshot.png',
    insight1: {
      label: 'Insight 01',
      title: 'Different content organized by the same logic, in a structure built to scale from day one',
      body: 'The Documents tab belongs to a family of self-service pages in the app, built for tasks like document uploads, statement lookups, and form search. By analyzing these pages, I noticed they held different content but shared the same nature, which opened the opportunity to standardize instead of creating a custom structure for each tab. I classified the content into three replicable categories: primary actions, snapshots, and history. The hierarchy between them combined each page\'s core job with Analytics data from the web portal, prioritizing blocking actions at the top and calibrating the rest by access frequency. The structure was born in Documents and was ready to be replicated across the remaining tabs.',
    },
    insight1Dual: {
      left: { src: '/assets/documents/page-structure.png' },
      right: {
        video: '/assets/documents/pages.mp4',
        videoWebm: '/assets/documents/pages.webm',
        poster: '/assets/documents/pages-poster.jpg',
      },
    },
    insight2: {
      label: 'Insight 02',
      title: 'Each phase needed to deliver a complete experience, not an incomplete version of the next',
      body: 'The project was to bring the full documents area to the app, but with tax season approaching, I decided to launch tax slips first, since they were the documents that virtually the entire user base would need to access in the following weeks. In phase 2, launched a month later, the Documents page started bringing together other document types, which needed to be accommodated without breaking the flow users had already learned.',
    },
    heroImage3Dual: {
      left: {
        video: '/assets/documents/phase-1.mp4',
        videoWebm: '/assets/documents/phase-1.webm',
        poster: '/assets/documents/phase-1-poster.jpg',
      },
      right: {
        video: '/assets/documents/phase-2.mp4',
        videoWebm: '/assets/documents/phase-2.webm',
        poster: '/assets/documents/phase-2-poster.jpg',
      },
    },
    insight3: {
      label: 'Insight 03',
      title: 'When experience speaks louder than consistency',
      body: 'Consistency was a project value, but it couldn\'t come at the cost of real-world adequacy. On the web portal, statements and tax slips followed the same grouping logic by account. I treated the migration to the app as an opportunity to revisit that structure, wrote usage scenarios, and brought them to an investigation with the PO. We understood that tax slips are downloaded by account (because Canadian tax filing is done account by account), but the most common behavior for statements was searching for a specific month\'s document. Statements were then grouped by month, prioritizing usage efficiency even at the cost of consistency with the web portal.',
    },
    heroImage4: '/assets/documents/statements.png',
    heroImage4AspectRatio: '3576 / 1512',
    results: {
      label: 'Results',
      items: [
        'Created a replicable navigation pattern for all self-service tabs.',
        'Tax documents accessible in the app in time for peak annual demand.',
        'Phased delivery in two releases, without compromising the Canadian tax season deadline.',
      ],
    },
    moreProjectsTitle: 'More projects',
    relatedProjects: [home.en.projects[0], home.en.projects[1]],
    contactTitle: home.en.contactTitle,
    contact: home.en.contact,
    footerRole: home.en.footerRole,
    footerClockSuffix: home.en.footerClockSuffix,
  },
  pt: {
    lang: 'pt',
    backLabel: 'Voltar para Início',
    title: 'Estabelecendo o padrão de navegação para as abas de autoatendimento no app da Questrade',
    client: 'Questrade',
    category: 'Fintech',
    year: '2025',
    summary:
      'O QuestMobile é o app oficial de investimentos da Questrade, a maior corretora online independente do Canadá. Nesse projeto, criei o padrão de navegação para as abas de autoatendimento do app, começando pela aba Documents, que inclui upload de documentos, busca de formulários, statements e tax slips. A entrega foi faseada em dois releases para garantir que os documentos fiscais estivessem disponíveis a tempo da temporada de impostos canadense.',
    accent: 'sage',
    heroImage1: '/assets/documents/featured-image.png',
    heroImage1AspectRatio: '3576 / 1512',
    details: [
      { label: 'Meu papel', value: 'Product Designer' },
      { label: 'Escopo', value: 'Da descoberta à entrega, ponta a ponta' },
      { label: 'Time', value: 'Product Managers e desenvolvedores' },
    ],
    problem: {
      label: 'O problema',
      body: 'Com a temporada de impostos se aproximando, a Questrade precisava garantir que tax slips e statements estivessem acessíveis no app. Até então, essas funcionalidades existiam apenas no portal web, assim como outras áreas self-service que também precisariam ser adequadas à experiência mobile. Como todas partiam da experiência desktop, o projeto se tornou a oportunidade de criar um padrão de navegação único, começando pela aba com maior impacto sazonal.',
    },
    solution: {
      label: 'A solução',
      body: 'Ao analisar as abas self-service, identifiquei que todas compartilhavam a mesma natureza de conteúdo, o que abriu a oportunidade de criar um padrão de navegação replicável em vez de uma solução sob medida para cada aba. Esse padrão nasceu em Documents, onde desenhei a experiência de statements e tax slips pensada para uso on-the-go. Como a temporada de impostos impunha um prazo real, faseei a entrega em dois releases, priorizando tax slips na primeira fase para garantir que estivessem no app a tempo.',
    },
    impact: {
      label: 'O impacto',
      body: 'O padrão de navegação criado em Documents foi adotado pelas demais abas de autoatendimento do app, tornando-se a referência para futuras implementações. Statements e tax slips ficaram acessíveis no app durante o pico anual de demanda, com uma experiência desenhada para uso mobile. A entrega faseada em dois releases garantiu que os documentos fiscais estivessem disponíveis sem comprometer o prazo da temporada de impostos.',
    },
    keyInsightsSummary: {
      label: 'Três insights principais',
    },
    heroImage2: '/assets/documents/project-snapshot.png',
    insight1: {
      label: 'Insight 01',
      title: 'Conteúdos diferentes organizados pela mesma lógica em uma estrutura que nasce pronta para escalar',
      body: 'A aba Documents pertence a uma família de páginas self-service do app, voltadas a tarefas como upload de documentos, consulta de extratos e busca de formulários. Ao analisar essas páginas, percebi que reuniam conteúdos diferentes, mas com a mesma natureza, o que abriu a oportunidade de padronizar em vez de criar uma estrutura sob medida para cada aba. Classifiquei os conteúdos em três categorias replicáveis: ações principais, snapshots e históricos. A hierarquia entre elas combinou o job da página com dados de Analytics do portal web, priorizando ações bloqueantes no topo e calibrando o restante pela frequência de acesso. A estrutura nasceu em Documents e ficou pronta para ser replicada nas demais abas.',
    },
    insight1Dual: {
      left: { src: '/assets/documents/page-structure.png' },
      right: {
        video: '/assets/documents/pages.mp4',
        videoWebm: '/assets/documents/pages.webm',
        poster: '/assets/documents/pages-poster.jpg',
      },
    },
    insight2: {
      label: 'Insight 02',
      title: 'Cada fase precisava entregar uma experiência completa, não uma versão incompleta da próxima',
      body: 'O projeto era levar a área de documentos completa para o app, mas com a tax season se aproximando, decidi lançar tax slips primeiro, por serem os documentos que praticamente toda a base precisaria acessar nas semanas seguintes. Na fase 2, lançada um mês depois, a página de Documents começou a reunir outros tipos de documento, que precisaram ser acomodados sem quebrar o fluxo que os usuários já tinham aprendido.',
    },
    heroImage3Dual: {
      left: {
        video: '/assets/documents/phase-1.mp4',
        videoWebm: '/assets/documents/phase-1.webm',
        poster: '/assets/documents/phase-1-poster.jpg',
      },
      right: {
        video: '/assets/documents/phase-2.mp4',
        videoWebm: '/assets/documents/phase-2.webm',
        poster: '/assets/documents/phase-2-poster.jpg',
      },
    },
    insight3: {
      label: 'Insight 03',
      title: 'Quando a experiência fala mais alto do que a consistência',
      body: 'Consistência era um valor do projeto, mas não podia custar a adequação ao uso real. No portal web, statements e tax slips seguiam a mesma lógica de agrupamento por conta. Tratei a migração para o app como uma oportunidade de revisar essa estrutura, escrevi cenários de uso e levei para uma investigação com o PO. Entendemos que tax slips são baixados por conta (porque a declaração no Canadá é feita conta a conta), mas o comportamento mais comum para statements era buscar o documento de um mês específico. Statements passaram a ser agrupados por mês, priorizando eficiência de uso mesmo com perda de consistência com o portal web.',
    },
    heroImage4: '/assets/documents/statements.png',
    heroImage4AspectRatio: '3576 / 1512',
    results: {
      label: 'Resultados',
      items: [
        'Criação do padrão de navegação replicável para todas as abas self-service.',
        'Documentos financeiros disponíveis no app a tempo do pico anual de demanda.',
        'Entrega faseada em dois releases, sem comprometer a temporada de impostos canadense.',
      ],
    },
    moreProjectsTitle: 'Outros projetos',
    relatedProjects: [home.pt.projects[0], home.pt.projects[1]],
    contactTitle: home.pt.contactTitle,
    contact: home.pt.contact,
    footerRole: home.pt.footerRole,
    footerClockSuffix: home.pt.footerClockSuffix,
  },
};
