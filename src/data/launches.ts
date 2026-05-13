import type { Launch } from "@/types";
import { imagePlaceholders } from "@/data/site";

export const launches: readonly Launch[] = [
  {
    title: "Palm-Leaf Atlas",
    description: "A tactile map series documenting grove lineages.",
    image: imagePlaceholders.palmCrafts,
    date: "May 2026",
  },
  {
    title: "Seedlight Pavilion",
    description: "An immersive canopy of palm-seed light forms.",
    image: imagePlaceholders.palmSeeds,
    date: "June 2026",
  },
  {
    title: "Root Listening Rooms",
    description: "Multi-sensory soundscapes of palm-root soil.",
    image: imagePlaceholders.palmRoots,
    date: "July 2026",
  },
];
