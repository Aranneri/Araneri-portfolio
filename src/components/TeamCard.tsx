import type { TeamMember } from "@/types";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SafeImage } from "@/components/shared/SafeImage";
import { SafeLink } from "@/components/shared/SafeLink";
import { Button } from "@/components/ui/button";

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
        wrapperClassName="w-full rounded-[var(--radius-md)] overflow-hidden"
        className="max-w-full h-auto mx-auto block"
      />
      <CardHeader>
        <CardTitle>{member.name}</CardTitle>
        <CardDescription>{member.role}</CardDescription>
        <p className="text-sm text-sand-200/70">{member.description}</p>
        <Button asChild size="sm" variant="ghost" className="mt-2 w-fit hover:bg-[#ebdcc4]/20">
          <SafeLink href={member.portfolioUrl ?? "/about"}>View Portfolio 🦋</SafeLink>
        </Button>
      </CardHeader>
    </Card>
  );
}
