import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* --- Capa de Vídeo de Fondo --- */}
      <video 
        autoPlay       // El vídeo se reproduce automáticamente
        loop           // Se repite en bucle infinito
        muted          // Esencial para la autoreproducción en la mayoría de navegadores
        playsInline    // Necesario para que funcione en iOS
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
        Tu navegador no soporta el vídeo.
      </video>
      
      {/* --- Superposición más oscura para mayor contraste --- */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/75 z-10"></div>
      
      {/* --- Contenido del Hero (ahora en z-20 para estar sobre la superposición) --- */}
      <div className="relative z-20 px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg font-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elige tu Próxima Aventura
        </motion.h1>

        <motion.p 
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Accede a un catálogo exclusivo de motocicletas custom. Listas para la carretera.
        </motion.p>
        
        <motion.a 
          href="/motos" 
          className="mt-8 inline-block border-2 border-white font-bold py-3 px-10 rounded-md text-lg hover:bg-white hover:text-black transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 120 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver Catálogo
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;