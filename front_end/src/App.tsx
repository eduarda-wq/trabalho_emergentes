import { CardBolo } from "./components/CardBolo";
import { InputPesquisa } from "./components/InputPesquisa";
import type { BoloType } from "./utils/BoloType";
import { useEffect, useState } from "react";

export default function App() {
  const [bolos, setBolos] = useState<BoloType[]>([]);

  useEffect(() => {
    async function buscaDados() {
      const response = await fetch("http://localhost:3000/bolos");
      const dados = await response.json();
      setBolos(dados);
    }
    buscaDados();
  }, []);

  const listaBolos = bolos.map((bolo) => (
    <CardBolo data={bolo} key={bolo.id} />
  ));

  return (
    <>
      <InputPesquisa />
      <div className="max-w-7xl mx-auto">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Bolos <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-orange-600">em destaque</span>
        </h1>
        <div className="flex flex-wrap gap-3">
          {listaBolos}
        </div>
      </div>
    </>
  );
}
