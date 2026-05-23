"use client";

import { useId } from "react";

interface MajesticPalmyraTreeProps {
  readonly className?: string;
  readonly swayDuration?: number;
  readonly swayDelay?: number;
}

export function MajesticPalmyraTree({
  className,
  swayDuration = 8.5,
  swayDelay = 0,
}: MajesticPalmyraTreeProps) {
  const uniqueId = useId();
  const safeId = uniqueId.replace(/[^a-zA-Z0-9]/g, "");

  // Organic configurations for Palmyra fan leaves radiating out of the crown
  const leaves = [
    // Top-left canopy
    { angle: -130, scale: 0.88, delay: 0.2, duration: 4.3 },
    { angle: -112, scale: 0.94, delay: 0.8, duration: 3.7 },
    { angle: -96, scale: 1.05, delay: 0.0, duration: 4.5 },
    { angle: -80, scale: 1.12, delay: 1.2, duration: 3.9 },

    // Centered upward canopy
    { angle: -64, scale: 1.16, delay: 0.5, duration: 4.8 },
    { angle: -48, scale: 1.1, delay: 1.5, duration: 3.6 },
    { angle: -32, scale: 1.06, delay: 0.1, duration: 4.4 },

    // Top-right canopy
    { angle: -16, scale: 0.98, delay: 0.9, duration: 3.8 },
    { angle: 0, scale: 0.92, delay: 1.7, duration: 4.6 },
    { angle: 14, scale: 0.86, delay: 0.3, duration: 4.0 },

    // Stately hanging lower fan leaves
    { angle: -148, scale: 0.82, delay: 1.4, duration: 4.9 },
    { angle: 28, scale: 0.8, delay: 0.7, duration: 4.2 },
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
          {/* Rich charcoal-emerald gradient for biological trunk depth */}
          <linearGradient id={`trunk-grad-${uniqueId}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#010e06" stopOpacity="1" />
            <stop offset="48%" stopColor="#09381e" stopOpacity="1" />
            <stop offset="100%" stopColor="#031b0e" stopOpacity="1" />
          </linearGradient>
        </defs>

        <style>
          {`
            @keyframes majesticTreeSway-${safeId} {
              0% { transform: rotate(-0.6deg); }
              100% { transform: rotate(0.9deg); }
            }

            @keyframes majesticCrownSway-${safeId} {
              0% { transform: rotate(-1.8deg) translate(-2px, 1px); }
              100% { transform: rotate(2.4deg) translate(3px, -1px); }
            }

            @keyframes majesticLeafSway {
              0% { transform: rotate(-4.2deg) skewX(-2deg); }
              100% { transform: rotate(5.4deg) skewX(3.5deg); }
            }

            .majestic-tree-group-${safeId} {
              transform-origin: 200px 880px;
              animation: majesticTreeSway-${safeId} ${swayDuration}s ease-in-out infinite alternate;
              animation-delay: ${swayDelay}s;
            }

            .majestic-crown-group-${safeId} {
              transform-origin: 215px 230px;
              animation: majesticCrownSway-${safeId} ${swayDuration * 0.68}s ease-in-out infinite alternate;
              animation-delay: ${swayDelay * 0.5}s;
            }
          `}
        </style>

        {/* Entire Tree Group */}
        <g className={`majestic-tree-group-${safeId}`}>
          {/* Trunk Section */}
          <g>
            {/* Slender, organically tapered Palmyra trunk */}
            <path
              d="M 182 880 C 192 680, 206 460, 215 230 L 233 230 C 224 460, 212 680, 202 880 Z"
              fill={`url(#trunk-grad-${uniqueId})`}
            />

            {/* Characteristic Palmyra bark ridges (horizontal scales/leaf-scars) */}
            {[
              260, 290, 320, 350, 380, 410, 440, 470, 500, 530, 560, 590, 620, 650, 680, 710, 740,
              770, 800, 830, 860,
            ].map((y) => {
              // Calculate width of trunk scar at height y
              const progress = (y - 230) / (880 - 230); // 0 at top, 1 at bottom
              const center = 215 + progress * (192 - 215);
              const width = 18 + progress * (20 - 18);
              const x1 = center - width / 2 - 2.5;
              const x2 = center + width / 2 + 2.5;

              return (
                <path
                  key={y}
                  d={`M ${x1} ${y} Q ${center} ${y + 5.2} ${x2} ${y}`}
                  stroke="#010905"
                  strokeWidth="3.8"
                  strokeLinecap="round"
                  opacity="0.94"
                />
              );
            })}
          </g>

          {/* Majestic Crown Group */}
          <g className={`majestic-crown-group-${safeId}`}>
            {/* Deep background layered leaves for parallax density */}
            <g opacity="0.65">
              {leaves.map((leaf, idx) => (
                <PalmyraLeaf
                  key={`bg-leaf-${idx}`}
                  angle={leaf.angle - 9}
                  scale={leaf.scale * 0.84}
                  delay={leaf.delay + 0.4}
                  duration={leaf.duration * 1.15}
                  color="#031b0e"
                  petioleColor="#010804"
                />
              ))}
            </g>

            {/* Foreground main leaves */}
            <g>
              {leaves.map((leaf, idx) => (
                <PalmyraLeaf
                  key={`fg-leaf-${idx}`}
                  angle={leaf.angle}
                  scale={leaf.scale}
                  delay={leaf.delay}
                  duration={leaf.duration}
                  color="#08381f"
                  petioleColor="#02140a"
                />
              ))}
            </g>

            {/* Heart of the crown (hastula core and organic center mass) */}
            <circle cx="215" cy="230" r="19" fill="#010d06" />
            <path d="M 194 242 Q 215 258 236 242 Q 215 222 194 242" fill="#010d06" />
          </g>
        </g>
      </svg>
    </div>
  );
}

interface PalmyraLeafProps {
  readonly angle: number;
  readonly scale?: number;
  readonly delay?: number;
  readonly duration?: number;
  readonly color?: string;
  readonly petioleColor?: string;
}

function PalmyraLeaf({
  angle,
  scale = 1,
  delay = 0,
  duration = 4,
  color = "#08381f",
  petioleColor = "#02140a",
}: PalmyraLeafProps) {
  return (
    <g transform={`translate(215, 230) rotate(${angle}) scale(${scale})`}>
      <g
        className="majestic-leaf"
        style={{
          transformOrigin: "0px 0px",
          animation: `majesticLeafSway ${duration}s ease-in-out ${delay}s infinite alternate`,
        }}
      >
        {/* Leaf Stalk (Petiole) */}
        <path
          d="M 0 0 C -2 -32, -3.5 -64, 0 -134"
          stroke={petioleColor}
          strokeWidth="3.8"
          strokeLinecap="round"
        />

        {/* Pleated palmate rays (radiating segments of the fan blade with detailed leaf vein textures) */}
        {[-32, -22, -12, -3, 6, 15, 24, 34].map((rayAngle) => (
          <path
            key={rayAngle}
            transform={`translate(0, -134) rotate(${rayAngle})`}
            d="M 0 0 L -6 -88 C -2.5 -95, 2.5 -95, 6 -88 Z"
            fill={color}
            stroke="#0a4d25"
            strokeWidth="0.85"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* Solid leaf-base connector (Hastula region) */}
        <path d="M -13 -134 Q 0 -144 13 -134 L 0 -118 Z" fill={petioleColor} />
      </g>
    </g>
  );
}
