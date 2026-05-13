"use client";

import { useLayoutEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeImage } from "@/components/shared/SafeImage";
import { SafeLink } from "@/components/shared/SafeLink";
import type { MediaImage } from "@/types";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface HeroSectionProps {
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly image: MediaImage;
  readonly primaryCta: { label: string; href: string };
  readonly secondaryCta: { label: string; href: string };
}

export function HeroSection({
  title,
  subtitle,
  description,
  image,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  const scopeRef = useRef<HTMLElement>(null);
  const words = title.split(" ");

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        ScrollTrigger.refresh();
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from(".hero-badge", {
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
        })
        .from(
          ".hero-word",
          {
            y: 80,
            opacity: 0,
            stagger: 0.15,
            duration: 1,
          },
          "-=0.1",
        )
        .from(
          ".hero-description",
          {
            y: 24,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.2",
        )
        .from(
          ".hero-cta",
          {
            y: 28,
            opacity: 0,
            stagger: 0.12,
            duration: 0.55,
          },
          "-=0.25",
        )
        .from(
          ".hero-image-card",
          {
            x: 100,
            opacity: 0,
            rotate: 5,
            duration: 1,
          },
          "-=0.85",
        );

      gsap.to(".hero-image-card", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      ScrollTrigger.refresh();
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scopeRef}
      className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-sand-200/10 bg-palm-900/40 px-6 py-16 md:px-12"
    >
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6">
          <span className="hero-badge inline-flex">
            <Badge tone="emerald">{subtitle}</Badge>
          </span>
          <h1
            className="flex flex-wrap gap-x-3 gap-y-2 text-4xl font-semibold md:text-5xl"
            aria-label={title}
          >
            {words.map((word) => (
              <span key={word} className="inline-block overflow-hidden">
                <span className="hero-word inline-block" aria-hidden="true">
                  {word}
                </span>
              </span>
            ))}
          </h1>
          <p className="hero-description max-w-xl text-base text-sand-200/70 md:text-lg">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="hero-cta">
              <SafeLink href={primaryCta.href}>{primaryCta.label}</SafeLink>
            </Button>
            <Button asChild variant="ghost" className="hero-cta">
              <SafeLink href={secondaryCta.href}>{secondaryCta.label}</SafeLink>
            </Button>
          </div>
        </div>
        <div className="hero-image-card will-change-transform">
          <SafeImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="rounded-[var(--radius-md)] transition-transform duration-700 group-hover:scale-[1.03]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
