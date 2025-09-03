import Header from "./components/Header";
import NavbarCategories from "./components/Navbar";
import FooterComp from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Produtos";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <NavbarCategories />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <FooterComp />
      </div>
    </Router>
  );
}
