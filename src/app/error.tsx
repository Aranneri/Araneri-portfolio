"use client";

import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="space-y-4 rounded-[var(--radius-lg)] border border-sand-200/10 bg-palm-900/40 p-8">
      <h1 className="text-2xl font-semibold">A calm pause in the grove</h1>
      <p className="text-sm text-sand-200/70">
        An unexpected error occurred. Please refresh or return to the previous page.
      </p>
      {error.digest ? (
        <p className="text-xs uppercase tracking-[0.3em] text-sand-200/50">
          Reference {error.digest}
        </p>
      ) : null}
      <Button type="button" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
