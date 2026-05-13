"use client";

import { useLayoutEffect, useRef } from "react";

import { footerLinks, siteMeta } from "@/data/site";
import { SafeLink } from "@/components/shared/SafeLink";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-footer-reveal], .footer-reveal", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      ScrollTrigger.refresh();
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="border-t border-sand-200/10 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2" data-footer-reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">{siteMeta.name}</p>
          <p className="text-sm text-sand-200/70">{siteMeta.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {footerLinks.map((link) => (
            <SafeLink
              key={link.href}
              href={link.href}
              className="footer-reveal relative text-sand-200/70 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-sand-200/60 after:transition-transform after:duration-300 hover:text-sand-200 hover:after:scale-x-100"
              ariaLabel={link.label}
            >
              {link.label}
            </SafeLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
