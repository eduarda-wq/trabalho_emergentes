import { Navbar, NavbarCollapse, NavbarLink } from "flowbite-react";

export default function NavbarCategories() {
  return (
    <Navbar
      fluid
      rounded
      className="bg-amber-50"
    >
      <NavbarCollapse className="justify-center">
        <NavbarLink
          href="#"
          className="text-amber-900 font-semibold hover:text-amber-700 transition-colors"
        >
          Todas as categorias
        </NavbarLink>
        <NavbarLink
          href="#"
          className="text-amber-900 font-semibold hover:text-amber-700 transition-colors"
        >
          Bolos de Festa
        </NavbarLink>
        <NavbarLink
          href="#"
          className="text-amber-900 font-semibold hover:text-amber-700 transition-colors"
        >
          Bolos Caseiros
        </NavbarLink>
        <NavbarLink
          href="#"
          className="text-amber-900 font-semibold hover:text-amber-700 transition-colors"
        >
          Chocolates
        </NavbarLink>
        <NavbarLink
          href="#"
          className="text-amber-900 font-semibold hover:text-amber-700 transition-colors"
        >
          Sobremesas
        </NavbarLink>
        <NavbarLink
          href="#"
          className="text-amber-900 font-semibold hover:text-amber-700 transition-colors"
        >
          Embalagens
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
