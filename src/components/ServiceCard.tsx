import type { Service } from "@/types";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SafeImage } from "@/components/shared/SafeImage";
import { SafeLink } from "@/components/shared/SafeLink";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  readonly service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="space-y-4">
      <SafeImage
        src={service.image.src}
        alt={service.image.alt}
        width={service.image.width}
        height={service.image.height}
        className="h-44 w-full rounded-[var(--radius-md)] object-cover"
      />
      <CardHeader>
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
        {service.externalHref ? (
          <Button asChild size="sm" variant="ghost" className="mt-2 w-fit">
            <SafeLink href={service.externalHref}>Open service</SafeLink>
          </Button>
        ) : null}
      </CardHeader>
    </Card>
  );
}
