import { z } from "zod";
import { sanitizePlainText } from "@/lib/security/sanitize";

const safeText = (min: number, max: number) =>
  z
    .string()
    .min(min, "This field is too short.")
    .max(max, "This field is too long.")
    .transform((value) => sanitizePlainText(value))
    .refine((value) => value.length >= min && value.length <= max, {
      message: "This field contains invalid characters.",
    });

export const contactSchema = z.object({
  name: safeText(2, 100),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .min(5)
    .max(254),
  subject: safeText(2, 200),
  message: safeText(10, 2000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
