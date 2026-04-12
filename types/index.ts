export interface TeamMember {
  name: string;
  color: string;
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