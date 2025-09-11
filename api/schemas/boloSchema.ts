import { z } from "zod";

export const createBoloSchema = z.object({
  nome: z.string().min(1),
  descricao: z.string().optional(),
  preco: z.number().positive(),
  pesoKg: z.number().positive(),
  foto: z.string().url(),
  sabor: z.enum(["CHOCOLATE","BAUNILHA","MORANGO","LIMAO","DOCE_DE_LEITE","RED_VELVET","CENOURA"]),
  tamanho: z.enum(["PEQUENO","MEDIO","GRANDE"]),
  destaque: z.boolean().optional(),
  categoriaId: z.number(),
});
