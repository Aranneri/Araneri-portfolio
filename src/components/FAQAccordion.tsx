"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import type { FaqItem } from "@/types";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  readonly items: readonly FaqItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const scopeRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      contentRefs.current.forEach((content, index) => {
        if (!content) return;

        const isOpen = activeIndex === index;

        gsap.to(content, {
          height: isOpen ? content.scrollHeight : 0,
          opacity: isOpen ? 1 : 0,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => {
            if (isOpen) {
              gsap.set(content, { height: "auto" });
            }
            ScrollTrigger.refresh();
          },
        });
      });
    }, scopeRef);

    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <div ref={scopeRef} className="space-y-4">
      {items.map((item, index) => (
        <div
          key={item.question}
          className="rounded-2xl border border-[var(--text-primary)]/12 bg-gradient-to-br from-[var(--bg-secondary)]/95 to-[var(--bg-primary)]/95 shadow-sm hover:border-[var(--text-primary)]/25 hover:shadow-[0_8px_30px_rgba(66,75,51,0.03)] transition-all duration-300 overflow-hidden"
          data-section-card
        >
          <h3>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-[var(--text-primary)] hover:opacity-85 transition-opacity duration-200 font-sans tracking-wide cursor-pointer"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-panel-${index}`}
              id={`faq-trigger-${index}`}
              onClick={() => setActiveIndex((current) => (current === index ? null : index))}
            >
              <span>{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform duration-300 text-[var(--text-primary)]/60",
                  activeIndex === index ? "rotate-180 text-[var(--text-primary)]" : "rotate-0",
                )}
                aria-hidden="true"
              />
            </button>
          </h3>
          <div
            ref={(element) => {
              contentRefs.current[index] = element;
            }}
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-trigger-${index}`}
            className="h-0 overflow-hidden px-6 text-[15px] text-[var(--text-secondary)] leading-relaxed font-sans"
          >
            <p className="pb-5">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
