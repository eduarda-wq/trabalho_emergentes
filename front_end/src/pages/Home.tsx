import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { getBolosDestaques, getBolosUltimos } from "../services/boloService";
import type { Bolo } from "../services/boloService";

export default function Home() {
  const [destaques, setDestaques] = useState<Bolo[]>([]);
  const [ultimos, setUltimos] = useState<Bolo[]>([]);

  useEffect(() => {
    // Buscar bolos em destaque
    getBolosDestaques()
      .then(setDestaques)
      .catch(() => setDestaques([]));

    // Buscar últimos bolos cadastrados
    getBolosUltimos()
      .then(setUltimos)
      .catch(() => setUltimos([]));
  }, []);

  return (
    <main className="bg-amber-50 min-h-screen">
      <Banner />

      {/* Destaques */}
      <section className="p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-amber-900">
          Destaques
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destaques.map((b) => (
            <ProductCard key={b.id} {...b} />
          ))}
        </div>
      </section>

      {/* Últimos cadastrados */}
      <section className="p-6 md:p-10 bg-amber-100 rounded-lg my-6 mx-4 md:mx-10 shadow-sm">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-amber-900">
          Últimos cadastrados
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ultimos.map((b) => (
            <ProductCard key={b.id} {...b} />
          ))}
        </div>
      </section>
    </main>
  );
}
