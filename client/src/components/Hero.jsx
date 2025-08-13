import React from 'react';
import { motion } from 'framer-motion'; // <-- 1. Importa motion

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070')" }}>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      
      <div className="relative z-10 px-4">
        {/* 2. Envuelve los elementos en `motion` y añade animaciones */}
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Forja tu Leyenda
        </motion.h1>

        <motion.p 
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Alquila la moto custom de tus sueños y convierte cada viaje en una historia inolvidable.
        </motion.p>
        
        <motion.a 
          href="/motos" 
          className="mt-8 inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg shadow-cyan-500/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 120 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(45, 212, 191, 0.7)' }}
          whileTap={{ scale: 0.95 }}
        >
          Ver Catálogo
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;