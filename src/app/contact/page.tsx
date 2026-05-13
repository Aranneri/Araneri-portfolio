import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SafeImage } from "@/components/shared/SafeImage";
import { ButterflyParticles } from "@/components/animations/ButterflyParticles";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { imagePlaceholders } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Maravan butterfly messages and grove contact rituals.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div
      className="theme-page space-y-12 bg-[var(--bg-primary)] text-[var(--text-primary)]"
      data-theme="contact"
    >
      <ScrollReveal className="relative overflow-hidden rounded-[var(--radius-lg)] border border-sand-200/10 bg-palm-900/30 p-8">
        <ButterflyParticles />
        <div className="relative z-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Maravan Butterflies"
              title="Send a message through the grove"
              description="We will respond with care. This form is validated and safe for client-side use."
            />
            <ContactForm />
          </div>
          <SafeImage
            src={imagePlaceholders.butterflies.src}
            alt={imagePlaceholders.butterflies.alt}
            width={imagePlaceholders.butterflies.width}
            height={imagePlaceholders.butterflies.height}
            className="rounded-[var(--radius-md)]"
          />
        </div>
      </ScrollReveal>
    </div>
  );
}
