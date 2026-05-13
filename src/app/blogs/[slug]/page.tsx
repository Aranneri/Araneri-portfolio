import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SafeImage } from "@/components/shared/SafeImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/shared/SafeLink";
import { blogPosts } from "@/data/blogs";
import { toSlug } from "@/lib/utils/slug";

interface BlogPostPageProps {
  readonly params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: toSlug(post.title),
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => toSlug(item.title) === slug);

  if (!post) {
    return {
      title: "Blog Post",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${slug}` },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => toSlug(item.title) === slug);

  if (!post) notFound();

  return (
    <div
      className="theme-page space-y-12 bg-[var(--bg-primary)] text-[var(--text-primary)]"
      data-theme="blogs"
    >
      <ScrollReveal className="grid gap-10 md:grid-cols-[1fr_0.85fr] md:items-center">
        <div className="space-y-6">
          <Badge tone="emerald">{post.category}</Badge>
          <SectionHeader
            eyebrow={post.date}
            title={post.title}
            description={post.excerpt}
          />
          <p className="text-sm leading-7 text-sand-200/70">
            Araneri journal entries are living placeholders for field essays,
            craft notes, and ecological observations. This post page is ready
            for the final long-form article copy.
          </p>
          <Button asChild variant="secondary">
            <SafeLink href="/blogs">Back to journal</SafeLink>
          </Button>
        </div>
        <SafeImage
          src={post.image.src}
          alt={post.image.alt}
          width={post.image.width}
          height={post.image.height}
          className="rounded-[var(--radius-md)]"
          priority
        />
      </ScrollReveal>
    </div>
  );
}
