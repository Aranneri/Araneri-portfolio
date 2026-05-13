"use client";

import { motion, useReducedMotion } from "framer-motion";

const leaves = [
  { id: "leaf-1", top: "10%", left: "5%", size: "120px" },
  { id: "leaf-2", top: "40%", left: "85%", size: "160px" },
  { id: "leaf-3", top: "70%", left: "15%", size: "140px" },
] as const;

export function FloatingLeaves() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {leaves.map((leaf, index) => (
        <motion.div
          key={leaf.id}
          className="absolute rounded-full bg-emerald-500/10 blur-2xl"
          style={{ top: leaf.top, left: leaf.left, width: leaf.size, height: leaf.size }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.4 }
              : {
                  y: [0, -20, 0],
                  x: [0, 12, 0],
                  opacity: [0.4, 0.6, 0.4],
                }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 12 + index * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}
