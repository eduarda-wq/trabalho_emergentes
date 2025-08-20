export type ClienteType = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco?: string; // opcional
  createdAt: string; // data de cadastro
  updatedAt: string; // última atualização
};
