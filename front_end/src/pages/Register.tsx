import { useState } from "react";
import { TextInput, Button } from "flowbite-react";
import { registerCliente } from "../services/clienteService";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await registerCliente({ nome, email, senha });
      alert(`Cadastro realizado: ${user.nome}`);
    } catch (err: any) {
      alert(err?.response?.data?.error ?? err.message ?? "Erro no cadastro");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-amber-200"
      >
        <h1 className="text-3xl font-serif font-bold mb-6 text-amber-900 text-center">
          Cadastrar
        </h1>
        <div className="mb-4">
          <TextInput
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border-2 border-amber-300 focus:border-amber-400"
          />
        </div>
        <div className="mb-4">
          <TextInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-amber-300 focus:border-amber-400"
          />
        </div>
        <div className="mb-6">
          <TextInput
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border-2 border-amber-300 focus:border-amber-400"
          />
        </div>
        <Button
          type="submit"
          color="light"
          className="w-full bg-amber-200 text-amber-900 border border-amber-300 hover:bg-amber-300 hover:text-amber-950 transition"
        >
          Cadastrar
        </Button>
      </form>
    </div>
  );
}
