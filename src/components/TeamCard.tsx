import type { TeamMember } from "@/types";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SafeImage } from "@/components/shared/SafeImage";
import { SafeLink } from "@/components/shared/SafeLink";
import { Button } from "@/components/ui/button";
import { toSlug } from "@/lib/utils/slug";

interface TeamCardProps {
  readonly member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="space-y-4">
      <SafeImage
        src={member.image.src}
        alt={member.image.alt}
        width={member.image.width}
        height={member.image.height}
        className="h-40 w-full rounded-[var(--radius-md)] object-cover"
      />
      <CardHeader>
        <CardTitle>{member.name}</CardTitle>
        <CardDescription>{member.role}</CardDescription>
        <p className="text-sm text-sand-200/70">{member.description}</p>
        <Button asChild size="sm" variant="ghost" className="mt-2 w-fit hover:bg-[#ebdcc4]/20">
          <SafeLink 
            href={member.portfolioUrl || `https://github.com/Skvtamilan/og_araneri`}
          >
            View Portfolio 🦋
          </SafeLink>
        </Button>
      </CardHeader>
    </Card>
  );
}
