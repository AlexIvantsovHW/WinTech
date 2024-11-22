import { z } from "zod";

export const scheme = z.object({
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, " must be at least 6 characters"),
});
