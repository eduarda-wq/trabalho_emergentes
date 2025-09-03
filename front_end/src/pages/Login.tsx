import { useState } from "react";
import { loginCliente } from "../services/clienteService";

export default function Login() {
  const [email,setEmail]=useState("");
  const [senha,setSenha]=useState("");

  const handleSubmit=async(e:React.FormEvent)=>{
    e.preventDefault();
    try{
      const user = await loginCliente(email,senha);
      alert(`Bem-vindo, ${user.nome}!`);
    }catch(err:any){ alert(err.message); }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 border rounded space-y-4">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full border p-2 rounded"/>
      <input type="password" placeholder="Senha" value={senha} onChange={e=>setSenha(e.target.value)} className="w-full border p-2 rounded"/>
      <button type="submit" className="w-full bg-pink-600 text-white p-2 rounded">Entrar</button>
    </form>
  );
}
