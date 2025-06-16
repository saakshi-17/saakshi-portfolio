export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  status: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}