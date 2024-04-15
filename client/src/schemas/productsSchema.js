import { z } from "zod";

export const productSchema = z.object({
  nombre: z.string().min(6, { message: "Nombre minimo 6 caracteres" }),
  categoria: z
    .string()
    .min(6, { message: "categoria necesita al menos 6 caracteres" }),
  descripcion: z
    .string()
    .min(6, { message: "descripcion minimo 6 caracteres" }),
  precio: z.string().refine((precio) => parseInt(precio)),
});
