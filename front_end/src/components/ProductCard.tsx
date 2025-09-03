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
    <Card imgSrc={foto} className="max-w-sm">
      <h5 className="text-xl font-bold">{nome}</h5>
      <p className="text-sm text-gray-600">{descricao}</p>
      <p className="text-xs text-gray-500">Categoria: {categoria?.nome}</p>
      <p className="text-xs text-gray-500">Sabor: {saborMap[sabor] ?? sabor}</p>
      <p className="text-xs text-gray-500">Tamanho: {tamanhoMap[tamanho] ?? tamanho}</p>
      <p className="text-pink-600 font-semibold">R$ {preco.toFixed(2)}</p>
      <Button>Adicionar</Button>
    </Card>
  );
}
