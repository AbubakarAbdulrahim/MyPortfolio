export interface Metric {
  label: string;
  value: string;
  subtext?: string;
  trend?: string;
}

export interface CaseStudy {
  id: string;
  index: string; // "01", "02", "03"
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  clientOrContext: string;
  period: string;
  role: string;
  featured: boolean;
  accentColor: string;
  platform: 'mobile' | 'web' | 'cross-platform';
  tags: string[];
  metrics: Metric[];
  problem: string;
  approach: string[];
  architectureHighlights: string[];
  results: string[];
  screenFlows: {
    name: string;
    title: string;
    subtitle: string;
    badge?: string;
    description: string;
    details: string[];
    accent: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface TimelineEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: 'Full-time' | 'Internship' | 'Founder / Independent' | 'SIWES';
  summary: string;
  highlights: string[];
  technologies: string[];
  metricHighlight?: {
    value: string;
    label: string;
  };
}

export interface SkillProgress {
  skill: string;
  category: 'Mobile' | 'Backend' | 'Frontend' | 'Databases & Cloud' | 'Tools & Engineering';
  percentage: number;
  context?: string;
}

export interface GitHubRepo {
  name: string;
  language: string | null;
  description: string | null;
  stars: number;
  url: string;
  homepage: string | null;
}

export interface EducationCertification {
  title: string;
  institution: string;
  period: string;
  details: string;
  badge: string;
  type: 'education' | 'certification';
  gradeOrScore?: string;
  verificationUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  tagline: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  category: string;
  content: string;
}
