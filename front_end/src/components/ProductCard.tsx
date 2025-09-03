import { Card, Button } from "flowbite-react";
import type { Bolo } from "../services/boloService";

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

export default function ProductCard({ nome, descricao, preco, foto, sabor, tamanho, categoria }: Bolo) {
  return (
    <Card imgSrc={foto} className="max-w-sm">
      <h5 className="text-xl font-bold">{nome}</h5>
      <p>{descricao}</p>
      <p className="text-gray-500 text-sm">Categoria: {categoria.nome}</p>
      <p className="text-gray-500 text-sm">Sabor: {saborMap[sabor]}</p>
      <p className="text-gray-500 text-sm">Tamanho: {tamanhoMap[tamanho]}</p>
      <p className="text-pink-600 font-semibold">R$ {preco.toFixed(2)}</p>
      <Button>Adicionar</Button>
    </Card>
  );
}
