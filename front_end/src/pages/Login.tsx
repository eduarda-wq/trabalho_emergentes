import { useState } from "react";
import { TextInput, Button } from "flowbite-react";
import { loginCliente } from "../services/clienteService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/clientes/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      if (!res.ok) throw new Error("Erro ao logar");

      const data = await res.json();

      loginCliente(email, senha);

      // Salva token
      localStorage.setItem("token", data.token);

      // Redireciona para home
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Falha ao logar!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-amber-200"
      >
        <h1 className="text-3xl font-serif font-bold mb-6 text-amber-900 text-center">
          Entrar
        </h1>
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
          Entrar
        </Button>
      </form>
    </div>
  );
}
