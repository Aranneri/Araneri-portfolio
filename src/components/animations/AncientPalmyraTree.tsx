"use client";

import { useId } from "react";

interface AncientPalmyraTreeProps {
  readonly className?: string;
  readonly swayDuration?: number;
  readonly swayDelay?: number;
}

export function AncientPalmyraTree({
  className,
  swayDuration = 11.2,
  swayDelay = 0,
}: AncientPalmyraTreeProps) {
  const uniqueId = useId();
  const safeId = uniqueId.replace(/[^a-zA-Z0-9]/g, "");

  // Unique organic configurations for an ancient, mature Palmyra canopy
  const greenLeaves = [
    // Left canopy
    { angle: -120, scale: 0.85, delay: 0.3, duration: 4.5 },
    { angle: -105, scale: 0.92, delay: 0.9, duration: 3.8 },
    { angle: -88, scale: 1.04, delay: 0.0, duration: 4.7 },
    { angle: -70, scale: 1.10, delay: 1.3, duration: 4.1 },

    // Upward center
    { angle: -52, scale: 1.15, delay: 0.6, duration: 4.9 },
    { angle: -34, scale: 1.08, delay: 1.7, duration: 3.5 },
    { angle: -16, scale: 1.02, delay: 0.2, duration: 4.3 },

    // Right canopy
    { angle: 4, scale: 0.96, delay: 1.0, duration: 3.9 },
    { angle: 22, scale: 0.90, delay: 1.8, duration: 4.6 },
    { angle: 38, scale: 0.82, delay: 0.4, duration: 4.0 },

    // High upward crown spikes
    { angle: -138, scale: 0.78, delay: 1.5, duration: 5.0 },
    { angle: 52, scale: 0.76, delay: 0.8, duration: 4.2 },
  ];

  // Old, dried, drooping brown leaves characteristic of very old Palmyra trees
  const driedLeaves = [
    { angle: -162, scale: 0.74, delay: 0.7, duration: 5.2 },
    { angle: -150, scale: 0.78, delay: 1.4, duration: 4.6 },
    { angle: 68, scale: 0.76, delay: 1.1, duration: 4.8 },
    { angle: 82, scale: 0.72, delay: 0.3, duration: 4.4 },
  ];

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 600 900"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Deep ancient moss-charcoal gradient for S-curved trunk depth */}
          <linearGradient id={`trunk-grad-${uniqueId}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#010a04" stopOpacity="1" />
            <stop offset="50%" stopColor="#062816" stopOpacity="1" />
            <stop offset="100%" stopColor="#010f07" stopOpacity="1" />
          </linearGradient>

          {/* Dried leaf golden-brown gradient */}
          <linearGradient id={`dry-leaf-grad-${uniqueId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a3119" stopOpacity="1" />
            <stop offset="100%" stopColor="#241407" stopOpacity="1" />
          </linearGradient>
        </defs>

        <style>
          {`
            @keyframes ancientTreeSway-${safeId} {
              0% { transform: rotate(-0.5deg) skewX(-0.1deg); }
              100% { transform: rotate(0.8deg) skewX(0.1deg); }
            }

            @keyframes ancientCrownSway-${safeId} {
              0% { transform: rotate(-1.5deg) translate(-2px, 1px); }
              100% { transform: rotate(2.0deg) translate(3px, -1px); }
            }

            @keyframes ancientLeafSway-${safeId} {
              0% { transform: rotate(-3.5deg) skewX(-1.5deg); }
              100% { transform: rotate(4.5deg) skewX(2.5deg); }
            }

            .ancient-tree-group-${safeId} {
              transform-origin: 190px 880px;
              animation: ancientTreeSway-${safeId} ${swayDuration}s ease-in-out infinite alternate;
              animation-delay: ${swayDelay}s;
            }

            .ancient-crown-group-${safeId} {
              transform-origin: 230px 220px;
              animation: ancientCrownSway-${safeId} ${swayDuration * 0.72}s ease-in-out infinite alternate;
              animation-delay: ${swayDelay * 0.45}s;
            }
          `}
        </style>

        {/* Entire Tree Group */}
        <g className={`ancient-tree-group-${safeId}`}>
          {/* Double-Curved S-Trunk Section */}
          <g>
            {/* Elegant double curved Palmyra trunk (S-curve curving left then right up to 230, 220) */}
            <path
              d="M 179 880 C 131 640, 281 440, 222 220 L 238 220 C 299 440, 149 640, 201 880 Z"
              fill={`url(#trunk-grad-${uniqueId})`}
            />

            {/* Characteristic Palmyra bark ridges mapped mathematically along the S-curve */}
            {[
              240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570, 600, 630, 660, 690, 720,
              750, 780, 810, 840, 870,
            ].map((y) => {
              // Interpolate center along S-Bezier curve: P0=(230, 220), P1=(290, 440), P2=(140, 640), P3=(190, 880)
              const t = (y - 220) / (880 - 220); // 0 at top, 1 at bottom
              const mt = 1 - t;
              const center =
                mt * mt * mt * 230 +
                3 * mt * mt * t * 290 +
                3 * mt * t * t * 140 +
                t * t * t * 190;
              const width = 16 + t * 6;
              const x1 = center - width / 2 - 2;
              const x2 = center + width / 2 + 2;

              return (
                <path
                  key={y}
                  d={`M ${x1} ${y} Q ${center} ${y + 5.0} ${x2} ${y}`}
                  stroke="#010603"
                  strokeWidth="3.6"
                  strokeLinecap="round"
                  opacity="0.92"
                />
              );
            })}
          </g>

          {/* Majestic Crown Group (Centered at 230, 220) */}
          <g className={`ancient-crown-group-${safeId}`}>
            {/* 1. Deep background layered green leaves */}
            <g opacity="0.60">
              {greenLeaves.map((leaf, idx) => (
                <AncientPalmyraLeaf
                  key={`bg-leaf-${idx}`}
                  angle={leaf.angle - 8}
                  scale={leaf.scale * 0.82}
                  delay={leaf.delay + 0.3}
                  duration={leaf.duration * 1.15}
                  color="#02140a"
                  petioleColor="#010502"
                  safeId={safeId}
                />
              ))}
            </g>

            {/* 2. Old, dried, hanging brown fronds underneath the main canopy */}
            <g opacity="0.80">
              {driedLeaves.map((leaf, idx) => (
                <AncientPalmyraLeaf
                  key={`dry-leaf-${idx}`}
                  angle={leaf.angle}
                  scale={leaf.scale * 0.95}
                  delay={leaf.delay}
                  duration={leaf.duration}
                  color={`url(#dry-leaf-grad-${uniqueId})`}
                  petioleColor="#1f1208"
                  safeId={safeId}
                  isDried={true}
                />
              ))}
            </g>

            {/* 3. Foreground main green leaves */}
            <g>
              {greenLeaves.map((leaf, idx) => (
                <AncientPalmyraLeaf
                  key={`fg-leaf-${idx}`}
                  angle={leaf.angle}
                  scale={leaf.scale}
                  delay={leaf.delay}
                  duration={leaf.duration}
                  color="#06321b"
                  petioleColor="#011208"
                  safeId={safeId}
                />
              ))}
            </g>

            {/* Heart of the crown (centered at 230, 220) */}
            <circle cx="230" cy="220" r="18" fill="#010804" />
            <path d="M 210 231 Q 230 246 250 231 Q 230 213 210 231" fill="#010804" />
          </g>
        </g>
      </svg>
    </div>
  );
}

interface AncientPalmyraLeafProps {
  readonly angle: number;
  readonly scale?: number;
  readonly delay?: number;
  readonly duration?: number;
  readonly color?: string;
  readonly petioleColor?: string;
  readonly safeId: string;
  readonly isDried?: boolean;
}

function AncientPalmyraLeaf({
  angle,
  scale = 1,
  delay = 0,
  duration = 4,
  color = "#06321b",
  petioleColor = "#011208",
  safeId,
  isDried = false,
}: AncientPalmyraLeafProps) {
  // Dried leaves droop more vertically and are slightly thinner
  const length = isDried ? 115 : 130;
  const rayScale = isDried ? 0.9 : 1.0;

  return (
    <g transform={`translate(230, 220) rotate(${angle}) scale(${scale})`}>
      <g
        className="ancient-leaf"
        style={{
          transformOrigin: "0px 0px",
          animation: `ancientLeafSway-${safeId} ${duration}s ease-in-out ${delay}s infinite alternate`,
        }}
      >
        {/* Leaf Stalk (Petiole) */}
        <path
          d={`M 0 0 C -2 -30, -3.0 -60, 0 -${length}`}
          stroke={petioleColor}
          strokeWidth={isDried ? "2.8" : "3.5"}
          strokeLinecap="round"
        />

        {/* Pleated palmate rays (radiating segments of the fan blade) */}
        {[-28, -18, -9, 0, 8, 16, 24, 32].map((rayAngle) => (
          <path
            key={rayAngle}
            transform={`translate(0, -${length}) rotate(${rayAngle})`}
            d={`M 0 0 L -5 -${Math.round(82 * rayScale)} C -2 -${Math.round(88 * rayScale)}, 2 -${Math.round(88 * rayScale)}, 5 -${Math.round(82 * rayScale)} Z`}
            fill={color}
            stroke={isDried ? "#332010" : "#084020"}
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* Solid leaf-base connector (Hastula region) */}
        <path d={`M -11 -${length} Q 0 -${length + 9} 11 -${length} L 0 -${length - 12} Z`} fill={petioleColor} />
      </g>
    </g>
  );
}
