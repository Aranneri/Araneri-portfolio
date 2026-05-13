import type { Metadata } from "next";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { TeamCard } from "@/components/TeamCard";
import { SafeImage } from "@/components/shared/SafeImage";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
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
      className="theme-page space-y-16 bg-[var(--bg-primary)] text-[var(--text-primary)]"
      data-theme="about"
    >
      <ScrollReveal className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-4">
          <SectionHeader
            eyebrow="Palm Trunk"
            title="The trunk that carries memory"
            description="Our mission, vision, and story rise like the palm trunk: grounded, resilient, and always reaching."
          />
          <div className="space-y-3 text-sm text-sand-200/70">
            <p>{aboutNarrative.mission}</p>
            <p>{aboutNarrative.vision}</p>
            <p>{aboutNarrative.story}</p>
          </div>
        </div>
        <SafeImage
          src={imagePlaceholders.palmTrunk.src}
          alt={imagePlaceholders.palmTrunk.alt}
          width={imagePlaceholders.palmTrunk.width}
          height={imagePlaceholders.palmTrunk.height}
          className="rounded-[var(--radius-md)]"
        />
      </ScrollReveal>

      <ScrollReveal className="space-y-6">
        <SectionHeader
          eyebrow="Timeline"
          title="Rooted milestones"
          description="Key moments in the growth of Araneri."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {aboutNarrative.timeline.map((item) => (
            <div
              key={item.title}
              className="rounded-[var(--radius-lg)] border border-sand-200/10 p-5"
              data-section-card
            >
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{item.year}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-sand-200/70">{item.description}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="grid gap-8 rounded-[var(--radius-lg)] border border-sand-200/10 p-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <SafeImage
          src={imagePlaceholders.butterflies.src}
          alt={imagePlaceholders.butterflies.alt}
          width={imagePlaceholders.butterflies.width}
          height={imagePlaceholders.butterflies.height}
          className="rounded-[var(--radius-md)]"
        />
        <div className="space-y-4">
          <SectionHeader
            eyebrow="Maravan"
            title="Butterfly signals in the grove"
            description="The Maravan section follows small winged movements as seasonal cues for planting, gathering, and visual storytelling."
          />
          <p className="text-sm leading-7 text-sand-200/70" data-section-card>
            These observations help the collective tune its craft calendar to
            living rhythms, carrying ecological attention into each public
            ritual and studio exchange.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="space-y-8">
        <SectionHeader
          eyebrow="Team"
          title="Butterfly-guided stewards"
          description="A collective of storytellers, artisans, and ecological archivists."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
