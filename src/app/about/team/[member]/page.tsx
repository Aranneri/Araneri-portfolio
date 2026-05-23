import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SafeImage } from "@/components/shared/SafeImage";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/shared/SafeLink";
import { WatercolorCloudSmoke } from "@/components/illustrations/WatercolorCloudSmoke";
import { team } from "@/data/team";
import { toSlug } from "@/lib/utils/slug";

interface TeamMemberPageProps {
  readonly params: Promise<{ member: string }>;
}

export function generateStaticParams() {
  return team.map((member) => ({
    member: toSlug(member.name),
  }));
}

export async function generateMetadata({ params }: TeamMemberPageProps): Promise<Metadata> {
  const { member: memberSlug } = await params;
  const member = team.find((item) => toSlug(item.name) === memberSlug);

  if (!member) {
    return {
      title: "Team Member",
    };
  }

  return {
    title: member.name,
    description: member.description,
    alternates: { canonical: `/about/team/${memberSlug}` },
  };
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { member: memberSlug } = await params;
  const member = team.find((item) => toSlug(item.name) === memberSlug);

  if (!member) notFound();

  return (
    <div
      data-theme="home"
      className="w-full pb-24 md:pb-32 relative min-h-screen overflow-hidden"
    >
      {/* 1. Slow Drifting Gold Spores in the Margins */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-[12%] left-[5%] w-[8px] h-[8px] rounded-full bg-[#d4a373] opacity-35 blur-[1px] animate-spore-slow-1" />
        <div className="absolute top-[32%] left-[7%] w-[12px] h-[12px] rounded-full bg-[#d4a373] opacity-25 blur-[2px] animate-spore-slow-2" />
        <div className="absolute top-[58%] right-[6%] w-[10px] h-[10px] rounded-full bg-[#d4a373] opacity-30 blur-[1px] animate-spore-slow-3" />
        <div className="absolute top-[82%] right-[5%] w-[12px] h-[12px] rounded-full bg-[#d4a373] opacity-25 blur-[2px] animate-spore-slow-1" />
      </div>

      {/* 2. Soft warm ambient spotlights */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-[8%] left-[15%] w-[500px] h-[500px] rounded-full bg-[#424b33]/[0.05] blur-[120px]" />
        <div className="absolute top-[45%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#ebdcc4]/[0.18] blur-[140px]" />
      </div>

      {/* 3. Soft, spongy watercolor smoke clouds in the margins */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <WatercolorCloudSmoke className="absolute top-[52%] -left-[140px] md:-left-[220px]" delay={0.3} />
        <WatercolorCloudSmoke className="absolute top-[60%] -right-[140px] md:-right-[220px]" delay={0.1} />
      </div>

      {/* 4. Centered Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 space-y-12">
        <ScrollReveal className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div className="relative p-2 rounded-2xl border border-[#424b33]/10 bg-[#ebdcc4]/30 shadow-[0_12px_24px_-10px_rgba(44,53,30,0.12)]">
            <SafeImage
              src={member.image.src}
              alt={member.image.alt}
              width={member.image.width}
              height={member.image.height}
              className="rounded-xl brightness-[0.96]"
            />
          </div>
          <div className="space-y-6">
            <SectionHeader
              eyebrow={member.role}
              title={member.name}
              titleClassName="text-3xl md:text-4xl font-bold text-[#2c351e]"
              description={member.description}
            />
            <p className="text-base leading-relaxed text-[#2c351e]/80">
              This profile expands the living archive behind Araneri, tracing how each steward carries
              palm ecology, oral memory, and craft practice into the wider grove.
            </p>
            <div className="pt-2">
              <Button asChild className="rounded-full bg-[#424b33] text-[#ebdcc4] hover:bg-[#2c351e] px-6 py-3 transition-colors duration-300">
                <SafeLink href="/about">Back to team</SafeLink>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
