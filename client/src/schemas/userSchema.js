import { z } from "zod";

export const userSchema = z.object({
  user: z
    .string()
    .min(6, { message: "El usuario debe ser de minimo 6 caracteres" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe de ser al menos de 8 carcteres" }),
});
