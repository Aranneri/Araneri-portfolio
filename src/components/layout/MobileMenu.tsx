"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import { navLinks } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SafeLink } from "@/components/shared/SafeLink";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <nav className="space-y-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <SafeLink
              key={link.href}
              href={link.href}
              className="block text-lg font-semibold text-sand-200/80 transition hover:text-sand-200"
              ariaLabel={link.label}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </SafeLink>
          ))}
        </nav>
      </DialogContent>
    </Dialog>
  );
}
