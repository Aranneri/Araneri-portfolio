import type { Metadata } from "next";

import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Palm leaves translated into immersive services and rituals.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div
      className="theme-page space-y-12 bg-[var(--bg-primary)] text-[var(--text-primary)]"
      data-theme="services"
    >
      <ScrollReveal className="space-y-8">
        <SectionHeader
          eyebrow="Palm Leaves"
          title="Services that breathe with the grove"
          description="Araneri services are designed as living palm leaves, carrying shade, texture, and knowledge."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
