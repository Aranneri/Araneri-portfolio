import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";
import { SkeletonLoader } from "@/components/shared/SkeletonLoader";

interface SafeImageProps extends ImageProps {
  readonly wrapperClassName?: string;
}

export function SafeImage({
  wrapperClassName,
  className,
  alt,
  priority,
  loading,
  ...props
}: SafeImageProps) {
  const priorityValue = priority ?? false;
  const resolvedLoading = priorityValue ? undefined : loading ?? "lazy";
  const loadingProps = resolvedLoading ? { loading: resolvedLoading } : {};

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      <SkeletonLoader className="absolute inset-0" />
      <Image
        className={cn("relative h-auto w-full object-cover", className)}
        priority={priorityValue}
        alt={alt}
        {...loadingProps}
        {...props}
      />
    </div>
  );
}
