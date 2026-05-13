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
    <div ref={scopeRef} className="space-y-3">
      {items.map((item, index) => (
        <div
          key={item.question}
          className="rounded-[var(--radius-md)] border border-sand-200/15 bg-palm-900/30"
          data-section-card
        >
          <h3>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-sand-200 hover:text-sand-100"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-panel-${index}`}
              id={`faq-trigger-${index}`}
              onClick={() =>
                setActiveIndex((current) => (current === index ? null : index))
              }
            >
              <span>{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform duration-200",
                  activeIndex === index ? "rotate-180" : "rotate-0",
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
            className="h-0 overflow-hidden px-5 text-sm text-sand-200/70"
          >
            <p className="pb-5">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
