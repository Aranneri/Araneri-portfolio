import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly description?: string;
  readonly action?: ReactNode;
  readonly titleClassName?: string;
  readonly titleStyle?: CSSProperties;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  titleClassName,
  titleStyle,
}: SectionHeaderProps) {
  return (
    <div
      className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
      data-section-heading
    >
      <div className="space-y-2">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-500">{eyebrow}</p>
        ) : null}
        <h2
          className={cn("text-3xl font-semibold md:text-4xl", titleClassName)}
          style={titleStyle}
        >
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-sm text-sand-200/70 md:text-base">{description}</p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
