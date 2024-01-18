import { z } from "zod";

export const registerValidator = z.object({
  first_name: z.string().min(3, { message: "First Name should be more than 3 characters" }),
  last_name: z.string().min(3, { message: "Last Name should be more than 3 characters" }),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password Length should be more than 6 characters"),
});
