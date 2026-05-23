"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema, type ContactFormValues } from "@/lib/validation/contact";
import { gsap } from "@/lib/gsap";
import { User, Mail, FileText, Feather, Send, ShieldCheck } from "lucide-react";

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
          opacity: 0.85,
          duration: 0.2,
          ease: "power2.out",
        });
      } else {
        gsap.to(buttonRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      }

      if (status) {
        gsap.fromTo(
          statusRef.current,
          { y: 8, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power3.out" }
        );
      }
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
        message: "Message sent! We will respond soon.",
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
      className="space-y-5"
      aria-label="Contact form"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {/* Name Input */}
        <div className="space-y-1.5">
          <label 
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-[#424b33]/85 block select-none" 
            htmlFor="name"
          >
            Your Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2c351e]/45">
              <User className="h-4.5 w-4.5" />
            </div>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              className="w-full bg-[#fdfbf7] border border-[#2c351e]/15 text-[#2c351e] placeholder:text-[#2c351e]/35 focus:border-[#424b33] focus:bg-[#fcf9f2] focus:outline-none focus:ring-1 focus:ring-[#424b33]/25 pl-11 pr-4 py-3 text-sm rounded-[14px] transition-all duration-300 font-sans"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
          </div>
          {errors.name ? (
            <p id="name-error" className="text-xs text-amber-700 font-sans mt-1">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        {/* Email Input */}
        <div className="space-y-1.5">
          <label 
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-[#424b33]/85 block select-none" 
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2c351e]/45">
              <Mail className="h-4.5 w-4.5" />
            </div>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full bg-[#fdfbf7] border border-[#2c351e]/15 text-[#2c351e] placeholder:text-[#2c351e]/35 focus:border-[#424b33] focus:bg-[#fcf9f2] focus:outline-none focus:ring-1 focus:ring-[#424b33]/25 pl-11 pr-4 py-3 text-sm rounded-[14px] transition-all duration-300 font-sans"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
          </div>
          {errors.email ? (
            <p id="email-error" className="text-xs text-amber-700 font-sans mt-1">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      {/* Subject Input */}
      <div className="space-y-1.5">
        <label 
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-[#424b33]/85 block select-none" 
          htmlFor="subject"
        >
          Subject
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2c351e]/45">
            <FileText className="h-4.5 w-4.5" />
          </div>
          <input
            id="subject"
            type="text"
            placeholder="Subject"
            autoComplete="off"
            className="w-full bg-[#fdfbf7] border border-[#2c351e]/15 text-[#2c351e] placeholder:text-[#2c351e]/35 focus:border-[#424b33] focus:bg-[#fcf9f2] focus:outline-none focus:ring-1 focus:ring-[#424b33]/25 pl-11 pr-4 py-3 text-sm rounded-[14px] transition-all duration-300 font-sans"
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            {...register("subject")}
          />
        </div>
        {errors.subject ? (
          <p id="subject-error" className="text-xs text-amber-700 font-sans mt-1">
            {errors.subject.message}
          </p>
        ) : null}
      </div>

      {/* Message Textarea */}
      <div className="space-y-1.5">
        <label 
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-[#424b33]/85 block select-none" 
          htmlFor="message"
        >
          Message
        </label>
        <div className="relative">
          <div className="absolute top-3.5 left-3.5 pointer-events-none text-[#2c351e]/45">
            <Feather className="h-4.5 w-4.5" />
          </div>
          <textarea
            id="message"
            placeholder="Write your message..."
            autoComplete="off"
            className="w-full bg-[#fdfbf7] border border-[#2c351e]/15 text-[#2c351e] placeholder:text-[#2c351e]/35 focus:border-[#424b33] focus:bg-[#fcf9f2] focus:outline-none focus:ring-1 focus:ring-[#424b33]/25 pl-11 pr-4 py-3.5 text-sm rounded-[14px] transition-all duration-300 font-sans min-h-[110px] resize-none"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
        </div>
        {errors.message ? (
          <p id="message-error" className="text-xs text-amber-700 font-sans mt-1">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {/* Button & Privacy Shield */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-5 sm:gap-6 pt-4 w-full">
        <div ref={buttonRef} className="w-full sm:w-auto flex-shrink-0">
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="w-full sm:w-auto bg-[#424b33] hover:bg-[#2c351e] text-white py-3.5 px-8 rounded-full flex items-center justify-center gap-2.5 text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 select-none border-none outline-none whitespace-nowrap"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 text-[#424b33]/70 select-none text-[11px] sm:text-xs flex-shrink-0 whitespace-nowrap">
          <ShieldCheck className="h-4.5 w-4.5 text-emerald-800/80 flex-shrink-0" />
          <span>Your message is safe with us. We respect your privacy.</span>
        </div>
      </div>

      {status ? (
        <p
          ref={statusRef}
          className={
            status.type === "success"
              ? "text-sm text-emerald-700 font-medium pt-1 font-sans pl-1"
              : "text-sm text-amber-700 font-medium pt-1 font-sans pl-1"
          }
          aria-live="polite"
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
