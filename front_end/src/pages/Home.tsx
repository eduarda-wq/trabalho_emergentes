import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { getBolos} from "../services/boloService";
import type { Bolo } from "../services/boloService";

export default function Home() {
  const [bolos, setBolos] = useState<Bolo[]>([]);

  useEffect(() => {
    getBolos().then(setBolos).catch(() => setBolos([]));
  }, []);

  const destaques = bolos.filter(b => b.destaque);
  const ultimos = [...bolos].sort((a,b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  // melhor avaliação: como não há rating no model, usaremos destaque como proxy (requisito: itens com melhor avaliação)
  const melhores = bolos.filter(b=>b.destaque).slice(0,6);

  return (
    <main>
      <Banner />

      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Destaques</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {destaques.map(b => <ProductCard key={b.id} {...b} />)}
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Últimos cadastrados</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {ultimos.slice(0,6).map(b => <ProductCard key={b.id} {...b} />)}
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Melhor avaliação</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {melhores.map(b => <ProductCard key={b.id} {...b} />)}
        </div>
      </section>
    </main>
  );
}
