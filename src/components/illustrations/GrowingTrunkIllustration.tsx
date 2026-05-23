"use client";

import { motion } from "framer-motion";

/**
 * GrowingTrunkIllustration renders a premium, high-fidelity stylized vector 
 * representation of a Palmyra palm tree trunk.
 * Animated using Framer Motion to draw the bark fibers and horizontal scar rings
 * in a staggered, rising sequence from the ground up, symbolizing vertical growth.
 */
export function GrowingTrunkIllustration() {
  // 12 horizontal scar rings stacked vertically from bottom (y=560) to top (y=20)
  const rings = [
    { id: "ring-1", y: 560, delay: 0.15 },
    { id: "ring-2", y: 510, delay: 0.25 },
    { id: "ring-3", y: 460, delay: 0.35 },
    { id: "ring-4", y: 410, delay: 0.45 },
    { id: "ring-5", y: 360, delay: 0.55 },
    { id: "ring-6", y: 310, delay: 0.65 },
    { id: "ring-7", y: 260, delay: 0.75 },
    { id: "ring-8", y: 210, delay: 0.85 },
    { id: "ring-9", y: 160, delay: 0.95 },
    { id: "ring-10", y: 110, delay: 1.05 },
    { id: "ring-11", y: 60, delay: 1.15 },
    { id: "ring-12", y: 20, delay: 1.25 },
  ];

  return (
    <svg
      viewBox="0 0 160 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full text-[#424b33]/35 pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Trunk Main Column Base (scales up from bottom) */}
      <motion.rect
        x="60"
        y="0"
        width="40"
        height="600"
        fill="currentColor"
        className="opacity-[0.07]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        style={{ originY: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      {/* Main Wood Fiber Lines (drawing themselves upwards) */}
      <motion.path
        d="M65 600 C68 450 63 250 66 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.path
        d="M80 600 C78 400 82 200 80 0"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.1 }}
      />
      <motion.path
        d="M95 600 C92 450 97 250 94 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Auxiliary surface cracks / bark texture lines */}
      <motion.path
        d="M72 480 C74 420 71 380 73 320"
        stroke="currentColor"
        strokeWidth="1.2"
        className="opacity-50"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.path
        d="M88 280 C86 220 89 180 87 120"
        stroke="currentColor"
        strokeWidth="1.2"
        className="opacity-50"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.7 }}
      />

      {/* Upward Growing Scar Rings (staggered rising scar-ring scar scar scarring sequence!) */}
      {rings.map((ring) => (
        <motion.path
          key={ring.id}
          d={`M60 ${ring.y} Q80 ${ring.y + 12} 100 ${ring.y}`}
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          className="opacity-80"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: ring.delay }}
        />
      ))}
      
      {/* Dynamic Gold Spores floating directly up the trunk */}
      <motion.circle cx="70" cy="520" r="3" fill="#d4a373" className="opacity-60" animate={{ y: [0, -500], opacity: [0, 0.8, 0.8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }} />
      <motion.circle cx="90" cy="420" r="4" fill="#d4a373" className="opacity-45" animate={{ y: [0, -400], opacity: [0, 0.7, 0.7, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 3 }} />
      <motion.circle cx="75" cy="320" r="2.5" fill="#d4a373" className="opacity-70" animate={{ y: [0, -300], opacity: [0, 0.9, 0.9, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 2 }} />
      <motion.circle cx="85" cy="220" r="3.5" fill="#d4a373" className="opacity-50" animate={{ y: [0, -200], opacity: [0, 0.8, 0.8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 4 }} />
    </svg>
  );
}
