import type { Metadata } from "next";

import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PalmRootsIllustration } from "@/components/illustrations/PalmRootsIllustration";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Familiar inquiries and answers shaped around ecosystem ritual, grove craftsmanship, and ancestral palm wisdom.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div
      data-theme="home"
      className="w-full pb-24 md:pb-32 relative min-h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]"
    >
      {/* ================= BACKGROUND SPORES & SPOTLIGHTS (Similar to Homepage) ================= */}
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
        <div className="absolute top-[42%] right-[6%] w-[600px] h-[600px] rounded-full bg-[#ebdcc4]/[0.18] blur-[140px]" />
        <div className="absolute top-[78%] left-[8%] w-[550px] h-[550px] rounded-full bg-[#424b33]/[0.04] blur-[120px]" />
      </div>

      {/* 3. Interconnected network of calligraphic palm roots spreading behind accordions (No Clouds) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Top-Left Root */}
        <PalmRootsIllustration 
          className="absolute top-[10%] -left-[12%] w-[125%] h-auto text-[#3a2412]/[0.14] rotate-[-5deg]" 
          thicknessScale={2.8} 
        />
        {/* Bottom-Right Root (Crossed) */}
        <PalmRootsIllustration 
          className="absolute bottom-[5%] -right-[8%] w-[115%] h-auto text-[#3a2412]/[0.10] scale-x-[-1] rotate-[3deg]" 
          thicknessScale={2.2} 
        />
      </div>

      {/* ================= MAIN CONTENT ACCORDION CONTAINER (No Hero Section) ================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-12 sm:pt-36 md:pt-40">
        <ScrollReveal className="space-y-12">
          {/* Header styled in Playfair Display with Forest Green headings like homepage */}
          <div className="space-y-4">
            <SectionHeader
              eyebrow="Grove Dialogue"
              title="Questions from the Grove"
              titleClassName="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1b4d22]"
              titleStyle={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
            />
            <p className="max-w-2xl text-[16px] leading-relaxed text-[#2c351e]/80 font-sans tracking-wide">
              Gentle answers for collaborators, grove visitors, and community apprentices shaped around 
              grove ecosystem rituals, leaf craftsmanship, and ancestral palm storytelling.
            </p>
          </div>

          {/* Premium Upgraded Accordion Section */}
          <div className="pt-2">
            <FAQAccordion items={faqItems} />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
