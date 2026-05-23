"use client";

import type { BlogPost } from "@/types";
import { Badge } from "@/components/ui/badge";
import { SafeImage } from "@/components/shared/SafeImage";
import { SafeLink } from "@/components/shared/SafeLink";
import { toSlug } from "@/lib/utils/slug";

interface BlogCardProps {
  readonly post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <SafeLink href={`/blogs/${toSlug(post.title)}`} className="group block h-full">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f3e8d6]/55 to-[#ebdcc4]/55 border border-[#424b33]/15 hover:border-[#424b33]/35 hover:shadow-[0_20px_40px_rgba(66,75,51,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between p-5 h-full">
        {/* Slanted Shiny Shimmer Beam Sweep on Hover */}
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1250ms] ease-out bg-gradient-to-r from-transparent via-[#ebdcc4]/50 to-transparent -skew-x-12 pointer-events-none z-20" />
        
        {/* Background Atmosphere Spotlight */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#ebdcc4]/20 rounded-full blur-2xl group-hover:bg-[#424b33]/10 group-hover:scale-150 transition-all duration-700 pointer-events-none z-0" />

        <div className="space-y-4 z-10 flex flex-col h-full justify-between">
          <div className="space-y-4">
            {/* Framed article image with custom hover zoom */}
            <div className="relative w-full h-52 overflow-hidden rounded-xl border border-[#424b33]/10 bg-[#ebdcc4]/25 shrink-0">
              <SafeImage
                src={post.image.src}
                alt={post.image.alt}
                width={post.image.width}
                height={post.image.height}
                className="h-full w-full object-cover brightness-[0.98] saturate-[0.90] transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2c351e]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Category Badge overlay on image */}
              <div className="absolute top-3 right-3 z-20">
                <Badge className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-[#424b33] text-[#ebdcc4] border border-[#ebdcc4]/10 shadow-sm">
                  {post.category}
                </Badge>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-['Cormorant_Garamond',_serif] text-[#2c351e] group-hover:text-[#1b2410] transition-colors duration-300 border-b border-[#424b33]/10 pb-1.5 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#2c351e]/75 group-hover:text-[#2c351e]/85 transition-colors duration-300 italic font-['Cormorant_Garamond',_serif] font-medium line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </div>

          <div className="pt-3 flex items-center justify-between border-t border-[#424b33]/10">
            <span className="text-[10px] font-bold tracking-[0.20em] uppercase text-[#6e4f3a] font-sans">
              {post.date}
            </span>
            <span className="text-sm font-semibold text-[#424b33] group-hover:translate-x-1.5 transition-transform duration-300">
              →
            </span>
          </div>
        </div>
      </div>
    </SafeLink>
  );
}
