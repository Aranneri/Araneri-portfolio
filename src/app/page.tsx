import type { Metadata } from "next";

import { HeroSection } from "@/components/HeroSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/ui/card";
import { LaunchCard } from "@/components/LaunchCard";
import { BlogCard } from "@/components/BlogCard";
import { SafeImage } from "@/components/shared/SafeImage";
import { FloatingLeaves } from "@/components/animations/FloatingLeaves";
import { ParallaxContainer } from "@/components/animations/ParallaxContainer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { homeBlogPreview, homeHero, homeInitiatives, homeLaunchPreview } from "@/data/home";
import { imagePlaceholders } from "@/data/site";

export const metadata: Metadata = {
  title: "Home",
  description: "Roots of a palm tree, rendered as cinematic story layers.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="space-y-16" data-theme="home">
      <HeroSection
        title={homeHero.title}
        subtitle={homeHero.subtitle}
        description={homeHero.description}
        image={homeHero.image}
        primaryCta={homeHero.primaryCta}
        secondaryCta={homeHero.secondaryCta}
      />

      <ScrollReveal className="relative overflow-hidden rounded-[var(--radius-lg)] border border-sand-200/10 bg-palm-900/30 px-6 py-12">
        <FloatingLeaves />
        <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4" data-section-heading>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-500">
              Layered Roots
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              The hidden architecture of palm roots
            </h2>
            <p className="text-sm text-sand-200/70 md:text-base">
              We translate the unseen root networks into cinematic surfaces that reveal
              memory, water, and ritual.
            </p>
          </div>
          <ParallaxContainer offset={35} className="relative">
            <SafeImage
              src={imagePlaceholders.palmRoots.src}
              alt={imagePlaceholders.palmRoots.alt}
              width={imagePlaceholders.palmRoots.width}
              height={imagePlaceholders.palmRoots.height}
              className="rounded-[var(--radius-md)]"
            />
          </ParallaxContainer>
        </div>
      </ScrollReveal>

      <ScrollReveal className="space-y-8">
        <SectionHeader
          eyebrow="Initiatives"
          title="Rooted initiatives"
          description="Programs that carry palm intelligence into community rituals, storytelling labs, and ecological stewardship."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {homeInitiatives.map((initiative) => (
            <Card key={initiative.title} className="space-y-3">
              <h3 className="text-lg font-semibold">{initiative.title}</h3>
              <p className="text-sm text-sand-200/70">{initiative.description}</p>
            </Card>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="space-y-8">
        <SectionHeader
          eyebrow="Launches"
          title="Palm-leaf crafts in motion"
          description="Recent launches exploring palm-leaf craftsmanship and tactile storytelling."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {homeLaunchPreview.map((launch) => (
            <LaunchCard key={launch.title} launch={launch} />
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="space-y-8">
        <SectionHeader
          eyebrow="Journal"
          title="Emerald dove stories"
          description="Field notes from the canopy, documenting rituals, ecology, and craft futures."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {homeBlogPreview.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
