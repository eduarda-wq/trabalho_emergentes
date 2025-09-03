import { api } from "./api";

export type Bolo = {
  id: number;
  nome: string;
  descricao?: string;
  preco: number; // agora number
  pesoKg: number;
  foto: string;
  sabor: string;
  tamanho: string;
  destaque: boolean;
  categoria: { id: number; nome: string }; // exibir categoria
  createdAt: string;
};

export const getBolos = async () => {
  const res = await api.get<Bolo[]>("/bolos");
  // converter preco Decimal para number
  return res.data.map(b => ({ ...b, preco: Number(b.preco) }));
};

export const getBoloById = async (id: number) => {
  const res = await api.get<Bolo>(`/bolos/${id}`);
  return { ...res.data, preco: Number(res.data.preco) };
};
