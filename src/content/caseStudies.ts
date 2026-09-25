import { home, type Lang, type ProjectCopy } from './copy';

export interface SplitSectionCopy {
  label: string;
  body: string;
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
  details: { label: string; value: string }[];
  problem: SplitSectionCopy;
  solution: SplitSectionCopy;
  impact: SplitSectionCopy;
  keyInsightsSummary: SplitSectionCopy;
  heroImage2?: string;
  insight1: InsightCopy;
  gallery?: string[];
  insight2: InsightCopy;
  heroImage3?: string;
  insight3: InsightCopy;
  heroImage4?: string;
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
      body: '01. Fewer decisions per screen, more clarity for a non-technical audience 02. Real-time feedback that builds credibility at every step 03. A scope constraint that led to a simpler interface to use and maintain',
    },
    insight1: {
      label: 'Insight 01',
      title: 'Fewer decisions per screen, more clarity for a non-technical audience',
      body: "The onboarding was designed to reduce the cognitive load of a flow that requires multiple decisions: branding setup, territory selection, data layers, and legend configuration. By designing a progressive form with one decision per step, optional steps, and free navigation to go back, users can stay focused on the current task while the complexity behind the dashboard setup stays hidden from the platform's target audience of non-technical users.",
    },
    insight2: {
      label: 'Insight 02',
      title: 'Real-time feedback that builds credibility at every step',
      body: "As the user configures the dashboard, the platform renders a real-time preview using actual MapBiomas data. Every choice of territory, data layer, or time period is immediately reflected on screen, providing visibility into what's being built and confidence in data quality before finalizing. To sustain this without impacting performance, we pre-processed the geoprocessing data from Google Earth Engine.",
    },
    insight3: {
      label: 'Insight 03',
      title: 'A scope constraint that led to a simpler interface to use and maintain',
      body: "With three months to go from zero to production, building separate flows for creating a new dashboard and editing an existing one wasn't feasible. The short-term solution was to design a single interface that serves both moments. In the end, what started as a way to meet a tight deadline proved strong enough to be adopted as the permanent solution, simplifying maintenance and giving users a single mental model for creating and editing.",
    },
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
      body: '01. Menos decisões por tela e mais clareza para um público não-técnico 02. Feedback em tempo real, que garante credibilidade a cada passo 03. Uma restrição de escopo levou a uma interface mais simples de usar e manter',
    },
    insight1: {
      label: 'Insight 01',
      title: 'Menos decisões por tela e mais clareza para um público não-técnico',
      body: 'O onboarding foi desenhado para reduzir a carga cognitiva de um fluxo que exige várias decisões: definição da identidade visual, seleção de territórios, camadas de dados e configuração de legendas. Ao projetar um formulário progressivo com uma decisão por vez, passos opcionais e navegação livre para voltar, é possível manter o foco na tarefa atual e reduzir a complexidade por trás do fluxo de configuração para o público-alvo da plataforma, formado por pessoas não técnicas.',
    },
    insight2: {
      label: 'Insight 02',
      title: 'Feedback em tempo real, que garante credibilidade a cada passo',
      body: 'À medida que o usuário configura o dashboard, a plataforma monta uma prévia em tempo real com os dados reais do MapBiomas. Cada escolha de território, camada ou período se reflete imediatamente na tela, dando visibilidade do que está sendo construído e confiança na qualidade dos dados antes mesmo de finalizar. Para sustentar isso sem pesar na performance e garantir o preview, pré-processamos os dados de geoprocessamento vindos do Google Earth Engine.',
    },
    insight3: {
      label: 'Insight 03',
      title: 'Uma restrição de escopo levou a uma interface mais simples de usar e manter',
      body: 'Com três meses para ir do zero à produção, criar fluxos específicos para configurar um dashboard novo e editar um já existente não era viável. A solução de curto prazo foi criar uma interface única que serve aos dois momentos. No fim, o que nasceu para viabilizar a versão 1 em um prazo curto se provou forte o suficiente para ser adotada como definitiva, simplificando a manutenção e dando ao usuário um único modelo mental para criar e editar.',
    },
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
