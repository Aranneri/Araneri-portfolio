"use client";

import { useEffect, useRef } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface SeedParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
}

export function AnimatedCursorSeeds() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return undefined;
    }

    let animationFrame = 0;
    let lastTimestamp = performance.now();
    let lastSpawn = 0;
    const particles: SeedParticle[] = [];
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawnSeed = (time: number) => {
      if (time - lastSpawn < 70) return;
      lastSpawn = time;

      particles.push({
        x: pointer.x,
        y: pointer.y,
        vx: (Math.random() - 0.5) * 0.6,
        vy: 0.4 + Math.random() * 0.5,
        life: 1200,
        size: 2 + Math.random() * 2,
      });

      if (particles.length > 80) {
        particles.shift();
      }
    };

    const onMove = (event: MouseEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const onLeave = () => {
      pointer.active = false;
    };

    const tick = (time: number) => {
      const delta = time - lastTimestamp;
      lastTimestamp = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (pointer.active) {
        spawnSeed(time);
      }

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const particle = particles[i];
        if (!particle) {
          continue;
        }
        particle.life -= delta;
        particle.x += particle.vx * delta * 0.05;
        particle.y += particle.vy * delta * 0.05;

        if (particle.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const opacity = Math.max(particle.life / 1200, 0);
        ctx.fillStyle = `rgba(217, 199, 160, ${0.6 * opacity})`;
        ctx.beginPath();
        ctx.ellipse(particle.x, particle.y, particle.size, particle.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrame = window.requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    animationFrame = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
      aria-hidden="true"
    />
  );
}
