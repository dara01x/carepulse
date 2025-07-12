import {z} from "zod";

export const UserFormValidation = z.object({
  name: z.string()
  .min(3,"Username must be at least 3 characters.")
  .max(20, "Username must be at most 20 characters."),
    email: z.string().email("Invalid email address."),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format.")
});