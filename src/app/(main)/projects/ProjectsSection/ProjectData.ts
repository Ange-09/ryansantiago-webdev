export interface Project {
  id: string;
  title: string;
  tag: string;
  volume: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  initials?: string;
  coverGradient?: string;
  isFeatured?: boolean;
  webUrl?: string;
}
export const PROJECTS: Project[] = [
  {
    id: "midnight-os",
    title: "Midnight OS Interface",
    tag: "Featured",
    volume: "Vol. 1",
    description:
      "A conceptual operating system emphasising calm focus. Designed with deep tonal layering and atmospheric lighting to reduce cognitive load during late-night work sessions.",
    tech: ["Figma", "ProtoPie", "React"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDy9l_R6KYQqIlVewJzw37sVos_vATHeucGIjzo1AFxFEf3m3L-lBkR69nQhiKOEPnaR1SXi3EzmViSLOWpr2HPSlEtcuv-mV9PJj6xb2FrTayYDls4Nzhc8c6AHem5pToWEiRMyrFFvsNsiTSqe4ADnmCeISTuF5NdEL1vDYlpixrho0QkyqGXYzbdJrSkYKWvt_ACGpJjMN3YB3QwnoaiwdHBqxpEZWsCkTHVT6wjgqCp86QRNUq-8c-Cl_h5a1je1r95s-lFM_nK",
    isFeatured: true,
    webUrl: "https://fix-flow-efoyeasry-ange-09s-projects.vercel.app/login",
  },
  {
    id: "analog-sound",
    title: "Analog Sound Co.",
    tag: "E-Commerce",
    volume: "EP. 2",
    description:
      "Digital storefront for bespoke audio equipment, bringing physical textures and tactile warmth to a web shopping experience.",
    tech: ["Next.js", "WebGL", "Sanity"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCq58hhoOIW70AEo90zPjJ3P6j0xfqbxNbXI25RNfnRpCshVSnryh9d9eZbk4U9E1gTn46mzvvDy4LGFXBM_NQ3TRE70Rn2IvAfZwjndd6lisL2tBFIysbc27hL8Y3JmsaDmcItOAWjZ6MTgjuUsI45dmMGny5HwN3qO4XSuB4l_m6S0F0gHtmPr3TlRdJMjRZl9a30wulRP5omfvE49WwM_rl3Swz09g2RECuitBC8DeTx5GSG8N3A2QP4oMnsE_CewowhE0BEPtSp",
  },
  {
    id: "brutal-form",
    title: "Brutal Form",
    tag: "Editorial",
    volume: "Vol. 3",
    description:
      "A digital magazine exploring brutalist architecture through strict grid layouts and uncompromising typography.",
    tech: ["Nuxt", "GSAP", "Contentful"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtkepMNQZdTSGa5DMWoyrS-osOq97IRDkLpt1UOuu3IXI1yN5JET66RcdNh-Ue5W6Qo6j76sttviXvvYKH9-J9JiR5ss5yxFkKgaokKRW7cYPNXhTCBxErNrhOzjYsCkQbKFNdFaC_DszGwLGlAv81di7QxIKKzmLdT5fCd_D9Im4mXdQ8FEmkm_KHdg_STXC_bEZ3J8T6ftJpitIi8xiauXo_iYxVIi0ghdAlaJHXPnerMZ9vVjcRL1kSka76Z8jH0KWhOMLrNzCB",
  },
  {
    id: "prism",
    title: "Prism Analytics",
    tag: "SaaS App",
    volume: "Vol. 4",
    description:
      "Data visualisation dashboard prioritising clarity and low visual noise for demanding analytics workflows.",
    tech: ["Vue 3", "D3.js", "TailwindCSS"],
    imageUrl:
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
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBR_Oeo6qnSMk6qnnC4ztCUP312VTxDUmumohuDu91VfBIPM7RlhzXgIuz5Iksc2ddbn5UMcwrj4bkjbyFCAV5o_3fxYobTpHPZfsYNxhf1h9U1k8n2IGGvIpX8gk0jEEq9nH9lvzSiMtVy5NVR3AI4ehCBwBIiawC1_P7Km-rubuPpBrdFvbfn_pAw2N0mnh-lWISmiZtxBvnKPwOgWB3OoH6nNZ7eoigB0hfDxr70-vVlqL64SQHekXfJG4Lot0mVckpFM7Or4lIT",
  },
  // Initials-fallback example (no imageUrl):
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
