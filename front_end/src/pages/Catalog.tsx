import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getBolos } from "../services/boloService";
import type { Bolo } from "../services/boloService";

export default function Catalog() {
  const [bolos, setBolos] = useState<Bolo[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Bolo[]>([]);

  useEffect(() => {
    getBolos().then(data => { setBolos(data); setFiltered(data); });
  }, []);

  const handleSearch = () => setFiltered(bolos.filter(b => b.nome.toLowerCase().includes(search.toLowerCase())));
  const handleReset = () => { setSearch(""); setFiltered(bolos); }

  return (
    <div className="p-6">
      <div className="flex gap-2 mb-4">
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar bolo" className="border p-2 flex-1 rounded" />
        <button onClick={handleSearch} className="bg-pink-600 text-white px-4 rounded">Pesquisar</button>
        <button onClick={handleReset} className="bg-gray-300 px-4 rounded">Todos</button>
      </div>
      <div className="grid md:grid-cols-3 gap-4">{filtered.map(b => <ProductCard key={b.id} {...b} />)}</div>
    </div>
  );
}