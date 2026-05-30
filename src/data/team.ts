import type { TeamMember } from "@/types";
import { imagePlaceholders } from "@/data/site";

const portfolioBaseUrl = "https://aranneri.github.io/Araneri-portfolio";

export const team: readonly TeamMember[] = [
  {
    name: "Eaknath",
    role: "Portfolio Steward",
    description: "Builds digital stories that carry Araneri's work with clarity.",
    image: imagePlaceholders.butterflies,
    portfolioUrl: `${portfolioBaseUrl}/Eaknath.html`,
  },
  {
    name: "Ezhiloviya",
    role: "Visual Storyteller",
    description: "Shapes graceful interfaces with a strong eye for detail.",
    image: imagePlaceholders.palmCrafts,
    portfolioUrl: `${portfolioBaseUrl}/Ezhiloviya.html`,
  },
  {
    name: "Guruaishwarya",
    role: "Experience Designer",
    description: "Connects thoughtful design with purposeful team storytelling.",
    image: imagePlaceholders.palmLeaves,
    portfolioUrl: `${portfolioBaseUrl}/Guruaishwarya.html`,
  },
  {
    name: "Hariprasath",
    role: "Web Craftsman",
    description: "Turns ideas into focused, usable digital experiences.",
    image: imagePlaceholders.palmRoots,
    portfolioUrl: `${portfolioBaseUrl}/Hariprasath.html`,
  },
  {
    name: "Kamala",
    role: "Creative Technologist",
    description: "Blends creative direction with practical web execution.",
    image: imagePlaceholders.palmTrunk,
    portfolioUrl: `${portfolioBaseUrl}/Kamala.html`,
  },
  {
    name: "Kannan",
    role: "Interface Builder",
    description: "Creates clean, dependable pages for modern web journeys.",
    image: imagePlaceholders.palmSeeds,
    portfolioUrl: `${portfolioBaseUrl}/Kannan.html`,
  },
  {
    name: "Kishore",
    role: "Frontend Maker",
    description: "Builds polished interactions with steady technical care.",
    image: imagePlaceholders.iceApple,
    portfolioUrl: `${portfolioBaseUrl}/Kishore.html`,
  },
  {
    name: "Madhumitha",
    role: "Content Designer",
    description: "Frames each portfolio with warmth, rhythm, and intent.",
    image: imagePlaceholders.emeraldDove,
    portfolioUrl: `${portfolioBaseUrl}/Madhumitha.html`,
  },
  {
    name: "Mahaswetha",
    role: "Digital Curator",
    description: "Organizes personal work into clear and memorable narratives.",
    image: {
      src: "/team/mahaswetha/mahaswetha.png",
      alt: "Mahaswetha profile photo",
      width: 433,
      height: 576,
    },
    portfolioUrl: `${portfolioBaseUrl}/Mahaswetha.html`,
  },
  {
    name: "Murugesan",
    role: "Product Thinker",
    description: "Connects practical problem solving with careful presentation.",
    image: imagePlaceholders.palmCrafts,
    portfolioUrl: `${portfolioBaseUrl}/Murugesan.html`,
  },
  {
    name: "Niranjanaa",
    role: "Design Researcher",
    description: "Brings observation, structure, and craft into every page.",
    image: imagePlaceholders.palmLeaves,
    portfolioUrl: `${portfolioBaseUrl}/Niranjanaa.html`,
  },
  {
    name: "Pavithra",
    role: "Creative Developer",
    description: "Builds expressive portfolio moments with a clean digital touch.",
    image: imagePlaceholders.palmRoots,
    portfolioUrl: `${portfolioBaseUrl}/Pavithra.html`,
  },
  {
    name: "Prasanth",
    role: "Technical Storyteller",
    description: "Presents technical work through simple and confident pages.",
    image: imagePlaceholders.palmTrunk,
    portfolioUrl: `${portfolioBaseUrl}/Prasanth.html`,
  },
  {
    name: "Praveena",
    role: "Portfolio Designer",
    description: "Crafts personal identity into focused web presentation.",
    image: imagePlaceholders.palmSeeds,
    portfolioUrl: `${portfolioBaseUrl}/Praveena.html`,
  },
  {
    name: "Shrijesh",
    role: "Web Story Builder",
    description: "Brings the team portfolio hub together with clear direction.",
    image: imagePlaceholders.iceApple,
    portfolioUrl: `${portfolioBaseUrl}/Shrijesh.html`,
  },
];
