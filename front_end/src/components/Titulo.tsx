import { useState } from "react";

export default function Titulo() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo"/>
          <span className="text-2xl font-semibold dark:text-white">Minha Confeitaria</span>
        </a>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100"
        >
          ☰
        </button>
        <div className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            <li><a href="/bolos" className="block py-2 px-3 text-blue-700">Bolos</a></li>
            <li><a href="/clientes" className="block py-2 px-3 text-gray-900">Clientes</a></li>
            <li><a href="/funcionarios" className="block py-2 px-3 text-gray-900">Funcionários</a></li>
            <li><a href="/vendas" className="block py-2 px-3 text-gray-900">Vendas</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
