"use client";

import { motion } from "framer-motion";

export function InteractiveTrunkGlisten() {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none z-10">
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
        <motion.div
          className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px] xl:max-w-[520px] flex items-center justify-center"
          style={{
            transformOrigin: "bottom center",
            aspectRatio: "9/11", // Matching the vertical portrait aspect ratio of the majestic tree trunk
            maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 78%)",
            WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 78%)",
          }}
          animate={{
            scale: [1, 1.02, 1],
            y: [0, -3, 2, 0],
            rotate: [-0.4, 0.8, -0.6, 0.3, -0.4],
            filter: [
              "drop-shadow(0 15px 35px rgba(66, 75, 51, 0.06)) drop-shadow(0 8px 18px rgba(212, 163, 115, 0.08))",
              "drop-shadow(0 25px 45px rgba(66, 75, 51, 0.12)) drop-shadow(0 15px 30px rgba(212, 163, 115, 0.18))",
              "drop-shadow(0 15px 35px rgba(66, 75, 51, 0.06)) drop-shadow(0 8px 18px rgba(212, 163, 115, 0.08))"
            ]
          }}
          transition={{
            duration: 9.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          {/* Detailed Palmyra trunk image with organic feathered edges */}
          <img
            src="/images/palm-trunk-about.png"
            alt="Majestic Palmyra palm tree trunk showing textured scar rings under golden sunbeams"
            className="w-full h-full object-cover select-none pointer-events-none brightness-[1.01] saturate-[1.02]"
          />

          {/* ================= 3. OVERLAY ACTIVE KINETIC VECTOR LAYER ================= */}
          {/* SVG coordinate viewBox for specular twinkles on the sunlit bark ridges */}
          <svg
            viewBox="0 0 900 1100"
            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Luminous Specular sparkles twinkling on the sunlit bark scales (Around trunk center X=500..580, Y=350..650) */}
            <motion.circle
              cx="540"
              cy="480"
              r="8"
              fill="#ffffff"
              opacity="0.85"
              animate={{
                scale: [1, 1.35, 1],
                filter: ["drop-shadow(0 0 3px rgba(255,255,255,0.4))", "drop-shadow(0 0 12px rgba(255,255,255,0.9))", "drop-shadow(0 0 3px rgba(255,255,255,0.4))"]
              }}
              transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.circle
              cx="490"
              cy="580"
              r="6"
              fill="#ffffff"
              opacity="0.8"
              animate={{
                scale: [1, 1.3, 1],
                filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.3))", "drop-shadow(0 0 8px rgba(255,255,255,0.85))", "drop-shadow(0 0 2px rgba(255,255,255,0.3))"]
              }}
              transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
            />
            <motion.circle
              cx="580"
              cy="380"
              r="7"
              fill="#ffffff"
              opacity="0.8"
              animate={{
                scale: [1, 1.4, 1],
                filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.3))", "drop-shadow(0 0 10px rgba(255,255,255,0.9))", "drop-shadow(0 0 2px rgba(255,255,255,0.3))"]
              }}
              transition={{ duration: 3.0, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
