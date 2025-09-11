import { TextInput, Button } from "flowbite-react";

export default function SearchBar() {
  return (
    <div className="flex items-center w-96">
      <TextInput
        id="search"
        type="text"
        placeholder="Digite o que você procura..."
        aria-label="buscar"
        className="w-full rounded-lg border-2 border-amber-300 bg-white shadow-sm focus:border-amber-400 focus:ring-amber-400"
      />
      <Button
        color="light"
        className="ml-2 border border-amber-300 text-amber-900 hover:bg-amber-100 shadow-sm"
      >
        Pesquisar
      </Button>
    </div>
  );
}
