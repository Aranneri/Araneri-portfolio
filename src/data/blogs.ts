import type { BlogPost } from "@/types";
import { imagePlaceholders } from "@/data/site";

export const blogPosts: readonly BlogPost[] = [
  {
    title: "Emerald Dove Over the Grove",
    excerpt: "A field note on the bird that navigates palms and signals seasonal change.",
    category: "Ecology",
    date: "May 02, 2026",
    image: imagePlaceholders.emeraldDove,
  },
  {
    title: "Palm Trunk Cartography",
    excerpt: "Tracing the trunk as a memory column for craft and community.",
    category: "Craft",
    date: "Apr 09, 2026",
    image: imagePlaceholders.palmTrunk,
  },
  {
    title: "Ice Apple Rituals",
    excerpt: "The sensory language of palmyra sprout gatherings.",
    category: "Ritual",
    date: "Mar 21, 2026",
    image: imagePlaceholders.iceApple,
  },
  {
    title: "Butterfly Corridor",
    excerpt: "How Maravan butterflies guide planting cycles and design motifs.",
    category: "Culture",
    date: "Feb 16, 2026",
    image: imagePlaceholders.butterflies,
  },
];

export const blogCategories = ["All", "Ecology", "Craft", "Ritual", "Culture"] as const;
