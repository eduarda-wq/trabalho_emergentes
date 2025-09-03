import { Button } from "flowbite-react";

export default function Banner() {
  return (
    <section className="relative p-10 text-center bg-gradient-to-r from-pink-50 to-yellow-50">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Chocolates</h1>
      <p className="mb-6 text-lg">Os melhores preços e sabores</p>
      <Button color="pink" size="lg">CONFIRA</Button>
    </section>
  );
}
