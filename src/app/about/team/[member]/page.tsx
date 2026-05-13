import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SafeImage } from "@/components/shared/SafeImage";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/shared/SafeLink";
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

export async function generateMetadata({
  params,
}: TeamMemberPageProps): Promise<Metadata> {
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
      className="theme-page space-y-12 bg-[var(--bg-primary)] text-[var(--text-primary)]"
      data-theme="about"
    >
      <ScrollReveal className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <SafeImage
          src={member.image.src}
          alt={member.image.alt}
          width={member.image.width}
          height={member.image.height}
          className="rounded-[var(--radius-md)]"
        />
        <div className="space-y-6">
          <SectionHeader
            eyebrow={member.role}
            title={member.name}
            description={member.description}
          />
          <p className="text-sm leading-7 text-sand-200/70">
            This profile expands the living archive behind Araneri, tracing how
            each steward carries palm ecology, oral memory, and craft practice
            into the wider grove.
          </p>
          <Button asChild variant="secondary">
            <SafeLink href="/about">Back to team</SafeLink>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  );
}
