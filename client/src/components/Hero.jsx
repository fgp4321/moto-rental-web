import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      {/* --- Capa de Imagen de Fondo --- */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070')" }}>
      </div>
      
      {/* --- Capa de Superposición Oscura --- */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      
      {/* --- Contenido del Hero --- */}
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
          Forja tu Leyenda
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Alquila la moto custom de tus sueños y convierte cada viaje en una historia inolvidable.
        </p>
        <a href="/motos" className="mt-8 inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-cyan-600 transition-transform duration-300 hover:scale-105">
          Ver Catálogo
        </a>
      </div>
    </section>
  );
};

export default Hero;