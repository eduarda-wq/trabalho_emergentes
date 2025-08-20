export type VendaType = {
  id: number;
  clienteId: number;
  funcionarioId: number;
  boloId: number; // se quiser permitir múltiplos bolos, pode ser um array: boloIds: number[]
  quantidade: number;
  valor: number; // valor unitário
  valorTotal: number;
  data: string; // data da venda
  cliente?: {
    id: number;
    nome: string;
  };
  funcionario?: {
    id: number;
    nome: string;
  };
  bolo?: {
    id: number;
    nome: string;
  };
};
