import { home, type Lang } from './copy';

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string; aspectRatio: string };

export interface ArticleCopy {
  lang: Lang;
  slug: string;
  backLabel: string;
  title: string;
  subtitle: string;
  readTime: string;
  date: string;
  tags: string;
  sourceLabel: string;
  sourceHref: string;
  body: ArticleBlock[];
  contactTitle: string;
  contact: { label: string; href: string; icon: 'mail' | 'linkedin' | 'medium' | 'github' }[];
  footerRole: string;
  footerClockSuffix: string;
}

const mediumHref = 'https://medium.com/@carolinacajazeira/ensinando-dois-sistemas-de-design-a-conversar-5eb82bac5488';

export const designSystemsClaude: Record<Lang, ArticleCopy> = {
  en: {
    lang: 'en',
    slug: 'design-systems-claude',
    backLabel: 'Back to Index',
    title: 'Teaching two design systems to talk to each other using Claude',
    subtitle: 'How I orchestrated AI agents to cut a 36-hour weekly workflow down to 1 hour',
    readTime: '5 min read',
    date: 'May 12, 2026',
    tags: 'ai, design, claude',
    sourceLabel: 'Originally published on Medium',
    sourceHref: mediumHref,
    body: [
      {
        type: 'paragraph',
        text: "Since joining Wave, I've faced several genuinely interesting challenges. Beyond adapting to a new industry (I moved from fintech to telecom), there was also a new way of working to learn.",
      },
      {
        type: 'paragraph',
        text: "On the projects for the client I work with, preparing handoffs in Figma meant taking every interface component and manually translating it into the language of our internal library, where each smallest interface element is a 'block' with its own specific properties and attributes.",
      },
      {
        type: 'image',
        src: '/assets/articles/block-breakdown.webp',
        alt: "How a component gets 'broken down' into blocks.",
        caption: "How a component gets 'broken down' into blocks.",
        aspectRatio: '1682 / 888',
      },
      { type: 'paragraph', text: 'So the process looked like this:' },
      {
        type: 'list',
        items: [
          'Identify which blocks existed in each interface component',
          'Map the properties each block has',
          'Document each block with its properties in Figma',
          "Share it with the devs so they could generate the JSONs they'd use as the base for implementation.",
        ],
      },
      {
        type: 'paragraph',
        text: 'Manual, repetitive work, but necessary to keep development flowing smoothly. Still, I was spending around 36 hours a week on this process. There was barely room left for anything else in the week.',
      },
      {
        type: 'paragraph',
        text: 'That’s when I started thinking about how to optimize the process to save time.',
      },
      { type: 'heading', text: 'Why "automate" wasn’t the right word' },
      {
        type: 'paragraph',
        text: 'My first instinct was to put together documentation directly in Figma and ask the devs for help writing a script that could automate the matching between Figma components and blocks.',
      },
      {
        type: 'paragraph',
        text: "The problem is that the two systems run on different logic. In the client's design system, a component is one complete unit. In our library, that same component might break down into several blocks, or simply have no equivalent at all. A direct match isn't possible.",
      },
      {
        type: 'paragraph',
        text: 'A script follows rules, but what I actually needed was something that could interpret context.',
      },
      {
        type: 'paragraph',
        text: "From that realization, I started exploring agent orchestration using Claude. Not because I already understood the concept deeply, but because I understood that the problem called for a solution that could 'reason', rather than just execute a chain of rules.",
      },
      { type: 'heading', text: 'How the agents "learn" to translate' },
      {
        type: 'image',
        src: '/assets/articles/agent-orchestration.png',
        alt: 'The agent orchestration process.',
        caption: 'The agent orchestration process.',
        aspectRatio: '2000 / 908',
      },
      {
        type: 'paragraph',
        text: "The core logic is simple to understand: the orchestrator reads our entire block library, with all its properties, variants, and rules. Then it reads the client's component. Instead of trying to make a direct one-to-one match, it breaks the client's component down to the smallest possible unit and tries to rebuild it using the blocks' vocabulary.",
      },
      {
        type: 'paragraph',
        text: 'It works like a translator that understands grammar, not like a dictionary that just explains what each word means.',
      },
      {
        type: 'paragraph',
        text: 'The result is a representation of the full structure: the parent component and all the child blocks inside it, with the correct properties, in whichever format I choose — documentation directly in Figma, or a ready-made JSON, in the format the devs need for implementation.',
      },
      {
        type: 'paragraph',
        text: "When a block or property doesn't exist in our library, the agent doesn't ignore it; it flags it and logs it in a spreadsheet. That became part of the process, and eventually we'll have a list of gaps to evaluate and decide whether it's worth creating new blocks in our library or thinking of another approach.",
      },
      { type: 'heading', text: 'Four problems solved at once' },
      {
        type: 'paragraph',
        text: "When I started mapping out what I needed to solve, I realized it wasn't one problem. It was four:",
      },
      {
        type: 'list',
        items: [
          "Documentation in Figma: translated components are documented automatically, following our blocks API's standard. What used to take hours per component now happens in seconds.",
          "Gap mapping: when something doesn't exist in the library, the agent highlights it. Nothing gets forgotten.",
          'JSON generation: the file devs use as the base for implementation is generated with the full structure, parent and children. This cut their side of the work by 50%.',
          "Clean SVGs: some of the client's design system icons used masks that broke during implementation. The agents detect when this happens and remove those masks and hidden layers, delivering clean SVG files ready for implementation.",
        ],
      },
      {
        type: 'paragraph',
        text: 'The whole process, from reading the API to the final documentation, happens directly in Figma, using a plugin I also built with Claude.',
      },
      {
        type: 'image',
        src: '/assets/articles/figma-docs-demo.gif',
        alt: 'Block documentation in Figma',
        caption: 'Block documentation in Figma',
        aspectRatio: '1232 / 704',
      },
      { type: 'heading', text: '36 hours back' },
      {
        type: 'paragraph',
        text: "What used to take up nearly my entire week now happens in 1 hour, sometimes less. After generating all the documentation, I review the agents' output, adjust anything that wasn't found in the API, and that's it. This changed not just how I work, but also gave me time to focus on other tasks and keep up the quality of what I deliver.",
      },
      {
        type: 'paragraph',
        text: 'Of course the agents make mistakes. Not often, but especially on heavily customized components, where the gap between the two languages is too wide for a clean interpretation.',
      },
      {
        type: 'paragraph',
        text: "The most frequent case is a component that uses Figma's auto layout: when the spacing between elements is set to 'auto', for instance, the agent interprets auto as zero, and the blocks end up glued together when the JSON is rendered. It's a small error, but it shows up regularly enough to stay on the radar, and for now it still needs to be corrected manually.",
      },
      {
        type: 'paragraph',
        text: "Human review is still part of the process, and I think it probably always will be. The goal was never to eliminate our team's review, but to optimize, and maybe eliminate, the mechanical and repetitive work that used to eat up so much time every sprint.",
      },
      { type: 'heading', text: 'Process design is design too ✨' },
      {
        type: 'paragraph',
        text: 'The whole orchestration was built with Claude. What I learned is key to making any of this work is thinking the problem through carefully before picking the tool. First, define the comparison rules, the expected output structure, the edge cases. The AI did the heavy lifting, but the process design was 100% human.',
      },
    ],
    contactTitle: home.en.contactTitle,
    contact: home.en.contact,
    footerRole: home.en.footerRole,
    footerClockSuffix: home.en.footerClockSuffix,
  },
  pt: {
    lang: 'pt',
    slug: 'design-systems-claude',
    backLabel: 'Voltar para Início',
    title: 'Ensinando dois sistemas de design a conversar com Claude',
    subtitle: 'Como orquestrei agentes de IA para diminuir o fluxo de trabalho de 36h semanais para 1h',
    readTime: '5 min de leitura',
    date: '12 mai 2026',
    tags: 'ai, design, claude',
    sourceLabel: 'Publicado originalmente no Medium',
    sourceHref: mediumHref,
    body: [
      {
        type: 'paragraph',
        text: 'Desde que me juntei à Wave, tenho encontrado vários desafios extremamente interessantes. Começando pela adaptação a uma nova indústria (saí de fintech para telecom), ainda havia um novo processo de trabalho.',
      },
      {
        type: 'paragraph',
        text: "Nos projetos do cliente com o qual eu trabalho, ao preparar handoffs no Figma, era necessário pegar cada componente da interface e traduzir manualmente para a linguagem da nossa biblioteca interna, em que cada menor elemento da interface é um 'block' com propriedades e atributos específicos.",
      },
      {
        type: 'image',
        src: '/assets/articles/block-breakdown.webp',
        alt: "Como um componente é 'quebrado' em block.",
        caption: "Como um componente é 'quebrado' em block.",
        aspectRatio: '1682 / 888',
      },
      { type: 'paragraph', text: 'Então o processo era:' },
      {
        type: 'list',
        items: [
          'Identificar quais blocks existiam em cada componente da interface',
          'Mapear as propriedades que cada block possui',
          'Documentar cada block com suas propriedades no Figma',
          'Compartilhar com os devs para que eles pudessem gerar os JSONs que iriam usar como base para a implementação.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Trabalho manual, repetitivo, mas muito necessário para garantir fluidez no desenvolvimento. No entanto, eu passava cerca de 36 horas semanais nesse processo. Quase nada mais cabia na semana.',
      },
      {
        type: 'paragraph',
        text: 'Foi aí que comecei a pensar em como otimizar o processo para economizar tempo.',
      },
      { type: 'heading', text: 'Por que “automatizar” não era a palavra certa' },
      {
        type: 'paragraph',
        text: 'Meu primeiro instinto foi preparar uma documentação no próprio Figma e pedir ajuda aos devs para escrever um script capaz de automatizar a correspondência entre componentes do Figma e blocks.',
      },
      {
        type: 'paragraph',
        text: 'O problema é que os dois sistemas funcionam com lógicas diferentes. No design system do cliente, um componente é uma unidade completa. Na nossa biblioteca, esse mesmo componente pode se quebrar em vários blocks ou simplesmente não ter equivalente nenhum. Não dá pra fazer uma correspondência direta.',
      },
      {
        type: 'paragraph',
        text: 'Um script segue regras, mas o que eu precisava mesmo era de algo que interpretasse o contexto.',
      },
      {
        type: 'paragraph',
        text: "A partir dessa constatação, eu comecei a explorar uma orquestração de agentes utilizando o Claude. Não fiz isso porque dominava o conceito, mas porque entendia que aquele problema pedia uma solução que 'raciocinasse', em vez de apenas executar uma série de regras encadeadas.",
      },
      { type: 'heading', text: 'Como os agentes “aprendem” a traduzir' },
      {
        type: 'image',
        src: '/assets/articles/agent-orchestration.png',
        alt: 'Processo de orquestração dos agentes.',
        caption: 'Processo de orquestração dos agentes.',
        aspectRatio: '2000 / 908',
      },
      {
        type: 'paragraph',
        text: 'A lógica central é simples de entender: o orquestrador lê a nossa biblioteca inteira de blocks, com todas as propriedades, variantes e regras. Depois lê o componente do cliente. Então, em vez de tentar fazer uma correspondência direta de um para um, ele desmonta o componente do cliente até a menor unidade possível e tenta reconstruí-lo usando o vocabulário dos blocks.',
      },
      {
        type: 'paragraph',
        text: 'Ele funciona como um tradutor que entende gramática, não como um dicionário que explica o que cada palavra significa.',
      },
      {
        type: 'paragraph',
        text: 'O resultado é a representação da estrutura completa: o componente pai e todos os blocks filhos dentro dele, com as propriedades corretas no formato que eu escolher: documentação direta no Figma, ou um JSON pronto, no formato que os devs precisam para implementar.',
      },
      {
        type: 'paragraph',
        text: 'Quando um block ou propriedade não existe na nossa biblioteca, o agente não ignora; ele sinaliza e documenta em uma planilha. Isso virou parte do processo e, mais tarde, teremos uma lista de gaps para avaliar e decidir se vale criar blocks novos dentro da nossa biblioteca ou pensar em outra abordagem.',
      },
      { type: 'heading', text: 'Quatro problemas resolvidos de uma vez' },
      {
        type: 'paragraph',
        text: 'Quando comecei a mapear o que precisava resolver, percebi que não era um problema. Eram quatro:',
      },
      {
        type: 'list',
        items: [
          'Documentação no Figma: os componentes traduzidos são documentados automaticamente, seguindo o padrão da nossa API de blocks. O que antes eu demorava horas para fazer por componente, agora acontece em segundos.',
          'Mapeamento de gaps: quando algo não existe na biblioteca, o agente destaca. Nada cai no esquecimento.',
          'Geração de JSON: o arquivo que os devs usam como base para implementação é gerado com a estrutura completa, pai e filhos. Isso reduziu em 50% o trabalho do lado deles.',
          'SVGs limpos: alguns ícones do design system do cliente usavam máscaras que quebravam na implementação. Os agentes identificam quando isso acontece e removem essas máscaras e camadas ocultas, entregando arquivos SVG limpos e prontos para implementação.',
        ],
      },
      {
        type: 'paragraph',
        text: 'O processo inteiro, da leitura da API à documentação final, acontece direto no Figma utilizando o plugin que também gerei com o Claude.',
      },
      {
        type: 'image',
        src: '/assets/articles/figma-docs-demo.gif',
        alt: 'Documentação de blocks no Figma',
        caption: 'Documentação de blocks no Figma',
        aspectRatio: '1232 / 704',
      },
      { type: 'heading', text: '36 horas de volta' },
      {
        type: 'paragraph',
        text: 'O que antes exigia quase a minha dedicação exclusiva durante a semana agora é feito em 1 hora, às vezes menos. Após gerar toda a documentação, eu reviso o output dos agentes, ajusto o que não foi encontrado na API e pronto. Isso mudou não só o meu trabalho, mas também me deu tempo para focar em outras tarefas e manter a qualidade das entregas.',
      },
      {
        type: 'paragraph',
        text: 'Claro que os agentes erram. Não com frequência, mas erram especialmente em componentes muito customizados, onde a distância entre as duas linguagens é grande demais pra uma interpretação sem ruídos.',
      },
      {
        type: 'paragraph',
        text: "O caso mais frequente é um componente que usa o autolayout do Figma: quando o espaçamento entre elementos está definido como “auto”, por exemplo, o agente interpreta que auto = zero e os blocks aparecem colados quando o JSON é renderizado. É um erro pequeno, mas que aparece com regularidade suficiente pra estar no radar e, atualmente, ainda precisa ser corrigido manualmente.",
      },
      {
        type: 'paragraph',
        text: 'A revisão humana ainda é parte do processo e penso que provavelmente sempre vai ser. O objetivo nunca foi eliminar a revisão do nosso time, mas otimizar e talvez eliminar, sim, o trabalho mecânico e repetitivo que consumia muito tempo em cada sprint.',
      },
      { type: 'heading', text: 'Design de processo também é design ✨' },
      {
        type: 'paragraph',
        text: 'Toda a orquestração foi construída com Claude. O que eu aprendi que é chave para viabilizar tudo é pensar bem no problema antes de escolher a ferramenta. Primeiro, definir as regras de comparação, a estrutura do output esperado, os casos de exceção. A IA fez o trabalho pesado, mas o design do processo foi 100% humano.',
      },
    ],
    contactTitle: home.pt.contactTitle,
    contact: home.pt.contact,
    footerRole: home.pt.footerRole,
    footerClockSuffix: home.pt.footerClockSuffix,
  },
};
