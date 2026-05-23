import type { Metadata } from "next";

import { BlogFilterGrid } from "@/components/BlogFilterGrid";
import { BlogCard } from "@/components/BlogCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { EmeraldDoveIllustration } from "@/components/illustrations/EmeraldDoveIllustration";
import { WatercolorCloudSmoke } from "@/components/illustrations/WatercolorCloudSmoke";
import { blogCategories, blogPosts } from "@/data/blogs";
import { toSlug } from "@/lib/utils/slug";
import { SafeLink } from "@/components/shared/SafeLink";
import { SafeImage } from "@/components/shared/SafeImage";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Emerald dove stories, palm ecosystem essays, and field notes from Araneri.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  const [featured, ...rest] = blogPosts;

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

      {/* 4. Unified Blogs Page Hero Section (2-Column Grid) */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[#ebdcc4]/20 via-transparent to-transparent">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Badges, Titles, & Paragraphs */}
          <div className="flex flex-col space-y-6 lg:col-span-6 relative z-30">
            <div className="hero-badge self-start">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.25em] uppercase bg-emerald-950/60 text-[#71b38f] border border-emerald-500/20 backdrop-blur-sm">
                Emerald Dove Chronicles
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
                Journal of the <span className="block mt-1 sm:mt-2">Canopy</span>
              </h1>
            </div>

            <div className="text-base leading-relaxed text-[#2c351e]/85 font-sans tracking-wide">
              <p>
                The Emerald Dove (*Chalcophaps indica*), the magnificent state bird of Tamil Nadu, 
                navigates wet palm grooves and signals seasonal change. Our canopy journal gathers 
                field essays, artisan notes, and botanical cycles, translating nature's patterns 
                into a living eco-narrative.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#journal-catalog"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wider bg-[#424b33] text-[#ebdcc4] hover:bg-[#2c351e] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                Read canopy entries <span className="ml-1.5">↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: Massive Animated Perched Emerald Dove centerpiece */}
          <div className="relative flex justify-center items-center lg:col-span-6 h-[400px] sm:h-[480px] lg:h-[550px] xl:h-[600px] z-20 w-full">
            <div className="relative w-full h-full flex justify-center items-center">
              {/* Soft ambient green-gold forest glow behind dove centerpiece */}
              <div className="absolute w-[240px] h-[240px] rounded-full bg-[#71b38f]/20 blur-[50px] z-0 pointer-events-none" />
              
              <EmeraldDoveIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Scoped Journal Catalog Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-24 md:space-y-32">
        
        {/* Featured Post Card Section */}
        {featured ? (
          <ScrollReveal className="space-y-8 pt-8 md:pt-12">
            <SectionHeader
              eyebrow="Canopy Highlight"
              title="Featured Article"
              titleClassName="text-3xl md:text-4xl font-bold text-[#1b4d22]"
              titleStyle={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0" }}
              description="A selected ecological field note that traces the intricate lines of palmyra life."
            />
            
            <SafeLink href={`/blogs/${toSlug(featured.title)}`} className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f3e8d6]/55 to-[#ebdcc4]/55 border border-[#424b33]/15 hover:border-[#424b33]/35 hover:shadow-[0_25px_50px_rgba(66,75,51,0.08)] hover:-translate-y-1.5 transition-all duration-500 p-6 sm:p-8">
                {/* Diagonal shiny hover sweep */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] ease-out bg-gradient-to-r from-transparent via-[#ebdcc4]/40 to-transparent -skew-x-12 pointer-events-none z-20" />

                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  {/* Left: Featured Image */}
                  <div className="relative lg:col-span-7 h-64 sm:h-80 overflow-hidden rounded-xl border border-[#424b33]/10 bg-[#ebdcc4]/25">
                    <SafeImage
                      src={featured.image.src}
                      alt={featured.image.alt}
                      width={featured.image.width}
                      height={featured.image.height}
                      className="h-full w-full object-cover brightness-[0.98] saturate-[0.90] transition-transform duration-1000 group-hover:scale-[1.03]"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2c351e]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider bg-[#424b33] text-[#ebdcc4] border border-[#ebdcc4]/10 shadow-sm">
                        {featured.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Right: Featured Text details */}
                  <div className="lg:col-span-5 space-y-5 flex flex-col justify-between h-full">
                    <div className="space-y-3.5">
                      <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#6e4f3a] font-sans">
                        ⭐ Featured field note
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-bold font-['Cormorant_Garamond',_serif] text-[#2c351e] group-hover:text-[#1b2410] transition-colors duration-300 border-b border-[#424b33]/10 pb-2">
                        {featured.title}
                      </h3>
                      <p className="text-[16px] leading-relaxed text-[#2c351e]/75 group-hover:text-[#2c351e]/85 transition-colors duration-300 italic font-['Cormorant_Garamond',_serif] font-medium">
                        {featured.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-[#424b33]/10">
                      <span className="text-[10px] font-bold tracking-[0.20em] uppercase text-[#6e4f3a] font-sans">
                        {featured.date}
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#424b33] group-hover:translate-x-1.5 transition-transform duration-300">
                        Read Story →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SafeLink>
          </ScrollReveal>
        ) : null}

        {/* Categories Filtering and Grid section */}
        <ScrollReveal id="journal-catalog" className="space-y-10 pt-16 border-t border-[#424b33]/10">
          <SectionHeader
            eyebrow="Constellation"
            title="Canopy Journal Catalog"
            titleClassName="text-4xl md:text-5xl font-bold text-[#1b4d22]"
            titleStyle={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0" }}
            description="Browse all essays, notes, and records spanning grove rituals, craft mappings, and ecological narratives."
          />
          
          <BlogFilterGrid posts={rest} categories={blogCategories} />
        </ScrollReveal>

      </div>
    </div>
  );
}
