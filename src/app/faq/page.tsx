import type { Metadata } from "next";

import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Hidden grove answers to common questions.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div
      className="theme-page space-y-12 bg-[var(--bg-primary)] text-[var(--text-primary)]"
      data-theme="faq"
    >
      <ScrollReveal className="space-y-8">
        <SectionHeader
          eyebrow="Hidden Grove"
          title="Questions from the grove"
          description="Gentle answers for collaborators and community members."
        />
        <FAQAccordion items={faqItems} />
      </ScrollReveal>
    </div>
  );
}
