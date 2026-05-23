"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WatercolorCloudSmokeProps {
  readonly className?: string;
  readonly delay?: number;
}

export function WatercolorCloudSmoke({ className, delay = 0 }: WatercolorCloudSmokeProps) {
  const filterId = useId();

  return (
    <motion.div
      className={cn("pointer-events-none select-none z-0", className)}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 2.2, ease: "easeOut", delay }}
    >
      <motion.div
        animate={{
          x: [0, 10, -8, 0],
          y: [0, -15, 12, 0],
          rotate: [0, 4, -4, 0],
        }}
        transition={{
          duration: 38,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative w-80 h-[520px] md:w-[500px] md:h-[720px]"
      >
        <svg
          viewBox="0 0 500 700"
          className="w-full h-full animate-gentle-sway"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/*
              Dynamic SVG Filter generated uniquely per instance using React useId.
              This prevents ID collision in the DOM, solving browser duplicate-filter glitches.
            */}
            <filter id={filterId} x="-40%" y="-40%" width="180%" height="180%">
              {/* 1. Generate high-frequency, deep octave fractal noise for paint/sponge texture */}
              <feTurbulence type="fractalNoise" baseFrequency="0.014" numOctaves="6" result="noise" />
              
              {/* 2. Displace vector boundaries heavily to make spongy watercolor stains */}
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="125" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              
              {/* 3. Soften displaced edges slightly while preserving paper/sponge texture details */}
              <feGaussianBlur in="displaced" stdDeviation="6.5" />
            </filter>
          </defs>

          {/*
            Applying the filter entirely within the high-performance SVG vector pipeline.
            This completely avoids the HTML-to-SVG compositing cross-over bug that
            causes some browsers to render solid rectangular boxes instead of transparent margins.
          */}
          <g filter={`url(#${filterId})`}>
            {/* Primary soft warm sand-brown core layers */}
            <circle cx="250" cy="350" r="175" fill="#8c7a5f" opacity="0.38" />
            <circle cx="270" cy="310" r="150" fill="#ebdcc4" opacity="0.48" />
            <circle cx="230" cy="380" r="160" fill="#bca788" opacity="0.35" />
            
            {/* Forest moss-olive spongy paint blobs */}
            <circle cx="200" cy="280" r="155" fill="#4e5c3e" opacity="0.34" />
            <circle cx="310" cy="420" r="145" fill="#3d4931" opacity="0.36" />
            <circle cx="210" cy="450" r="130" fill="#667a53" opacity="0.28" />
            
            {/* Earthy clay-ochre and rich burnt-umber splashes */}
            <circle cx="260" cy="440" r="135" fill="#8a6f4e" opacity="0.42" />
            <circle cx="290" cy="220" r="120" fill="#9c7a52" opacity="0.35" />
            <circle cx="180" cy="330" r="110" fill="#806343" opacity="0.32" />

            {/* Bleeding outer accent spots to resemble sponge paint texture details */}
            <circle cx="150" cy="390" r="95" fill="#5c6b4b" opacity="0.26" />
            <circle cx="340" cy="330" r="105" fill="#445136" opacity="0.25" />
            <circle cx="220" cy="170" r="95" fill="#7d674c" opacity="0.30" />
            <circle cx="300" cy="510" r="105" fill="#dfcfb5" opacity="0.45" />
            <circle cx="280" cy="150" r="80" fill="#6e7f5e" opacity="0.24" />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}


