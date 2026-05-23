import type { Metadata } from "next";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { TeamCard } from "@/components/TeamCard";
import { SafeImage } from "@/components/shared/SafeImage";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { WatercolorCloudSmoke } from "@/components/illustrations/WatercolorCloudSmoke";
import { InteractiveTrunkGlisten } from "@/components/animations/InteractiveTrunkGlisten";
import { aboutNarrative, imagePlaceholders } from "@/data/site";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About",
  description: "Palm trunk stories and the people who protect them.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div
      data-theme="home"
      className="w-full pb-24 md:pb-32 relative min-h-screen overflow-hidden"
    >
      {/* 1. Slow Drifting Gold Spores in the Margins (for beautiful canvas texture) */}
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

      {/* 3. Soft, spongy watercolor smoke clouds in the margins to frame the content beautifully */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Section 2 Clouds */}
        <WatercolorCloudSmoke className="absolute top-[40%] -left-[140px] md:-left-[220px]" delay={0.3} />
        <WatercolorCloudSmoke className="absolute top-[48%] -right-[140px] md:-right-[220px]" delay={0.1} />

        {/* Section 3 Clouds */}
        <WatercolorCloudSmoke className="absolute top-[75%] -left-[120px] md:-left-[200px]" delay={0.2} />
        <WatercolorCloudSmoke className="absolute top-[82%] -right-[120px] md:-right-[200px]" delay={0.4} />
      </div>

      {/* 4. Palmyra Trunk Hero Section */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[#ebdcc4]/20 via-transparent to-transparent">
        {/* Core Column Container */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading & Content */}
          <div className="flex flex-col space-y-6 lg:col-span-6 relative z-30">
            <div className="self-start">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.25em] uppercase bg-emerald-950/60 text-[#71b38f] border border-emerald-500/20 backdrop-blur-sm">
                Palm Trunk Stewardship
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
                The Trunk of <span className="block mt-1 sm:mt-2">Memory</span>
              </h1>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-[#2c351e]/85 font-sans tracking-wide">
              <p>{aboutNarrative.mission}</p>
              <p>{aboutNarrative.vision}</p>
              <p>{aboutNarrative.story}</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href="#about-timeline"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide bg-[#424b33] text-[#ebdcc4] hover:bg-[#2c351e] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Discover Our Milestones
                <span className="ml-2 inline-block animate-bounce font-sans text-xs">↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: Massive Animated Palmyra Trunk Centerpiece (Organic Edge-Blurred vignette) */}
          <div className="relative flex justify-center items-center lg:col-span-6 h-[400px] sm:h-[480px] lg:h-[550px] xl:h-[600px] z-20 w-full">
            <div className="relative w-full h-full flex justify-center items-center">
              {/* Soft ambient golden sunlit glow behind trunk centerpiece */}
              <div className="absolute w-[240px] h-[240px] rounded-full bg-[#ebdcc4]/55 blur-[50px] z-0 pointer-events-none" />
              
              <InteractiveTrunkGlisten />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Centered Main Content Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-24 md:space-y-32">
        {/* Timeline Block */}
        <ScrollReveal id="about-timeline" className="space-y-8 pt-16 md:pt-24">
          <SectionHeader
            eyebrow="Timeline"
            title="Rooted milestones"
            titleClassName="text-3xl md:text-4xl font-bold text-[#2c351e]"
            description="Key moments in the growth of Araneri."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {aboutNarrative.timeline.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f3e8d6] to-[#ebdcc4] hover:from-[#eae0cd] hover:to-[#ebdcc4] border border-[#424b33]/15 hover:border-[#424b33]/35 hover:shadow-[0_20px_40px_-12px_rgba(44,53,30,0.12)] p-6 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
                data-section-card
              >
                {/* Diagonal light-beam shimmer sweep across the card on hover */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] ease-out bg-gradient-to-r from-transparent via-[#424b33]/6 to-transparent -skew-x-12 pointer-events-none" />
                
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-[#424b33]/8 text-[#424b33]">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-[#2c351e] group-hover:text-[#1b2410] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#2c351e]/75 group-hover:text-[#2c351e]/85 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Maravan Signals Block */}
        <ScrollReveal className="grid gap-10 rounded-2xl border border-[#424b33]/15 bg-gradient-to-br from-[#f3e8d6]/50 to-[#ebdcc4]/50 p-6 md:p-8 md:grid-cols-[0.85fr_1.15fr] md:items-center shadow-sm">
          <div className="relative p-2 rounded-2xl border border-[#424b33]/10 bg-[#ebdcc4]/30">
            <SafeImage
              src={imagePlaceholders.butterflies.src}
              alt={imagePlaceholders.butterflies.alt}
              width={imagePlaceholders.butterflies.width}
              height={imagePlaceholders.butterflies.height}
              className="rounded-xl brightness-[0.96]"
            />
          </div>
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Maravan"
              title="Butterfly signals in the grove"
              titleClassName="text-3xl md:text-4xl font-bold text-[#2c351e]"
              description="The Maravan section follows small winged movements as seasonal cues for planting, gathering, and visual storytelling."
            />
            <p className="text-base leading-relaxed text-[#2c351e]/80" data-section-card>
              These observations help the collective tune its craft calendar to living rhythms,
              carrying ecological attention into each public ritual and studio exchange.
            </p>
          </div>
        </ScrollReveal>

        {/* Team Grid Block */}
        <ScrollReveal className="space-y-8">
          <SectionHeader
            eyebrow="Team"
            title="Butterfly-guided stewards"
            titleClassName="text-3xl md:text-4xl font-bold text-[#2c351e]"
            description="A collective of storytellers, artisans, and ecological archivists."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
