"use client";

import { MajesticPalmyraTree } from "./MajesticPalmyraTree";
import { SlenderPalmyraTree } from "./SlenderPalmyraTree";
import { AncientPalmyraTree } from "./AncientPalmyraTree";

export function PalmWindAnimation() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[var(--bg-primary)]"
      aria-hidden="true"
    >
      {/* Background SVG Landscape: Misty Hills & Distant Silhouettes */}
      <svg
        className="absolute inset-0 w-full h-full object-cover opacity-85 transition-opacity duration-1000 z-1"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          {/* Radial mist glow for sun */}
          <radialGradient id="sun-glow" cx="60%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#f7ebd5" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#ebdcc4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ebdcc4" stopOpacity="0" />
          </radialGradient>
          
          {/* Gradients for hills */}
          <linearGradient id="hill-back" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dfd3ba" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d2c5ab" stopOpacity="1" />
          </linearGradient>
          
          <linearGradient id="hill-mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bcae91" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ab9d80" stopOpacity="1" />
          </linearGradient>
          
          <linearGradient id="hill-front" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#96896c" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#85785c" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Sun Glow */}
        <rect x="0" y="0" width="1440" height="900" fill="url(#sun-glow)" className="mix-blend-screen" />

        {/* Back Hill Layer */}
        <path
          d="M0 650 Q 360 520, 720 620 T 1440 550 L 1440 900 L 0 900 Z"
          fill="url(#hill-back)"
        />

        {/* Tiny Palm Silhouettes on Back Hill Ridge */}
        {[180, 240, 310, 520, 580, 640, 850, 920, 1050, 1180, 1280].map((x, i) => {
          // Calculate approximate height at x on back hill
          const y = 650 - (130 * Math.sin((x / 1440) * Math.PI * 2));
          return (
            <g key={`palm-back-${i}`} transform={`translate(${x}, ${y - 12}) scale(${0.12 + (i % 3) * 0.04})`} className="opacity-40">
              <path d="M10 40 Q 8 20, 10 0 L 12 0 Q 14 20, 12 40 Z" fill="#9e9178" />
              {/* Simple palm frond sprays */}
              <path d="M11 0 Q 0 -15, -15 -10 Q 0 -5, 11 0" fill="#9e9178" />
              <path d="M11 0 Q 22 -15, 37 -10 Q 22 -5, 11 0" fill="#9e9178" />
              <path d="M11 0 Q -5 -25, -5 -40 Q 0 -20, 11 0" fill="#9e9178" />
              <path d="M11 0 Q 27 -25, 27 -40 Q 22 -20, 11 0" fill="#9e9178" />
              <path d="M11 0 Q 11 -30, 11 -50 Q 15 -25, 11 0" fill="#9e9178" />
            </g>
          );
        })}

        {/* Middle Hill Layer */}
        <path
          d="M0 720 Q 420 620, 840 700 T 1440 640 L 1440 900 L 0 900 Z"
          fill="url(#hill-mid)"
        />

        {/* Tiny Palm Silhouettes on Middle Hill Ridge */}
        {[100, 290, 480, 710, 880, 980, 1120, 1340].map((x, i) => {
          const y = 720 - (100 * Math.sin((x / 1440) * Math.PI * 2));
          return (
            <g key={`palm-mid-${i}`} transform={`translate(${x}, ${y - 18}) scale(${0.18 + (i % 3) * 0.05})`} className="opacity-55">
              <path d="M10 40 Q 6 20, 10 0 L 13 0 Q 17 20, 13 40 Z" fill="#756950" />
              <path d="M11 0 Q -2 -18, -20 -12 Q -2 -6, 11 0" fill="#756950" />
              <path d="M11 0 Q 24 -18, 42 -12 Q 24 -6, 11 0" fill="#756950" />
              <path d="M11 0 Q -8 -28, -8 -45 Q -2 -22, 11 0" fill="#756950" />
              <path d="M11 0 Q 30 -28, 30 -45 Q 24 -22, 11 0" fill="#756950" />
              <path d="M11 0 Q 11 -35, 11 -55 Q 16 -28, 11 0" fill="#756950" />
            </g>
          );
        })}

        {/* Front Hill Layer */}
        <path
          d="M0 800 Q 500 710, 1000 780 T 1440 730 L 1440 900 L 0 900 Z"
          fill="url(#hill-front)"
        />

        {/* Tiny Palm Silhouettes on Front Hill Ridge */}
        {[50, 220, 390, 610, 790, 940, 1220, 1390].map((x, i) => {
          const y = 800 - (90 * Math.sin((x / 1440) * Math.PI * 2));
          return (
            <g key={`palm-front-${i}`} transform={`translate(${x}, ${y - 24}) scale(${0.25 + (i % 2) * 0.06})`} className="opacity-70">
              <path d="M10 40 Q 5 20, 10 0 L 14 0 Q 19 20, 14 40 Z" fill="#544a36" />
              <path d="M12 0 Q -5 -20, -25 -15 Q -5 -8, 12 0" fill="#544a36" />
              <path d="M12 0 Q 29 -20, 49 -15 Q 29 -8, 12 0" fill="#544a36" />
              <path d="M12 0 Q -10 -32, -10 -52 Q -4 -25, 12 0" fill="#544a36" />
              <path d="M12 0 Q 34 -32, 34 -52 Q 28 -25, 12 0" fill="#544a36" />
              <path d="M12 0 Q 12 -40, 12 -62 Q 18 -32, 12 0" fill="#544a36" />
            </g>
          );
        })}
      </svg>

      {/* Low-opacity warm-vignette layers */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#ebdcc4]/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent pointer-events-none" />

      {/* ================= LEFT SIDE: STAGGERED CLUSTER OF 3 TREES NEXT TO EACH OTHER ================= */}
      {/* 1. Leftmost Background Tree (Majestic - straight, tall) */}
      <div className="hidden lg:block absolute -left-20 xl:-left-12 bottom-0 h-[106%] w-auto aspect-[600/900] opacity-45 xl:opacity-55 mix-blend-normal transform scale-x-[0.85] origin-bottom-left transition-all duration-500 z-[3]">
        <MajesticPalmyraTree className="h-full w-full" swayDuration={9.5} swayDelay={-3.0} />
      </div>

      {/* 2. Middle Foreground Tree (Ancient - S-curved, tallest) */}
      <div className="hidden lg:block absolute -left-4 xl:left-4 bottom-0 h-[114%] w-auto aspect-[600/900] opacity-35 xl:opacity-45 mix-blend-normal transform scale-x-[0.95] origin-bottom-left transition-all duration-500 z-[5]">
        <AncientPalmyraTree className="h-full w-full" swayDuration={12.4} swayDelay={-1.5} />
      </div>

      {/* 3. Foreground Right Tree (Slender - curved, medium) */}
      <div className="absolute -left-12 sm:-left-4 lg:left-16 xl:left-24 bottom-0 h-[80%] sm:h-[88%] lg:h-[88%] w-auto aspect-[600/900] opacity-25 sm:opacity-35 lg:opacity-80 xl:opacity-90 mix-blend-normal transform scale-x-[1.05] origin-bottom-left transition-all duration-500 z-[10]">
        <SlenderPalmyraTree className="h-full w-full" swayDuration={10.8} swayDelay={-0.5} />
      </div>
    </div>
  );
}
