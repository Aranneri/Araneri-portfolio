import * as React from "react";

import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  readonly tone?: "emerald" | "amber" | "sand";
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  emerald: "bg-emerald-500/15 text-emerald-500",
  amber: "bg-amber-500/15 text-amber-500",
  sand: "bg-sand-300/15 text-sand-200",
};

export function Badge({ className, tone = "sand", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-200",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
