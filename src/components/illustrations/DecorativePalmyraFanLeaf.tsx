"use client";

import { cn } from "@/lib/utils";

interface DecorativePalmyraFanLeafProps {
  readonly className?: string;
}

export function DecorativePalmyraFanLeaf({ className }: DecorativePalmyraFanLeafProps) {
  // Detailed palmate fan leaf vectors radiating in a gorgeous semi-circular crown
  // Hastula center located at X=200, Y=200. Petiole stem curves up from X=200, Y=400.
  const rays = [
    { angle: -105, length: 145, width: 8.5 },
    { angle: -90, length: 160, width: 9.5 },
    { angle: -75, length: 175, width: 10.5 },
    { angle: -60, length: 185, width: 11.5 },
    { angle: -45, length: 192, width: 12.0 },
    { angle: -30, length: 196, width: 12.5 },
    { angle: -15, length: 200, width: 13.0 },
    { angle: 0, length: 200, width: 13.0 },
    { angle: 15, length: 196, width: 12.5 },
    { angle: 30, length: 192, width: 12.0 },
    { angle: 45, length: 185, width: 11.5 },
    { angle: 60, length: 175, width: 10.5 },
    { angle: 75, length: 160, width: 9.5 },
    { angle: 90, length: 145, width: 8.5 },
  ];

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      {/* 1. Curved Petiole (Slender Palmyra leaf stem) */}
      <path
        d="M200 400 C206 335, 207 275, 200 200"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        className="opacity-45"
      />
      <path
        d="M199 400 C205 336, 206 276, 199 201"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="opacity-20"
      />

      {/* 2. Radiating Palmate Ray Blades */}
      <g>
        {rays.map((ray, idx) => {
          const angleRad = (ray.angle * Math.PI) / 180;
          
          // Outer tip coordinate
          const tx = 200 + ray.length * Math.cos(angleRad);
          const ty = 200 + ray.length * Math.sin(angleRad);
          
          // Mathematical bezier control points to form smooth tapered fan leaflets
          const halfWidth = ray.width / 2;
          const leftAngle = angleRad - 0.08;
          const rightAngle = angleRad + 0.08;
          
          const midLen = ray.length * 0.45;
          const lx = 200 + midLen * Math.cos(leftAngle) - halfWidth * Math.sin(angleRad);
          const ly = 200 + midLen * Math.sin(leftAngle) + halfWidth * Math.cos(angleRad);
          
          const rx = 200 + midLen * Math.cos(rightAngle) + halfWidth * Math.sin(angleRad);
          const ry = 200 + midLen * Math.sin(rightAngle) - halfWidth * Math.cos(angleRad);

          return (
            <g key={`palmate-ray-${idx}`}>
              {/* Fan Leaflet Blade */}
              <path
                d={`M200 200 Q${lx} ${ly}, ${tx} ${ty} Q${rx} ${ry}, 200 200 Z`}
                fill="currentColor"
                fillOpacity="0.08"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-45"
              />
              
              {/* Central Pleat Rib (Vein texture) */}
              <path
                d={`M200 200 Q${(lx + rx) / 2} ${(ly + ry) / 2}, ${tx} ${ty}`}
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="round"
                className="opacity-25"
              />
            </g>
          );
        })}
      </g>

      {/* 3. Solid Hastula Core (Triangular fan-blade connector at top of stem) */}
      <path
        d="M186 202 C194 194, 206 194, 214 202 C204 213, 196 213, 186 202 Z"
        fill="currentColor"
        className="opacity-60"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
