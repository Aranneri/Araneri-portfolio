import type { Metadata } from "next";

import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { IceAppleSproutIllustration } from "@/components/illustrations/IceAppleSproutIllustration";
import { WatercolorCloudSmoke } from "@/components/illustrations/WatercolorCloudSmoke";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Ice apple and palmyra sprout offerings from Araneri.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <div
      data-theme="home"
      className="w-full pb-24 md:pb-32 relative min-h-screen overflow-hidden"
    >
      {/* 1. Slow Drifting Gold Spores in the Margins */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Left margin spores */}
        <div className="absolute top-[8%] left-[4%] w-[8px] h-[8px] rounded-full bg-[#d4a373] opacity-35 blur-[1px] animate-spore-slow-1" />
        <div className="absolute top-[28%] left-[6%] w-[12px] h-[12px] rounded-full bg-[#d4a373] opacity-25 blur-[2px] animate-spore-slow-2" />
        <div className="absolute top-[52%] left-[3%] w-[10px] h-[10px] rounded-full bg-[#d4a373] opacity-30 blur-[1px] animate-spore-slow-3" />
        <div className="absolute top-[78%] left-[5%] w-[14px] h-[14px] rounded-full bg-[#d4a373] opacity-20 blur-[2px] animate-spore-slow-1" />

        {/* Right margin spores */}
        <div className="absolute top-[16%] right-[5%] w-[10px] h-[10px] rounded-full bg-[#d4a373] opacity-30 blur-[1px] animate-spore-slow-2" />
        <div className="absolute top-[40%] right-[3%] w-[14px] h-[14px] rounded-full bg-[#d4a373] opacity-20 blur-[2px] animate-spore-slow-3" />
        <div className="absolute top-[62%] right-[6%] w-[8px] h-[8px] rounded-full bg-[#d4a373] opacity-40 blur-[1px] animate-spore-slow-1" />
        <div className="absolute top-[88%] right-[4%] w-[12px] h-[12px] rounded-full bg-[#d4a373] opacity-25 blur-[2px] animate-spore-slow-2" />
      </div>

      {/* 2. Soft warm ambient spotlights behind sections */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-[5%] left-[12%] w-[500px] h-[500px] rounded-full bg-[#424b33]/[0.05] blur-[120px]" />
        <div className="absolute top-[38%] right-[6%] w-[600px] h-[600px] rounded-full bg-[#ebdcc4]/[0.18] blur-[140px]" />
        <div className="absolute top-[72%] left-[8%] w-[550px] h-[550px] rounded-full bg-[#424b33]/[0.04] blur-[120px]" />
      </div>

      {/* 3. Watercolor clouds in the margins (gutters only, removed from top Hero section) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <WatercolorCloudSmoke className="absolute top-[48%] -left-[140px] md:-left-[220px]" delay={0.3} />
        <WatercolorCloudSmoke className="absolute top-[55%] -right-[140px] md:-right-[220px]" delay={0.1} />
      </div>

      {/* 4. Mockup-Perfect Products Hero Section (2-Column Grid) */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[#ebdcc4]/20 via-transparent to-transparent">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Badges, Majestic Titles, & Paragraphs */}
          <div className="flex flex-col space-y-6 lg:col-span-6 relative z-30">
            <div className="hero-badge self-start">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.25em] uppercase bg-emerald-950/60 text-[#71b38f] border border-emerald-500/20 backdrop-blur-sm">
                Ice Apple & Sprout Craft
              </span>
            </div>

            <div className="block w-full select-none mt-1">
              <h1
                className="painted-title-exact text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-normal leading-[0.95] pb-1"
                style={{
                  fontFamily: "var(--font-water-brush), 'Water Brush', 'Caveat Brush', cursive",
                  letterSpacing: "0.02em",
                }}
              >
                Products of the <span className="block mt-1 sm:mt-2">Sprout</span>
              </h1>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-[#2c351e]/85 font-sans tracking-wide">
              <p>
                Our curated offerings celebrate the cooling, crystalline wisdom of the ice apple (nungu) 
                and the rising, nurturing strength of the emerging palmyra sprout (panangkizhangu). 
                Each creation is a tactile chapter designed to connect you to grove ecology and ancient lineages.
              </p>
              <p>
                Hand-crafted by local caretakers and apprentices in Pudukkottai, these offerings embody 
                material storytelling, grounding rituals, and ancestral palm craft preservation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#products-list"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wider bg-[#424b33] text-[#ebdcc4] hover:bg-[#2c351e] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                Explore Sprout Catalog <span className="ml-1.5">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Massive Animated Sprout & Ice Apple Vector Centerpiece */}
          <div className="relative flex justify-center items-center lg:col-span-6 h-[400px] sm:h-[480px] lg:h-[550px] xl:h-[600px] z-20 w-full">
            <div className="relative w-full h-full flex justify-center items-center">
              {/* Soft ambient golden sunlit glow behind sprout centerpiece */}
              <div className="absolute w-[240px] h-[240px] rounded-full bg-[#ebdcc4]/55 blur-[50px] z-0 pointer-events-none" />
              
              <IceAppleSproutIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sprout & Kernel Product Catalog Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-24 md:space-y-32">
        <ScrollReveal id="products-list" className="space-y-10 pt-16 md:pt-24">
          <SectionHeader
            eyebrow="Constellation"
            title="Sprout & Kernel Catalog"
            titleClassName="text-4xl md:text-5xl font-bold text-[#1b4d22]"
            titleStyle={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0" }}
            description="Discover our hand-crafted ritual kits, seasonal tastings, and studio apprentice creations that honor the palm."
          />
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}


