"use client";

import { motion } from "framer-motion";

export function PalmCraftsIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none z-10">
      {/* ================= BACKGROUND WIND-SWIRLED LEAFLETS & FIBERS ================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Swirling Fiber 1 */}
        <motion.div
          className="absolute w-6 h-1.5 bg-gradient-to-r from-[#d4a373] to-[#424b33] rounded-full opacity-35 blur-[0.2px]"
          style={{ bottom: "35%", left: "15%", transform: "rotate(20deg)" }}
          animate={{
            y: [0, -200],
            x: [0, 45, -15, 20],
            rotate: [20, 360, 720],
            opacity: [0, 0.7, 0.7, 0]
          }}
          transition={{ duration: 8.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        {/* Swirling Fiber 2 */}
        <motion.div
          className="absolute w-5 h-1 bg-[#ebdcc4] rounded-full opacity-40 blur-[0.1px]"
          style={{ bottom: "40%", right: "18%", transform: "rotate(-35deg)" }}
          animate={{
            y: [0, -230],
            x: [0, -50, 25, -15],
            rotate: [-35, -270, -540],
            opacity: [0, 0.6, 0.6, 0]
          }}
          transition={{ duration: 9.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.0 }}
        />
        {/* Ambient Spore Particles */}
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full bg-[#d4a373] opacity-35 blur-[0.5px]"
          style={{ bottom: "25%", left: "35%" }}
          animate={{ y: [0, -140], x: [0, 15, -10, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
        />
      </div>

      {/* ================= HYBRID REALISTIC CENTERPIECE CONTAINER ================= */}
      {/* 1. Spring Growth Entry Animation on Mount (Hero best practice) */}
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
        {/* Locked to the exact aspect ratio 277/303 of our realistic cropped crafts centerpiece */}
        <motion.div
          className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] flex items-center justify-center shadow-radial-ambient"
          style={{ transformOrigin: "bottom center", aspectRatio: "277/303" }}
          animate={{
            scale: [1, 1.025, 1],
            y: [0, -4, 2, 0],
            rotate: [-0.6, 1.2, -0.9, 0.4, -0.6],
            filter: [
              "drop-shadow(0 15px 35px rgba(66, 75, 51, 0.08)) drop-shadow(0 8px 18px rgba(212, 163, 115, 0.10))",
              "drop-shadow(0 25px 45px rgba(66, 75, 51, 0.15)) drop-shadow(0 15px 30px rgba(212, 163, 115, 0.25))",
              "drop-shadow(0 15px 35px rgba(66, 75, 51, 0.08)) drop-shadow(0 8px 18px rgba(212, 163, 115, 0.10))"
            ]
          }}
          transition={{
            duration: 8.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          {/* Core Photorealistic Traditional Palm-Leaf Crafts Image Asset */}
          <img
            src="/images/palm-crafts-centerpiece.png"
            alt="Traditional hand-woven Palmyra palm-leaf crafts, woven roses, stars, coiling rings, and textured leaf fronds"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none brightness-[1.01] saturate-[1.02]"
          />

          {/* ================= 3. OVERLAY ACTIVE KINETIC VECTOR LAYER ================= */}
          {/* Using coordinate viewBox matching cropped image size exactly (277 x 303) */}
          <svg
            viewBox="0 0 277 303"
            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Glistening Dew Drops at Leaf Tips (Palm blades centered around X=75..110, Y=30..110) */}
            {/* Blade Tip 1 (Top Left blade) */}
            <motion.circle
              cx="72"
              cy="36"
              r="2.5"
              fill="#ffffff"
              opacity="0.85"
              animate={{
                scale: [1, 1.4, 1],
                filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.4))", "drop-shadow(0 0 6px rgba(255,255,255,0.95))", "drop-shadow(0 0 2px rgba(255,255,255,0.4))"]
              }}
              transition={{ duration: 3.0, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            {/* Blade Tip 2 (Mid Left blade) */}
            <motion.circle
              cx="103"
              cy="98"
              r="2.0"
              fill="#ffffff"
              opacity="0.8"
              animate={{
                scale: [1, 1.35, 1],
                filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.4))", "drop-shadow(0 0 5px rgba(255,255,255,0.9))", "drop-shadow(0 0 2px rgba(255,255,255,0.4))"]
              }}
              transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
            />

            {/* Specular Light Sparks on the Woven Star Center (Centered around X=120, Y=70) */}
            <motion.circle
              cx="124"
              cy="70"
              r="2.2"
              fill="#ffffff"
              opacity="0.9"
              animate={{
                scale: [1, 1.4, 1],
                filter: ["drop-shadow(0 0 3px rgba(255,255,255,0.5))", "drop-shadow(0 0 8px rgba(255,255,255,0.98))", "drop-shadow(0 0 3px rgba(255,255,255,0.5))"]
              }}
              transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
            />

            {/* Specular Light Glint Sweeps across the Woven Coiling Rings (Centered around X=175, Y=135) */}
            {/* Animate an ellipse sliding diagonally across the ring */}
            <motion.ellipse
              cx="175"
              cy="135"
              rx="15"
              ry="3"
              fill="#ffffff"
              opacity="0"
              style={{ transform: "rotate(30deg)" }}
              animate={{
                x: [-25, 25],
                y: [-15, 15],
                opacity: [0, 0.8, 0.8, 0]
              }}
              transition={{
                duration: 5.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.4
              }}
            />

            {/* Glistening light reflection on Woven Rose Center (Centered around X=85, Y=185) */}
            <motion.circle
              cx="85"
              cy="185"
              r="1.8"
              fill="#ffffff"
              opacity="0.8"
              animate={{
                scale: [1, 1.35, 1],
                filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.4))", "drop-shadow(0 0 6px rgba(255,255,255,0.9))", "drop-shadow(0 0 2px rgba(255,255,255,0.4))"]
              }}
              transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.2 }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
