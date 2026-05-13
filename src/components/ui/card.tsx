import * as React from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-section-card
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-lg)] border border-sand-200/15 bg-palm-900/40 p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-glass motion-reduce:hover:translate-y-0 after:pointer-events-none after:absolute after:inset-0 after:rounded-[var(--radius-lg)] after:bg-gradient-to-br after:from-emerald-500/10 after:via-transparent after:to-sand-200/5 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4 space-y-2", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-semibold transition-colors duration-200 group-hover:text-sand-100", className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm text-sand-200/70 transition-colors duration-200 group-hover:text-sand-200/80",
        className,
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-4", className)} {...props} />;
}
