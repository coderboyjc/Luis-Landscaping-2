export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface AIAnalysisResult {
  suggestion: string;
  recommendedServices: string[];
  estimatedDifficulty: string;
}

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  ABOUT = 'about',
  CONTACT = 'contact',
  AI_ADVISOR = 'ai-advisor',
  GALLERY = 'gallery',
  TESTIMONIALS = 'testimonials'
}