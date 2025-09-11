import type { Bolo } from "../services/boloService";
import { Card, Button } from "flowbite-react";

const saborMap: Record<string, string> = {
  CHOCOLATE: "Chocolate",
  BAUNILHA: "Baunilha",
  MORANGO: "Morango",
  LIMAO: "Limão",
  DOCE_DE_LEITE: "Doce de Leite",
  RED_VELVET: "Red Velvet",
  CENOURA: "Cenoura",
};

const tamanhoMap: Record<string, string> = {
  PEQUENO: "Pequeno",
  MEDIO: "Médio",
  GRANDE: "Grande",
};

export default function ProductCard(props: Bolo) {
  const { nome, descricao, preco, foto, sabor, tamanho, categoria } = props;
  return (
    <Card
      imgSrc={foto}
      className="max-w-sm rounded-2xl shadow-md hover:shadow-lg transition p-4 bg-amber-50"
    >
      <h5 className="text-xl font-serif font-bold mb-2 text-amber-900">{nome}</h5>
      <p className="text-sm text-amber-800 mb-1">{descricao}</p>
      <p className="text-xs text-amber-700">Categoria: {categoria?.nome}</p>
      <p className="text-xs text-amber-700">Sabor: {saborMap[sabor] ?? sabor}</p>
      <p className="text-xs text-amber-700">Tamanho: {tamanhoMap[tamanho] ?? tamanho}</p>
      <p className="text-lg font-semibold text-amber-900 mt-2 mb-4">
        R$ {Number(preco).toFixed(2)}
      </p>
      <Button
        color="light"
        className="w-full bg-amber-200 text-amber-900 border border-amber-300 hover:bg-amber-300 hover:text-amber-950 transition"
      >
        Adicionar
      </Button>
    </Card>
  );
}
