import { useEffect, useState } from "react";
import { CardBolo } from "../components/CardBolo";
import type { BoloType } from "../utils/BoloType";

export default function Bolos() {
  const [bolos, setBolos] = useState<BoloType[]>([]);

  useEffect(() => {
    async function fetchBolos() {
      const res = await fetch("http://localhost:3000/bolos");
      const dados = await res.json();
      setBolos(dados);
    }
    fetchBolos();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Bolos</h1>
      <div className="flex flex-wrap gap-4">
        {bolos.map((bolo) => (
          <CardBolo data={bolo} key={bolo.id} />
        ))}
      </div>
    </div>
  );
}
