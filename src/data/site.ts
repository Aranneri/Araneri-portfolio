import type { MediaImage, NavLink, SiteMeta, TimelineItem } from "@/types";

export const siteMeta: SiteMeta = {
  name: "Araneri",
  description: "A cinematic, nature-inspired storytelling platform rooted in palm-tree wisdom.",
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
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop",
    alt: "An organization team collaborating around a meeting table",
    width: 1200,
    height: 900,
  },
  palmTrunk: {
    src: "https://images.unsplash.com/photo-1609137144813-9e1faa9d9f08?q=80&w=1500&auto=format&fit=crop",
    alt: "Palm tree trunk texture and detail",
    width: 1200,
    height: 900,
  },
  palmLeaves: {
    src: "https://images.unsplash.com/photo-1618983081563-430f63602022?q=80&w=1500&auto=format&fit=crop",
    alt: "Tropical palm leaves background",
    width: 1200,
    height: 900,
  },
  palmSeeds: {
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1500&auto=format&fit=crop",
    alt: "Palm fruits and seeds closeup",
    width: 900,
    height: 700,
  },
  iceApple: {
    src: "https://images.unsplash.com/photo-1599599810694-b5ac4dd33e2d?q=80&w=1500&auto=format&fit=crop",
    alt: "Tropical fruit in nature",
    width: 900,
    height: 700,
  },
  butterflies: {
    src: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1500&auto=format&fit=crop",
    alt: "Butterfly in natural habitat",
    width: 900,
    height: 700,
  },
  emeraldDove: {
    src: "https://images.unsplash.com/photo-1444464666175-1642a9651534?q=80&w=1500&auto=format&fit=crop",
    alt: "Bird in nature - emerald dove",
    width: 900,
    height: 700,
  },
  palmCrafts: {
    src: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?q=80&w=1500&auto=format&fit=crop",
    alt: "Traditional palm leaf crafts and woven products",
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
