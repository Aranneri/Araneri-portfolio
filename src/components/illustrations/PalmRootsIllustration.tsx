"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface PalmRootsIllustrationProps {
  readonly className?: string;
  readonly thicknessScale?: number;
}

export function PalmRootsIllustration({ className, thicknessScale = 1.0 }: PalmRootsIllustrationProps) {
  // Staggered organic calligraphic drawing transitions
  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom: { delay: number; targetOpacity: number }) => ({
      pathLength: 1,
      opacity: custom.targetOpacity,
      transition: {
        pathLength: { delay: custom.delay, duration: 2.2, ease: "easeOut" },
        opacity: { delay: custom.delay, duration: 0.8 },
      },
    }),
  };

  const stroke = (w: number) => w * thicknessScale;

  return (
    <motion.svg
      viewBox="0 0 1440 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      animate={{
        y: [0, 8, -6, 0],
        rotate: [0, 0.4, -0.4, 0],
        scale: [1, 1.015, 0.985, 1],
      }}
      transition={{
        duration: 28,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {/* Center Main Spreading Taproots */}
      <motion.path
        d="M720 380 C720 280 690 190 590 140 C490 90 380 110 260 70"
        stroke="currentColor"
        strokeWidth={stroke(3.2)}
        strokeLinecap="round"
        custom={{ delay: 0.0, targetOpacity: 0.4 }}
        variants={pathVariants}
      />
      <motion.path
        d="M720 380 C720 282 691 191 591 141 C491 91 381 111 261 71"
        stroke="currentColor"
        strokeWidth={stroke(1.2)}
        strokeLinecap="round"
        custom={{ delay: 0.1, targetOpacity: 0.2 }}
        variants={pathVariants}
      />

      {/* Primary Leftward Root Branches */}
      <motion.path
        d="M670 270 C600 215 500 185 420 165"
        stroke="currentColor"
        strokeWidth={stroke(2.0)}
        strokeLinecap="round"
        custom={{ delay: 0.6, targetOpacity: 0.3 }}
        variants={pathVariants}
      />
      <motion.path
        d="M550 135 C480 108 400 78 330 58"
        stroke="currentColor"
        strokeWidth={stroke(1.6)}
        strokeLinecap="round"
        custom={{ delay: 0.8, targetOpacity: 0.25 }}
        variants={pathVariants}
      />
      <motion.path
        d="M450 95 C380 70 290 50 210 40"
        stroke="currentColor"
        strokeWidth={stroke(1.2)}
        strokeLinecap="round"
        custom={{ delay: 1.0, targetOpacity: 0.2 }}
        variants={pathVariants}
      />
      <motion.path
        d="M320 60 C250 42 170 35 100 32"
        stroke="currentColor"
        strokeWidth={stroke(1.0)}
        strokeLinecap="round"
        custom={{ delay: 1.2, targetOpacity: 0.15 }}
        variants={pathVariants}
      />

      {/* Main Left Root Branch */}
      <motion.path
        d="M680 380 C630 290 530 200 380 160 C260 120 140 160 40 120"
        stroke="currentColor"
        strokeWidth={stroke(2.8)}
        strokeLinecap="round"
        custom={{ delay: 0.3, targetOpacity: 0.35 }}
        variants={pathVariants}
      />
      <motion.path
        d="M570 250 C480 185 360 160 270 140"
        stroke="currentColor"
        strokeWidth={stroke(1.8)}
        strokeLinecap="round"
        custom={{ delay: 1.0, targetOpacity: 0.25 }}
        variants={pathVariants}
      />
      <motion.path
        d="M320 150 C220 110 120 90 20 80"
        stroke="currentColor"
        strokeWidth={stroke(1.2)}
        strokeLinecap="round"
        custom={{ delay: 1.3, targetOpacity: 0.2 }}
        variants={pathVariants}
      />

      {/* Main Right Root Branch */}
      <motion.path
        d="M760 380 C810 290 910 200 1060 160 C1180 120 1300 160 1400 120"
        stroke="currentColor"
        strokeWidth={stroke(3.0)}
        strokeLinecap="round"
        custom={{ delay: 0.4, targetOpacity: 0.35 }}
        variants={pathVariants}
      />
      <motion.path
        d="M760 380 C811 291 911 201 1061 161 C1181 121 1301 161 1401 121"
        stroke="currentColor"
        strokeWidth={stroke(1.0)}
        strokeLinecap="round"
        custom={{ delay: 0.5, targetOpacity: 0.15 }}
        variants={pathVariants}
      />
      <motion.path
        d="M870 250 C960 185 1080 160 1170 140"
        stroke="currentColor"
        strokeWidth={stroke(1.8)}
        strokeLinecap="round"
        custom={{ delay: 1.1, targetOpacity: 0.25 }}
        variants={pathVariants}
      />
      <motion.path
        d="M1120 150 C1220 110 1320 90 1420 80"
        stroke="currentColor"
        strokeWidth={stroke(1.2)}
        strokeLinecap="round"
        custom={{ delay: 1.4, targetOpacity: 0.2 }}
        variants={pathVariants}
      />

      {/* Primary Rightward Root Branches */}
      <motion.path
        d="M725 310 C770 240 850 200 930 180"
        stroke="currentColor"
        strokeWidth={stroke(2.0)}
        strokeLinecap="round"
        custom={{ delay: 0.7, targetOpacity: 0.3 }}
        variants={pathVariants}
      />
      <motion.path
        d="M820 190 C890 150 970 120 1050 100"
        stroke="currentColor"
        strokeWidth={stroke(1.5)}
        strokeLinecap="round"
        custom={{ delay: 0.9, targetOpacity: 0.25 }}
        variants={pathVariants}
      />
      <motion.path
        d="M940 125 C1020 90 1110 70 1200 60"
        stroke="currentColor"
        strokeWidth={stroke(1.2)}
        strokeLinecap="round"
        custom={{ delay: 1.1, targetOpacity: 0.2 }}
        variants={pathVariants}
      />
      <motion.path
        d="M1080 85 C1160 62 1240 50 1320 45"
        stroke="currentColor"
        strokeWidth={stroke(1.0)}
        strokeLinecap="round"
        custom={{ delay: 1.3, targetOpacity: 0.15 }}
        variants={pathVariants}
      />

      {/* Fine Interlaced Root Hairs */}
      <motion.path
        d="M600 170 C540 140 470 120 410 105"
        stroke="currentColor"
        strokeWidth={stroke(0.8)}
        strokeLinecap="round"
        custom={{ delay: 1.5, targetOpacity: 0.15 }}
        variants={pathVariants}
      />
      <motion.path
        d="M490 120 C420 95 340 85 270 80"
        stroke="currentColor"
        strokeWidth={stroke(0.8)}
        strokeLinecap="round"
        custom={{ delay: 1.6, targetOpacity: 0.15 }}
        variants={pathVariants}
      />
      <motion.path
        d="M840 170 C900 140 970 120 1030 105"
        stroke="currentColor"
        strokeWidth={stroke(0.8)}
        strokeLinecap="round"
        custom={{ delay: 1.7, targetOpacity: 0.15 }}
        variants={pathVariants}
      />
      <motion.path
        d="M950 120 C1020 95 1100 85 1170 80"
        stroke="currentColor"
        strokeWidth={stroke(0.8)}
        strokeLinecap="round"
        custom={{ delay: 1.8, targetOpacity: 0.15 }}
        variants={pathVariants}
      />
    </motion.svg>
  );
}
