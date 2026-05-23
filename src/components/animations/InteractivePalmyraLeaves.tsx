"use client";

import { motion } from "framer-motion";

/**
 * PalmyraFanLeaf represents the detailed fan-shaped palm leaf (Borassus flabellifer),
 * the state tree of Tamil Nadu, as seen on the Services page.
 */
function PalmyraFanLeaf() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className="w-full h-full drop-shadow-[0_2px_6px_rgba(66,75,51,0.08)]"
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

      {/* Main Fan Leaflet Blades */}
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

      {/* Fine inner structural midrib folds */}
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

export function InteractivePalmyraLeaves() {
  // Scatter 20 small-sized Palmyra leaves organically across the canvas margins
  const smallLeaves = [
    // --- TOP LEFT AREA ---
    { id: 1, left: "4%", top: "8%", size: 36, rotation: -20, hoverRotation: -5, opacity: 0.28, color: "text-[#424b33]" },
    { id: 2, left: "10%", top: "15%", size: 48, rotation: 35, hoverRotation: 55, opacity: 0.22, color: "text-[#424b33]" },
    { id: 3, left: "16%", top: "5%", size: 32, rotation: -45, hoverRotation: -25, opacity: 0.18, color: "text-[#424b33]" },
    { id: 4, left: "8%", top: "24%", size: 42, rotation: 15, hoverRotation: 35, opacity: 0.24, color: "text-[#424b33]" },

    // --- TOP RIGHT AREA ---
    { id: 5, left: "85%", top: "6%", size: 40, rotation: 65, hoverRotation: 85, opacity: 0.26, color: "text-[#424b33]" },
    { id: 6, left: "93%", top: "13%", size: 50, rotation: -15, hoverRotation: 5, opacity: 0.20, color: "text-[#424b33]" },
    { id: 7, left: "79%", top: "18%", size: 34, rotation: 40, hoverRotation: 60, opacity: 0.18, color: "text-[#424b33]" },
    { id: 8, left: "88%", top: "25%", size: 44, rotation: -60, hoverRotation: -40, opacity: 0.22, color: "text-[#424b33]" },

    // --- MID LEFT AREA ---
    { id: 9, left: "3%", top: "38%", size: 44, rotation: 80, hoverRotation: 100, opacity: 0.24, color: "text-[#424b33]" },
    { id: 10, left: "9%", top: "48%", size: 32, rotation: -10, hoverRotation: 10, opacity: 0.20, color: "text-[#424b33]" },
    { id: 11, left: "5%", top: "60%", size: 48, rotation: 45, hoverRotation: 65, opacity: 0.26, color: "text-[#424b33]" },

    // --- MID RIGHT AREA ---
    { id: 12, left: "92%", top: "36%", size: 42, rotation: -75, hoverRotation: -55, opacity: 0.22, color: "text-[#424b33]" },
    { id: 13, left: "87%", top: "49%", size: 36, rotation: 20, hoverRotation: 40, opacity: 0.18, color: "text-[#424b33]" },
    { id: 14, left: "94%", top: "62%", size: 46, rotation: 55, hoverRotation: 75, opacity: 0.24, color: "text-[#424b33]" },

    // --- BOTTOM LEFT AREA ---
    { id: 15, left: "6%", top: "74%", size: 38, rotation: -35, hoverRotation: -15, opacity: 0.24, color: "text-[#424b33]" },
    { id: 16, left: "13%", top: "86%", size: 52, rotation: 10, hoverRotation: 30, opacity: 0.28, color: "text-[#424b33]" },
    { id: 17, left: "18%", top: "78%", size: 32, rotation: -60, hoverRotation: -40, opacity: 0.18, color: "text-[#424b33]" },

    // --- BOTTOM RIGHT AREA ---
    { id: 18, left: "86%", top: "75%", size: 46, rotation: 40, hoverRotation: 60, opacity: 0.22, color: "text-[#424b33]" },
    { id: 19, left: "93%", top: "84%", size: 34, rotation: -15, hoverRotation: 5, opacity: 0.20, color: "text-[#424b33]" },
    { id: 20, left: "81%", top: "88%", size: 50, rotation: 90, hoverRotation: 110, opacity: 0.27, color: "text-[#424b33]" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
      {smallLeaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className={`absolute pointer-events-auto cursor-pointer ${leaf.color}`}
          style={{
            left: leaf.left,
            top: leaf.top,
            width: leaf.size,
            height: leaf.size,
            transformOrigin: "center bottom",
          }}
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: leaf.rotation,
            y: 20,
          }}
          animate={{
            opacity: leaf.opacity,
            scale: 1,
            rotate: leaf.rotation,
            y: 0,
          }}
          whileHover={{
            rotate: leaf.hoverRotation,
            scale: 1.12,
            opacity: leaf.opacity * 1.6,
            filter: "drop-shadow(0 8px 16px rgba(66,75,51,0.12))",
          }}
          transition={{
            type: "spring",
            stiffness: 140, // Highly responsive spring sway
            damping: 12,    // Quick and satisfying wobble return settle
            mass: 0.7,
          }}
        >
          <PalmyraFanLeaf />
        </motion.div>
      ))}
    </div>
  );
}
