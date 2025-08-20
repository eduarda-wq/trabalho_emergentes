import { useEffect, useState } from "react";
import type { VendaType } from "../utils/VendaType";

export default function Vendas() {
  const [vendas, setVendas] = useState<VendaType[]>([]);

  useEffect(() => {
    async function fetchVendas() {
      const res = await fetch("http://localhost:3000/vendas");
      const dados = await res.json();
      setVendas(dados);
    }
    fetchVendas();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Vendas</h1>
      <ul className="space-y-2">
        {vendas.map((v) => (
          <li key={v.id} className="border p-2 rounded-md">
            Cliente: {v.cliente?.nome} | Funcionário: {v.funcionario?.nome} | 
            Bolo: {v.bolo?.nome} | Quantidade: {v.quantidade} | 
            Valor Total: R$ {v.valorTotal.toFixed(2)} | Data: {new Date(v.data).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
