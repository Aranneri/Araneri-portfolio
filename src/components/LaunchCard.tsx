import type { Launch } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeImage } from "@/components/shared/SafeImage";

interface LaunchCardProps {
  readonly launch: Launch;
}

export function LaunchCard({ launch }: LaunchCardProps) {
  return (
    <Card className="space-y-4">
      <SafeImage
        src={launch.image.src}
        alt={launch.image.alt}
        width={launch.image.width}
        height={launch.image.height}
        className="h-44 w-full rounded-[var(--radius-md)] object-cover"
      />
      <CardHeader>
        <CardTitle>{launch.title}</CardTitle>
        <CardDescription>{launch.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge tone="sand">{launch.date}</Badge>
      </CardContent>
    </Card>
  );
}
