"use client";

import { useLayoutEffect, useRef } from "react";
import { SafeImage } from "@/components/shared/SafeImage";
import type { MediaImage } from "@/types";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { PalmWindAnimation } from "@/components/animations/PalmWindAnimation";

interface HeroSectionProps {
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly image: MediaImage;
}

export function HeroSection({ title, subtitle, description, image }: HeroSectionProps) {
  const scopeRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        ScrollTrigger.refresh();
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from(".hero-badge", { opacity: 0, y: -20, duration: 0.6 })
        .from(".hero-headline", { opacity: 0, y: 60, duration: 0.95 }, "-=0.25")
        .from(".hero-desc-text", { opacity: 0, y: 25, duration: 0.7 }, "-=0.4")
        .from(".hero-actions", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".hero-image-frame", { opacity: 0, scale: 0.97, x: 50, duration: 1.1 }, "-=0.55");

      ScrollTrigger.refresh();
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scopeRef}
      className="relative min-h-[600px] h-auto lg:h-screen w-screen left-1/2 -translate-x-1/2 flex items-start justify-center overflow-hidden px-6 lg:px-16 xl:px-24 bg-[var(--bg-primary)] pt-20 pb-12 lg:pb-4"
    >
      {/* Background container layout block */}
      <PalmWindAnimation />

      {/* Structured core column framework grid alignment rule */}
      <div className="relative z-20 mx-auto w-full max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center pt-6 sm:pt-10 md:pt-14 lg:pt-16">
        {/* Left Side: Content Column (Shifted rightward on desktop for spacious left-side palm margins) */}
        <div className="flex flex-col space-y-4 lg:col-span-5 lg:col-start-3 xl:col-span-5 xl:col-start-4 relative z-30">
          {/* Subtitle Badge Element Tag Block */}
          <div className="hero-badge self-start">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.25em] uppercase bg-emerald-950/60 text-[#71b38f] border border-emerald-500/20 backdrop-blur-sm">
              {subtitle}
            </span>
          </div>

          {/* Core Title Entry Block */}
          <div className="hero-headline block w-full select-none mt-3.5 md:mt-5.5">
            <h1
              className="painted-title-exact text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-normal leading-[0.95] pb-1"
              style={{
                fontFamily: "var(--font-water-brush), 'Water Brush', 'Caveat Brush', cursive",
                letterSpacing: "0.02em",
              }}
            >
              {title === "Roots of a Palm Tree" ? (
                <>
                  <span className="block mb-0.5 sm:mb-1">Roots of</span>
                  <span className="block mb-0.5 sm:mb-1">a Palm</span>
                  <span className="block">Tree</span>
                </>
              ) : (
                title
              )}
            </h1>
          </div>

          {/* Paragraph copy text line description block */}
          <p className="hero-desc-text max-w-xl text-sm sm:text-base leading-relaxed text-[var(--text-secondary)] font-sans tracking-wide">
            {description}
          </p>

          {/* Hero Actions Button Group */}
          <div className="hero-actions flex flex-wrap gap-4 pt-1">
            <a
              href="/blogs"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide bg-[#424b33] text-[#ebdcc4] hover:bg-[#2c351e] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-105"
            >
              Explore Our Journey
              <span className="ml-2 inline-block transition-transform duration-300 hover:translate-x-1">→</span>
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide border border-[#424b33]/40 text-[#424b33] hover:border-[#424b33] hover:bg-[#f3e8d6]/50 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
            >
              Learn More
              <span className="ml-2 inline-block font-sans text-xs">⎋</span>
            </a>
          </div>
        </div>

        {/* Right Side: Composition Image Column (Aligned directly next to content) */}
        <div className="hero-image-frame relative w-full lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9 flex justify-center lg:justify-end">
          {/* Decorative Framing Offset Borders */}
          <div className="absolute -left-4 top-8 hidden h-24 w-20 border-l border-t border-[#d4a373]/60 md:block z-0" />
          <div className="absolute -right-4 -bottom-3 hidden h-16 w-24 border-b border-r border-[#f4f1ea]/32 md:block z-0" />

          {/* Image Frame Box block handler */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:h-[380px] lg:w-[480px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.55)] z-10 bg-emerald-950">
            <SafeImage
              src={image.src}
              alt={image.alt || "Araneri main workspace scene"}
              width={image.width || 800}
              height={image.height || 600}
              priority
              wrapperClassName="h-full w-full"
              className="h-full w-full object-cover brightness-[0.78] saturate-[0.82] transition-transform duration-1000 hover:scale-105"
            />

            {/* Inset Vignette Shadowing */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

            {/* Full-width bottom bar overlay with circular sprout emblem */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#424b33]/95 px-5 py-4 flex items-center gap-4 text-sm text-[#ebdcc4] backdrop-blur-sm border-t border-[#ebdcc4]/10 shadow-xl z-20">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#ebdcc4] text-[#424b33] shadow-md border border-[#ebdcc4]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#424b33]"
                >
                  <path d="M12 22V12" />
                  <path d="M12 12C12 9 10 7 7 7c0 0 0 3 3 5 2 1.3 2 0 2 0z" />
                  <path d="M12 12C12 9 14 7 17 7c0 0 0 3 -3 5 -2 1.3 -2 0 -2 0z" />
                  <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
                </svg>
              </div>
              <p className="leading-relaxed font-sans font-medium tracking-wide text-xs sm:text-sm text-left">
                Community programs, craft partnerships, and ecological work shaped with care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
