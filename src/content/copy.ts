export type Lang = 'en' | 'pt';

export interface ProjectCopy {
  slug: string;
  client: string;
  category: string;
  year: string;
  title: string;
  description: string;
  thumb: 'mapbiomas' | 'drip' | 'documents';
  accent: 'blue' | 'green' | 'sage';
}

export interface ArticleCopy {
  slug: string;
  readTime: string;
  date: string;
  tags: string;
  title: string;
  excerpt: string;
}

export interface HomeCopy {
  lang: Lang;
  name: string;
  tagline: string;
  bio: string;
  recentWorkTitle: string;
  projects: ProjectCopy[];
  articlesTitle: string;
  articles: ArticleCopy[];
  contactTitle: string;
  contact: { label: string; href: string; icon: 'mail' | 'linkedin' | 'medium' | 'github' }[];
  footerRole: string;
  footerClockSuffix: string;
}

const contactLinks = [
  { label: { en: 'Mail', pt: 'E-mail' }, href: 'mailto:cajadesigner@gmail.com', icon: 'mail' as const },
  { label: { en: 'LinkedIn', pt: 'LinkedIn' }, href: 'https://www.linkedin.com/in/carolinacajazeira/', icon: 'linkedin' as const },
  { label: { en: 'Medium', pt: 'Medium' }, href: 'https://medium.com/@carolinacajazeira', icon: 'medium' as const },
  { label: { en: 'Github', pt: 'Github' }, href: 'https://github.com/akacaja', icon: 'github' as const },
];

export const home: Record<Lang, HomeCopy> = {
  en: {
    lang: 'en',
    name: 'Carolina Cajazeira',
    tagline: 'Product Designer based in Brasil, working globally 🌎',
    bio: "For 9 years I've been simplifying complex systems across industries like fintech, telecom, environmental monitoring, and e-commerce. My work has reduced processes from days to seconds, eliminated operational bottlenecks, and accelerated product adoption. Currently, I lead the design of a server-driven UI platform at Bemobi Wave.",
    recentWorkTitle: 'Recent work',
    projects: [
      {
        slug: 'mapbiomas',
        client: 'MapBiomas',
        category: 'Environmental Monitoring',
        year: '2026',
        title: 'Designing the tool that turned 40 years of environmental data into autonomous analyses',
        description:
          "I designed the flows that turn MapBiomas' environmental mapping, active since 1985, into customizable dashboards, enabling institutions, researchers, and policymakers to build their own analyses autonomously. Within 5 days of launch, 100 institutions joined the waitlist, surpassing the year's target.",
        thumb: 'mapbiomas',
        accent: 'blue',
      },
      {
        slug: 'drip',
        client: 'Questrade',
        category: 'Fintech',
        year: '2025',
        title: 'Automating a two-day operational process into an autonomous experience completed in seconds',
        description:
          'I led the automation of the dividend reinvestment program enrollment, transforming a manual process into a flow the client completes on their own. In the first 3 months, 55% of eligible clients enrolled and the solution freed up about 6 hours per day from the operations team.',
        thumb: 'drip',
        accent: 'green',
      },
      {
        slug: 'documents',
        client: 'Questrade',
        category: 'Fintech',
        year: '2024',
        title: "Establishing the navigation pattern for self-service tabs in Questrade's app",
        description:
          'I designed access to tax documents in QuestMobile, including upload, search, and statement viewing. The delivery was split into phases to ensure clients had access to critical documents before Canadian tax season. The project also established the replicable navigation pattern for the remaining self-service tabs in the app.',
        thumb: 'documents',
        accent: 'sage',
      },
    ],
    articlesTitle: 'Articles',
    articles: [
      {
        slug: 'design-systems-claude',
        readTime: '5 min read',
        date: 'May 12, 2026',
        tags: 'ai, design, claude',
        title: 'Teaching two design systems to talk to each other using Claude',
        excerpt: 'How I orchestrated AI agents to cut a 36-hour weekly workflow down to 1 hour',
      },
    ],
    contactTitle: "Let's connect! :)",
    contact: contactLinks.map((c) => ({ label: c.label.en, href: c.href, icon: c.icon })),
    footerRole: 'Product Designer',
    footerClockSuffix: 'in Brazil',
  },
  pt: {
    lang: 'pt',
    name: 'Carolina Cajazeira',
    tagline: 'Product designer brasileira, trabalhando globalmente 🌎',
    bio: 'Há 9 anos simplifico sistemas complexos em indústrias como fintech, telecom, monitoramento ambiental e e-commerce. O meu trabalho já reduziu processos de dias para segundos, eliminou gargalos operacionais e acelerou a adoção de produtos. Atualmente, lidero o design de uma plataforma de interfaces server-driven na Bemobi Wave.',
    recentWorkTitle: 'Projetos recentes',
    projects: [
      {
        slug: 'mapbiomas',
        client: 'MapBiomas',
        category: 'Monitoramento Ambiental',
        year: '2026',
        title: 'Projetando a ferramenta que transformou 40 anos de dados ambientais em análises autônomas',
        description:
          'Desenhei os fluxos que transformam o mapeamento ambiental do MapBiomas, ativo desde 1985, em dashboards personalizáveis, permitindo que instituições, pesquisadores e gestores montem suas próprias análises de forma autônoma. Em 5 dias após o lançamento, 100 instituições entraram na fila de espera, ultrapassando a meta prevista para o ano.',
        thumb: 'mapbiomas',
        accent: 'blue',
      },
      {
        slug: 'drip',
        client: 'Questrade',
        category: 'Fintech',
        year: '2025',
        title: 'Automatizando um processo operacional de dois dias em uma experiência autônoma concluída em segundos',
        description:
          'Liderei a automatização da inscrição no programa de reinvestimento de dividendos, transformando um processo manual em um fluxo que o cliente conclui por conta própria. Nos primeiros 3 meses, 55% dos clientes elegíveis aderiram e a solução liberou cerca de 6 horas por dia do time operacional.',
        thumb: 'drip',
        accent: 'green',
      },
      {
        slug: 'documents',
        client: 'Questrade',
        category: 'Fintech',
        year: '2024',
        title: 'Estabelecendo o padrão de navegação para as abas de autoatendimento no app da Questrade',
        description:
          'Projetei o acesso a documentos fiscais no QuestMobile, incluindo upload, busca e consulta de comprovantes. A entrega foi dividida em fases para garantir que o cliente tivesse acesso aos documentos críticos antes da temporada fiscal canadense. O projeto também estabeleceu o padrão de navegação replicável para as demais abas de autoatendimento do app.',
        thumb: 'documents',
        accent: 'sage',
      },
    ],
    articlesTitle: 'Artigos',
    articles: [
      {
        slug: 'design-systems-claude',
        readTime: '5 min de leitura',
        date: '12 mai 2026',
        tags: 'ai, design, claude',
        title: 'Ensinando dois sistemas de design a conversar com Claude',
        excerpt: 'Como orquestrei agentes de IA para diminuir o fluxo de trabalho de 36h semanais para 1h',
      },
    ],
    contactTitle: 'Manda um oi! :)',
    contact: contactLinks.map((c) => ({ label: c.label.pt, href: c.href, icon: c.icon })),
    footerRole: 'Product Designer',
    footerClockSuffix: 'no Brasil',
  },
};
