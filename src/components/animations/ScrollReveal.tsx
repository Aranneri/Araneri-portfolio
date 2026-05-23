"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  readonly id?: string;
  readonly children: ReactNode;
  readonly className?: string;
  readonly as?: "div" | "section";
  readonly theme?: string;
}

export function ScrollReveal({ id, children, className, as = "section", theme }: ScrollRevealProps) {
  const scopeRef = useRef<HTMLElement>(null);
  const Component = as;
  const setScopeRef = (element: HTMLElement | null) => {
    scopeRef.current = element;
  };

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!scopeRef.current) {
        ScrollTrigger.refresh();
        return;
      }

      if (prefersReducedMotion) {
        gsap.set(
          scopeRef.current.querySelectorAll<HTMLElement>(
            "[data-section-heading], [data-section-card], [data-scroll-reveal]",
          ),
          { autoAlpha: 1, y: 0, clipPath: "none" },
        );
        gsap.set(scopeRef.current, { autoAlpha: 1, y: 0 });
        ScrollTrigger.refresh();
        return;
      }

      const headings = gsap.utils.toArray<HTMLElement>("[data-section-heading]");
      const cards = gsap.utils.toArray<HTMLElement>("[data-section-card]");
      const revealItems = gsap.utils.toArray<HTMLElement>("[data-scroll-reveal]");
      const rootElement = scopeRef.current;

      gsap.set([rootElement, ...headings, ...cards, ...revealItems], {
        autoAlpha: 0,
      });

      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          {
            autoAlpha: 0,
            clipPath: "inset(0 0 100% 0)",
            y: 40,
          },
          {
            autoAlpha: 1,
            clipPath: "inset(0 0 0% 0)",
            y: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 78%",
            },
          },
        );
      });

      if (cards.length > 0) {
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0, y: 54 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
              },
            },
          );
        });
      }

      if (revealItems.length > 0) {
        revealItems.forEach((item) => {
          gsap.fromTo(
            item,
            { autoAlpha: 0, y: 42 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 82%",
              },
            },
          );
        });
      }

      if (!rootElement.matches("[data-reveal-root='false']")) {
        gsap.fromTo(
          rootElement,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rootElement,
              start: "top 78%",
            },
          },
        );
      }

      ScrollTrigger.refresh();
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <Component
      id={id}
      ref={setScopeRef}
      className={cn(className)}
      data-theme={theme}
      style={{ opacity: 0, visibility: "hidden" }}
    >
      {children}
    </Component>
  );
}
