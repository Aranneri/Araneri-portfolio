"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export function ParallaxPalmyraForest() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Define 16 floating amber spores (fireflies/pollen dust) scattered across the page deterministically to avoid hydration mismatch
  const dustParticles = Array.from({ length: 16 }).map((_, i) => {
    // Generate a fully deterministic pseudo-random layout based on index i
    const leftPercent = 4 + ((i * 37) % 91);
    return {
      id: `dust-${i}`,
      top: `${8 + i * 5.8}%`,
      left: `${leftPercent}%`,
      size: 2.2 + (i % 3) * 1.8,
      duration: 10 + (i % 4) * 5,
      delay: i * 0.4,
    };
  });

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ================= 1. SILENT DRIFTING FOG BANDS (Ecological Depth) ================= */}
      <motion.div
        className="absolute left-0 right-0 h-[280px] bg-gradient-to-r from-transparent via-[#f3e8d6]/[0.08] to-transparent blur-3xl opacity-25 z-0"
        style={{ top: "25%" }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 42, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute left-0 right-0 h-[320px] bg-gradient-to-r from-transparent via-[#ebdcc4]/[0.1] to-transparent blur-3xl opacity-20 z-0"
        style={{ top: "58%" }}
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute left-0 right-0 h-[260px] bg-gradient-to-r from-transparent via-[#f3e8d6]/[0.08] to-transparent blur-3xl opacity-25 z-0"
        style={{ top: "82%" }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 46, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* ================= 2. AMBER DUST / FIREFLY PARTICLES (Cinematic Vibe) ================= */}
      {dustParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#d4a373] opacity-25 blur-[1px] mix-blend-color-dodge"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, 18, 0],
            opacity: [0.12, 0.38, 0.12],
          }}
          transition={{
            duration: p.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
