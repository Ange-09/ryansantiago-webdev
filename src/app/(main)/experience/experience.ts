export type ExperienceType =
  | 'Full Time'
  | 'Freelance'
  | 'Project-Based'
  | 'Internship';

export type FeaturedProject = {
  label: string;
  description: string;
};

export type ExperienceEntry = {
  trackId: string;
  company: string;
  roles: string[];
  period: string;
  type: ExperienceType;
  bullets: string[];
  featuredProject?: FeaturedProject;
};

export type EducationEntry = {
  trackId: string;
  institution: string;
  degrees: string[];
  period: string;
  organizationalRole?: {
    title: string;
    org: string;
    period: string;
    bullets: string[];
  };
};

export type Certification = {
  name: string;
  issuer: string;
};
