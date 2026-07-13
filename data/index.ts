import { CaseStudy } from '@/types/index';
import { Project } from "@/types/index";

export const caseStudies: { [key: string]: CaseStudy } = {
  'house-of-calisthenics': {
    slug: 'house-of-calisthenics',
    category: 'Webpage Design',
    caseStudyTextColor: '#B90D13',
    title: 'House of Calisthenics UX/UI Case Study',
    overview: 'House of Calisthenics had strong traction, but the website wasn\'t converting. Users struggled to understand the offerings, especially online coaching.',
    role: 'Design Strategy, UI, UX, User Research',
    team: [
      { name: 'ME', color: '#B90D13' },
      { name: 'D', color: '#212833' },
      { name: 'PM', color: '#212833' },
      { name: 'CW', color: '#212833' },
    ],
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
      'Usability Thinking'
    ],
    heroImage: '/case-studies/house-of-calisthenics/hero.jpg',
    businessGoal: {
      title: 'Business goal',
      beforeHighlight: 'Streamline navigation, and',
      highlight: 'improve conversion rates',
      afterHighlight: 'for online training services.',
      description: 'The focus was on reducing drop-offs and guiding users toward signing up for training programs, especially online coaching, by making services easier to understand and quicker to act on.'
    },
    userProblem: {
      title: 'User Problem & Solution',
      beforeHighlight: '',
      highlight: 'Simplified flow',
      afterHighlight: 'that drives clearer decisions and signups.',
      description: 'Users were interested but confused, they couldn\'t clearly understand the difference between services or how online coaching worked, leading to low signups.',
      solution: 'The solution was to simplify the structure, clearly communicate each offering, and introduce stronger CTAs, helping users move from exploration to action with minimal friction.'
    },
    tldsSection: {
      content: 'Too long; didn\'t see',
      image: ''
    },
    impactMetrics: [
      {
        percentage: '+30%',
        title: 'Increase in lead signups',
        description: 'Clearer services structure & stronger CTAs improved user action.'
      },
      {
        percentage: '-15%',
        title: 'Reduction in bounce rate',
        description: 'Simplified navigation helped users stay and explore more about HOC.'
      },
      {
        percentage: '+25%',
        title: 'Higher engagement time',
        description: 'Better copy flow and clarity kept users engaged longer.'
      }
    ],
    approachSection: {
      images: ['', '']
    },
    processSections: [
      {
        category: 'Research & Ideation',
        title: 'How we Conduct Research',
        paragraphs: [
          'Before moving into visual design, I analyzed user behavior, drop-offs, and interaction patterns to identify where users were getting stuck.',
          'The goal was to ensure every screen answers a clear user question, reducing confusion and guiding users toward action.'
        ],
        image: ''
      },
      {
        category: 'Site Map',
        title: 'Translating Features into Sitemap',
        paragraphs: [
          'Before moving into visual design, the focus was on structuring the experience to reduce confusion and guide users (us) clearly through the journey. :)',
          'Ensuring each page has a defined purpose, answers a specific user need, Clear CTAs and leads to a clear next step.'
        ],
        image: ''
      },
      {
        category: 'Wireframe',
        title: 'Designing the Structure Before the Surface',
        paragraphs: [
          'I created Low-fidelity wireframes to validate structure, hierarchy, and user flow, while keeping competitors and user flow in mind.',
          'The focus was not on visuals, but on ensuring clarity, each screen was designed to answer a specific user question and guide them toward the next step.'
        ],
        image: ''
      },
      {
        category: 'Design System',
        title: 'Typography',
        paragraphs: [
          'Typography was chosen to reflect strength, boldness, and energy, aligning with the bold nature of calisthenics training.',
          'The goal was to create a strong visual hierarchy that grabs attention while keeping content short, readable and easy to scan.'
        ],
        fontSections: [
          {
            label: 'Primary Font',
            image: ''
          },
          {
            label: 'Secondary Font',
            image: ''
          }
        ]
      },
      {
        category: 'Design System',
        title: 'Design System',
        paragraphs: [],
        designSystemImages: ['', '']
      }
    ],
    learnings: [
      {
        title: 'Clarity Drives Conversion',
        description: 'Simplifying structure and clearly communicating services had the biggest impact on user decisions and signups.',
        isDark: true
      },
      {
        title: 'Less Choice, Better Decisions',
        description: 'Reducing cognitive load and guiding users through a clear path improved engagement and minimized drop-offs.',
        isDark: false
      },
      {
        title: 'Trust is a Key Driver',
        description: 'Introducing testimonials, stats, and clear explanations helped build confidence in online coaching.',
        isDark: false
      },
      {
        title: 'Design is Direction',
        description: 'A well-structured experience doesn\'t just look good—it guides users toward action.',
        isDark: true
      }
    ]
  },
  'waysorted-case-study': {
    slug: 'waysorted-case-study',
    category: 'Web Application',
    title: 'Waysorted - Complete UX Redesign',
    caseStudyTextColor: '#B90D13',
    overview: 'Waysorted needed a comprehensive redesign to improve user engagement and conversion rates.',
    role: 'Lead UX Designer',
    team: [
      { name: 'ME', color: '#B90D13' },
      { name: 'PM', color: '#212833' },
      { name: 'D', color: '#212833' },
    ],
    timeline: '2025 Q1',
    skills: ['UX Design', 'UI Design', 'Prototyping', 'User Research'],
    heroImage: '/case-studies/waysorted/hero.jpg',
    businessGoal: {
      title: 'Business goal',
      beforeHighlight: 'Redesign the platform to',
      highlight: 'increase user engagement',
      afterHighlight: 'and drive conversions.',
      description: 'Focus on improving the overall user experience to drive better engagement metrics.'
    },
    userProblem: {
      title: 'User Problem & Solution',
      beforeHighlight: '',
      highlight: 'Streamlined navigation',
      afterHighlight: 'and clearer value propositions.',
      description: 'Users found the interface confusing and hard to navigate.',
      solution: 'Implemented a cleaner information architecture and intuitive navigation patterns.'
    },
    tldsSection: {
      content: 'Too long; didn\'t see',
      image: ''
    },
    impactMetrics: [
      {
        percentage: '+40%',
        title: 'Increase in user engagement',
        description: 'Improved UX led to better user retention and interaction.'
      },
      {
        percentage: '-20%',
        title: 'Reduction in task completion time',
        description: 'Streamlined flows made tasks faster and more intuitive.'
      },
      {
        percentage: '+35%',
        title: 'Higher conversion rate',
        description: 'Clearer CTAs and better flows drove more conversions.'
      }
    ],
    approachSection: {
      images: ['', '']
    },
    processSections: [
      {
        category: 'Research & Ideation',
        title: 'Understanding User Needs',
        paragraphs: [
          'Started with comprehensive user research to understand pain points and workflows.',
          'Conducted interviews and analyzed usage patterns to identify key areas for improvement.'
        ],
        image: ''
      },
      {
        category: 'Site Map',
        title: 'Structuring the Information Architecture',
        paragraphs: [
          'Mapped out the entire platform structure to ensure logical flow and easy navigation.',
          'Each section was carefully organized to reduce cognitive load and help users find what they need quickly.'
        ],
        image: ''
      },
      {
        category: 'Wireframe',
        title: 'Building the Foundation',
        paragraphs: [
          'Created low-fidelity wireframes to test layouts and user flows before committing to visual design.',
          'Focused on clarity and usability, ensuring each screen served a clear purpose in the user journey.'
        ],
        image: ''
      },
      {
        category: 'Design System',
        title: 'Typography',
        paragraphs: [
          'Selected typography that balances professionalism with accessibility, ensuring readability across all device sizes.',
          'Created a clear hierarchy that guides users through content while maintaining a modern, clean aesthetic.'
        ],
        fontSections: [
          {
            label: 'Primary Font',
            image: ''
          },
          {
            label: 'Secondary Font',
            image: ''
          }
        ]
      },
      {
        category: 'Design System',
        title: 'Design System',
        paragraphs: [],
        designSystemImages: ['', '']
      }
    ],
    learnings: [
      {
        title: 'User-Centered Design Wins',
        description: 'Focusing on real user needs and pain points led to more effective solutions than aesthetic preferences.',
        isDark: true
      },
      {
        title: 'Simplicity is Power',
        description: 'Removing unnecessary complexity helped users complete tasks faster and with less frustration.',
        isDark: false
      },
      {
        title: 'Iterate and Validate',
        description: 'Testing early and often with wireframes saved time and prevented costly design mistakes.',
        isDark: false
      },
      {
        title: 'Design Systems Scale',
        description: 'Building a solid design system upfront made future updates faster and more consistent.',
        isDark: true
      }
    ]
  }
};


export const projects: Project[] = [
  {
    id: '1',
    title: 'Comment Summarizer: AI That Turns Design Feedback Into Decisions',
    description: 'Designed and strategized an AI tool that makes feedback digestible and actionable.',
    year: 2026,
    tags: ['AI Integration', 'Product Strategy'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776006157/Waysorted_cover_nagwvm.jpg',
    tools: ['notion', 'claude', 'miro', 'figma', 'chatgpt', 'protopie'],
    caseStudySlug: 'comment-summarizer'
  },
  {
    id: '2',
    title: 'Website for enterprise AI for Workforce Analytics',
    description: 'Redesigned the website with role-based navigation, clearer value props, and scalable UI patterns.',
    year: 2026,
    tags: ['AI', 'B2B Website'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012617/Adaapt_cover_mfwzif.png',
    tools: ['notion', 'claude', 'miro', 'uizard', 'ai', 'chatgpt', 'figma', 'protopie'],
    caseStudySlug: 'adaapt-ai-workforce-analytics'
  },
  {
    id: '3',
    title: 'AI Health Assistant (ChatGPT) with Personalized Profile & Guided Medical Insights',
    description: 'A Conversational AI Platform for decoding prescription, Symptom Tracking & Personal Profiles',
    year: 2025,
    tags: ['Conversational AI', 'Product Strategy'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012612/Medwiki_Ai_cover_usc5zm.png',
    tools: ['notion', 'claude', 'miro', 'uizard', 'protopie', 'chatgpt', 'figma'],
    caseStudySlug: 'medwiki-ai-health-assistant'
  },
  {
    id: '4',
    title: 'Collaborated and Led Design Across Zestta’s Key Screens & Flows',
    description: 'Worked on core product flows such as onboarding, habit tracking, and dashboards.',
    year: 2025,
    tags: ['Data Visualization', 'Product Strategy'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012606/Zestta_Cover_l8nq9f.png',
    tools: ['notion', 'claude', 'figjam', 'ai', 'chatgpt', 'figma'],
    caseStudySlug: ''
  },
  {
    id: '5',
    title: 'Designing a Seamless Medicine Tracking Experience',
    description: 'Medication tracking system with reminders, family management, and clear visual feedback for better adherence.',
    year: 2025,
    tags: ['User-Centered Design', 'UX Design'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012608/Pillpal_Cover_okvrsq.png',
    tools: ['notion', 'claude', 'ai', 'figjam'],
    caseStudySlug: ''
  },
  {
    id: '6',
    title: 'Designed a platform where solo travellers stop being solo!',
    description: 'A community-first platform to help solo travellers discover trips, connect with people, and book with confidence.',
    year: 2024,
    tags: ['Experience Design', 'Product Strategy'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012610/Solosquad_cover_nbio5s.png',
    tools: ['notion', 'psd', 'ai', 'figjam', 'chatgpt', 'figma'],
    caseStudySlug: ''
  },
  {
    id: '7',
    title: 'Redesigned an Online Calisthenics Platform for Higher Conversions',
    websiteLink: 'https://www.houseofcalisthenics.com/',
    description: 'Led website redesign, focused on simplifying navigation, strengthening CTAs, and improving conversions.',
    year: 2024,
    tags: ['Web Design', 'Conversion Optimization'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012613/HOC_Cover_zxpmzh.png',
    tools: ['notion', 'ai', 'psd', 'chatgpt', 'figma'],
    caseStudySlug: 'house-of-calisthenics'
  },
  {
    id: '8',
    title: 'Designed How Tech Services Are Understood Online',
    websiteLink: 'https://www.assentcode.tech/',
    description: 'Led the redesign of a B2B tech website, improving information architecture, content clarity, and conversion pathways.',
    year: 2024,
    tags: ['Web Design', 'Conversion Design'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012606/Final_Assentcode_Desktop_View_znhykt.png',
    tools: ['uizard', 'notion', 'figjam', 'psd', 'figma'],
    caseStudySlug: ''
  },
  {
    id: '9',
    title: 'Contributed to an B2B Architecture Management Platform',
    description: 'Just a junior designer figuring things out, worked on structuring services, organizing directories, and making onboarding slightly less painful.',
    year: 2023,
    tags: ['Product Design', 'System Design'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012612/Stazy_sams_Cover_cm6dqk.png',
    tools: ['notion', 'figjam', 'figma'],
    caseStudySlug: ''
  },
  {
    id: '10',
    title: 'A Unified Platform for Students, Parents & Teachers',
    description: 'Designed a comprehensive dashboard system to manage students, teachers, performance, communication, and learning resources in one unified experience.',
    year: 2023,
    tags: ['Dashboard UX', 'Product Design'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012607/Learning_dashboard_Cover_ierob0.png',
    tools: ['notion', 'figjam', 'figma'],
    caseStudySlug: ''
  },
  {
    id: '11',
    title: 'Lazer Crazer: My First Step into Web Design',
    websiteLink: 'https://lazercrazer.in/noida',
    description: 'Thanks to the person who thought I could design this high-energy gaming arena website ',
    year: 2023,
    tags: ['Web Design', 'Experience Design'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012610/Lazercrazer_Cover_sbukjq.png',
    tools: ['ai', 'figma'],
    caseStudySlug: ''
  }
];

export const years = [
  { year: 2026, displayYear: "2026", line1: "3 shipped,", line2: "3 UX deep dives" },
  { year: 2025, displayYear: "2025", line1: "10 Projects", line2: "3 UX deep dives" },
  { year: 2024, displayYear: "2024", line1: "8 Projects", line2: "3 UX deep dives" },
  { year: 2023, displayYear: "2023", line1: "5 Projects", line2: "3 UX deep dives" },
  { year: 2022, displayYear: "2022-21", line1: "Messing around", line2: "in Figma ;)" },
];

export const allToolLogos: { [key: string]: { name: string; icon: string } } = {
  sketch: { name: 'Sketch', icon: '/icons/tools/sketch.svg' },
  protopie: { name: 'Protopie', icon: '/icons/tools/protopie.svg' },
  adobe: { name: 'Adobe', icon: '/icons/tools/adobe.svg' },
  figma: { name: 'Figma', icon: '/icons/tools/figma.svg' },
  psd: { name: 'PSD', icon: '/icons/tools/psd.svg' },
  chatgpt: { name: 'CHATGPT', icon: '/icons/tools/chatgpt.svg' },
  claude: { name: 'CLAUDE', icon: '/icons/tools/claude.svg' },
  miro: { name: 'Miro', icon: '/icons/tools/miro.svg' },
  spline: { name: 'Spline', icon: '/icons/tools/spline.svg' },
  indesign: { name: 'Indesign', icon: '/icons/tools/indesign.svg' },
  ai: { name: 'AI', icon: '/icons/tools/ai.svg' },
  jitter: { name: 'Jitter', icon: '/icons/tools/jitter.svg' },
  notion: { name: 'Notion', icon: '/icons/tools/notion.svg' },
  uizard: { name: 'Uizard', icon: '/icons/tools/uizard.svg' },
  figjam: { name: 'Figjam', icon: '/icons/tools/figjam.svg' },
};