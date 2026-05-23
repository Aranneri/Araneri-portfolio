"use client";

import { useLayoutEffect, useRef } from "react";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navLinks } from "@/data/site";
import { SafeLink } from "@/components/shared/SafeLink";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Sprout } from "lucide-react";

export function Navbar() {
  const isScrolled = useScrollPosition(12);
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
        let targetBg = "rgba(243, 232, 214, 0)";
        let targetBorder = "rgba(66, 75, 51, 0)";

        if (isScrolled) {
          targetBg = "rgba(243, 232, 214, 0.45)"; // Frosted warm sand glass
          targetBorder = "rgba(66, 75, 51, 0.12)";  // Subtle olive border
        }

        gsap.to(panelRef.current, {
          backgroundColor: targetBg,
          borderColor: targetBorder,
          duration: 0.45,
          ease: "power2.out",
        });
      });
    }, headerRef);

    return () => ctx.revert();
  }, [isScrolled]);

  return (
    <header ref={headerRef} className="fixed left-0 right-0 top-0 z-40 w-full">
      <div
        ref={panelRef}
        className={cn(
          "w-full border-b transition-all duration-300",
          isScrolled ? "glass-panel" : "border-b-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2.5 md:px-5 md:py-3">
          <SafeLink
            href="/"
            className="magnetic-link nav-link flex items-center gap-2.5 md:gap-3 transition-colors duration-200 hover:text-sand-100"
          >
            <div className="flex h-9 w-9 items-center justify-center border border-[#d4a373]/55 bg-palm-950/45 shadow-lg shadow-black/15 backdrop-blur-md md:h-10 md:w-10">
              <Sprout className="h-[18px] w-[18px] text-[#d4a373] md:h-5 md:w-5" />
              <span className="sr-only">Logo space</span>
            </div>
            <span className="logo-text-animated text-2xl font-normal md:text-3xl transition-all duration-300 tracking-wide">
              Araneri
            </span>
          </SafeLink>
          <div className="hidden items-center gap-4 md:flex lg:gap-6">
            <nav className="flex items-center gap-4 lg:gap-6" aria-label="Primary">
              {navLinks.map((link) => (
                <SafeLink
                  key={link.href}
                  href={link.href}
                  className="magnetic-link nav-link relative text-[15px] font-semibold text-sand-200/86 transition-colors duration-200 hover:text-[#f8e5bb] lg:text-[17px] [font-family:'Playfair_Display',serif] pb-3"
                  ariaLabel={link.label}
                >
                  <span className="nav-link-text relative z-10">{link.label}</span>
                  {/* Center-outward expanding golden-orange line with a tiny seed/dot */}
                  <span className="nav-hover-indicator absolute left-0 right-0 bottom-0 h-4 flex items-center justify-center pointer-events-none">
                    {/* Left line segment */}
                    <span className="nav-hover-line-left absolute right-[calc(50%+4px)] bottom-[4px] h-[2.2px] w-0 bg-gradient-to-l from-current to-transparent transition-all duration-300 origin-right" />
                    {/* Tiny center seed/dot */}
                    <span className="nav-hover-dot opacity-0 scale-50 transition-all duration-300 z-10 absolute bottom-[2.5px] h-1.5 w-1.5 rounded-full bg-current" />
                    {/* Right line segment */}
                    <span className="nav-hover-line-right absolute left-[calc(50%+4px)] bottom-[4px] h-[2.2px] w-0 bg-gradient-to-r from-current to-transparent transition-all duration-300 origin-left" />
                  </span>
                </SafeLink>
              ))}
            </nav>
            <SafeLink
              href="/contact"
              className="magnetic-link nav-link px-4.5 py-1.5 text-[14px] md:text-[15px] font-semibold tracking-wide rounded-full bg-[#3a4f3d] text-[#f4f1ea] transition-all duration-300 hover:bg-[#4d6651] shadow-md border border-emerald-600/10 [font-family:'Playfair_Display',serif]"
              id="nav-get-involved-btn"
            >
              Get Involved
            </SafeLink>
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
