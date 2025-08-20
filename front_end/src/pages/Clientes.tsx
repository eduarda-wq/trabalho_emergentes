import { useEffect, useState } from "react";
import type { ClienteType } from "../utils/ClienteType";

export default function Clientes() {
  const [clientes, setClientes] = useState<ClienteType[]>([]);

  useEffect(() => {
    async function fetchClientes() {
      const res = await fetch("http://localhost:3000/clientes");
      const dados = await res.json();
      setClientes(dados);
    }
    fetchClientes();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Clientes</h1>
      <ul>
        {clientes.map((c) => (
          <li key={c.id}>{c.nome} - {c.email}</li>
        ))}
      </ul>
    </div>
  );
}
