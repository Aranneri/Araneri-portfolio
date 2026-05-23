import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { ButterflyParticles } from "@/components/animations/ButterflyParticles";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { InteractivePalmyraLeaves } from "@/components/animations/InteractivePalmyraLeaves";
import { PalmRootsIllustration } from "@/components/illustrations/PalmRootsIllustration";

export const metadata: Metadata = {
  title: "Contact",
  description: "Maravan butterfly messages and grove contact rituals.",
  alternates: { canonical: "/contact" },
};

// Elegant hand-drawn horizontal leaf branch ornament
function LeafBranchIcon({ className }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Curved Central Stem */}
      <path d="M10 25 C35 22, 85 18, 110 12" />
      
      {/* Individual Stylized Leaflets */}
      <path d="M25 24 C23 16, 32 14, 38 21 C33 26, 26 27, 25 24 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M42 22 C40 14, 50 12, 56 19 C50 24, 43 25, 42 22 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M60 20 C58 11, 68 9, 74 16 C68 21, 61 22, 60 20 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M78 18 C76 8, 86 6, 92 13 C86 18, 79 19, 78 18 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M96 15 C95 6, 104 5, 109 11 C104 16, 97 17, 96 15 Z" fill="currentColor" fillOpacity="0.12" />
      
      {/* Downward arching leaflets */}
      <path d="M30 25 C33 32, 42 32, 43 26 C38 22, 32 22, 30 25 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M48 23 C51 30, 60 30, 61 24 C56 20, 50 20, 48 23 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M66 21 C69 28, 78 28, 79 22 C74 18, 68 18, 66 21 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M84 19 C87 26, 96 26, 97 20 C92 16, 86 16, 84 19 Z" fill="currentColor" fillOpacity="0.12" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div
      data-theme="home"
      className="w-full relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]"
    >
      {/* ================= BACKGROUND SPORES, PARTICLES & INTERACTIVE LEAVES ================= */}
      {/* 1. Dynamic Hoverable Palmyra Leaves in the Screen Margins */}
      <InteractivePalmyraLeaves />

      {/* 2. Drifting Orange Butterfly Particles */}
      <ButterflyParticles />

      {/* 3. Drifting Gold Spores in the Margins */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-[12%] left-[6%] w-[10px] h-[10px] rounded-full bg-[#d4a373] opacity-30 blur-[1px] animate-spore-slow-1" />
        <div className="absolute top-[48%] left-[4%] w-[12px] h-[12px] rounded-full bg-[#d4a373] opacity-20 blur-[2px] animate-spore-slow-3" />
        <div className="absolute top-[82%] left-[8%] w-[10px] h-[10px] rounded-full bg-[#d4a373] opacity-35 blur-[1px] animate-spore-slow-2" />
        <div className="absolute top-[22%] right-[8%] w-[12px] h-[12px] rounded-full bg-[#d4a373] opacity-25 blur-[2px] animate-spore-slow-1" />
        <div className="absolute top-[68%] right-[5%] w-[10px] h-[10px] rounded-full bg-[#d4a373] opacity-30 blur-[1px] animate-spore-slow-2" />
      </div>

      {/* 4. Warm Sunlit spotlights */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-[15%] left-[20%] w-[450px] h-[450px] rounded-full bg-[#424b33]/[0.04] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-[#d4a373]/[0.08] blur-[130px]" />
      </div>

      {/* 5. Interconnected network of calligraphic palm roots spreading in the background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Left-Side Root */}
        <PalmRootsIllustration 
          className="absolute top-[15%] -left-[14%] w-[120%] h-auto text-[#3a2412]/[0.10] rotate-[-4deg]" 
          thicknessScale={2.8} 
        />
        {/* Right-Side Root */}
        <PalmRootsIllustration 
          className="absolute bottom-[6%] -right-[10%] w-[115%] h-auto text-[#3a2412]/[0.08] scale-x-[-1] rotate-[2deg]" 
          thicknessScale={2.2} 
        />
      </div>

      {/* ================= UNIFIED PROFESSIONAL CONTAINER CARD ================= */}
      <section className="relative z-10 w-full max-w-6xl mx-auto my-auto px-2 sm:px-4">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[28px] overflow-hidden bg-[#faf6f0] border border-[#ebdcc4]/50 shadow-[0_25px_65px_rgba(66,75,51,0.11)] transition-all duration-300">
            
            {/* LEFT COLUMN: The elegant message form & branding */}
            <div className="lg:col-span-7 bg-[#fcfbf9] p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16 flex flex-col justify-between relative z-20">
              <div className="space-y-6 sm:space-y-7">
                
                {/* 1. Elegant Leaf Badge */}
                <div className="hero-badge self-start select-none">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[#ebdcc4]/30 text-[#424b33] border border-[#ebdcc4]/40 backdrop-blur-sm shadow-sm">
                    <LeafBranchIcon className="h-3 w-5 rotate-12 text-[#424b33]/85" />
                    Maravan Butterfly Message
                  </span>
                </div>

                {/* 2. Visually Stunning Cursive & Serif Heading */}
                <div className="block w-full select-none pt-1">
                  <h1 className="font-serif text-emerald-950 tracking-tight leading-[1.05]">
                    <span className="block text-4xl sm:text-5xl md:text-[52px] font-normal text-emerald-900/90 font-serif">
                      Message
                    </span>
                    <span className="block text-5xl sm:text-[58px] md:text-[64px] italic font-serif text-[#424b33] font-normal relative pr-16 mt-1.5">
                      the Grove
                      <LeafBranchIcon className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-10 text-[#424b33]/60 hidden sm:block" />
                    </span>
                  </h1>
                  {/* Decorative soft flourish line to anchor the heading beautifully */}
                  <div className="w-20 h-[2.5px] bg-gradient-to-r from-[#424b33]/45 to-transparent mt-5 rounded-full" />
                </div>

                {/* 3. Complete Validated Form Inputs */}
                <div className="pt-2">
                  <ContactForm />
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Full-bleed Photorealistic Maravan Butterfly visual centerpiece */}
            <div className="lg:col-span-5 relative h-[360px] sm:h-[450px] lg:h-auto min-h-[480px] lg:min-h-full overflow-hidden flex flex-col justify-start items-center z-15 bg-[#ebdcc4]/30">
              
              {/* Photorealistic full-bleed image backdrop */}
              <img
                src="/images/maravan-butterfly-full.png"
                alt="Photorealistic Tamil Yeoman butterfly sitting on green leaf under sunlight"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              />

              {/* Sunlit visual gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/12 to-black/28 pointer-events-none" />

              {/* Citations Quote Layer */}
              <div className="relative z-20 w-full max-w-[280px] sm:max-w-xs mt-12 sm:mt-16 bg-white/20 backdrop-blur-[3px] rounded-[20px] p-5 sm:p-7 border border-white/25 shadow-lg flex flex-col items-center justify-center text-center">
                
                {/* Upper line bracket quotes */}
                <div className="flex items-center justify-center gap-3 w-full">
                  <div className="h-[1px] w-9 bg-emerald-950/25" />
                  <span className="text-xl sm:text-2xl font-serif text-emerald-950 select-none">❝</span>
                  <span className="text-xl sm:text-2xl font-serif text-emerald-950 select-none">❞</span>
                  <div className="h-[1px] w-9 bg-emerald-950/25" />
                </div>
                
                {/* Quotation text */}
                <p className="font-serif italic text-sm sm:text-base text-emerald-950 font-normal leading-relaxed mt-3">
                  In every flutter,
                  <span className="block mt-0.5">the forest speaks.</span>
                  <span className="block mt-0.5 font-bold font-serif text-emerald-950">We just listen.</span>
                </p>

                {/* Lower line bracket leaf ornament */}
                <div className="flex items-center justify-center gap-3 w-full mt-4">
                  <div className="h-[1px] w-9 bg-emerald-950/25" />
                  <LeafBranchIcon className="h-4 w-9 text-emerald-950/70" />
                  <div className="h-[1px] w-9 bg-emerald-950/25" />
                </div>

              </div>

            </div>

          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
