export interface Project {
  id: string;
  title: string;
  category: 'AI Systems' | 'SaaS Platforms' | 'Dashboards' | 'Automation Systems' | 'E-Commerce' | 'Core Engineering';
  tagline: string;
  description: string;
  problemSolved: string;
  keyFeatures: string[];
  techStack: string[];
  performanceMetric?: {
    value: string;
    label: string;
  };
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100 percentage
  category: 'Frontend' | 'Backend' | 'Database' | 'AI Systems' | 'DevOps & Clou' | 'System Design';
  icon?: string;
}

export interface JourneyStep {
  id: string;
  year: string;
  title: string;
  type: 'learning' | 'building' | 'deployment' | 'elite';
  organization: string;
  description: string;
  achievements: string[];
}

export interface MasteryNode {
  rank: 'E' | 'D' | 'C' | 'B' | 'A' | 'S' | 'National' | 'Global' | 'Monarch' | 'Archon';
  title: string;
  description: string;
  requirements: string[];
  unlocked: boolean;
  perks: string[];
  experienceNeeded: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
  gridSpan: 'col-span-1' | 'col-span-2' | 'md:col-span-2' | 'md:col-span-3';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
