export interface TeamMember {
  name: string;
  color: string;
}

export interface ImpactMetric {
  percentage: string;
  title: string;
  description: string;
}

export interface Learning {
  title: string;
  description: string;
  isDark?: boolean;
}

export interface ProcessSection {
  category: string;
  title: string;
  paragraphs: string[];
  image?: string;
  fontSections?: Array<{
    label: string;
    image: string;
  }>;
  designSystemImages?: string[];
}

export interface CaseStudy {
  slug: string;
  category: string;
  title: string;
  caseStudyTextColor: string;
  overview: string;
  role: string;
  team: TeamMember[];
  timeline: string;
  skills: string[];
  heroImage: string;
  businessGoal: {
    title: string;
    beforeHighlight?: string;
    highlight: string;
    afterHighlight?: string;
    description: string;
  };
  userProblem: {
    title: string;
    beforeHighlight?: string;
    highlight: string;
    afterHighlight?: string;
    description: string;
    solution: string;
  };
  tldsSection?: {
    content: string;
    image?: string;
  };
  impactMetrics?: ImpactMetric[];
  approachSection?: {
    images: string[];
  };
  processSections?: ProcessSection[];
  learnings?: Learning[];
}


export interface Project {
  id: string;
  title: string;
  websiteLink?: string;
  description: string;
  year: number;
  tags: string[];
  image: string;
  tools: string[];
  caseStudySlug?: string;
}