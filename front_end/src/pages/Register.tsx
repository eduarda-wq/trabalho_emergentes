import { useState } from "react";
import { TextInput, Button } from "flowbite-react";
import { registerCliente } from "../services/clienteService";

export default function Register() {
  const [nome,setNome] = useState("");
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await registerCliente({ nome, email, senha });
      alert(`Cadastro realizado: ${user.nome}`);
    } catch (err:any) {
      alert(err?.response?.data?.error ?? err.message ?? "Erro no cadastro");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">Cadastrar</h1>
      <div className="mb-4">
        <TextInput placeholder="Nome" value={nome} onChange={e=>setNome((e.target as HTMLInputElement).value)} />
      </div>
      <div className="mb-4">
        <TextInput type="email" placeholder="Email" value={email} onChange={e=>setEmail((e.target as HTMLInputElement).value)} />
      </div>
      <div className="mb-4">
        <TextInput type="password" placeholder="Senha" value={senha} onChange={e=>setSenha((e.target as HTMLInputElement).value)} />
      </div>
      <Button type="submit" color="pink" className="w-full">Cadastrar</Button>
    </form>
  );
}
