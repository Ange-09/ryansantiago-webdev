import type {
  ExperienceEntry,
  EducationEntry,
  Certification,
} from '@/types/experience';

export const professionalWork: ExperienceEntry[] = [
  {
    trackId: 'A1',
    company: 'Adamson University',
    roles: [
      'ISO Implementation & Compliance Lead',
      'EOMS Lead Internal Auditor',
      'Document Custodian',
    ],
    period: 'Jul 2025 – Present',
    type: 'Full Time',
    bullets: [
      'Led end-to-end implementation of ISO 21001:2018 (EOMS), conducting structured gap analyses and coordinating compliance initiatives across academic and administrative units toward Stage 2 external certification.',
      'Leveraged existing ISO 9001:2015 QMS documentation to identify gaps, map to-be processes, and address EOMS-specific clauses, reducing redundant procedures and aligning cross-functional workflows.',
      'Oversaw a team of 44 auditors (7 Lead Auditors, 37 IAs), providing guidance, task assignments, and performance feedback to ensure complete audit coverage and quality outputs.',
      'Managed control, review, and updating of EOMS manuals, forms, and policies, ensuring version control, consistency, and compliance with ISO requirements.',
    ],
    featuredProject: {
      label: 'Key project',
      description:
        'Built a Python-based Compliance Monitoring System that automated renewal tracking and notification workflows, targeting a 100% on-time compliance rate.',
    },
  },
  {
    trackId: 'A2',
    company: 'Web Developer — Freelance',
    roles: ['Academic Project Prototype Development'],
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
    roles: ['Data Analyst'],
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
    roles: ['Process & Quality Management Intern'],
    period: 'Jul – Sep 2024',
    type: 'Internship',
    bullets: [
      'Reviewed and clarified process documents and guidelines to improve stakeholder usability, creating process flowcharts to visualize and streamline operational workflows.',
      'Proposed a Records Management System for tracking, approval, and disposal of documents, identifying requirements and presenting the solution to management.',
    ],
  },
];

export const education: EducationEntry[] = [
  {
    trackId: 'B1',
    institution: 'Adamson University',
    degrees: [
      'BS Industrial Engineering — Jul 2025',
      'MS Management Engineering — 9 Units Completed',
    ],
    period: '2021 – Present',
    organizationalRole: {
      title: 'Vice President for Finance & Supply Chain',
      org: 'PIIE-ORSP Adamson University Chapter',
      period: 'Aug 2024 – May 2025',
      bullets: [
        'Managed a ₱200,000+ budget for the 7th Industrial Engineering Summit, overseeing planning, disbursement, and post-event reconciliation.',
        'Led a 6-person procurement and logistics team across multiple events, coordinating with suppliers, event heads, and university offices.',
      ],
    },
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
