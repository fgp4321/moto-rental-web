import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Usamos Link para la navegación interna

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center text-white px-4">
        {/* --- Logo de Imagen --- */}
        <Link to="/">
          <img src="/logo-nobg.png" alt="Logo de Rent a motorcycle" className="h-20 transition-all duration-300" />
        </Link>

        {/* --- Links de Navegación (Centro) --- */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/motos" className="group transition-colors duration-300 relative">
            Catálogo
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <a href="/#featured-bikes" className="group transition-colors duration-300 relative">
            Destacadas
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* --- Botones de Acción (Derecha) --- */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/login" className="text-white hover:opacity-75 transition-opacity" aria-label="Iniciar Sesión">
            {/* Icono de Usuario SVG */}
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
          <Link to="/register" className="border border-white py-2 px-5 rounded-md text-sm font-bold hover:bg-white hover:text-black transition-colors duration-300">
            REGISTRARSE
          </Link>
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