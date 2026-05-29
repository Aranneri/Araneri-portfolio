import type { TeamMember } from "@/types";
import { imagePlaceholders } from "@/data/site";

export const team: readonly TeamMember[] = [
  {
    name: "Meera Ilamparithi",
    role: "Story Weaver",
    description: "Curates immersive narratives rooted in palm ecosystems.",
    image: imagePlaceholders.butterflies,
    portfolioUrl: "https://github.com/Skvtamilan/og_araneri",
  },
  {
    name: "Arun Vetrivel",
    role: "Craft Steward",
    description: "Guides artisan partnerships and material research.",
    image: imagePlaceholders.palmCrafts,
    portfolioUrl: "https://github.com/Skvtamilan/og_araneri",
  },
  {
    name: "Lalitha Sen",
    role: "Ecology Archivist",
    description: "Maps grove ecologies and restoration programs.",
    image: imagePlaceholders.palmLeaves,
    portfolioUrl: "https://github.com/Skvtamilan/og_araneri",
  },
];
