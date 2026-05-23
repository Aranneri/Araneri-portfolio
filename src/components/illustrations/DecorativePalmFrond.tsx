"use client";

import { cn } from "@/lib/utils";

interface DecorativePalmFrondProps {
  readonly className?: string;
}

export function DecorativePalmFrond({ className }: DecorativePalmFrondProps) {
  return (
    <svg
      viewBox="0 0 400 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none animate-gentle-sway", className)}
      aria-hidden="true"
    >
      {/* Dynamic Hand-Sketched Stem (Rachis) */}
      <path
        d="M200 600 C200 420 130 220 50 100"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        className="opacity-45"
      />
      <path
        d="M200 600 C200 422 131 222 51 102"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="opacity-20"
      />

      {/* --- Detailed Palm Leaflets (Pinnae) --- */}

      {/* Leaflets Left Side (pointing leftwards and arching down) */}
      {/* Lower section */}
      <path d="M192 510 C150 480 90 440 60 415" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="opacity-35 leaflet-flutter-left" />
      <path d="M193 511 C151 481 91 441 61 416" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" className="opacity-15 leaflet-flutter-left" />

      <path d="M178 430 C130 400 70 350 42 320" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="opacity-35 leaflet-flutter-left" />
      <path d="M179 431 C131 401 71 351 43 321" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" className="opacity-15 leaflet-flutter-left" />

      {/* Mid section */}
      <path d="M158 350 C110 320 55 260 28 220" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="opacity-35 leaflet-flutter-left" />
      <path d="M136 270 C90 230 40 180 18 135" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="opacity-35 leaflet-flutter-left" />

      {/* Upper section */}
      <path d="M110 190 C70 150 30 100 12 60" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="opacity-30 leaflet-flutter-left" />
      <path d="M85 130 C55 95 25 55 10 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="opacity-30 leaflet-flutter-left" />

      {/* Intermediate filler leaflets left side for dense hand-drawn feel */}
      <path d="M185 470 C140 440 80 395 50 365" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-25 leaflet-flutter-left" />
      <path d="M168 390 C120 360 62 300 35 270" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-25 leaflet-flutter-left" />
      <path d="M147 310 C100 275 48 220 22 175" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="opacity-25 leaflet-flutter-left" />
      <path d="M123 230 C80 190 35 140 15 95" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className="opacity-25 leaflet-flutter-left" />


      {/* Leaflets Right Side (pointing rightwards and arching down/out) */}
      {/* Lower section */}
      <path d="M206 490 C250 455 310 415 345 390" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="opacity-35 leaflet-flutter-right" />
      <path d="M207 491 C251 456 311 416 346 391" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" className="opacity-15 leaflet-flutter-right" />

      <path d="M187 400 C235 360 290 310 320 275" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="opacity-35 leaflet-flutter-right" />
      <path d="M188 401 C236 361 291 311 321 276" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" className="opacity-15 leaflet-flutter-right" />

      {/* Mid section */}
      <path d="M165 315 C215 270 265 215 292 180" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="opacity-35 leaflet-flutter-right" />
      <path d="M141 230 C190 185 235 130 258 90" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="opacity-35 leaflet-flutter-right" />

      {/* Upper section */}
      <path d="M114 150 C160 110 195 60 215 25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="opacity-30 leaflet-flutter-right" />
      <path d="M88 95 C130 60 160 20 175 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="opacity-30 leaflet-flutter-right" />

      {/* Intermediate filler leaflets right side for dense hand-drawn feel */}
      <path d="M197 445 C242 410 298 360 332 330" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-25 leaflet-flutter-right" />
      <path d="M176 360 C222 315 278 260 306 225" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-25 leaflet-flutter-right" />
      <path d="M153 275 C200 230 250 170 275 135" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="opacity-25 leaflet-flutter-right" />
      <path d="M128 190 C175 145 215 90 236 55" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className="opacity-25 leaflet-flutter-right" />
    </svg>
  );
}
