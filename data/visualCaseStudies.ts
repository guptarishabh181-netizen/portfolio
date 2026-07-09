export interface VisualAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  maxWidth?: number;
  caption?: string;
}

export interface VisualSection {
  eyebrow?: string;
  title?: string;
  headline?: string;
  body?: string[];
  assets?: VisualAsset[];
  variant?: 'default' | 'pill';
  problemIdentification?: {
    title: string;
    body: string;
    points: string[];
  };
}

export interface VisualCaseStudy {
  slug: string;
  category: string;
  accentColor: string;
  titleFontClass?: string;
  headlineFontClass?: string;
  bodyFontClass?: string;
  title: string;
  titleVariant?: 'default' | 'large' | 'wide';
  overview: string;
  role: string;
  team: string[];
  timeline: string;
  skills: string[];
  hero: VisualAsset;
  businessGoal: {
    title: string;
    headline: string;
    highlight: string;
    afterHighlight?: string;
    body: string;
  };
  userProblem: {
    title: string;
    headline: string;
    highlight: string;
    afterHighlight?: string;
    body: string;
    headlineSegments?: Array<{
      text: string;
      highlight?: boolean;
    }>;
  };
  tlds?: {
    label: string;
    title: string;
    ctaLabel?: string;
    asset?: VisualAsset;
  };
  metrics?: Array<{
    value: string;
    title: string;
    body: string;
  }>;
  metricsVariant?: 'default' | 'panel';
  sections: VisualSection[];
  learnings: Array<{
    title: string;
    body: string;
    dark?: boolean;
  }>;
  showMoreCaseStudies?: boolean;
  showFooter?: boolean;
  learningsVariant?: 'default' | 'panel';
  endSpacer?: number;
}

const adaaptBase = '/case-studies/adaapt';
const hocBase = '/case-studies/house-of-calisthenics';
const medwikiBase = '/case-studies/medwiki';

export const visualCaseStudies: Record<string, VisualCaseStudy> = {
  'adaapt-ai-workforce-analytics': {
    slug: 'adaapt-ai-workforce-analytics',
    category: 'Webpage design',
    accentColor: '#4B3EF2',
    titleFontClass: 'font-family-karla',
    headlineFontClass: 'font-family-inter',
    bodyFontClass: 'font-family-karla',
    titleVariant: 'large',
    title: 'Website for enterprise AI for Workforce Analytics',
    overview:
      'Redesigned the experience to simplify complex AI capabilities into intuitive, role-based journeys, helping users quickly understand what the product does, why it matters, and how it fits into their workflow. The new approach focused on clarity, structured information, and decision-oriented navigation to improve engagement and conversions.',
    role: 'Co-Founder/ Designer/ Strategist',
    team: ['Me', 'F2', 'F3', 'PM', 'UR', 'Tech'],
    timeline: '2026 Q1',
    skills: [
      'Product Strategy',
      'UX/UI Design',
      'AI Integration',
      'Workflow Design',
      'User Research',
      'Information Architecture',
      'Conversion Optimization',
    ],
    hero: {
      src: `${adaaptBase}/cover.png`,
      alt: 'Adaapt AI workforce analytics landing page cover',
      width: 2240,
      height: 1274,
    },
    businessGoal: {
      title: 'Client Vision',
      headline: 'Adaapt aimed to be a self-serve',
      highlight: 'AI platform for team-wide insights.',
      body:
        'The vision was to shift from a technical, feature-heavy narrative to a clear, outcome-driven experience where users could instantly understand how the product applies to their role and drives real business impact.',
    },
    userProblem: {
      title: 'User Problem & Solution',
      headline: 'Clarify-first experience that drives',
      highlight: 'faster understanding and engagement.',
      body:
        'Users were interested in the product but struggled to understand its capabilities, relevance to their role, and how to get started, leading to hesitation and drop-offs. The solution focused on restructuring the experience with role-based navigation, simplified messaging, and clear pathways, helping users quickly grasp value, explore relevant use cases, and move toward meaningful action with confidence.',
    },
    tlds: {
      label: 'What we shipped',
      title:
        "Redesigned Adaapt's enterprise AI experience by simplifying complex data workflows into a clearer, more conversion-focused single-page journey.",
      asset: {
        src: `${adaaptBase}/tlds.png`,
        alt: 'Adaapt responsive landing page preview',
        width: 2174,
        height: 1316,
      },
    },
    sections: [
      {
        eyebrow: 'How Did I approached?',
        variant: 'pill',
        assets: [
          {
            src: `${adaaptBase}/process-timeline.png`,
            alt: 'Adaapt process timeline',
            width: 2264,
            height: 586,
          },
        ],
      },
      {
        eyebrow: 'Scope of the work',
        title: 'Clarifying the core product story and page scope',
        body: [
          'The scope focused on information architecture, user flow, design system consistency, precision asset creation, and conversion-focused interaction patterns.',
          'The goal was to help users understand what Adaapt does, how the platform works, and why AI-powered workforce analytics matters to each role.',
        ],
        assets: [
          {
            src: `${adaaptBase}/scope-cards.png`,
            alt: 'Adaapt scope and work cards',
            width: 2190,
            height: 1080,
          },
        ],
      },
      {
        eyebrow: 'Design Approach',
        title: "Structuring client's Ideation",
        body: [
          "Before moving into visual design, I focused on structuring the experience around how users understand Adaapt's core value, turning complex data into simple, actionable insights.",
          'Instead of designing screens in isolation, I mapped out how users would move across key sections like the hero, solutions, features, and case studies.',
          'The goal was to ensure a clear narrative flow from what Adaapt does, to how it works, to why it matters.',
        ],
        assets: [
          {
            src: `${adaaptBase}/strategy-cards.png`,
            alt: 'Adaapt value proposition and strategy cards',
            width: 1472,
            height: 714,
            maxWidth: 760,
          },
        ],
      },
      {
        eyebrow: 'Mid-Fidelity Wireframe',
        title: 'Designing the Structure Before the Surface',
        body: [
          'I created low-fidelity wireframes to validate structure, hierarchy, and user flow, while keeping competitors and user flow in mind.',
          'The focus was not on visuals, but on ensuring clarity. Each section was designed to answer a specific user question and guide them toward the next step.',
        ],
        assets: [
          {
            src: `${adaaptBase}/wireframes.png`,
            alt: 'Adaapt low fidelity wireframes',
            width: 1526,
            height: 2490,
            maxWidth: 763,
          },
        ],
      },
      {
        eyebrow: 'Design system',
        title: 'Visual Foundation: Grid, Colors, Typography & Icons',
        body: [
          'To ensure the Adaapt experience felt scalable and cohesive, I established a foundational design system covering the grid structure, typography, colors, spacing, and iconography before moving into high-fidelity exploration.',
          'The focus was on creating reusable patterns and a consistent visual language that could support complex enterprise content while still feeling approachable and easy to navigate.',
        ],
        assets: [
          {
            src: `${adaaptBase}/grid-system.png`,
            alt: 'Adaapt grid system',
            width: 1526,
            height: 714,
            maxWidth: 763,
          },
          {
            src: `${adaaptBase}/typography-tokens.png`,
            alt: 'Adaapt typography, colors, and icon tokens',
            width: 1526,
            height: 2214,
            maxWidth: 763,
          },
        ],
      },
      {
        eyebrow: 'Feature card components',
        title: 'Designing the Structure Before the Surface',
        body: [
          'I translated the wireframe structure into reusable feature cards, query states, dashboard previews, and role-based sections.',
          'The final components were designed to make dense analytics feel easier to scan, understand, and act on.',
        ],
        assets: [
          {
            src: `${adaaptBase}/final-ui.png`,
            alt: 'Adaapt final UI sections',
            width: 1526,
            height: 2530,
            maxWidth: 763,
          },
        ],
      },
    ],
    learnings: [
      {
        title: 'Design is More Than Visuals',
        body:
          'The project reinforced that good UX is not just about aesthetics - it is about creating direction, confidence, and clarity throughout the experience.',
        dark: true,
      },
      {
        title: 'Enterprise UX Should Feel Human',
        body:
          'Even data-heavy platforms can feel approachable when content hierarchy, storytelling, and interactions are designed thoughtfully.',
      },
      {
        title: 'Less Friction, Better Decisions',
        body:
          'Reducing unnecessary choices and guiding users through a clearer flow helped improve engagement and decision-making.',
      },
      {
        title: 'Systems Create Scalability',
        body:
          'Building reusable patterns and consistent UI foundations early made the experience more cohesive and easier to scale across sections.',
        dark: true,
      },
    ],
  },
  'house-of-calisthenics': {
    slug: 'house-of-calisthenics',
    category: 'Web Design',
    accentColor: '#B90D13',
    titleFontClass: 'font-family-arimo',
    headlineFontClass: 'font-family-arimo',
    bodyFontClass: 'font-family-arimo',
    titleVariant: 'large',
    title: 'Redesigning an Online Calisthenics Platform for Higher Conversions',
    overview:
      'House of Calisthenics had strong traction, but the website was not converting. Users struggled to understand the offerings, especially online coaching. The redesign focuses on simplifying navigation, clarifying services, and driving conversions.',
    role: 'Design Strategy, UI, UX, User Research',
    team: ['Me', 'D2', 'PM', 'CW'],
    timeline: '2024 Q4',
    skills: [
      'Design Strategy',
      'UX Research',
      'IA',
      'User Flows',
      'Wire-framing',
      'Interaction Design',
      'Visual Design',
      'Prototyping',
      'Usability Thinking',
    ],
    hero: {
      src: `${hocBase}/cover.jpg`,
      alt: 'House of Calisthenics website redesign cover',
      width: 2240,
      height: 1274,
    },
    businessGoal: {
      title: 'Business goal',
      headline: 'Streamline navigation, and',
      highlight: 'improve conversion rates',
      afterHighlight: 'for online training services.',
      body:
        'The focus was on reducing drop-offs and guiding users toward signing up for training programs, especially online coaching, by making services easier to understand and quicker to act on.',
    },
    userProblem: {
      title: 'User Problem & Solution',
      headline: '',
      highlight: 'Simplified flow',
      afterHighlight: 'that drives clearer decisions and signups.',
      body:
        'Users were interested but confused, they could not clearly understand the difference between services or how online coaching worked, leading to low signups. The solution was to simplify the structure, clearly communicate each offering, and introduce stronger CTAs, helping users move from exploration to action with minimal friction.',
    },
    tlds: {
      label: 'What we shipped',
      title:
        "Redesigned experience focused on helping users quickly understand House of Calisthenics' training programs, coaching model, and onboarding journey.",
      ctaLabel: 'Go to Website',
      asset: {
        src: `${hocBase}/tlds.jpg`,
        alt: 'House of Calisthenics desktop and mobile website preview',
        width: 2174,
        height: 1316,
      },
    },
    metrics: [
      {
        value: '+30%',
        title: 'Increase in lead signups',
        body: 'Clearer services structure & stronger CTAs improved user action.',
      },
      {
        value: '-15%',
        title: 'Reduction in bounce rate',
        body: 'Simplified navigation helped users stay and explore more about HOC.',
      },
      {
        value: '+25%',
        title: 'Higher engagement time',
        body: 'Better copy flow and clarity kept users engaged longer.',
      },
    ],
    metricsVariant: 'panel',
    sections: [
      {
        eyebrow: 'How Did I approached?',
        variant: 'pill',
        assets: [
          {
            src: `${hocBase}/process-timeline.jpg`,
            alt: 'House of Calisthenics process timeline',
            width: 2264,
            height: 586,
          },
        ],
      },
      {
        problemIdentification: {
          title: 'Problem Identification',
          body:
            "Users were interested in calisthenics training but struggled to understand the platform's offerings. Unclear service differentiation and lack of explanation around online coaching led to confusion, drop-offs, and low conversions.",
          points: [
            'Unclear difference between training programs',
            'Weak CTA visibility',
            'No clear starting point for beginners',
            'Online coaching not explained properly',
            'Overwhelming and unstructured content',
          ],
        },
        assets: [
          {
            src: `${hocBase}/personas.jpg`,
            alt: 'House of Calisthenics personas',
            width: 2190,
            height: 1080,
          },
        ],
      },
      {
        eyebrow: 'Research & Ideation',
        title: 'How we Conduct Research',
        body: [
          'Before moving into visual design, I analyzed user behavior, drop-offs, and interaction patterns to identify where users were getting stuck.',
          'The goal was to ensure every screen answers a clear user question, reducing confusion and guiding users toward action.',
        ],
        assets: [
          {
            src: `${hocBase}/research.jpg`,
            alt: 'House of Calisthenics research insights',
            width: 1526,
            height: 1584,
            maxWidth: 763,
          },
        ],
      },
      {
        eyebrow: 'Site Map',
        title: 'Translating Features into Sitemap',
        body: [
          'Before moving into visual design, the focus was on structuring the experience to reduce confusion and guide users clearly through the journey.',
          'Ensuring each page has a defined purpose, answers a specific user need, clear CTAs and leads to a clear next step.',
        ],
        assets: [
          {
            src: `${hocBase}/sitemap.jpg`,
            alt: 'House of Calisthenics sitemap',
            width: 1526,
            height: 1190,
            maxWidth: 763,
          },
        ],
      },
      {
        eyebrow: 'Wireframe',
        title: 'Designing the Structure Before the Surface',
        body: [
          'I created low-fidelity wireframes to validate structure, hierarchy, and user flow, while keeping competitors and user flow in mind.',
          'The focus was not on visuals, but on ensuring clarity, each screen was designed to answer a specific user question and guide them toward the next step.',
        ],
        assets: [
          {
            src: `${hocBase}/wireframes.jpg`,
            alt: 'House of Calisthenics wireframes',
            width: 1526,
            height: 1720,
            maxWidth: 763,
          },
        ],
      },
      {
        eyebrow: 'Design system',
        title: 'Typography',
        body: [
          'Typography was chosen to reflect strength, boldness, and energy, aligning with the bold nature of calisthenics training.',
          'The goal was to create a strong visual hierarchy that grabs attention while keeping content short, readable and easy to scan.',
        ],
        assets: [
          {
            caption: 'Primary Font',
            src: `${hocBase}/primary-type.jpg`,
            alt: 'House of Calisthenics primary typography',
            width: 1526,
            height: 832,
            maxWidth: 763,
          },
          {
            caption: 'Secondary Font',
            src: `${hocBase}/secondary-type.jpg`,
            alt: 'House of Calisthenics secondary typography',
            width: 1526,
            height: 832,
            maxWidth: 763,
          },
          {
            caption: 'Design System',
            src: `${hocBase}/design-system.jpg`,
            alt: 'House of Calisthenics design system colors and grid',
            width: 1526,
            height: 1636,
            maxWidth: 763,
          },
          {
            src: `${hocBase}/final-ui.jpg`,
            alt: 'House of Calisthenics final website mockup',
            width: 1526,
            height: 1638,
            maxWidth: 763,
          },
        ],
      },
    ],
    learnings: [
      {
        title: 'Clarity drives conversion',
        body: 'Simplifying services and explaining the coaching model created a clearer path to signups.',
        dark: true,
      },
      {
        title: 'Less choice, better decisions',
        body: 'Reducing cognitive load helped visitors move through the site with less hesitation.',
      },
      {
        title: 'Trust is a key driver',
        body: 'Sharper structure, proof points, and focused CTAs made the training offer feel more credible.',
      },
      {
        title: 'Design is direction',
        body: 'A strong visual surface only works when the journey underneath is clear.',
        dark: true,
      },
    ],
  },
  'medwiki-ai-health-assistant': {
    slug: 'medwiki-ai-health-assistant',
    category: 'Webpage design',
    accentColor: '#E95F0F',
    titleFontClass: 'font-family-karla',
    headlineFontClass: 'font-family-inter',
    bodyFontClass: 'font-family-karla',
    titleVariant: 'large',
    title: 'AI Health Assistant (ChatGPT) with Personalized Profile & Guided Medical Insights',
    overview:
      "The original website struggled to communicate the product's value clearly and did not guide users toward the right use-cases. The new design introduces role-based navigation, simplified messaging, and a scalable design system; making it easier for users to understand capabilities, explore relevant use cases, and confidently engage with the product.",
    role: 'Co-Founder/ Designer/ Strategist',
    team: ['Me', 'F2', 'PM', 'PM2'],
    timeline: '2026 Q1',
    skills: [
      'Product Strategy',
      'UX/UI Design',
      'AI Integration',
      'Workflow Design',
      'User Research',
      'Information Architecture',
      'Conversion Optimization',
    ],
    hero: {
      src: `${medwikiBase}/cover.png`,
      alt: 'AskMedwiki AI health assistant desktop and mobile interface',
      width: 2240,
      height: 1274,
    },
    businessGoal: {
      title: 'Business goal',
      headline: 'AI Chat Assistant that simplifies prescriptions, medicines info,',
      highlight: 'and everyday health queries.',
      body:
        'The platform aimed to simplify everyday healthcare interactions through AI-powered conversations, prescription understanding, medicine education, and guided support in one unified experience.',
    },
    userProblem: {
      title: 'User Problem & Solution',
      headline: 'Users often felt overwhelmed by complex medical information and',
      highlight: 'unclear healthcare platforms.',
      headlineSegments: [
        { text: 'Users often felt ' },
        { text: 'overwhelmed by complex medical', highlight: true },
        { text: ' information and ' },
        { text: 'unclear healthcare platforms.', highlight: true },
      ],
      body:
        'Users often struggled to decode prescriptions, understand medicines, or ask the right health questions online. To solve this, I collaborated with founding members of Medwiki and designed a guided AI experience with clear entry points, conversational interactions, and personalized health assistance tailored to common healthcare needs.',
    },
    tlds: {
      label: 'What we shipped',
      title: 'Case Study in Progress',
    },
    sections: [],
    learnings: [],
  },
  'waysorted-case-study': {
    slug: 'waysorted-case-study',
    category: 'Web Application',
    accentColor: '#B90D13',
    titleFontClass: 'font-family-inter',
    headlineFontClass: 'font-family-inter',
    bodyFontClass: 'font-family-karla',
    titleVariant: 'large',
    title: 'Waysorted - Complete UX Redesign',
    overview: 'Waysorted needed a comprehensive redesign to improve user engagement and conversion rates.',
    role: 'Lead UX Designer',
    team: ['Me', 'PM', 'D'],
    timeline: '2025 Q1',
    skills: ['UX Design', 'UI Design', 'Prototyping', 'User Research'],
    hero: {
      src: '/case-studies/waysorted/hero.jpg',
      alt: 'Waysorted cover',
      width: 2240,
      height: 1274,
    },
    businessGoal: {
      title: 'Business goal',
      headline: 'Redesign the platform to',
      highlight: 'increase user engagement',
      afterHighlight: 'and drive conversions.',
      body: 'Focus on improving the overall user experience to drive better engagement metrics.',
    },
    userProblem: {
      title: 'User Problem & Solution',
      headline: '',
      highlight: 'Streamlined navigation',
      afterHighlight: 'and clearer value propositions.',
      body: 'Users found the interface confusing and hard to navigate. Implemented a cleaner information architecture and intuitive navigation patterns.',
    },
    tlds: {
      label: 'Too long; didn\'t see',
      title: 'Case Study in Progress',
    },
    metricsVariant: 'panel',
    metrics: [
      {
        value: '+40%',
        title: 'Increase in user engagement',
        body: 'Improved UX led to better user retention and interaction.',
      },
      {
        value: '-20%',
        title: 'Reduction in task completion time',
        body: 'Streamlined flows made tasks faster and more intuitive.',
      },
      {
        value: '+35%',
        title: 'Higher conversion rate',
        body: 'Clearer CTAs and better flows drove more conversions.',
      },
    ],
    sections: [],
    learnings: [],
  },
};
