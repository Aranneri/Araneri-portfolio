"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionWrapperProps {
  readonly children: ReactNode;
}

export function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={prefersReducedMotion ? false : { opacity: 0, filter: "blur(6px)" }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, filter: "blur(0px)" }}
        exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, filter: "blur(6px)" }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
