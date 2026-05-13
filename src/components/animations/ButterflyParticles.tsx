"use client";

import { motion, useReducedMotion } from "framer-motion";

const butterflies = [
  { id: "butterfly-1", top: "15%", left: "70%" },
  { id: "butterfly-2", top: "55%", left: "30%" },
  { id: "butterfly-3", top: "75%", left: "80%" },
] as const;

export function ButterflyParticles() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0">
      {butterflies.map((butterfly, index) => (
        <motion.div
          key={butterfly.id}
          className="absolute h-3 w-3 rounded-full bg-butterfly-500/50"
          style={{ top: butterfly.top, left: butterfly.left }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.4 }
              : {
                  y: [0, -18, 0],
                  x: [0, 10, 0],
                  opacity: [0.4, 0.9, 0.4],
                }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 8 + index * 1.6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}
