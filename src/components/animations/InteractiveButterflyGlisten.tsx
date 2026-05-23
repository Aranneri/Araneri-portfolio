"use client";

import { motion } from "framer-motion";

export function InteractiveButterflyGlisten() {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none z-10">
      {/* ================= HYBRID REALISTIC CENTERPIECE CONTAINER ================= */}
      {/* 1. Spring Growth Entry Animation on Mount */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
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
        {/* Locked to a perfect square aspect ratio matching our circular-feathered image */}
        <motion.div
          className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] flex items-center justify-center shadow-radial-ambient"
          style={{ transformOrigin: "center center", aspectRatio: "1/1" }}
          animate={{
            scale: [1, 1.025, 1],
            y: [0, -3, 2, 0],
            rotate: [-0.8, 1.2, -0.6, 0.4, -0.8],
            filter: [
              "drop-shadow(0 15px 35px rgba(66, 75, 51, 0.06)) drop-shadow(0 8px 18px rgba(212, 163, 115, 0.08))",
              "drop-shadow(0 25px 45px rgba(66, 75, 51, 0.12)) drop-shadow(0 15px 30px rgba(212, 163, 115, 0.20))",
              "drop-shadow(0 15px 35px rgba(66, 75, 51, 0.06)) drop-shadow(0 8px 18px rgba(212, 163, 115, 0.08))"
            ]
          }}
          transition={{
            duration: 9.0,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          {/* Core Photorealistic AI-Generated Maravan Butterfly Image Asset */}
          <img
            src="/images/maravan-butterfly.png"
            alt="Tamil Nadu State Butterfly Maravan / Tamil Yeoman with bright orange wings perched under sunlit canopy"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none rounded-full"
          />

          {/* ================= 3. OVERLAY ACTIVE KINETIC VECTOR LAYER ================= */}
          {/* Using coordinate viewBox matching cropped image size exactly (1024 x 1024) */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Luminous Specular sparkles twinkling on the orange butterfly wings (Centered around X=512, Y=512) */}
            <motion.circle
              cx="520"
              cy="480"
              r="8"
              fill="#ffffff"
              opacity="0.9"
              animate={{
                scale: [1, 1.4, 1],
                filter: ["drop-shadow(0 0 3px rgba(255,255,255,0.4))", "drop-shadow(0 0 12px rgba(255,255,255,0.95))", "drop-shadow(0 0 3px rgba(255,255,255,0.4))"]
              }}
              transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.circle
              cx="460"
              cy="530"
              r="6"
              fill="#ffffff"
              opacity="0.85"
              animate={{
                scale: [1, 1.35, 1],
                filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.4))", "drop-shadow(0 0 8px rgba(255,255,255,0.9))", "drop-shadow(0 0 2px rgba(255,255,255,0.4))"]
              }}
              transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.2 }}
            />
            <motion.circle
              cx="580"
              cy="510"
              r="7"
              fill="#ffffff"
              opacity="0.85"
              animate={{
                scale: [1, 1.35, 1],
                filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.3))", "drop-shadow(0 0 10px rgba(255,255,255,0.9))", "drop-shadow(0 0 2px rgba(255,255,255,0.3))"]
              }}
              transition={{ duration: 3.0, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.0 }}
            />

            {/* Dew drop glistening on a leaf tip at the edge (Coordinates around X=350, Y=780) */}
            <motion.circle
              cx="320"
              cy="740"
              r="9"
              fill="#ffffff"
              opacity="0.8"
              animate={{
                scale: [1, 1.3, 1],
                filter: ["drop-shadow(0 0 4px rgba(255,255,255,0.3))", "drop-shadow(0 0 12px rgba(255,255,255,0.85))", "drop-shadow(0 0 4px rgba(255,255,255,0.3))"]
              }}
              transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
