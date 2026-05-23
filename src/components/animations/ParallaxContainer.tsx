"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface ParallaxContainerProps {
  readonly children: ReactNode;
  readonly offset?: number;
  readonly className?: string;
}

export function ParallaxContainer({ children, offset = 40, className }: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y: prefersReducedMotion ? 0 : y }} className={className}>
      {children}
    </motion.div>
  );
}
