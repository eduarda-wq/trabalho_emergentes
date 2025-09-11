import { z } from "zod";

export const registerClienteSchema = z.object({
  nome: z.string().min(1),
  email: z.string().email(),
  senha: z.string().min(6),
  telefone: z.string().optional(),
  endereco: z.string().optional(),
});

export const loginClienteSchema = z.object({
  email: z.string().email(),
  senha: z.string().min(6),
});
