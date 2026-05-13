import type { Metadata } from "next";

import { LaunchCard } from "@/components/LaunchCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { launches } from "@/data/launches";

export const metadata: Metadata = {
  title: "Launches",
  description: "Palm-leaf crafts and immersive releases from Araneri.",
  alternates: { canonical: "/launches" },
};

export default function LaunchesPage() {
  const recentLaunches = launches.slice(0, 1);
  const upcomingLaunches = launches.slice(1);

  return (
    <div
      className="theme-page space-y-12 bg-[var(--bg-primary)] text-[var(--text-primary)]"
      data-theme="launches"
    >
      <ScrollReveal className="space-y-8">
        <SectionHeader
          eyebrow="Palm-Leaf Crafts"
          title="Recent releases"
          description="Seasonal releases that blend palm craftsmanship with cinematic storytelling."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentLaunches.map((launch) => (
            <LaunchCard key={launch.title} launch={launch} />
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="space-y-8">
        <SectionHeader
          eyebrow="Upcoming Projects"
          title="Next from the grove"
          description="Immersive works preparing to open across craft, light, and listening."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {upcomingLaunches.map((launch) => (
            <LaunchCard key={launch.title} launch={launch} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
