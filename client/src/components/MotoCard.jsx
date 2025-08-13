import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <-- Importa Link

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// URL de una imagen por defecto por si una moto no tuviera fotos
const placeholderImage = '/placeholder-moto.png'; 

const MotoCard = ({ moto }) => {
  // --- ¡CAMBIO CLAVE! ---
  // Seleccionamos la primera imagen del array. Si el array no existe o está vacío, usamos la imagen placeholder.
  const displayImage = moto.image_urls && moto.image_urls.length > 0 
    ? moto.image_urls[0] 
    : placeholderImage;

  return (
    <motion.div variants={cardVariants}>
      <Link to={`/motos/${moto.id}`} className="block bg-gray-900/50 rounded-lg overflow-hidden shadow-lg border border-gray-800 hover:border-white/50 transition-colors duration-300 group">
        <div className="overflow-hidden aspect-w-16 aspect-h-9"> {/* Controla la proporción de la imagen */}
          <img 
            src={displayImage} // <-- Usamos la variable con la imagen seleccionada
            alt={`Moto ${moto.model}`} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
          />
        </div>
        <div className="p-4 text-white">
          <p className="text-sm text-gray-400">{moto.brand}</p>
          <h3 className="text-xl font-bold font-heading truncate">{moto.model}</h3>
          <p className="mt-2 text-lg font-semibold">
            {/* Formateamos el precio para que siempre tenga 2 decimales */}
            {Number(moto.price_per_day).toFixed(2)}€
            <span className="text-sm font-normal text-gray-400">/día</span>
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default MotoCard;