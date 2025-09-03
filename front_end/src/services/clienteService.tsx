import { api } from "./api";

export type Cliente = {
  id?: number;
  nome: string;
  email: string;
  telefone?: string;
  endereco?: string;
  senha: string; // adicionada
};

export const registerCliente = async (cliente: Cliente) => {
  const res = await api.post("/clientes/register", cliente);
  return res.data;
};

export const loginCliente = async (email: string, senha: string) => {
  const res = await api.post("/clientes/login", { email, senha });
  return res.data;
};
