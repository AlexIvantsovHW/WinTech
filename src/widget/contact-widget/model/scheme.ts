import { z } from "zod";

export const scheme = z.object({
  name: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  message: z.string().min(2, "Message must be at least 2 characters"),
});
