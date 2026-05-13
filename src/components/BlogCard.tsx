import type { BlogPost } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeImage } from "@/components/shared/SafeImage";
import { SafeLink } from "@/components/shared/SafeLink";
import { Button } from "@/components/ui/button";
import { toSlug } from "@/lib/utils/slug";

interface BlogCardProps {
  readonly post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="space-y-4">
      <SafeImage
        src={post.image.src}
        alt={post.image.alt}
        width={post.image.width}
        height={post.image.height}
        className="h-44 w-full rounded-[var(--radius-md)] object-cover"
      />
      <CardHeader>
        <Badge tone="emerald">{post.category}</Badge>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs uppercase tracking-[0.3em] text-sand-200/50">{post.date}</p>
        <Button asChild size="sm" variant="ghost" className="mt-4 w-fit">
          <SafeLink href={`/blogs/${toSlug(post.title)}`}>Read post</SafeLink>
        </Button>
      </CardContent>
    </Card>
  );
}
