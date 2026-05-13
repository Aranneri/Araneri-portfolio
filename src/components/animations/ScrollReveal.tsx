"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly as?: "div" | "section";
  readonly theme?: string;
}

export function ScrollReveal({
  children,
  className,
  as = "section",
  theme,
}: ScrollRevealProps) {
  const scopeRef = useRef<HTMLElement>(null);
  const Component = as;
  const setScopeRef = (element: HTMLElement | null) => {
    scopeRef.current = element;
  };

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion || !scopeRef.current) {
        ScrollTrigger.refresh();
        return;
      }

      const headings = gsap.utils.toArray<HTMLElement>("[data-section-heading]");
      const cards = gsap.utils.toArray<HTMLElement>("[data-section-card]");

      headings.forEach((heading) => {
        gsap.from(heading, {
          clipPath: "inset(0 0 100% 0)",
          y: 40,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
          },
        });
      });

      if (cards.length > 0) {
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scopeRef.current,
            start: "top 75%",
          },
        });
      }

      ScrollTrigger.refresh();
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <Component
      ref={setScopeRef}
      className={cn(className)}
      data-theme={theme}
    >
      {children}
    </Component>
  );
}
