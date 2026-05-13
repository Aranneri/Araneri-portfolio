import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/shared/SafeLink";

export default function NotFoundPage() {
  return (
    <div className="space-y-4 rounded-[var(--radius-lg)] border border-sand-200/10 bg-palm-900/40 p-8">
      <h1 className="text-2xl font-semibold">Hidden path not found</h1>
      <p className="text-sm text-sand-200/70">
        The grove you seek has shifted. Return to the roots and continue your journey.
      </p>
      <Button asChild>
        <SafeLink href="/">Back to Home</SafeLink>
      </Button>
    </div>
  );
}
