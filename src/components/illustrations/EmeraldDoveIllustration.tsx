"use client";

import { motion } from "framer-motion";

export function EmeraldDoveIllustration() {
  // We represent 4 birds in a flock, soaring diagonally from bottom-left to top-right
  const flock = [
    { id: 1, delay: 0.0, duration: 8.5, startY: 220, endY: 20, scale: 0.85, flapSpeed: 0.35 },
    { id: 2, delay: 0.6, duration: 9.2, startY: 250, endY: 50, scale: 0.70, flapSpeed: 0.38 },
    { id: 3, delay: 1.4, duration: 8.0, startY: 190, endY: 10, scale: 0.65, flapSpeed: 0.32 },
    { id: 4, delay: 2.2, duration: 9.8, startY: 270, endY: 70, scale: 0.75, flapSpeed: 0.40 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none z-10">
      {/* ================= BACKGROUND ATMOSPHERIC FLYING FLOCK ================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {flock.map((bird) => (
          <motion.div
            key={bird.id}
            className="absolute"
            style={{ left: "-100px", top: bird.startY }}
            animate={{
              x: [-50, 750],
              y: [0, bird.endY - bird.startY],
              opacity: [0, 0.75, 0.75, 0]
            }}
            transition={{
              duration: bird.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: bird.delay,
              repeatDelay: 8.0 // Birds appear occasionally in intervals
            }}
          >
            {/* The bird body and flapping wings */}
            <motion.div
              style={{ scale: bird.scale }}
              className="flex items-center justify-center"
            >
              <svg viewBox="0 0 40 40" className="w-8 h-8 fill-none stroke-[#424b33]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Flapping wings */}
                <motion.path
                  d="M10,20 C15,5 20,20 25,20 C30,5 35,20 20,25 C15,22 12,21 10,20 Z"
                  fill="#2d6a4f"
                  opacity="0.85"
                  animate={{ scaleY: [1, 0.3, 1] }}
                  transition={{
                    duration: bird.flapSpeed,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }}
                />
                {/* Dove body silhouette */}
                <path d="M15,22 C18,22 22,23 25,21 C27,20 29,21 31,19 C28,18 24,18 20,20 C17,21 16,21 15,22 Z" fill="#bfa3a3" />
              </svg>
            </motion.div>
          </motion.div>
        ))}

        {/* Ambient Spores / Emerald Wing Leaflets */}
        <motion.div
          className="absolute w-5 h-2 bg-gradient-to-r from-[#2d6a4f] to-[#71b38f] rounded-[100%_0%_100%_0%] opacity-35"
          style={{ bottom: "35%", left: "15%", transform: "rotate(15deg)" }}
          animate={{
            y: [0, -210],
            x: [0, 40, -12, 18],
            rotate: [15, 360, 720],
            opacity: [0, 0.75, 0.75, 0]
          }}
          transition={{ duration: 8.0, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-4 h-1.5 bg-[#d4a373] rounded-full opacity-40 blur-[0.5px]"
          style={{ bottom: "42%", right: "12%" }}
          animate={{
            y: [0, -180],
            x: [0, -35, 15, -10],
            opacity: [0, 0.8, 0]
          }}
          transition={{ duration: 7.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.8 }}
        />
      </div>

      {/* ================= MAIN PERCHED EMERALD DOVE ILLUSTRATION ================= */}
      {/* 1. Direct Entry Spring Animation on Mount */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center z-10"
        style={{ transformOrigin: "bottom center" }}
        initial={{ scale: 0.7, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 48,
          damping: 12,
          delay: 0.15
        }}
      >
        {/* 2. Continuous Breathing Glow Scale, Sway, & Soft Shadow Pulse */}
        {/* Locked to the exact aspect ratio 290/319 of our realistic cropped dove centerpiece */}
        <motion.div
          className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px] flex items-center justify-center shadow-radial-ambient"
          style={{ transformOrigin: "bottom center", aspectRatio: "290/319" }}
          animate={{
            scale: [1, 1.025, 1],
            y: [0, -4, 2, 0],
            rotate: [-0.6, 1.2, -0.8, 0.4, -0.6],
            filter: [
              "drop-shadow(0 15px 35px rgba(45, 106, 79, 0.08)) drop-shadow(0 8px 18px rgba(212, 163, 115, 0.10))",
              "drop-shadow(0 25px 45px rgba(45, 106, 79, 0.15)) drop-shadow(0 15px 30px rgba(212, 163, 115, 0.25))",
              "drop-shadow(0 15px 35px rgba(45, 106, 79, 0.08)) drop-shadow(0 8px 18px rgba(212, 163, 115, 0.10))"
            ]
          }}
          transition={{
            duration: 8.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          {/* Core Photorealistic Emerald Dove Image Asset */}
          <img
            src="/images/emerald-dove-centerpiece.png"
            alt="Tamil Nadu State Bird Emerald Dove perched cinematically on a tree branch among palm fronds"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none brightness-[1.01] saturate-[1.02]"
          />

          {/* ================= 3. OVERLAY ACTIVE KINETIC VECTOR LAYER ================= */}
          {/* Using coordinate viewBox matching cropped image size exactly (290 x 319) */}
          <svg
            viewBox="0 0 290 319"
            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Luminous Specular feather sparkles on the iridescent emerald wings (Centered around X=210, Y=150) */}
            <motion.circle
              cx="210"
              cy="150"
              r="2.5"
              fill="#ffffff"
              opacity="0.9"
              animate={{
                scale: [1, 1.4, 1],
                filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.4))", "drop-shadow(0 0 6px rgba(255,255,255,0.95))", "drop-shadow(0 0 2px rgba(255,255,255,0.4))"]
              }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.circle
              cx="230"
              cy="170"
              r="2.0"
              fill="#ffffff"
              opacity="0.85"
              animate={{
                scale: [1, 1.35, 1],
                filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.4))", "drop-shadow(0 0 5px rgba(255,255,255,0.9))", "drop-shadow(0 0 2px rgba(255,255,255,0.4))"]
              }}
              transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.0 }}
            />

            {/* Dew drop glistening on the perch branch tip (Centered around X=260, Y=220) */}
            <motion.circle
              cx="260"
              cy="220"
              r="3.5"
              fill="#ffffff"
              opacity="0.85"
              animate={{
                scale: [1, 1.35, 1],
                filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.3))", "drop-shadow(0 0 6px rgba(255,255,255,0.9))", "drop-shadow(0 0 2px rgba(255,255,255,0.3))"]
              }}
              transition={{ duration: 3.0, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
