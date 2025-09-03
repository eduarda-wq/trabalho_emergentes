import { TextInput, Button } from "flowbite-react";

export default function SearchBar() {
  return (
    <div className="flex items-center">
      <TextInput
        id="search"
        type="text"
        placeholder="Digite o que você procura"
        aria-label="buscar"
      />
      <Button color="pink" className="ml-2">🔍</Button>
    </div>
  );
}
