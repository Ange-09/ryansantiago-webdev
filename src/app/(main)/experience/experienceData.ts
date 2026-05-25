// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export type ExperienceType =
  | 'Full Time'
  | 'Freelance'
  | 'Project-Based'
  | 'Internship';

export type FeaturedProject = {
  label: string;
  description: string;
};

export type RoleSubsection = {
  /** Role title shown as a sub-heading within the entry */
  roleTitle: string;
  bullets: string[];
};

export type ExperienceEntry = {
  trackId: string;
  company: string;
  /** Top-level role label shown under the company name */
  roleLabel?: string;
  period: string;
  type: ExperienceType;
  /**
   * Use `subsections` when a single position has multiple distinct
   * responsibilities (e.g. three roles at the same company).
   * Use `bullets` for a flat list when there are no sub-roles.
   */
  subsections?: RoleSubsection[];
  bullets?: string[];
  featuredProject?: FeaturedProject;
};

export type EducationEntry = {
  trackId: string;
  institution: string;
  degrees: string[];
  period: string;
};

export type OrganizationEntry = {
  trackId: string;
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

export type Certification = {
  name: string;
  issuer: string;
};

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

export const professionalWork: ExperienceEntry[] = [
  {
    trackId: 'A1',
    company: 'Adamson University',
    roleLabel: 'Technical Staff — Institutional Planning & Policy Development',
    period: 'Jul 2025 – Present',
    type: 'Full Time',
    subsections: [
      {
        roleTitle: 'ISO Implementation & Compliance Lead',
        bullets: [
          'Led end-to-end implementation of ISO 21001:2018 (EOMS), conducting structured gap analyses against standard requirements and coordinating compliance initiatives across academic and administrative units toward Stage 2 external certification.',
          'Leveraged existing ISO 9001:2015 QMS documentation to identify gaps, map to-be processes, and address EOMS-specific clauses, reducing redundant procedures and aligning cross-functional workflows.',
        ],
      },
      {
        roleTitle: 'EOMS Lead Internal Auditor',
        bullets: [
          'Oversaw a team of 44 auditors (7 Lead Auditors, 37 IAs), providing guidance, task assignments, and performance feedback to ensure complete audit coverage and quality outputs.',
          'Developed audit plans, structured work schedules, and role assignments, while facilitating review meetings to assess compliance and issue OFIs and Corrective Action Reports (CARs).',
        ],
      },
      {
        roleTitle: 'Document Custodian',
        bullets: [
          'Managed control, review, and updating of EOMS manuals, forms, and policies — ensuring version control, consistency, and compliance with ISO requirements.',
          'Standardized documentation systems by eliminating procedural overlaps and aligning policies with ISO frameworks across university units.',
        ],
      },
    ],
    featuredProject: {
      label: 'Key project',
      description:
        'Built a Python-based Compliance Monitoring System that automated renewal tracking and notification workflows, targeting a 100% on-time compliance rate.',
    },
  },
  {
    trackId: 'A2',
    company: 'Freelance Web Developer',
    roleLabel: 'Academic Project Prototype Development',
    period: 'Apr 2025 – Present',
    type: 'Freelance',
    bullets: [
      'Developed full-stack web applications using Next.js, React, HTML, CSS, and JavaScript, applying component-based architecture and state management best practices.',
      'Designed responsive, user-friendly interfaces guided by UI/UX principles, integrating data-driven features and performance metrics into web-based systems.',
    ],
  },
  {
    trackId: 'A3',
    company: 'Arrow 88 Business Solutions Inc.',
    roleLabel: 'Data Analyst',
    period: 'Apr – May 2025',
    type: 'Project-Based',
    bullets: [
      'Analyzed pre-election survey data from 1,000+ respondents using cross-tabulation across demographic segments (age, income) to deliver data-driven voter preference insights.',
      'Developed data visualizations using bar and pie charts to present demographic voting patterns for clearer stakeholder interpretation.',
    ],
  },
  {
    trackId: 'A4',
    company: 'Philippine Veterans Bank',
    roleLabel: 'Process & Quality Management Intern',
    period: 'Jul – Sep 2024',
    type: 'Internship',
    bullets: [
      'Reviewed and clarified process documents and guidelines to improve stakeholder usability, creating process flowcharts to visualize and streamline operational workflows.',
      'Proposed a Records Management System for tracking, approval, and disposal of documents — identifying requirements and presenting the solution to management.',
    ],
  },
];

export const educationEntries: EducationEntry[] = [
  {
    trackId: 'B1',
    institution: 'Adamson University',
    degrees: [
      'Bachelor of Science in Industrial Engineering — Jul 2025',
      'Master of Science in Management Engineering — 9 Units Completed',
    ],
    period: '2021 – Present',
  },
];

export const organizationEntries: OrganizationEntry[] = [
  {
    trackId: 'C1',
    title: 'Vice President for Finance & Supply Chain',
    org: 'PIIE-ORSP Adamson University Chapter',
    period: 'Aug 2024 – May 2025',
    bullets: [
      'Managed a ₱200,000+ budget for the 7th Industrial Engineering Summit, overseeing planning, disbursement, and post-event reconciliation.',
      'Led a 6-person procurement and logistics team across multiple events, coordinating with suppliers, event heads, and university offices for on-time, transparent execution.',
    ],
  },
];

export const certifications: Certification[] = [
  { name: 'Google Project Management Certificate', issuer: 'Google' },
  { name: 'Microsoft Business Analyst Certificate', issuer: 'Microsoft' },
  { name: 'Control of Documented Information Training', issuer: 'CQL' },
  { name: 'ISO 19011 Internal System Auditor Training', issuer: 'CQL' },
  { name: 'Certified Lean Six Sigma Yellow Belt', issuer: 'GoLeanSixSigma' },
  { name: 'Lean Six Sigma Green Belt Certificate', issuer: 'Kennesaw State University' },
];
