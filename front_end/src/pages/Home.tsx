import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getBolos } from "../services/boloService";
import type { Bolo } from "../services/boloService";

export default function Home() {
  const [bolos, setBolos] = useState<Bolo[]>([]);

  useEffect(() => {
    getBolos().then(setBolos);
  }, []);

  const destaques = bolos.filter(b => b.destaque);
  const ultimos = [...bolos].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">🍰 Bem-vindo!</h1>

      <h2 className="text-xl font-semibold">Destaques</h2>
      <div className="grid md:grid-cols-3 gap-4">{destaques.map(b => <ProductCard key={b.id} {...b} />)}</div>

      <h2 className="text-xl font-semibold">Últimos cadastrados</h2>
      <div className="grid md:grid-cols-3 gap-4">{ultimos.map(b => <ProductCard key={b.id} {...b} />)}</div>
    </div>
  );
}
