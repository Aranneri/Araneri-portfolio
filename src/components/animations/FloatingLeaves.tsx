"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * PalmyraFanLeaf component renders a high-fidelity vector representation
 * of the distinctive Palmyra fan-shaped palm leaf (Borassus flabellifer).
 * Features a central petiole stem, a triangular hastula junction collar, 
 * and 15 radiating double-sided tapering leaflet blades with midrib folds, 
 * matching the user's exact uploaded leaf photograph.
 */
function PalmyraFanLeaf() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className="w-full h-full drop-shadow-[0_4px_10px_rgba(66,75,51,0.12)]"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Petiole Stem */}
      <path
        d="M50 95 C50 82 50 72 50 65"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Triangular Hastula Base */}
      <polygon
        points="46,65 50,60 54,65"
        fill="currentColor"
        className="opacity-90"
      />

      {/* Main Fan Leaflet Blades (diamond shapes tapering outward) */}
      <polygon points="50,65 47,68 18,70 51,62" />
      <polygon points="50,65 46,67 14,60 50,62" />
      <polygon points="50,65 46,65 12,49 50,61" />
      <polygon points="50,65 46,64 14,37 49,60" />
      <polygon points="50,65 46,62 20,25 49,59" />
      <polygon points="50,65 47,61 30,16 50,59" />
      <polygon points="50,65 48,60 42,9 50,59" />
      <polygon points="50,65 48,59 50,6 52,59" />
      <polygon points="50,65 50,59 58,9 52,60" />
      <polygon points="50,65 50,59 70,16 53,61" />
      <polygon points="50,65 51,59 80,25 54,62" />
      <polygon points="50,65 51,60 86,37 54,64" />
      <polygon points="50,65 50,61 88,49 54,65" />
      <polygon points="50,65 50,62 86,60 54,67" />
      <polygon points="50,65 49,62 82,70 53,68" />

      {/* Fine inner structural midrib fold accents */}
      <line x1="50" y1="65" x2="18" y2="70" stroke="currentColor" strokeWidth="1.2" className="opacity-45" />
      <line x1="50" y1="65" x2="14" y2="60" stroke="currentColor" strokeWidth="1.2" className="opacity-45" />
      <line x1="50" y1="65" x2="12" y2="49" stroke="currentColor" strokeWidth="1.2" className="opacity-45" />
      <line x1="50" y1="65" x2="14" y2="37" stroke="currentColor" strokeWidth="1.2" className="opacity-45" />
      <line x1="50" y1="65" x2="20" y2="25" stroke="currentColor" strokeWidth="1.2" className="opacity-45" />
      <line x1="50" y1="65" x2="30" y2="16" stroke="currentColor" strokeWidth="1.2" className="opacity-45" />
      <line x1="50" y1="65" x2="42" y2="9"  stroke="currentColor" strokeWidth="1.2" className="opacity-45" />
      <line x1="50" y1="65" x2="50" y2="6"  stroke="currentColor" strokeWidth="1.2" className="opacity-45" />
      <line x1="50" y1="65" x2="58" y2="9"  stroke="currentColor" strokeWidth="1.2" className="opacity-45" />
      <line x1="50" y1="65" x2="70" y2="16" stroke="currentColor" strokeWidth="1.2" className="opacity-45" />
      <line x1="50" y1="65" x2="80" y2="25" stroke="currentColor" strokeWidth="1.2" className="opacity-45" />
      <line x1="50" y1="65" x2="86" y2="37" stroke="currentColor" strokeWidth="1.2" className="opacity-45" />
      <line x1="50" y1="65" x2="88" y2="49" stroke="currentColor" strokeWidth="1.2" className="opacity-45" />
      <line x1="50" y1="65" x2="86" y2="60" stroke="currentColor" strokeWidth="1.2" className="opacity-45" />
      <line x1="50" y1="65" x2="82" y2="70" stroke="currentColor" strokeWidth="1.2" className="opacity-45" />
    </svg>
  );
}

// Staggered parameters for beautiful drifting falling Palmyra fan leaves
// Constrained between 0% (Hero section) and 96% (ends completely before footer)
const leaves = [
  // --- Upper Zone (Hero Section: 0% to 32% of page height) ---
  { id: "palmyra-leaf-1", startY: 0, endY: 32, startX: 12, drift: 18, size: 48, duration: 14, delay: 0, startRotate: 30, spinAmount: 180, color: "text-[#424b33]/22" },
  { id: "palmyra-leaf-2", startY: 0, endY: 34, startX: 68, drift: -20, size: 62, duration: 18, delay: 4, startRotate: -45, spinAmount: -270, color: "text-[#424b33]/15" },
  
  // --- Mid-Upper Zone (Transition area: 24% to 56% of page height) ---
  { id: "palmyra-leaf-3", startY: 24, endY: 56, startX: 35, drift: 22, size: 54, duration: 16, delay: 2, startRotate: 60, spinAmount: 220, color: "text-[#424b33]/18" },
  { id: "palmyra-leaf-4", startY: 20, endY: 52, startX: 82, drift: -18, size: 68, duration: 20, delay: 7, startRotate: -15, spinAmount: -180, color: "text-[#424b33]/13" },

  // --- Mid-Lower Zone (Grid area: 48% to 78% of page height) ---
  { id: "palmyra-leaf-5", startY: 48, endY: 78, startX: 8, drift: 24, size: 58, duration: 17, delay: 3, startRotate: -80, spinAmount: 360, color: "text-[#424b33]/18" },
  { id: "palmyra-leaf-6", startY: 44, endY: 76, startX: 58, drift: -16, size: 50, duration: 15, delay: 10, startRotate: 90, spinAmount: -200, color: "text-[#424b33]/20" },

  // --- Lower Zone (Pre-footer area: 70% to 96% of page height - stops before footer) ---
  { id: "palmyra-leaf-7", startY: 70, endY: 96, startX: 25, drift: 18, size: 66, duration: 19, delay: 5, startRotate: -30, spinAmount: 180, color: "text-[#424b33]/16" },
  { id: "palmyra-leaf-8", startY: 66, endY: 95, startX: 78, drift: -24, size: 44, duration: 13, delay: 12, startRotate: 45, spinAmount: -360, color: "text-[#424b33]/22" },
] as const;

export function FloatingLeaves() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return null; // Suppress falling animations entirely under reduced motion preferences
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden select-none">
      {leaves.map((leaf) => {
        const heightPercent = leaf.endY - leaf.startY;
        
        return (
          <div
            key={leaf.id}
            className="absolute pointer-events-none"
            style={{
              left: `${leaf.startX}%`,
              top: `${leaf.startY}%`,
              width: leaf.size,
              height: `${heightPercent}%`,
            }}
          >
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                y: ["-15%", "115%"], // Moves across the specific vertical segment height
                x: [
                  "0px",
                  `${leaf.drift * 0.35}vw`,
                  `${leaf.drift * 0.7}vw`,
                  `${leaf.drift}vw`,
                ],
                opacity: [0, 0.42, 0.42, 0], // Fades in at the top and out at the bottom of the segment
              }}
              transition={{
                duration: leaf.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: leaf.delay,
              }}
            >
              {/* Actual leaf asset sways, spins and sits within the moving container */}
              <motion.div
                className={`absolute top-0 left-0 ${leaf.color}`}
                style={{
                  width: leaf.size,
                  height: leaf.size,
                }}
                animate={{
                  rotate: [leaf.startRotate, leaf.startRotate + leaf.spinAmount],
                }}
                transition={{
                  duration: leaf.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: leaf.delay,
                }}
              >
                <PalmyraFanLeaf />
              </motion.div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
