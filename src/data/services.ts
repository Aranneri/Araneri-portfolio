import type { Service } from "@/types";
import { imagePlaceholders } from "@/data/site";

export const services: readonly Service[] = [
  {
    title: "Arathadam",
    description:
      "A guided immersion into palm-leaf ritual design and mindful craft processes.",
    image: imagePlaceholders.palmLeaves,
    href: "/services",
    externalHref: "https://araneri.example/services/arathadam",
  },
  {
    title: "Kuralneri",
    description:
      "Story circles that translate oral histories into visual and sensory narratives.",
    image: imagePlaceholders.palmTrunk,
    href: "/services",
    externalHref: "https://araneri.example/services/kuralneri",
  },
  {
    title: "Newsletter",
    description:
      "Seasonal transmissions of palm ecology, artisan updates, and new launches.",
    image: imagePlaceholders.palmSeeds,
    href: "/services",
    externalHref: "https://araneri.example/newsletter",
  },
];
