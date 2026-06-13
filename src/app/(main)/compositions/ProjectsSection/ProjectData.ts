export interface Project {
  id: string;
  title: string;
  tag: string;
  volume: string;
  description: string;
  tech: string[];
  cardImg?: string;
  initials?: string;
  coverGradient?: string;
  isFeatured?: boolean;
  modalImg?: string;
  link?: string;
}
export const PROJECTS: Project[] = [
  {
    id: "fixflow",
    title: "Fix Flow",
    tag: "Featured",
    volume: "Vol. 1",
    description:
      "Fix Flow is a web-based machine maintenance platform that unifies criticality assessment, PF Curve scheduling, KPI tracking, and spare parts management into a single, centralized dashboard. Built for CNC operations, it empowers maintenance teams to make smarter, data-driven decisions that reduce downtime and extend equipment life.",
    tech: ["Next.js", "TypeScript", "CSS"],
    cardImg: "./images/compositions/fixflowlogo.png",
    isFeatured: true,
    modalImg: "./images/compositions/fixflow.png",
    link: "https://fix-flow-beta.vercel.app/",
  },
  {
    id: "analog-sound",
    title: "Analog Sound Co.",
    tag: "E-Commerce",
    volume: "EP. 2",
    description:
      "Digital storefront for bespoke audio equipment, bringing physical textures and tactile warmth to a web shopping experience.",
    tech: ["Next.js", "WebGL", "Sanity"],
    cardImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCq58hhoOIW70AEo90zPjJ3P6j0xfqbxNbXI25RNfnRpCshVSnryh9d9eZbk4U9E1gTn46mzvvDy4LGFXBM_NQ3TRE70Rn2IvAfZwjndd6lisL2tBFIysbc27hL8Y3JmsaDmcItOAWjZ6MTgjuUsI45dmMGny5HwN3qO4XSuB4l_m6S0F0gHtmPr3TlRdJMjRZl9a30wulRP5omfvE49WwM_rl3Swz09g2RECuitBC8DeTx5GSG8N3A2QP4oMnsE_CewowhE0BEPtSp",
    isFeatured: true,
    link: "",
  },
  {
    id: "brutal-form",
    title: "Brutal Form",
    tag: "Editorial",
    volume: "Vol. 3",
    description:
      "A digital magazine exploring brutalist architecture through strict grid layouts and uncompromising typography.",
    tech: ["Nuxt", "GSAP", "Contentful"],
    cardImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtkepMNQZdTSGa5DMWoyrS-osOq97IRDkLpt1UOuu3IXI1yN5JET66RcdNh-Ue5W6Qo6j76sttviXvvYKH9-J9JiR5ss5yxFkKgaokKRW7cYPNXhTCBxErNrhOzjYsCkQbKFNdFaC_DszGwLGlAv81di7QxIKKzmLdT5fCd_D9Im4mXdQ8FEmkm_KHdg_STXC_bEZ3J8T6ftJpitIi8xiauXo_iYxVIi0ghdAlaJHXPnerMZ9vVjcRL1kSka76Z8jH0KWhOMLrNzCB",
    isFeatured: true,
  },
  {
    id: "prism",
    title: "Prism Analytics",
    tag: "SaaS App",
    volume: "Vol. 4",
    description:
      "Data visualisation dashboard prioritising clarity and low visual noise for demanding analytics workflows.",
    tech: ["Vue 3", "D3.js", "TailwindCSS"],
    cardImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSHsroJxIkElal8vnQYS_16z2B2IxItCaNu27R0tmBYjYy_GTuP1v9gXPm1nRQK_rKXa92fzAnTisMbJA7J9f69RzkcxChE9XfFwnnRvfAdaGJAbUFL9oeUytoQBPbPyvuv6-Sb1uLHYddaqN3uYErVI1tADQdkOTMzGpM0FriwSh_cRUyHhtl9fEO3pIztur2UZy5D9sBf-6CyxBvEbw7021CzraEbrdZr_0ulcF8XX2hzp7n_-DsucN0mBlqIfwe_fuJLiUbTfWH",
  },
  {
    id: "inter-type",
    title: "Inter Type Specimen",
    tag: "Typography",
    volume: "EP. 5",
    description:
      "Interactive exploration of the Inter typeface, highlighting its extraordinary legibility across scales and contexts.",
    tech: ["HTML/CSS", "Web Fonts API"],
    cardImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBR_Oeo6qnSMk6qnnC4ztCUP312VTxDUmumohuDu91VfBIPM7RlhzXgIuz5Iksc2ddbn5UMcwrj4bkjbyFCAV5o_3fxYobTpHPZfsYNxhf1h9U1k8n2IGGvIpX8gk0jEEq9nH9lvzSiMtVy5NVR3AI4ehCBwBIiawC1_P7Km-rubuPpBrdFvbfn_pAw2N0mnh-lWISmiZtxBvnKPwOgWB3OoH6nNZ7eoigB0hfDxr70-vVlqL64SQHekXfJG4Lot0mVckpFM7Or4lIT",
  },

  // Initials-fallback example (no cardImg):
  {
    id: "flux-portal",
    title: "Flux Portal",
    tag: "Mobile",
    volume: "Vol. 6",
    description:
      "Cross-platform design system and component library built for high-density mobile interfaces.",
    tech: ["React Native", "Expo", "Figma Tokens"],
    initials: "FP",
    coverGradient: "linear-gradient(135deg, #1a1040, #3a1a60)",
  },
];
