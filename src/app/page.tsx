import type { Metadata } from "next";

import { HeroSection } from "@/components/HeroSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ParallaxPalmyraForest } from "@/components/animations/ParallaxPalmyraForest";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PalmRootsIllustration } from "@/components/illustrations/PalmRootsIllustration";
import { DecorativePalmFrond } from "@/components/illustrations/DecorativePalmFrond";
import { WatercolorCloudSmoke } from "@/components/illustrations/WatercolorCloudSmoke";
import { homeBlogPreview, homeHero, homeInitiatives, homeLaunchPreview } from "@/data/home";

export const metadata: Metadata = {
  title: "Home",
  description: "Roots of a palm tree, rendered as cinematic story layers.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div data-theme="home" className="w-full">
      {/* 1. Hero section mounts cleanly directly beneath the header space */}
      <HeroSection
        title={homeHero.title}
        subtitle={homeHero.subtitle}
        description={homeHero.description}
        image={homeHero.image}
      />

      {/* 2. Standard content container wrapping remaining blocks with clean uniform spacing */}
      <div className="relative space-y-24 md:space-y-32 mt-24 md:mt-32 pb-24 md:pb-32 overflow-hidden">
        {/* Cinematic Parallax Palmyra Forest (trees, mist, amber spores) */}
        <ParallaxPalmyraForest />

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

        {/* Ambient Spotlight Radial Glows for premium depth behind headings/roots */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <div className="absolute top-[3%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#424b33]/[0.04] blur-[120px]" />
          <div className="absolute top-[24%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#ebdcc4]/[0.16] blur-[140px]" />
          <div className="absolute top-[45%] left-[5%] w-[550px] h-[550px] rounded-full bg-[#424b33]/[0.03] blur-[120px]" />
          <div className="absolute top-[68%] right-[8%] w-[600px] h-[600px] rounded-full bg-[#ebdcc4]/[0.16] blur-[140px]" />
          <div className="absolute top-[88%] left-[12%] w-[500px] h-[500px] rounded-full bg-[#424b33]/[0.04] blur-[110px]" />
        </div>

        {/* Interconnected network of calligraphic palm roots spreading side by side and connecting all headings */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          {/* Root 1 - Under 'Our Work' */}
          {/* Root 1A - Primary Leftward Root */}
          <PalmRootsIllustration 
            className="absolute top-[-3%] -left-[10%] w-[115%] h-auto text-[#3a2412]/[0.46] rotate-[-3deg]" 
            thicknessScale={3.2} 
          />
          {/* Root 1B - Secondary Rightward Root (Crossed) */}
          <PalmRootsIllustration 
            className="absolute top-[-1%] -right-[8%] w-[110%] h-auto text-[#3a2412]/[0.32] scale-x-[-1] rotate-[2deg]" 
            thicknessScale={2.6} 
          />

          {/* Root 2 - Under 'Initiatives' */}
          {/* Root 2A - Primary Rightward Root */}
          <PalmRootsIllustration 
            className="absolute top-[18%] -right-[12%] w-[120%] h-auto text-[#3a2412]/[0.42] scale-x-[-1] rotate-[8deg]" 
            thicknessScale={3.0} 
          />
          {/* Root 2B - Secondary Leftward Root (Crossed) */}
          <PalmRootsIllustration 
            className="absolute top-[20%] -left-[6%] w-[112%] h-auto text-[#3a2412]/[0.32] rotate-[-4deg]" 
            thicknessScale={2.4} 
          />

          {/* Root 3 - Under 'Launches' */}
          {/* Root 3A - Primary Leftward Root */}
          <PalmRootsIllustration 
            className="absolute top-[40%] -left-[14%] w-[120%] h-auto text-[#3a2412]/[0.44] rotate-[-6deg]" 
            thicknessScale={3.2} 
          />
          {/* Root 3B - Secondary Rightward Root (Crossed) */}
          <PalmRootsIllustration 
            className="absolute top-[42%] -right-[8%] w-[110%] h-auto text-[#3a2412]/[0.32] scale-x-[-1] rotate-[4deg]" 
            thicknessScale={2.6} 
          />

          {/* Root 4 - Under 'Journal' */}
          {/* Root 4A - Primary Rightward Root */}
          <PalmRootsIllustration 
            className="absolute top-[62%] -right-[14%] w-[125%] h-auto text-[#3a2412]/[0.46] scale-x-[-1] rotate-[4deg]" 
            thicknessScale={3.4} 
          />
          {/* Root 4B - Secondary Leftward Root (Crossed) */}
          <PalmRootsIllustration 
            className="absolute top-[64%] -left-[8%] w-[115%] h-auto text-[#3a2412]/[0.32] rotate-[-5deg]" 
            thicknessScale={2.6} 
          />

          {/* Root 5 - Under 'Footer transition' */}
          {/* Root 5A - Primary Leftward Root */}
          <PalmRootsIllustration 
            className="absolute top-[82%] -left-[12%] w-[125%] h-auto text-[#3a2412]/[0.42] rotate-[-5deg]" 
            thicknessScale={3.0} 
          />
          {/* Root 5B - Secondary Rightward Root (Crossed) */}
          <PalmRootsIllustration 
            className="absolute top-[84%] -right-[8%] w-[115%] h-auto text-[#3a2412]/[0.32] scale-x-[-1] rotate-[3deg]" 
            thicknessScale={2.5} 
          />
        </div>

        {/* Soft, spongy watercolor smoke clouds in the margins to frame the content beautifully */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          {/* Section 2 - Initiatives Clouds */}
          <WatercolorCloudSmoke className="absolute top-[18%] -left-[100px] md:-left-[180px]" delay={0.3} />
          <WatercolorCloudSmoke className="absolute top-[22%] -right-[140px] md:-right-[220px]" delay={0.1} />

          {/* Section 3 - Launches Clouds */}
          <WatercolorCloudSmoke className="absolute top-[38%] -left-[140px] md:-left-[220px]" delay={0.4} />
          <WatercolorCloudSmoke className="absolute top-[42%] -right-[100px] md:-right-[180px]" delay={0.2} />

          {/* Section 4 - Journal Clouds */}
          <WatercolorCloudSmoke className="absolute top-[58%] -left-[120px] md:-left-[200px]" delay={0.1} />
          <WatercolorCloudSmoke className="absolute top-[62%] -right-[140px] md:-right-[220px]" delay={0.3} />

          {/* Section 5 - Lower / Transition Clouds */}
          <WatercolorCloudSmoke className="absolute top-[78%] -left-[140px] md:-left-[220px]" delay={0.2} />
          <WatercolorCloudSmoke className="absolute top-[82%] -right-[120px] md:-right-[200px]" delay={0.4} />

          {/* Section 6 - Footer Transition Clouds */}
          <WatercolorCloudSmoke className="absolute top-[94%] -left-[100px] md:-left-[180px]" delay={0.3} />
          <WatercolorCloudSmoke className="absolute top-[96%] -right-[140px] md:-right-[220px]" delay={0.1} />
        </div>

        <ScrollReveal className="relative px-6 py-14 md:px-12 md:py-18">
          <div className="relative z-10 mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div className="relative space-y-5" data-section-heading>
              {/* Heading Margins Embellishments */}
              <DecorativePalmFrond className="absolute -left-28 -top-20 w-36 h-auto text-[#424b33]/12 pointer-events-none hidden md:block -rotate-12" />
              <DecorativePalmFrond className="absolute -right-24 -top-12 w-36 h-auto text-[#424b33]/10 pointer-events-none hidden lg:block rotate-45 scale-x-[-1]" />
              
              <p className="text-xs uppercase tracking-[0.4em] text-[#424b33] font-semibold">
                Our Work
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold gradient-title-green"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0" }}
              >
                A living organization for palm-rooted futures
              </h2>
            </div>
            <div className="space-y-5 border-l border-[#424b33]/20 pl-6 md:pl-8" data-scroll-reveal>
              <p className="text-base leading-relaxed text-[#2c351e]/80 md:text-lg">
                Araneri brings people, craft knowledge, ecological care, and modern storytelling
                into one calm working system. The homepage now keeps the focus on the organization
                instead of scattered decorative imagery.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { name: "Community", desc: "Forging deep bonds with caretakers and artisans." },
                  { name: "Craft", desc: "Revitalizing ancestral palm-leaf weaving lineages." },
                  { name: "Ecology", desc: "Restoring the natural hydrology of coastal groves." },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="group relative border-t-2 border-[#424b33]/20 pt-5 pb-4 px-4 rounded-b-lg bg-[#f3e8d6]/80 hover:bg-[#eae0cd] hover:border-[#424b33] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
                  >
                    {/* Soft warm-olive radial backdrop glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(66,75,51,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <p className="text-lg font-bold text-[#2c351e] tracking-wide transition-colors duration-300 group-hover:text-[#1b2410]">
                      {item.name}
                    </p>
                    <p className="mt-2 text-sm text-[#2c351e]/70 leading-relaxed group-hover:text-[#2c351e]/85 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="space-y-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto relative">
            {/* Heading Margins Embellishments */}
            <DecorativePalmFrond className="absolute -left-28 -top-16 w-36 h-auto text-[#424b33]/12 pointer-events-none hidden md:block -rotate-[25deg]" />
            <DecorativePalmFrond className="absolute -right-28 -top-10 w-36 h-auto text-[#424b33]/12 pointer-events-none hidden md:block rotate-[35deg] scale-x-[-1]" />
            
            <SectionHeader
              eyebrow="Initiatives"
              title="Rooted initiatives"
              titleClassName="text-4xl md:text-5xl font-bold gradient-title-green"
              titleStyle={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0" }}
              description="Programs that carry palm intelligence into community rituals, storytelling labs, and ecological stewardship."
            />
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {homeInitiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="group relative overflow-hidden px-8 py-10 md:px-10 md:py-12 rounded-xl bg-gradient-to-br from-[#f3e8d6] to-[#ebdcc4] hover:from-[#eae0cd] hover:to-[#ebdcc4] border border-[#424b33]/15 hover:border-[#424b33]/30 hover:shadow-[0_15px_30px_rgba(44,53,30,0.06)] transition-all duration-500 hover:-translate-y-2"
                data-section-card
              >
                {/* Diagonal light-beam shimmer sweep */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] ease-out bg-gradient-to-r from-transparent via-[#424b33]/5 to-transparent -skew-x-12 pointer-events-none" />

                <div className="absolute top-0 left-0 w-24 h-24 bg-[#424b33]/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-[#424b33]/10 group-hover:scale-150 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#2c351e] group-hover:text-[#1b2410] transition-colors duration-300">
                    {initiative.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#2c351e]/75 group-hover:text-[#2c351e]/90 leading-relaxed transition-colors duration-300">
                    {initiative.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="space-y-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto relative">
            {/* Heading Margins Embellishments */}
            <DecorativePalmFrond className="absolute -left-28 -top-20 w-36 h-auto text-[#424b33]/12 pointer-events-none hidden md:block -rotate-[15deg]" />
            <DecorativePalmFrond className="absolute -right-28 -top-12 w-36 h-auto text-[#424b33]/10 pointer-events-none hidden md:block rotate-[25deg] scale-x-[-1]" />
            
            <SectionHeader
              eyebrow="Launches"
              title="Palm-leaf crafts in motion"
              titleClassName="text-4xl md:text-5xl font-bold gradient-title-green"
              titleStyle={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0" }}
              description="Recent launches exploring palm-leaf craftsmanship and tactile storytelling."
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            {homeLaunchPreview.map((launch) => (
              <article
                key={launch.title}
                className="group relative border-l-2 border-[#424b33]/20 bg-[#f3e8d6]/40 px-8 py-9 transition-all duration-500 hover:border-l-4 hover:border-[#424b33] hover:-translate-y-0.5 hover:translate-x-1.5 hover:shadow-[0_12px_24px_rgba(44,53,30,0.05)] overflow-hidden rounded-r-xl"
                data-section-card
              >
                {/* Warm olive glass backdrop */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#424b33]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <p className="text-xs uppercase tracking-[0.28em] text-[#424b33] font-semibold transition-transform duration-300 group-hover:translate-x-0.5">
                  {launch.date}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-[#2c351e] flex items-center justify-between transition-colors duration-300 group-hover:text-[#1b2410]">
                  <span>{launch.title}</span>
                  <span className="text-sm font-semibold tracking-wide text-[#424b33] opacity-0 translate-x-[-12px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 flex items-center gap-1">
                    Explore Launch{" "}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#2c351e]/70 group-hover:text-[#2c351e]/85 transition-colors duration-300 md:text-base">
                  {launch.description}
                </p>
              </article>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="space-y-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto relative">
            {/* Heading Margins Embellishments */}
            <DecorativePalmFrond className="absolute -left-28 -top-12 w-36 h-auto text-[#424b33]/10 pointer-events-none hidden md:block -rotate-[30deg]" />
            <DecorativePalmFrond className="absolute -right-28 -top-16 w-36 h-auto text-[#424b33]/12 pointer-events-none hidden md:block rotate-[15deg] scale-x-[-1]" />
            
            <SectionHeader
              eyebrow="Journal"
              title="Emerald dove stories"
              titleClassName="text-4xl md:text-5xl font-bold gradient-title-green"
              titleStyle={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0" }}
              description="Field notes from the canopy, documenting rituals, ecology, and craft futures."
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            {homeBlogPreview.map((post) => (
              <article
                key={post.title}
                className="group relative border-t-2 border-[#424b33]/20 px-6 py-8 transition-all duration-500 hover:border-t-4 hover:border-[#424b33] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(44,53,30,0.05)] bg-[#f3e8d6]/40 hover:bg-[#f3e8d6]/80 overflow-hidden rounded-b-xl"
                data-section-card
              >
                {/* Soft warm glass container fade */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#f3e8d6]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <p className="text-xs uppercase tracking-[0.28em] text-[#424b33] font-semibold transition-transform duration-300 group-hover:translate-x-0.5">
                  {post.category} / {post.date}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-[#2c351e] flex items-center justify-between transition-colors duration-300 group-hover:text-[#1b2410]">
                  <span>{post.title}</span>
                  <span className="text-sm font-semibold tracking-wide text-[#424b33] opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 flex items-center gap-1 whitespace-nowrap ml-4">
                    Read Story{" "}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#2c351e]/70 group-hover:text-[#2c351e]/85 transition-colors duration-300 md:text-base">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
