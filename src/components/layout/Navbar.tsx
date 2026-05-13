"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navLinks } from "@/data/site";
import { SafeLink } from "@/components/shared/SafeLink";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const routeThemes: Record<string, string> = {
  "/services": "services",
  "/faq": "faq",
  "/about": "about",
  "/products": "products",
  "/launches": "launches",
  "/blogs": "blogs",
  "/contact": "contact",
};

function resolveTheme(pathname: string) {
  const matchedRoute = Object.keys(routeThemes)
    .sort((a, b) => b.length - a.length)
    .find((route) => pathname.startsWith(route));

  return matchedRoute ? routeThemes[matchedRoute] : "home";
}

export function Navbar() {
  const isScrolled = useScrollPosition(12);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const removeListeners: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const header = headerRef.current;
      const magneticItems = gsap.utils.toArray<HTMLElement>(".magnetic-link");

      if (!header) return;

      gsap.from(header, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      });

      gsap.from(".nav-link", {
        y: -12,
        opacity: 0,
        stagger: 0.1,
        delay: 0.25,
        duration: 0.55,
        ease: "power3.out",
      });

      magneticItems.forEach((item) => {
        const handleMouseMove = (event: MouseEvent) => {
          const rect = item.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width - 0.5) * 16;
          const y = ((event.clientY - rect.top) / rect.height - 0.5) * 16;

          gsap.to(item, {
            x: Math.max(-8, Math.min(8, x)),
            y: Math.max(-8, Math.min(8, y)),
            duration: 0.25,
            ease: "power3.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(item, {
            x: 0,
            y: 0,
            duration: 0.35,
            ease: "elastic.out(1, 0.5)",
          });
        };

        item.addEventListener("mousemove", handleMouseMove);
        item.addEventListener("mouseleave", handleMouseLeave);
        removeListeners.push(() => {
          item.removeEventListener("mousemove", handleMouseMove);
          item.removeEventListener("mouseleave", handleMouseLeave);
        });
      });

      ScrollTrigger.refresh();
    }, headerRef);

    return () => {
      removeListeners.forEach((removeListener) => removeListener());
      ctx.revert();
    };
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      requestAnimationFrame(() => {
        const theme = resolveTheme(pathname);
        const themeElement =
          document.querySelector<HTMLElement>(`[data-theme="${theme}"]`) ??
          document.documentElement;
        const styles = getComputedStyle(themeElement);
        const themedBackground = styles
          .getPropertyValue("--bg-secondary")
          .trim();
        const themedAccent = styles.getPropertyValue("--accent").trim();

        gsap.to(panelRef.current, {
          backgroundColor:
            theme === "home" || themedBackground.length === 0
              ? isScrolled
                ? "rgba(15, 36, 27, 0.4)"
                : "rgba(15, 36, 27, 0)"
              : themedBackground,
          borderColor:
            theme === "home" || themedAccent.length === 0
              ? "rgba(230, 220, 196, 0.2)"
              : themedAccent,
          duration: 0.45,
          ease: "power2.out",
        });
      });
    }, headerRef);

    return () => ctx.revert();
  }, [isScrolled, pathname]);

  return (
    <header ref={headerRef} className="fixed left-0 right-0 top-0 z-40">
      <div
        ref={panelRef}
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 transition-all duration-300",
          isScrolled ? "glass-panel" : "bg-transparent",
        )}
      >
        <SafeLink
          href="/"
          className="magnetic-link nav-link text-lg font-semibold tracking-[0.2em] transition-colors duration-200 hover:text-sand-100"
        >
          Araneri
        </SafeLink>
        <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <SafeLink
              key={link.href}
              href={link.href}
              className="magnetic-link nav-link relative text-sand-200/70 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-emerald-500/70 after:transition-transform after:duration-300 hover:text-sand-200 hover:after:scale-x-100"
              ariaLabel={link.label}
            >
              {link.label}
            </SafeLink>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button asChild size="sm" variant="secondary">
            <SafeLink href="/contact" className="magnetic-link nav-link">
              Contact
            </SafeLink>
          </Button>
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
