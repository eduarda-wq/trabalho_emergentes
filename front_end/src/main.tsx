import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx"; // Página de bolos
import Clientes from "./pages/Clientes.tsx";
import Funcionarios from "./pages/Funcionarios.tsx";
import Vendas from "./pages/Vendas.tsx";

import Layout from "./Layout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bolos from "./pages/Bolos.tsx";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },           
      { path: "bolos", element: <Bolos /> },   
      { path: "clientes", element: <Clientes /> }, 
      { path: "funcionarios", element: <Funcionarios /> }, 
      { path: "vendas", element: <Vendas /> },     
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);
