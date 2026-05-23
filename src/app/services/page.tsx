import type { Metadata } from "next";

import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FloatingLeaves } from "@/components/animations/FloatingLeaves";
import { DecorativePalmFrond } from "@/components/illustrations/DecorativePalmFrond";
import { WatercolorCloudSmoke } from "@/components/illustrations/WatercolorCloudSmoke";
import { InteractiveWeavingGlisten } from "@/components/animations/InteractiveWeavingGlisten";
import { services } from "@/data/services";
import { imagePlaceholders } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Palmyra leaves translated into immersive services and rituals.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div
      data-theme="home"
      className="w-full pb-24 md:pb-32 relative min-h-screen overflow-hidden"
    >
      {/* Global organic leaf particles drifting across the entire page */}
      <FloatingLeaves />

      {/* Slow Drifting Gold Spores in the Margins (to populate the empty canvas sides beautifully) */}
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

      {/* Soft warm ambient spotlights behind the canopy layout */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-[4%] left-[15%] w-[500px] h-[500px] rounded-full bg-[#424b33]/[0.05] blur-[120px]" />
        <div className="absolute top-[32%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#ebdcc4]/[0.18] blur-[140px]" />
        <div className="absolute top-[65%] left-[8%] w-[550px] h-[550px] rounded-full bg-[#424b33]/[0.04] blur-[120px]" />
      </div>

      {/* Dynamic rustling canopy leaf decors swaying in the background (No Roots!) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Under Hero / Upper page leaves */}
        <DecorativePalmFrond className="absolute top-[28%] -left-[14%] w-[38%] h-auto text-[#424b33]/15 -rotate-[15deg]" />
        <DecorativePalmFrond className="absolute top-[36%] -right-[12%] w-[36%] h-auto text-[#424b33]/12 rotate-[25deg] scale-x-[-1]" />

        {/* Middle page leaves */}
        <DecorativePalmFrond className="absolute top-[58%] -left-[12%] w-[35%] h-auto text-[#424b33]/12 -rotate-[30deg]" />
        <DecorativePalmFrond className="absolute top-[68%] -right-[14%] w-[38%] h-auto text-[#424b33]/14 rotate-[20deg] scale-x-[-1]" />

        {/* Lower transition leaves */}
        <DecorativePalmFrond className="absolute top-[82%] -left-[10%] w-[36%] h-auto text-[#424b33]/15 -rotate-[10deg]" />
        <DecorativePalmFrond className="absolute top-[88%] -right-[10%] w-[35%] h-auto text-[#424b33]/12 rotate-[15deg] scale-x-[-1]" />
      </div>

      {/* Soft, spongy watercolor smoke clouds in the margins to frame the content beautifully */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Section 2 Clouds */}
        <WatercolorCloudSmoke className="absolute top-[42%] -left-[140px] md:-left-[220px]" delay={0.3} />
        <WatercolorCloudSmoke className="absolute top-[48%] -right-[140px] md:-right-[220px]" delay={0.1} />

        {/* Section 3 Clouds */}
        <WatercolorCloudSmoke className="absolute top-[82%] -left-[120px] md:-left-[200px]" delay={0.2} />
        <WatercolorCloudSmoke className="absolute top-[86%] -right-[120px] md:-right-[200px]" delay={0.4} />
      </div>

      {/* 1. Palmyra Leaves Hero Section */}
      <section className="relative w-full min-h-[65vh] md:min-h-[75vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[#ebdcc4]/20 via-transparent to-transparent">
        {/* Soft, warm ambient spotlights behind the hero */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <div className="absolute top-[10%] left-[20%] w-[450px] h-[450px] rounded-full bg-[#424b33]/[0.05] blur-[110px]" />
          <div className="absolute top-[30%] right-[10%] w-[550px] h-[550px] rounded-full bg-[#ebdcc4]/[0.22] blur-[130px]" />
        </div>

        {/* Ambient Swaying Palm Leaves framing the Hero in the background */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <DecorativePalmFrond className="absolute -left-[8%] top-[5%] w-[42%] h-auto text-[#424b33]/15 -rotate-[22deg] scale-x-[1]" />
          <DecorativePalmFrond className="absolute -right-[6%] top-[12%] w-[40%] h-auto text-[#424b33]/12 rotate-[32deg] scale-x-[-1]" />
        </div>

        {/* Core Column Container */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading & Content */}
          <div className="flex flex-col space-y-6 lg:col-span-6 relative z-30">
            <div className="self-start">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.25em] uppercase bg-emerald-950/60 text-[#71b38f] border border-emerald-500/20 backdrop-blur-sm">
                Palmyra Leaves
              </span>
            </div>

            <div className="block w-full select-none mt-2">
              <h1
                className="painted-title-exact text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-normal leading-[0.95] pb-1"
                style={{
                  fontFamily: "var(--font-water-brush), 'Water Brush', 'Caveat Brush', cursive",
                  letterSpacing: "0.02em",
                }}
              >
                Services of <span className="block mt-1 sm:mt-2">the Canopy</span>
              </h1>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-[#2c351e]/85 font-sans tracking-wide">
              Araneri services are designed as living palm leaves, carrying shade, shelter,
              and ancient memory. We weave traditional oral history, mindful craft processes,
              and canopy ecology into immersive programs for modern creators and groves.
            </p>

            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href="#services-list"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide bg-[#424b33] text-[#ebdcc4] hover:bg-[#2c351e] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Our Services
                <span className="ml-2 inline-block animate-bounce font-sans text-xs">↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Organic Palmyra Weaving Centerpiece (Feathered/Blurred Edges) */}
          <div className="relative flex justify-center items-center lg:col-span-6 h-[400px] sm:h-[480px] lg:h-[550px] xl:h-[600px] z-20 w-full">
            <div className="relative w-full h-full flex justify-center items-center">
              {/* Soft ambient golden sunlit glow behind centerpiece */}
              <div className="absolute w-[260px] h-[260px] rounded-full bg-[#ebdcc4]/60 blur-[60px] z-0 pointer-events-none" />
              
              {/* Organic Feathered Centerpiece */}
              <InteractiveWeavingGlisten />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services List grid content */}
      <ScrollReveal id="services-list" className="relative z-10 max-w-6xl mx-auto space-y-16 py-16 md:py-24 px-6">
        <div className="relative">
          {/* Heading Margins Embellishments */}
          <DecorativePalmFrond className="absolute -left-28 -top-20 w-36 h-auto text-[#424b33]/12 pointer-events-none hidden md:block -rotate-[30deg]" />
          <DecorativePalmFrond className="absolute -right-28 -top-12 w-36 h-auto text-[#424b33]/10 pointer-events-none hidden md:block rotate-[25deg] scale-x-[-1]" />
          
          <SectionHeader
            eyebrow="Canopy Stewardship"
            title="Services that breathe with the grove"
            titleClassName="text-4xl md:text-5xl font-bold gradient-title-green"
            titleStyle={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0" }}
            description="Our workshops, newsletter transmissions, and story circles are crafted as living palm leaves, bringing shade, structure, and ancient memory to modern minds."
          />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}

