export default function Banner() {
  return (
    <section
      className="relative p-10 text-center bg-cover bg-center h-96 flex flex-col justify-center"
      style={{
        backgroundImage: "url('/banner.png')",
      }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
        Bolos Artesanais
      </h1>
      <p className="mb-6 text-lg text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.6)]">
        Os melhores sabores para adoçar seu dia
      </p>
    </section>
  );
}
