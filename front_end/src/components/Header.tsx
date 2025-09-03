import { Navbar, Dropdown, Avatar, NavbarBrand, DropdownItem } from "flowbite-react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <Navbar fluid rounded className="bg-yellow-100 shadow">
        <NavbarBrand href="/">
          <span className="self-center whitespace-nowrap text-2xl font-bold">Confeitaria</span>
        </NavbarBrand>

        <div className="flex-1 px-4">
          <SearchBar />
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm">Central de Atendimento</button>

          <Dropdown
            arrowIcon={false}
            inline
            label={<span className="text-sm">Entrar / Cadastrar</span>}
          >
            <DropdownItem>
              <a href="/login">Entrar</a>
            </DropdownItem>
            <DropdownItem>
              <a href="/register">Cadastrar</a>
            </DropdownItem>
          </Dropdown>

          <button className="relative">
            🛒
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">0</span>
          </button>

          <Avatar rounded />
        </div>
      </Navbar>
    </header>
  );
}
