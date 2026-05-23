import type { Product } from "@/types";
import { imagePlaceholders } from "@/data/site";

export const products: readonly Product[] = [
  {
    title: "Nethineri",
    description: "A palm-rooted ritual kit for grounding and evening renewal.",
    image: imagePlaceholders.iceApple,
    href: "/products",
    highlight: "Handcrafted with heirloom fibers",
  },
  {
    title: "Cross Tongue",
    description: "A sculptural language object celebrating palm-leaf calligraphy.",
    image: imagePlaceholders.palmLeaves,
    href: "/products",
    highlight: "Limited artisan editions",
  },
  {
    title: "Pozhudhu Neri",
    description: "A tasting ritual inspired by the ice apple and coastal dawns.",
    image: imagePlaceholders.iceApple,
    href: "/products",
    highlight: "Seasonal pairing experiences",
  },
  {
    title: "Ezhil-Thozhil Koodam",
    description: "A studio collective for palm craft apprenticeships and exchanges.",
    image: imagePlaceholders.palmTrunk,
    href: "/products",
    highlight: "Community-led residencies",
  },
];
