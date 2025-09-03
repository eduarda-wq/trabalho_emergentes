import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getBolos} from "../services/boloService";
import { TextInput, Button } from "flowbite-react";
import type { Bolo } from "../services/boloService";

export default function Catalog() {
  const [bolos, setBolos] = useState<Bolo[]>([]);
  const [filtered, setFiltered] = useState<Bolo[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getBolos().then(data => { setBolos(data); setFiltered(data); }).catch(()=>{ setBolos([]); setFiltered([]); });
  }, []);

  const handleSearch = () => {
    setFiltered(bolos.filter(b => b.nome.toLowerCase().includes(search.toLowerCase())));
  };

  const handleReset = () => {
    setSearch("");
    setFiltered(bolos);
  };

  return (
    <div className="p-6">
      <div className="flex gap-2 mb-4">
        <TextInput placeholder="Buscar bolo..." value={search} onChange={(e)=>setSearch((e.target as HTMLInputElement).value)} />
        <Button onClick={handleSearch} color="pink">Pesquisar</Button>
        <Button onClick={handleReset} color="gray">Todos</Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map(b => <ProductCard key={b.id} {...b} />)}
      </div>
    </div>
  );
}
