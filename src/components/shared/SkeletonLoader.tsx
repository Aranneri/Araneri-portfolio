import { cn } from "@/lib/utils";

interface SkeletonLoaderProps {
  readonly className?: string;
}

export function SkeletonLoader({ className }: SkeletonLoaderProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[var(--radius-md)] bg-sand-200/10",
        className,
      )}
    />
  );
}
