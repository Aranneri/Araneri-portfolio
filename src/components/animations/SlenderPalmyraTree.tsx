"use client";

import { useId } from "react";

interface SlenderPalmyraTreeProps {
  readonly className?: string;
  readonly swayDuration?: number;
  readonly swayDelay?: number;
}

export function SlenderPalmyraTree({
  className,
  swayDuration = 9.2,
  swayDelay = 0,
}: SlenderPalmyraTreeProps) {
  const uniqueId = useId();
  const safeId = uniqueId.replace(/[^a-zA-Z0-9]/g, "");

  // Unique organic configurations for a more mature, slightly drooping Palmyra canopy
  const leaves = [
    // Left canopy
    { angle: -125, scale: 0.82, delay: 0.4, duration: 4.1 },
    { angle: -108, scale: 0.9, delay: 1.0, duration: 3.5 },
    { angle: -90, scale: 1.02, delay: 0.1, duration: 4.2 },
    { angle: -72, scale: 1.08, delay: 1.4, duration: 3.8 },

    // Upward center
    { angle: -54, scale: 1.12, delay: 0.7, duration: 4.6 },
    { angle: -36, scale: 1.06, delay: 1.6, duration: 3.4 },
    { angle: -18, scale: 1.0, delay: 0.3, duration: 4.0 },

    // Right canopy
    { angle: 2, scale: 0.94, delay: 1.1, duration: 3.7 },
    { angle: 18, scale: 0.88, delay: 1.9, duration: 4.5 },
    { angle: 34, scale: 0.8, delay: 0.5, duration: 3.9 },

    // Drooping lower leaves
    { angle: -142, scale: 0.76, delay: 1.6, duration: 4.7 },
    { angle: 50, scale: 0.74, delay: 0.9, duration: 4.1 },
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
          {/* Rich antique-charcoal gradient for curved trunk bark depth */}
          <linearGradient id={`trunk-grad-${uniqueId}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#020f06" stopOpacity="1" />
            <stop offset="52%" stopColor="#08301b" stopOpacity="1" />
            <stop offset="100%" stopColor="#01140a" stopOpacity="1" />
          </linearGradient>
        </defs>

        <style>
          {`
            @keyframes slenderTreeSway-${safeId} {
              0% { transform: rotate(-0.8deg) skewY(-0.1deg); }
              100% { transform: rotate(1.2deg) skewY(0.1deg); }
            }

            @keyframes slenderCrownSway-${safeId} {
              0% { transform: rotate(-2.2deg) translate(-3px, 1px); }
              100% { transform: rotate(2.8deg) translate(4px, -2px); }
            }

            @keyframes slenderLeafSway-${safeId} {
              0% { transform: rotate(-4.8deg) skewX(-2.5deg); }
              100% { transform: rotate(5.8deg) skewX(4deg); }
            }

            .slender-tree-group-${safeId} {
              transform-origin: 183px 880px;
              animation: slenderTreeSway-${safeId} ${swayDuration}s ease-in-out infinite alternate;
              animation-delay: ${swayDelay}s;
            }

            .slender-crown-group-${safeId} {
              transform-origin: 268px 210px;
              animation: slenderCrownSway-${safeId} ${swayDuration * 0.65}s ease-in-out infinite alternate;
              animation-delay: ${swayDelay * 0.4}s;
            }
          `}
        </style>

        {/* Entire Tree Group */}
        <g className={`slender-tree-group-${safeId}`}>
          {/* Curved Trunk Section */}
          <g>
            {/* Beautiful organic curved Palmyra trunk (curving rightwards up to 268, 210) */}
            <path
              d="M 170 880 C 205 660, 250 420, 260 210 L 276 210 C 266 420, 221 660, 186 880 Z"
              fill={`url(#trunk-grad-${uniqueId})`}
            />

            {/* Characteristic Palmyra bark ridges mapped mathematically along the organic Bezier curve */}
            {[
              230, 260, 290, 320, 350, 380, 410, 440, 470, 500, 530, 560, 590, 620, 650, 680, 710,
              740, 770, 800, 830, 860,
            ].map((y) => {
              // Interpolate center along Bezier curve: P0=(178, 880), P1=(205, 660), P2=(250, 420), P3=(268, 210)
              const t = (y - 210) / (880 - 210); // 0 at top, 1 at bottom
              const mt = 1 - t;
              const center = mt * mt * mt * 268 + 3 * mt * mt * t * 250 + 3 * mt * t * t * 205 + t * t * t * 178;
              const width = 16 + t * (20 - 16);
              const x1 = center - width / 2 - 2;
              const x2 = center + width / 2 + 2;

              return (
                <path
                  key={y}
                  d={`M ${x1} ${y} Q ${center} ${y + 4.8} ${x2} ${y}`}
                  stroke="#010704"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  opacity="0.9"
                />
              );
            })}
          </g>

          {/* Majestic Crown Group (Centered at 268, 210) */}
          <g className={`slender-crown-group-${safeId}`}>
            {/* Deep background layered leaves for parallax density */}
            <g opacity="0.65">
              {leaves.map((leaf, idx) => (
                <SlenderPalmyraLeaf
                  key={`bg-leaf-${idx}`}
                  angle={leaf.angle - 8}
                  scale={leaf.scale * 0.84}
                  delay={leaf.delay + 0.3}
                  duration={leaf.duration * 1.12}
                  color="#02180c"
                  petioleColor="#010603"
                  safeId={safeId}
                />
              ))}
            </g>

            {/* Foreground main leaves */}
            <g>
              {leaves.map((leaf, idx) => (
                <SlenderPalmyraLeaf
                  key={`fg-leaf-${idx}`}
                  angle={leaf.angle}
                  scale={leaf.scale}
                  delay={leaf.delay}
                  duration={leaf.duration}
                  color="#08381f"
                  petioleColor="#02140a"
                  safeId={safeId}
                />
              ))}
            </g>

            {/* Heart of the crown (centered at 268, 210) */}
            <circle cx="268" cy="210" r="18" fill="#010c05" />
            <path d="M 248 221 Q 268 236 288 221 Q 268 203 248 221" fill="#010c05" />
          </g>
        </g>
      </svg>
    </div>
  );
}

interface SlenderPalmyraLeafProps {
  readonly angle: number;
  readonly scale?: number;
  readonly delay?: number;
  readonly duration?: number;
  readonly color?: string;
  readonly petioleColor?: string;
  readonly safeId: string;
}

function SlenderPalmyraLeaf({
  angle,
  scale = 1,
  delay = 0,
  duration = 4,
  color = "#08381f",
  petioleColor = "#02140a",
  safeId,
}: SlenderPalmyraLeafProps) {
  return (
    <g transform={`translate(268, 210) rotate(${angle}) scale(${scale})`}>
      <g
        className="slender-leaf"
        style={{
          transformOrigin: "0px 0px",
          animation: `slenderLeafSway-${safeId} ${duration}s ease-in-out ${delay}s infinite alternate`,
        }}
      >
        {/* Leaf Stalk (Petiole) */}
        <path
          d="M 0 0 C -2 -30, -3.2 -60, 0 -125"
          stroke={petioleColor}
          strokeWidth="3.4"
          strokeLinecap="round"
        />

        {/* Pleated palmate rays (radiating segments of the fan blade with detailed leaf vein textures) */}
        {[-30, -20, -10, -2, 6, 14, 22, 32].map((rayAngle) => (
          <path
            key={rayAngle}
            transform={`translate(0, -125) rotate(${rayAngle})`}
            d="M 0 0 L -5 -80 C -2 -86, 2 -86, 5 -80 Z"
            fill={color}
            stroke="#0a4d25"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* Solid leaf-base connector (Hastula region) */}
        <path d="M -12 -125 Q 0 -134 12 -125 L 0 -110 Z" fill={petioleColor} />
      </g>
    </g>
  );
}
