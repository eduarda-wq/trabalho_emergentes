import { Navbar, NavbarCollapse, NavbarLink } from "flowbite-react";

export default function NavbarCategories() {
  return (
    <Navbar fluid rounded className="bg-amber-100">
      <NavbarCollapse>
        <NavbarLink href="#">Todas as categorias</NavbarLink>
        <NavbarLink href="#">Bolos de Festa</NavbarLink>
        <NavbarLink href="#">Bolos Caseiros</NavbarLink>
        <NavbarLink href="#">Chocolates</NavbarLink>
        <NavbarLink href="#">Sobremesas</NavbarLink>
        <NavbarLink href="#">Embalagens</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
