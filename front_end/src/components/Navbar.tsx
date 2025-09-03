import { Navbar as FlowNavbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <FlowNavbar fluid rounded>
      <Link to="/" className="text-xl font-bold bg-sky-600">Confeitaria</Link>
      <div className="flex gap-4 bg-sky-600">
        <Link to="/catalog"><Button>Catálogo</Button></Link>
        <Link to="/login"><Button>Login</Button></Link>
        <Link to="/register"><Button>Cadastro</Button></Link>
      </div>
    </FlowNavbar>
  );
}
