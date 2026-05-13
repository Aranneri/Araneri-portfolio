import type { Initiative } from "@/types";
import { imagePlaceholders } from "@/data/site";

export const homeHero = {
  title: "Roots of a Palm Tree",
  subtitle: "A cinematic journey into Araneri",
  description:
    "Walk the subterranean pathways where palms store memory, water, and quiet resilience.",
  primaryCta: { label: "Explore More", href: "/services" },
  secondaryCta: { label: "Contact Us", href: "/contact" },
  image: imagePlaceholders.palmRoots,
} as const;

export const homeInitiatives: readonly Initiative[] = [
  {
    title: "Root Archives",
    description:
      "Mapping the cultural stories embedded in palm-root systems and their guardians.",
  },
  {
    title: "Soil Resonance",
    description:
      "Co-creating rituals that reconnect communities with earth rhythms.",
  },
  {
    title: "Water Memory",
    description:
      "Documenting the hydrology of palms through immersive storytelling labs.",
  },
];

export const homeLaunchPreview = [
  {
    title: "Weave of Dusk",
    description: "Palm-leaf textures translated into tactile light sculptures.",
    image: imagePlaceholders.palmCrafts,
    date: "May 2026",
  },
  {
    title: "Grove Cartography",
    description: "A navigable atlas of artisan palm-craft lineages.",
    image: imagePlaceholders.palmLeaves,
    date: "June 2026",
  },
] as const;

export const homeBlogPreview = [
  {
    title: "The Emerald Dove Flight Path",
    excerpt:
      "Tracing the guardian bird that threads together forest canopy and palm hearts.",
    category: "Ecology",
    date: "Apr 18, 2026",
    image: imagePlaceholders.emeraldDove,
  },
  {
    title: "Seedlight Rituals",
    excerpt:
      "How palm seeds become ceremonial markers of renewal across coastal villages.",
    category: "Culture",
    date: "Mar 02, 2026",
    image: imagePlaceholders.palmSeeds,
  },
] as const;
