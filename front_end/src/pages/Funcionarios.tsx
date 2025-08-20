import { useEffect, useState } from "react";
import type { FuncionarioType } from "../utils/FuncionarioType";

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState<FuncionarioType[]>([]);

  useEffect(() => {
    async function fetchFuncionarios() {
      const res = await fetch("http://localhost:3000/funcionarios");
      const dados = await res.json();
      setFuncionarios(dados);
    }
    fetchFuncionarios();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Funcionários</h1>
      <ul className="space-y-2">
        {funcionarios.map((f) => (
          <li key={f.id} className="border p-2 rounded-md">
            {f.nome} - {f.email} - {f.telefone} - {f.cargo}
          </li>
        ))}
      </ul>
    </div>
  );
}
