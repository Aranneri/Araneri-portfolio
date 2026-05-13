import type { Metadata } from "next";

import { BlogFilterGrid } from "@/components/BlogFilterGrid";
import { BlogCard } from "@/components/BlogCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { blogCategories, blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Emerald dove stories and palm ecosystem journal entries.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div
      className="theme-page space-y-12 bg-[var(--bg-primary)] text-[var(--text-primary)]"
      data-theme="blogs"
    >
      <ScrollReveal className="space-y-8">
        <SectionHeader
          eyebrow="Emerald Dove"
          title="Journal from the canopy"
          description="Featured field notes and essays from the Araneri grove."
        />
      </ScrollReveal>
      {featured ? (
        <ScrollReveal className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <BlogCard post={featured} />
          <div className="space-y-3 text-sm text-sand-200/70" data-section-heading>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
              Featured Article
            </p>
            <h3 className="text-2xl font-semibold text-sand-200">{featured.title}</h3>
            <p>{featured.excerpt}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-sand-200/50">
              {featured.date}
            </p>
          </div>
        </ScrollReveal>
      ) : null}
      <ScrollReveal className="space-y-8">
        <BlogFilterGrid posts={rest} categories={blogCategories} />
      </ScrollReveal>
    </div>
  );
}
