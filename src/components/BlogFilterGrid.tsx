"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";

import type { BlogPost } from "@/types";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface BlogFilterGridProps {
  readonly posts: readonly BlogPost[];
  readonly categories: readonly string[];
}

export function BlogFilterGrid({ posts, categories }: BlogFilterGridProps) {
  const scopeRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? "All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();
    }, scopeRef);

    return () => ctx.revert();
  }, [filtered.length]);

  return (
    <div ref={scopeRef} className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            type="button"
            variant={activeCategory === category ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full",
              activeCategory === category ? "text-palm-950" : "text-sand-200/70",
            )}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
}
