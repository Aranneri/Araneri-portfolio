"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema, type ContactFormValues } from "@/lib/validation/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type FormStatus =
  | { readonly type: "success"; readonly message: string }
  | { readonly type: "error"; readonly message: string };

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<FormStatus | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isSubmitting) {
        gsap.to(buttonRef.current, {
          scale: 0.98,
          opacity: 0.78,
          duration: 0.25,
          ease: "power2.out",
        });
      } else {
        gsap.to(buttonRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });
      }

      if (statusRef.current) {
        gsap.fromTo(
          statusRef.current,
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" },
        );
      }

      ScrollTrigger.refresh();
    }, formRef);

    return () => ctx.revert();
  }, [isSubmitting, status]);

  const onSubmit = async (values: ContactFormValues) => {
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!response.ok || !result?.success) {
        setStatus({
          type: "error",
          message: result?.message ?? "Unable to send your message right now.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Message sent. We will respond soon.",
      });
      reset();
    } catch {
      setStatus({
        type: "error",
        message: "Unable to send your message right now.",
      });
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      aria-label="Contact form"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.3em] text-sand-200/60" htmlFor="name">
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name ? (
            <p id="name-error" className="text-xs text-amber-500">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.3em] text-sand-200/60" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p id="email-error" className="text-xs text-amber-500">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-[0.3em] text-sand-200/60" htmlFor="subject">
          Subject
        </label>
        <Input
          id="subject"
          type="text"
          placeholder="Subject"
          autoComplete="off"
          aria-invalid={errors.subject ? "true" : "false"}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          {...register("subject")}
        />
        {errors.subject ? (
          <p id="subject-error" className="text-xs text-amber-500">
            {errors.subject.message}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-[0.3em] text-sand-200/60" htmlFor="message">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Write your message"
          autoComplete="off"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message ? (
          <p id="message-error" className="text-xs text-amber-500">
            {errors.message.message}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <div ref={buttonRef}>
          <Button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
        </div>
        {status ? (
          <p
            ref={statusRef}
            className={
              status.type === "success"
                ? "text-sm text-emerald-500"
                : "text-sm text-amber-500"
            }
            aria-live="polite"
          >
            {status.message}
          </p>
        ) : null}
      </div>
      <p className="text-xs text-sand-200/50">Your message is validated before sending.</p>
    </form>
  );
}
