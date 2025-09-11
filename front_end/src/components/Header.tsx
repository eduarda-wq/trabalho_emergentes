import { Navbar, NavbarBrand, Dropdown, DropdownItem, Avatar } from "flowbite-react";
import SearchBar from "./SearchBar";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header>
      <Navbar
        fluid
        rounded
        className="bg-amber-50 shadow-md border-b border-amber-200"
      >
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <NavbarBrand href="/" className="flex items-center">
            <img
              src="./logo.png" // substitua pela sua logo
              className="mr-2 h-12 w-12 rounded-full border border-amber-300 shadow-sm"
              alt="Logo Confeitaria"
            />
            <span className="self-center whitespace-nowrap text-2xl font-serif font-bold text-amber-900">
              Confeitaria
            </span>
          </NavbarBrand>

          {/* Barra de pesquisa centralizada */}
          <div className="flex flex-1 justify-center px-10">
            <div className="w-full max-w-md">
              <SearchBar />
            </div>
          </div>

          <div className="flex items-center mr-10">
            
            {user ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <span className="flex items-center gap-2 text-sm text-amber-900">
                    <Avatar img={user.avatarUrl} rounded />
                    Olá, {user.name}
                  </span>
                }
              >
                <DropdownItem>
                  <a href="/profile">Meu Perfil</a>
                </DropdownItem>
                <DropdownItem onClick={logout}>Sair</DropdownItem>
              </Dropdown>
            ) : (
              <Dropdown
                arrowIcon={false}
                inline
                label={<span className="text-sm text-amber-900">Entrar</span>}
              >
                <DropdownItem>
                  <a href="/login">Entrar</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="/register">Cadastrar</a>
                </DropdownItem>
              </Dropdown>
            )}
          </div>
        </div>
      </Navbar>
    </header>
  );
}
