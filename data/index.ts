import { CaseStudy } from '@/types/index';
import { Project } from "@/types/index";

export const caseStudies: { [key: string]: CaseStudy } = {
  'house-of-calisthenics': {
    slug: 'house-of-calisthenics',
    category: 'Webpage Design',
    caseStudyTextColor: '#B90D13',
    title: 'House of Calisthenics UX/UI Case Study',
    overview: 'House of Calisthenics had strong traction, but the website wasn\'t converting. Users struggled to understand the offerings, especially online coaching. The redesign focuses on simplifying navigation, clarifying services, and driving conversions.',
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
    }
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
    }
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
    caseStudySlug: 'waysorted-case-study'
  },
  {
    id: '2',
    title: 'Website for enterprise AI for Workforce Analytics',
    description: 'Redesigned the website with role-based navigation, clearer value props, and scalable UI patterns.',
    year: 2026,
    tags: ['AI', 'B2B Website'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012617/Adaapt_cover_mfwzif.png',
    tools: ['notion', 'claude', 'miro', 'uizard', 'ai', 'chatgpt', 'figma', 'protopie'],
    caseStudySlug: 'waysorted-case-study'
  },
  {
    id: '3',
    title: 'AI Health Assistant (ChatGPT) with Personalized Profile & Guided Medical Insights',
    description: 'A Conversational AI Platform for decoding prescription, Symptom Tracking & Personal Profiles',
    year: 2025,
    tags: ['Conversational AI', 'Product Strategy'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012612/Medwiki_Ai_cover_usc5zm.png',
    tools: ['notion', 'claude', 'miro', 'uizard', 'protopie', 'chatgpt', 'figma'],
    caseStudySlug: 'healthcare-case-study'
  },
  {
    id: '4',
    title: 'Collaborated and Led Design Across Zestta’s Key Screens & Flows',
    description: 'Worked on core product flows such as onboarding, habit tracking, and dashboards.',
    year: 2025,
    tags: ['Data Visualization', 'Product Strategy'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012606/Zestta_Cover_l8nq9f.png',
    tools: ['notion', 'claude', 'figjam', 'ai', 'chatgpt', 'figma'],
    caseStudySlug: 'fintech-case-study'
  },
  {
    id: '5',
    title: 'Designing a Seamless Medicine Tracking Experience',
    description: 'Medication tracking system with reminders, family management, and clear visual feedback for better adherence.',
    year: 2025,
    tags: ['Conversational AI', 'Product Strategy'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012608/Pillpal_Cover_okvrsq.png',
    tools: ['notion', 'claude', 'ai', 'figjam'],
    caseStudySlug: 'medicine-tracking-case-study'
  },
  {
    id: '6',
    title: 'Designed a platform where solo travellers stop being solo!',
    description: 'A community-first platform to help solo travellers discover trips, connect with people, and book with confidence.',
    year: 2024,
    tags: ['Experience Design', 'Product Strategy'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012610/Solosquad_cover_nbio5s.png',
    tools: ['notion', 'psd', 'ai', 'figjam', 'chatgpt', 'figma'],
    caseStudySlug: 'house-of-calisthenics'
  },
  {
    id: '7',
    title: 'Redesigned an Online Calisthenics Platform for Higher Conversions',
    description: 'Led website redesign, focused on simplifying navigation, strengthening CTAs, and improving conversions.',
    year: 2024,
    tags: ['Web Design', 'Conversion Optimization'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012613/HOC_Cover_zxpmzh.png',
    tools: ['notion', 'ai', 'psd', 'chatgpt', 'figma'],
    caseStudySlug: 'waysorted-case-study'
  },
  {
    id: '8',
    title: 'Designed How Tech Services Are Understood Online',
    websiteLink: '',
    description: 'Led the redesign of a B2B tech website, improving information architecture, content clarity, and conversion pathways.',
    year: 2024,
    tags: ['Web Design', 'Conversion Design'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012606/Final_Assentcode_Desktop_View_znhykt.png',
    tools: ['uizard', 'notion', 'figjam', 'psd', 'figma'],
    caseStudySlug: 'fintech-case-study'
  },
  {
    id: '9',
    title: 'Contributed to an B2B Architecture Management Platform',
    description: 'Just a junior designer figuring things out, worked on structuring services, organizing directories, and making onboarding slightly less painful.',
    year: 2023,
    tags: ['Product Design', 'System Design'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012612/Stazy_sams_Cover_cm6dqk.png',
    tools: ['notion', 'figjam', 'figma'],
    caseStudySlug: 'healthcare-case-study'
  },
  {
    id: '10',
    title: 'A Unified Platform for Students, Parents & Teachers',
    description: 'Designed a comprehensive dashboard system to manage students, teachers, performance, communication, and learning resources in one unified experience.',
    year: 2023,
    tags: ['Dashboard UX', 'Product Design'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012607/Learning_dashboard_Cover_ierob0.png',
    tools: ['notion', 'figjam', 'figma'],
    caseStudySlug: 'fintech-case-study'
  },
  {
    id: '11',
    title: 'Lazer Crazer: My First Step into Web Design',
    websiteLink: '',
    description: 'Thanks to the person who thought I could design this high-energy gaming arena website ',
    year: 2023,
    tags: ['Web Design', 'Experience Design'],
    image: 'https://res.cloudinary.com/dl7f9mnrd/image/upload/v1776012610/Lazercrazer_Cover_sbukjq.png',
    tools: ['ai', 'figma'],
    caseStudySlug: 'fintech-case-study'
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



// claude --resume 7ab4f592-9e03-41de-b46e-2ce2619c6361