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
  deviceType: 'iphone' | 'android' | 'desktop';
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

export interface SecondaryProject {
  id: string;
  title: string;
  description: string;
  metrics?: string;
  tags: string[];
  category: 'Web App' | 'Automation & Tools' | 'Curriculum & Open Source';
  impact: string;
  link?: string;
  github?: string;
}

export interface TimelineEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: 'Full-time' | 'Contract' | 'Leadership';
  summary: string;
  highlights: string[];
  technologies: string[];
  metricHighlight?: {
    value: string;
    label: string;
  };
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: {
    name: string;
    highlight?: boolean;
    level: 'Production Expert' | 'Advanced' | 'Core Competency';
    context: string;
    icon?: string;
  }[];
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

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatarUrl?: string;
  relationship: string;
  endorsementType: 'Architecture' | 'Delivery Speed' | 'Mobile Craftsmanship' | 'Mentorship';
}
