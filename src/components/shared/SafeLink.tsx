import Link from "next/link";
import type { ReactNode } from "react";

import { isSafeExternalUrl } from "@/lib/security/safeLink";
import { cn } from "@/lib/utils";

interface SafeLinkProps {
  readonly href: string;
  readonly children: ReactNode;
  readonly className?: string;
  readonly ariaLabel?: string;
  readonly onClick?: () => void;
  readonly id?: string;
}

export function SafeLink({ href, children, className, ariaLabel, onClick, id }: SafeLinkProps) {
  const clickProps = onClick ? { onClick } : {};
  const isInternal = href.startsWith("/") || href.startsWith("#");
  const isMail = href.startsWith("mailto:");
  const isTel = href.startsWith("tel:");

  if (isInternal) {
    return (
      <Link href={href} className={cn(className)} aria-label={ariaLabel} id={id} {...clickProps}>
        {children}
      </Link>
    );
  }

  if (!isSafeExternalUrl(href) && !isMail && !isTel) {
    return (
      <span className={cn("text-sand-200/60", className)} aria-label={ariaLabel} id={id}>
        {children}
      </span>
    );
  }

  const isExternal = !isMail && !isTel;

  return (
    <a
      href={href}
      className={cn(className)}
      aria-label={ariaLabel}
      id={id}
      {...clickProps}
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}
