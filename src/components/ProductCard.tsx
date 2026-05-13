import type { Product } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeImage } from "@/components/shared/SafeImage";

interface ProductCardProps {
  readonly product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="space-y-4">
      <SafeImage
        src={product.image.src}
        alt={product.image.alt}
        width={product.image.width}
        height={product.image.height}
        className="h-48 w-full rounded-[var(--radius-md)] object-cover"
      />
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge tone="amber">{product.highlight}</Badge>
      </CardContent>
    </Card>
  );
}
