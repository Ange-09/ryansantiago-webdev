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
    id: "compliance",
    title: "AdU CMS",
    tag: "Process Automation",
    volume: "An Automated Compliance Monitoring Tool  ",
    description:
      "The Compliance Monitoring System is a Python-based automation tool that tracks document submission deadlines and sends email reminders to responsible offices and departments. It helps ensure timely compliance with reporting and document requirements for external regulatory bodies.",
    tech: ["Python", "SMTP", "Git Actions", "openpyxl"],
    cardImg: "./images/compositions/cmslogo.png",
    isFeatured: true,
    modalImg: "./images/compositions/cms.png",
    link: "https://fix-flow-beta.vercel.app/",
  },
  {
    id: "fixflow",
    title: "Fix Flow",
    tag: "IE Capstone Prototype",
    volume: "An Equipment Operations Management System",
    description:
      "Fix Flow is a web-based machine maintenance platform that unifies criticality assessment, PF Curve scheduling, KPI tracking, and spare parts management into a single, centralized dashboard. Built for CNC operations, it empowers maintenance teams to make smarter, data-driven decisions that reduce downtime and extend equipment life.",
    tech: ["Next.js", "TypeScript", "CSS"],
    cardImg: "./images/compositions/fixflowlogo.png",
    isFeatured: true,
    modalImg: "./images/compositions/fixflow.png",
    link: "https://fix-flow-beta.vercel.app/",
  },
  {
    id: "studyspot",
    title: "Study Spot",
    tag: "IE Capstone Prototype",
    volume: "A Café & Student Lounge Finder",
    description:
      "Study Spot is a web-based platform that helps students discover nearby cafés and lounges suited for studying, meetings, or relaxation, with easy filtering by amenities and location. It also empowers café owners to manage seat availability and view reservation requests in real time, all within a seamless, locally-simulated prototype experience.",
    tech: ["Next.js", "WebGL", "Sanity"],
    cardImg: "./images/compositions/studyspotlogo.png",
    isFeatured: true,
    modalImg: "./images/compositions/studyspot.png",
    link: "https://ange-09.github.io/student-cafe/",
  },
  {
    id: "lakecast",
    title: "Laguna Lake-Cast",
    tag: "IE Capstone Prototype",
    volume: "A Fish Forecasting Tool for Laguna Lake",
    description:
      "Huli Forecast is a predictive tool that estimates fish count in Laguna Lake using environmental data such as rainfall, temperature, and water hyacinth proliferation. It first forecasts key water quality parameters and then predicts the approximate fish count by area, providing a detailed, data-driven basis for sustainable fisheries management and decision-making.",
    tech: ["Nuxt", "GSAP", "Contentful"],
    cardImg: "./images/compositions/lakecastlogo.png",
    isFeatured: false,
    modalImg: "./images/compositions/lakecast.png",
    link: "https://ange-09.github.io/FISH-COUNT-CALCULATOR-A/index.html",
  },

  {
    id: "portfolio",
    title: "Personal Portfolio",
    tag: "Portfolio Website",
    volume: "A Fish Forecasting Tool for Laguna Lake",
    description:
      "This is Ryan's personal portfolio site, featuring a dark Midnight Jazz theme. It showcases his work as a systems developer, featuring his projects, his professional experience, and a way to get in touch.",
    tech: ["Next.js", "GSAP", "Contentful"],
    cardImg: "./images/compositions/portfoliologo.png",
    isFeatured: false,
    modalImg: "./images/compositions/portfolio.png",
    link: "https://ange-09.github.io/FISH-COUNT-CALCULATOR-A/index.html",
  },
];
