"use client";

import { motion } from "framer-motion";

export function IceAppleSproutIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none z-10">
      {/* ================= BACKGROUND WIND-SWIRLED LEAFLETS ================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Swirling Leaflet 1 */}
        <motion.div
          className="absolute w-4.5 h-2.2 bg-gradient-to-r from-[#71b38f] to-[#424b33] rounded-[100%_0%_100%_0%] opacity-40 blur-[0.2px]"
          style={{ bottom: "50%", left: "15%", transform: "rotate(15deg)" }}
          animate={{
            y: [0, -190],
            x: [0, 45, -12, 22],
            rotate: [15, 360, 720],
            opacity: [0, 0.75, 0.75, 0]
          }}
          transition={{ duration: 8.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        {/* Swirling Leaflet 2 */}
        <motion.div
          className="absolute w-5 h-2 bg-gradient-to-r from-[#d4a373] to-[#424b33] rounded-[100%_0%_100%_0%] opacity-30"
          style={{ bottom: "40%", right: "12%", transform: "rotate(-35deg)" }}
          animate={{
            y: [0, -220],
            x: [0, -40, 18, -25],
            rotate: [-35, -240, -540],
            opacity: [0, 0.65, 0.65, 0]
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.2 }}
        />
        {/* Swirling Leaflet 3 */}
        <motion.div
          className="absolute w-3.5 h-1.8 bg-gradient-to-r from-[#71b38f] to-[#ebdcc4] rounded-[100%_0%_100%_0%] opacity-45 blur-[0.1px]"
          style={{ bottom: "60%", left: "48%", transform: "rotate(45deg)" }}
          animate={{
            y: [0, -260],
            x: [0, 30, -38, 12],
            rotate: [45, 180, 420],
            opacity: [0, 0.8, 0.8, 0]
          }}
          transition={{ duration: 7.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.0 }}
        />

        {/* Ambient Spore Particles */}
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full bg-[#d4a373] opacity-40 blur-[0.5px]"
          style={{ bottom: "35%", left: "38%" }}
          animate={{ y: [0, -130], x: [0, 12, -8, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-[#d4a373] opacity-35 blur-[0.5px]"
          style={{ bottom: "42%", left: "62%" }}
          animate={{ y: [0, -110], x: [0, -15, 10, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: 7.2, repeat: Number.POSITIVE_INFINITY, ease: "easeOut", delay: 1.5 }}
        />
      </div>

      {/* ================= HYBRID REALISTIC CENTERPIECE CONTAINER ================= */}
      {/* 1. Direct Spring Growth Entry Animation on Mount (Hero Section best practice) */}
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
        {/* We lock the container to the exact aspect ratio 654/511 of our realistic cropped centerpiece */}
        <motion.div
          className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[480px] xl:max-w-[530px] flex items-center justify-center shadow-radial-ambient"
          style={{ transformOrigin: "bottom center", aspectRatio: "654/511" }}
          animate={{
            scale: [1, 1.025, 1],
            y: [0, -4, 2, 0],
            rotate: [-0.8, 1.4, -1, 0.4, -0.8],
            filter: [
              "drop-shadow(0 15px 35px rgba(212, 163, 115, 0.10)) drop-shadow(0 8px 18px rgba(163, 227, 224, 0.12))",
              "drop-shadow(0 25px 50px rgba(212, 163, 115, 0.18)) drop-shadow(0 15px 32px rgba(163, 227, 224, 0.30))",
              "drop-shadow(0 15px 35px rgba(212, 163, 115, 0.10)) drop-shadow(0 8px 18px rgba(163, 227, 224, 0.12))"
            ]
          }}
          transition={{
            duration: 8.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          {/* Core Photorealistic Split Husk, Crystalline Seeds, & Sprout Leaflet Image Asset */}
          <img
            src="/images/ice-apple-sprout.png"
            alt="Realistic Split Palm Husk Pod holding Crystalline Translucent Ice Apples and Palmyra Sprout leaves"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none brightness-[1.01] saturate-[1.04]"
          />

          {/* ================= 3. OVERLAY ACTIVE KINETIC VECTOR LAYER ================= */}
          {/* Using coordinate viewBox matching cropped image size exactly (654 x 511) */}
          <svg
            viewBox="0 0 654 511"
            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Sliding Moisture Droplets on the Translucent Ice Apples (Center around X=427, Y=299) */}
            {/* Droplet 1 */}
            <motion.ellipse
              cx="405"
              cy="245"
              rx="2.5"
              ry="4"
              fill="#ffffff"
              opacity="0"
              animate={{
                y: [0, 50],
                opacity: [0, 0.8, 0.8, 0],
                scaleY: [0.6, 1.2, 1.0, 0.4]
              }}
              transition={{
                duration: 6.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeIn",
                delay: 1.4
              }}
            />
            {/* Droplet 2 */}
            <motion.ellipse
              cx="465"
              cy="280"
              rx="2"
              ry="3.2"
              fill="#ffffff"
              opacity="0"
              animate={{
                y: [0, 45],
                opacity: [0, 0.75, 0.75, 0],
                scaleY: [0.6, 1.2, 1.0, 0.4]
              }}
              transition={{
                duration: 7.0,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeIn",
                delay: 3.2
              }}
            />
            {/* Droplet 3 */}
            <motion.ellipse
              cx="385"
              cy="300"
              rx="3"
              ry="5.0"
              fill="#ffffff"
              opacity="0"
              animate={{
                y: [0, 55],
                opacity: [0, 0.85, 0.85, 0],
                scaleY: [0.6, 1.3, 1.0, 0.4]
              }}
              transition={{
                duration: 5.6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeIn",
                delay: 0.5
              }}
            />

            {/* Glistening Dew Droplets hanging at Leaflet Tips (Green Sprout center: X=319, Y=114) */}
            {/* Left Leaf Tip Dew */}
            <motion.circle
              cx="292"
              cy="40"
              r="3.2"
              fill="#ffffff"
              opacity="0.85"
              animate={{
                scale: [1, 1.35, 1],
                filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.4))", "drop-shadow(0 0 6px rgba(255,255,255,0.9))", "drop-shadow(0 0 2px rgba(255,255,255,0.4))"]
              }}
              transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            {/* Right Leaf Tip Dew */}
            <motion.circle
              cx="362"
              cy="60"
              r="2.8"
              fill="#ffffff"
              opacity="0.85"
              animate={{
                scale: [1, 1.35, 1],
                filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.4))", "drop-shadow(0 0 6px rgba(255,255,255,0.9))", "drop-shadow(0 0 2px rgba(255,255,255,0.4))"]
              }}
              transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.6 }}
            />
            {/* Top Leaf Tip Dew */}
            <motion.circle
              cx="315"
              cy="23"
              r="3.5"
              fill="#ffffff"
              opacity="0.9"
              animate={{
                scale: [1, 1.4, 1],
                filter: ["drop-shadow(0 0 3px rgba(255,255,255,0.5))", "drop-shadow(0 0 8px rgba(255,255,255,0.95))", "drop-shadow(0 0 3px rgba(255,255,255,0.5))"]
              }}
              transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
            />

            {/* Concentric ripples at base on wet sand (Center: X=368, Y=460) */}
            <motion.ellipse
              cx="368"
              cy="460"
              rx="60"
              ry="9.5"
              stroke="#ebdcc4"
              strokeWidth="0.8"
              opacity="0"
              animate={{
                scale: [1, 1.28, 1.5],
                opacity: [0, 0.55, 0]
              }}
              transition={{
                duration: 5.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut"
              }}
            />
            <motion.ellipse
              cx="368"
              cy="460"
              rx="38"
              ry="6"
              stroke="#d4a373"
              strokeWidth="0.6"
              opacity="0"
              animate={{
                scale: [1, 1.32, 1.62],
                opacity: [0, 0.45, 0]
              }}
              transition={{
                duration: 5.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut",
                delay: 2.75
              }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
