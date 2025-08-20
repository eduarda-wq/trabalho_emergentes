export type BoloType = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  pesoKg: number;
  foto: string;
  categoriaId: number;
  categoria: {
    id: number;
    nome: string;
  };
};
