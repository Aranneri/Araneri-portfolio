"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Sprout, Sparkles } from "lucide-react";
import { siteMeta } from "@/data/site";
import { SafeLink } from "@/components/shared/SafeLink";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { motion } from "framer-motion";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M20 4L4 20" />
  </svg>
);

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const DecorativeCornerPalm = ({ isRight = false }: { isRight?: boolean }) => {
  return (
    <motion.div
      className={`absolute bottom-[-60px] ${
        isRight ? "right-[-60px] md:right-[-40px]" : "left-[-60px] md:left-[-40px]"
      } w-[240px] sm:w-[320px] md:w-[420px] h-[240px] sm:h-[320px] md:h-[420px] text-[#424b33]/10 pointer-events-none select-none z-0`}
      style={{
        transformOrigin: isRight ? "bottom right" : "bottom left",
      }}
      animate={{
        rotate: isRight ? [6, 12, 6] : [-6, -12, -6],
        scale: [1, 1.04, 1],
      }}
      transition={{
        duration: 10 + (isRight ? 2.5 : 0),
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full opacity-65"
      >
        <path d={isRight ? "M 100 100 C 70 70, 40 50, 0 45" : "M 0 100 C 30 70, 60 50, 100 45"} />
        {Array.from({ length: 14 }).map((_, i) => {
          const t = (i + 1) / 15;
          const stemX = isRight ? 100 - t * 100 : t * 100;
          const stemY = 100 - (t * 55 + (1 - t) * 0);
          const angleRad = (isRight ? 135 + i * 8 : 45 - i * 8) * (Math.PI / 180);
          const length = 22 + Math.sin(t * Math.PI) * 28;
          const endX = stemX + Math.cos(angleRad) * length;
          const endY = stemY - Math.sin(angleRad) * length;
          
          return (
            <g key={i}>
              <path d={`M ${stemX} ${stemY} Q ${(stemX + endX)/2 + 2} ${(stemY + endY)/2 - 2}, ${endX} ${endY}`} />
              <path d={`M ${stemX} ${stemY} Q ${(stemX + endX)/2 - 1} ${(stemY + endY)/2 - 4}, ${endX - 2} ${endY - 2}`} strokeWidth="0.4" opacity="0.6" />
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
};

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-footer-reveal], .footer-column, .footer-quote, .footer-bottom", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });

      ScrollTrigger.refresh();
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full border-t border-[#424b33]/15 bg-gradient-to-b from-[#ebdcc4]/50 to-[#eae0cd]/95 pt-20 pb-12 overflow-hidden z-20"
      data-theme="home"
    >
      <DecorativeCornerPalm isRight={false} />
      <DecorativeCornerPalm isRight={true} />

      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <motion.div
          className="absolute bottom-[10%] left-[8%] w-[6px] h-[6px] rounded-full bg-[#d4a373] opacity-40 blur-[0.5px]"
          animate={{ y: [0, -320], x: [0, 15, -15, 0], opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[28%] w-[9px] h-[9px] rounded-full bg-[#d4a373] opacity-30 blur-[1px]"
          animate={{ y: [0, -280], x: [0, -20, 20, 0], opacity: [0, 0.7, 0.7, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-[5%] right-[22%] w-[8px] h-[8px] rounded-full bg-[#d4a373] opacity-35 blur-[0.5px]"
          animate={{ y: [0, -350], x: [0, 25, -25, 0], opacity: [0, 0.75, 0.75, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[8%] w-[5px] h-[5px] rounded-full bg-[#d4a373] opacity-45 blur-[0.5px]"
          animate={{ y: [0, -300], x: [0, -10, 10, 0], opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute bottom-[-10%] left-[50%] -translate-x-1/2 w-[550px] h-[350px] rounded-full bg-[#d4a373]/[0.05] blur-[90px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-[#424b33]/[0.03] blur-[75px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-[#424b33]/[0.03] blur-[75px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1700px] px-8 sm:px-12 lg:px-20 xl:px-28 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 pb-16">
        <div className="footer-column lg:col-span-4 flex flex-col space-y-6">
          <SafeLink href="/" className="flex items-center gap-4 transition-opacity hover:opacity-90">
            <div className="flex h-11 w-11 items-center justify-center border border-[#d4a373]/45 bg-[#f3e8d6]/55 shadow-md backdrop-blur-md rounded-full transition-transform duration-500 hover:rotate-12">
              <Sprout className="h-5 w-5 text-[#d4a373]" />
            </div>
            <span 
              className="text-3xl sm:text-4xl font-normal tracking-[0.24em] lowercase first-letter:uppercase text-[#2c351e] font-['Italiana',_serif] transition-all duration-700 hover:tracking-[0.3em] hover:text-[#1b4d22] relative group/brand"
              style={{ textShadow: "0 1px 4px rgba(212, 163, 115, 0.18)" }}
            >
              {siteMeta.name}
              {/* Elegant golden underline expander */}
              <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4a373]/65 to-transparent scale-x-0 group-hover/brand:scale-x-100 transition-transform duration-700 origin-center" />
            </span>
          </SafeLink>
          <p className="text-[15px] leading-relaxed text-[#2c351e]/75 font-['Cormorant_Garamond',_serif] italic font-medium">
            Araneri is a cinematic, nature-inspired storytelling collective rooted in the ancient ecological wisdom and structural memory of the Palmyra palm tree.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
              { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              { icon: Twitter, href: "https://twitter.com", label: "X" },
              { icon: Youtube, href: "https://youtube.com", label: "YouTube" }
            ].map((social) => {
              const Icon = social.icon;
              return (
                <SafeLink
                  key={social.label}
                  href={social.href}
                  className="group flex h-9.5 w-9.5 items-center justify-center rounded-full bg-[#f3e8d6] hover:bg-[#424b33] border border-[#424b33]/15 transition-all duration-300 shadow-[0_4px_8px_-2px_rgba(44,53,30,0.06)] hover:-translate-y-1 hover:shadow-md"
                  ariaLabel={social.label}
                >
                  <Icon className="h-4.5 w-4.5 text-[#424b33] group-hover:text-[#ebdcc4] transition-colors duration-300" />
                </SafeLink>
              );
            })}
          </div>
        </div>

        <div className="footer-column lg:col-span-2 flex flex-col space-y-4">
          <h4 className="text-sm uppercase font-bold tracking-[0.2em] text-[#424b33] border-b border-[#424b33]/15 pb-2.5 font-['Italiana',_serif] flex items-center gap-1.5">
            <span className="text-[#d4a373] font-serif">♦</span> Our Ethos
          </h4>
          <nav className="flex flex-col space-y-3 font-['Cormorant_Garamond',_serif] italic font-medium" aria-label="Footer Ethos Links">
            {[
              { label: "The Palm Roots", href: "/" },
              { label: "The Growing Trunk", href: "/about" },
              { label: "Canopy Services", href: "/services" },
              { label: "Visual Chronicles", href: "/blogs" }
            ].map((link) => (
              <SafeLink
                key={link.label}
                href={link.href}
                className="group flex items-center text-[15px] text-[#2c351e]/85 hover:text-[#1b4d22] transition-colors duration-300"
              >
                <span className="text-[12px] font-bold text-[#d4a373] mr-0 w-0 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all duration-500 inline-block transform -translate-x-2.5 group-hover:translate-x-0 font-sans not-italic">
                  →
                </span>
                <span className="group-hover:translate-x-1 group-hover:text-[#1b4d22] transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.8px] after:bg-[#d4a373]/40 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left pb-0.5">{link.label}</span>
              </SafeLink>
            ))}
          </nav>
        </div>

        <div className="footer-column lg:col-span-2 flex flex-col space-y-4">
          <h4 className="text-sm uppercase font-bold tracking-[0.2em] text-[#424b33] border-b border-[#424b33]/15 pb-2.5 font-['Italiana',_serif] flex items-center gap-1.5">
            <span className="text-[#d4a373] font-serif">♦</span> Grove Craft
          </h4>
          <nav className="flex flex-col space-y-3 font-['Cormorant_Garamond',_serif] italic font-medium" aria-label="Footer Craft Links">
            {[
              { label: "Story Circles", href: "/services#services-list" },
              { label: "Palm Manuscripts", href: "/launches" },
              { label: "Ecology Archives", href: "/products" },
              { label: "Butterfly Groves", href: "/about" }
            ].map((link) => (
              <SafeLink
                key={link.label}
                href={link.href}
                className="group flex items-center text-[15px] text-[#2c351e]/85 hover:text-[#1b4d22] transition-colors duration-300"
              >
                <span className="text-[12px] font-bold text-[#d4a373] mr-0 w-0 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all duration-500 inline-block transform -translate-x-2.5 group-hover:translate-x-0 font-sans not-italic">
                  →
                </span>
                <span className="group-hover:translate-x-1 group-hover:text-[#1b4d22] transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.8px] after:bg-[#d4a373]/40 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left pb-0.5">{link.label}</span>
              </SafeLink>
            ))}
          </nav>
        </div>

        <div className="footer-column lg:col-span-4 flex flex-col space-y-4">
          <h4 className="text-sm uppercase font-bold tracking-[0.2em] text-[#424b33] border-b border-[#424b33]/15 pb-2.5 font-['Italiana',_serif] flex items-center gap-1.5">
            <span className="text-[#d4a373] font-serif">♦</span> Grove Contacts
          </h4>
          <div className="space-y-3 text-[15px] text-[#2c351e]/80 font-['Cormorant_Garamond',_serif] italic font-medium">
            <div className="flex items-center gap-3.5 group not-italic">
              <div className="flex h-9 w-9 items-center justify-center bg-[#f3e8d6] border border-[#424b33]/12 group-hover:bg-[#424b33] group-hover:border-transparent transition-all duration-500 shadow-sm rounded-[35%_65%_65%_35%_/_35%_35%_65%_65%] hover:rounded-[65%_35%_35%_65%_/_65%_65%_35%_35%]">
                <Mail className="h-4.5 w-4.5 text-[#424b33] group-hover:text-[#ebdcc4] transition-colors duration-300" />
              </div>
              <SafeLink href="mailto:stewards@araneri.org" className="hover:text-[#1b4d22] transition-colors duration-200 font-['Cormorant_Garamond',_serif] italic font-medium">
                stewards@araneri.org
              </SafeLink>
            </div>
            
            <div className="flex items-center gap-3.5 group not-italic">
              <div className="flex h-9 w-9 items-center justify-center bg-[#f3e8d6] border border-[#424b33]/12 group-hover:bg-[#424b33] group-hover:border-transparent transition-all duration-500 shadow-sm rounded-[35%_65%_65%_35%_/_35%_35%_65%_65%] hover:rounded-[65%_35%_35%_65%_/_65%_65%_35%_35%]">
                <Phone className="h-4.5 w-4.5 text-[#424b33] group-hover:text-[#ebdcc4] transition-colors duration-300" />
              </div>
              <SafeLink href="tel:+91424B33ARAN" className="hover:text-[#1b4d22] transition-colors duration-200 font-['Cormorant_Garamond',_serif] italic font-medium">
                +91 424-B33-ARAN
              </SafeLink>
            </div>

            <div className="flex gap-3.5 group items-start">
              <div className="flex h-9 w-9 items-center justify-center bg-[#f3e8d6] border border-[#424b33]/12 group-hover:bg-[#424b33] group-hover:border-transparent transition-all duration-500 shrink-0 mt-0.5 shadow-sm rounded-[35%_65%_65%_35%_/_35%_35%_65%_65%] hover:rounded-[65%_35%_35%_65%_/_65%_65%_35%_35%]">
                <MapPin className="h-4.5 w-4.5 text-[#424b33] group-hover:text-[#ebdcc4] transition-colors duration-300" />
              </div>
              <span className="leading-relaxed">
                213 Borassus Grove Road,<br />
                Pudukkottai, Tamil Nadu, India
              </span>
            </div>
          </div>

          <div className="mt-3 p-5 rounded-2xl border border-[#d4a373]/20 bg-[#f3e8d6]/30 backdrop-blur-md shadow-[0_8px_32px_rgba(44,53,30,0.03)] space-y-3">
            <p className="text-xs font-bold tracking-[0.15em] text-[#424b33] flex items-center gap-1.5 font-['Italiana',_serif] uppercase">
              <Sparkles className="h-3 w-3 text-[#d4a373] animate-pulse" />
              Join the Seed Registry
            </p>
            <form onSubmit={handleSubscribe} className="relative space-y-2">
              <div className="relative flex items-center w-full rounded-full border border-[#424b33]/15 bg-[#f3e8d6]/45 focus-within:border-[#d4a373]/60 focus-within:bg-[#f3e8d6]/75 transition-all duration-300 p-1 shadow-[inset_0_2px_4px_rgba(44,53,30,0.02)]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full pl-4 pr-12 py-1.5 text-xs text-[#2c351e] bg-transparent outline-none border-none placeholder-[#2c351e]/40 font-['Cormorant_Garamond',_serif] italic font-medium"
                />
                <button
                  type="submit"
                  className="group/btn absolute right-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#424b33] text-[#ebdcc4] hover:bg-[#2c351e] shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Subscribe"
                >
                  {subscribed ? (
                    <Sprout className="h-4 w-4 text-[#ebdcc4] animate-bounce" />
                  ) : (
                    <ArrowRight className="h-4 w-4 text-[#ebdcc4] group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                  )}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] font-semibold text-emerald-800 pl-2 animate-fade-in font-['Cormorant_Garamond',_serif] italic">
                  ✓ Rooted successfully! Welcome to the grove.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-b border-[#424b33]/10 py-6 mb-8 bg-[#eae0cd]/30 select-none overflow-hidden footer-quote">
        <div className="mx-auto max-w-[1700px] px-8 flex justify-center text-center">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] tracking-wide text-[#2c351e]/85"
            style={{
              fontFamily: "var(--font-water-brush), 'Water Brush', 'Caveat Brush', cursive",
              textShadow: "0 0 8px rgba(212, 163, 115, 0.25)"
            }}
          >
            Rooted in Sand, Reaching for the Canopy
          </h2>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1700px] px-8 sm:px-12 lg:px-20 xl:px-28 footer-bottom flex flex-col gap-4 border-t border-[#424b33]/5 pt-8 text-xs text-[#2c351e]/65 font-['Manrope',_sans-serif] md:flex-row md:items-center md:justify-between">
        <p className="tracking-wide">
          &copy; {new Date().getFullYear()} {siteMeta.name}. Hand-crafted with organic wisdom. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-6 font-semibold">
          {[
            { label: "Privacy Ethos", href: "/" },
            { label: "Terms of the Grove", href: "/" }
          ].map((link) => (
            <SafeLink
              key={link.label}
              href={link.href}
              className="relative transition-colors duration-200 hover:text-[#1b4d22] after:absolute after:-bottom-0.5 after:left-0 after:h-[1.2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#d4a373] after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </SafeLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
