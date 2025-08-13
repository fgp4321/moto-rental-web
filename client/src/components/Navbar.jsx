import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-900/80 backdrop-blur-sm text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* --- Logo --- */}
        <a href="/" className="text-2xl font-bold text-cyan-400">
          Moto<span className="text-white">Lease</span>
        </a>

        {/* --- Links de Navegación (Escritorio) --- */}
        <div className="hidden md:flex space-x-6">
          <a href="/motos" className="hover:text-cyan-400 transition-colors duration-300">Motos</a>
          <a href="/#how-it-works" className="hover:text-cyan-400 transition-colors duration-300">Cómo Funciona</a>
        </div>

        {/* --- Botones de Acción (Escritorio) --- */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/login" className="py-2 px-4 rounded-md hover:bg-slate-800 transition-colors duration-300">
            Iniciar Sesión
          </a>
          <a href="/register" className="bg-cyan-500 py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors duration-300">
            Registrarse
          </a>
        </div>
        
        {/* --- Botón de Menú (Móvil) --- */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;