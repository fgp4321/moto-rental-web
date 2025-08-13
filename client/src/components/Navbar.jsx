import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll es mayor que 10px, cambiamos el estado
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiamos el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center text-white">
        {/* --- Logo --- */}
        <a href="/" className="text-xl font-semibold tracking-wider">
          Rent a motorcycle
        </a>

        {/* --- Links de Navegación (Escritorio) --- */}
        <div className="hidden md:flex space-x-8">
          <a href="/motos" className="hover:opacity-75 transition-opacity duration-300">Motos</a>
          <a href="/#featured-bikes" className="hover:opacity-75 transition-opacity duration-300">Destacadas</a>
        </div>

        {/* --- Botones de Acción (Escritorio) --- */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/login" className="hover:opacity-75 transition-opacity duration-300">
            Iniciar Sesión
          </a>
          <a href="/register" className="border border-white py-2 px-5 rounded-md hover:bg-white hover:text-black transition-colors duration-300">
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
    </motion.nav>
  );
};

export default Navbar;