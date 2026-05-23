import type { Metadata } from "next";

import { LaunchCard } from "@/components/LaunchCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PalmCraftsIllustration } from "@/components/illustrations/PalmCraftsIllustration";
import { WatercolorCloudSmoke } from "@/components/illustrations/WatercolorCloudSmoke";
import { launches } from "@/data/launches";

export const metadata: Metadata = {
  title: "Launches",
  description: "Traditional palm-leaf crafts, upcoming events, and seasonal releases from Araneri.",
  alternates: { canonical: "/launches" },
};

export default function LaunchesPage() {
  // Recent Releases is Palm-Leaf Atlas (May 2026)
  const recentLaunches = launches.slice(0, 1);
  // Upcoming Events are Seedlight Pavilion (June 2026) & Root Listening Rooms (July 2026)
  const upcomingLaunches = launches.slice(1);

  return (
    <div
      data-theme="home"
      className="w-full pb-24 md:pb-32 relative min-h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]"
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

      {/* 4. Unified Launches Page Hero Section (2-Column Grid) */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[#ebdcc4]/20 via-transparent to-transparent">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Badges, Majestic Titles, & Paragraphs */}
          <div className="flex flex-col space-y-6 lg:col-span-6 relative z-30">
            <div className="hero-badge self-start">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.25em] uppercase bg-emerald-950/60 text-[#71b38f] border border-emerald-500/20 backdrop-blur-sm">
                Launches & Releases
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
                Crafts of the <span className="block mt-1 sm:mt-2">Leaf</span>
              </h1>
            </div>

            <div className="text-base leading-relaxed text-[#2c351e]/85 font-sans tracking-wide">
              <p>
                Dry palmyra leaf weaving (Olai craft) is one of the oldest ecological arts of our soil. 
                Crafted with local Pudukkottai artisans, our seasonal launches translate this tactile 
                leaf wisdom into contemporary storytelling—blending architectural light installations, 
                sensory rooms, and ancestral archives of materials that age gracefully and return to the earth.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#upcoming-events"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wider bg-[#424b33] text-[#ebdcc4] hover:bg-[#2c351e] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                See Upcoming Events <span className="ml-1.5">↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: Massive Animated Woven Palm Leaf Centerpiece */}
          <div className="relative flex justify-center items-center lg:col-span-6 h-[400px] sm:h-[480px] lg:h-[550px] xl:h-[600px] z-20 w-full">
            <div className="relative w-full h-full flex justify-center items-center">
              {/* Soft ambient golden sunlit glow behind woven centerpiece */}
              <div className="absolute w-[240px] h-[240px] rounded-full bg-[#ebdcc4]/55 blur-[50px] z-0 pointer-events-none" />
              
              <PalmCraftsIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Events & Releases Catalog Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-24 md:space-y-32">
        
        {/* Section 1: Recent Releases */}
        <ScrollReveal id="recent-releases" className="space-y-10 pt-8 md:pt-12">
          <SectionHeader
            eyebrow="Chronicle"
            title="Recent Releases"
            titleClassName="text-4xl md:text-5xl font-bold text-[#1b4d22]"
            titleStyle={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0" }}
            description="Our latest tactile expressions and craft documentations that celebrate the grove ecosystem."
          />
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentLaunches.map((launch) => (
              <LaunchCard key={launch.title} launch={launch} />
            ))}
          </div>
        </ScrollReveal>

        {/* Section 2: Upcoming Events */}
        <ScrollReveal id="upcoming-events" className="space-y-10 pt-8 border-t border-[#424b33]/10">
          <SectionHeader
            eyebrow="Constellation"
            title="Upcoming Events"
            titleClassName="text-4xl md:text-5xl font-bold text-[#1b4d22]"
            titleStyle={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0" }}
            description="Prepare to step into immersive installations across architecture, sensory audio, and eco-design."
          />
          
          <div className="grid gap-8 md:grid-cols-2">
            {upcomingLaunches.map((launch) => (
              <LaunchCard key={launch.title} launch={launch} />
            ))}
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
