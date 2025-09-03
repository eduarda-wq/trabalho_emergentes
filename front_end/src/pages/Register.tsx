import { useState } from "react";
import { registerCliente } from "../services/clienteService";

export default function Register() {
  const [nome,setNome]=useState("");
  const [email,setEmail]=useState("");
  const [senha,setSenha]=useState("");

  const handleSubmit=async(e:React.FormEvent)=>{
    e.preventDefault();
    try{
      const user = await registerCliente({nome,email,senha});
      alert(`Cadastro feito: ${user.nome}`);
    }catch(err:any){ alert(err.message); }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 border rounded space-y-4">
      <h1 className="text-2xl font-bold text-center">Cadastro</h1>
      <input placeholder="Nome" value={nome} onChange={e=>setNome(e.target.value)} className="w-full border p-2 rounded"/>
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full border p-2 rounded"/>
      <input type="password" placeholder="Senha" value={senha} onChange={e=>setSenha(e.target.value)} className="w-full border p-2 rounded"/>
      <button type="submit" className="w-full bg-pink-600 text-white p-2 rounded">Cadastrar</button>
    </form>
  );
}
