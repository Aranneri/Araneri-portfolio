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
      <div className="flex flex-wrap gap-3 select-none">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full px-5 py-1.8 text-xs font-semibold tracking-wider transition-all duration-300 font-sans shadow-sm border cursor-pointer",
              activeCategory === category 
                ? "bg-[#424b33] text-[#ebdcc4] border-transparent hover:bg-[#2c351e]" 
                : "bg-[#ebdcc4]/30 text-[#424b33] border-[#424b33]/20 hover:bg-[#424b33]/15 hover:border-[#424b33]/30"
            )}
          >
            {category}
          </button>
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
