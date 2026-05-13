import type { MediaImage, NavLink, SiteMeta, TimelineItem } from "@/types";

export const siteMeta: SiteMeta = {
  name: "Araneri",
  description:
    "A cinematic, nature-inspired storytelling platform rooted in palm-tree wisdom.",
  url: "https://araneri.example",
};

export const navLinks: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Launches", href: "/launches" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: readonly NavLink[] = [
  { label: "Privacy", href: "/" },
  { label: "Ethos", href: "/about" },
  { label: "Crafts", href: "/launches" },
  { label: "Contact", href: "/contact" },
];

export const imagePlaceholders = {
  palmRoots: {
    src: "/images/palm-roots.svg",
    alt: "Palm roots illustration placeholder",
    width: 1200,
    height: 900,
  },
  palmTrunk: {
    src: "/images/palm-trunk.svg",
    alt: "Palm trunk illustration placeholder",
    width: 1200,
    height: 900,
  },
  palmLeaves: {
    src: "/images/palm-leaves.svg",
    alt: "Palm leaves illustration placeholder",
    width: 1200,
    height: 900,
  },
  palmSeeds: {
    src: "/images/palm-seeds.svg",
    alt: "Palm seeds illustration placeholder",
    width: 900,
    height: 700,
  },
  iceApple: {
    src: "/images/ice-apple.svg",
    alt: "Ice apple illustration placeholder",
    width: 900,
    height: 700,
  },
  butterflies: {
    src: "/images/butterflies.svg",
    alt: "Butterflies illustration placeholder",
    width: 900,
    height: 700,
  },
  emeraldDove: {
    src: "/images/emerald-dove.svg",
    alt: "Emerald dove illustration placeholder",
    width: 900,
    height: 700,
  },
  palmCrafts: {
    src: "/images/palm-crafts.svg",
    alt: "Palm leaf crafts illustration placeholder",
    width: 900,
    height: 700,
  },
} as const satisfies Record<string, MediaImage>;

export const aboutNarrative = {
  mission:
    "We protect the cadence of palm ecosystems by translating tradition into modern, mindful rituals.",
  vision:
    "To craft a living archive of palm wisdom that nurtures communities and restores ecological balance.",
  story:
    "Araneri began as a listening practice in hidden groves, capturing the way palms cradle soil, water, and culture.",
  timeline: [
    {
      title: "Seed of Araneri",
      description: "A collective forms to document palm-rooted craftsmanship.",
      year: "2018",
    },
    {
      title: "Living Grove",
      description: "The first immersive exhibitions invite visitors into layered palm stories.",
      year: "2021",
    },
    {
      title: "Crafted Futures",
      description: "Collaborations expand across artisan networks and eco-tech studios.",
      year: "2024",
    },
  ] as const satisfies readonly TimelineItem[],
};
