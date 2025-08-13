import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <-- Importa Link

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MotoCard = ({ moto }) => { // <-- Recibe el objeto 'moto' completo
  return (
    <motion.div variants={cardVariants}>
      <Link to={`/motos/${moto.id}`} className="block bg-gray-900/50 rounded-lg overflow-hidden shadow-lg border border-gray-800 hover:border-white/50 transition-colors duration-300 group">
        <div className="overflow-hidden">
          <img src={moto.image_url} alt={`Moto ${moto.model}`} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" />
        </div>
        <div className="p-4 text-white">
          <p className="text-sm text-gray-400">{moto.brand}</p>
          <h3 className="text-xl font-bold font-heading truncate">{moto.model}</h3>
          <p className="mt-2 text-lg font-semibold">
            {moto.price_per_day}€<span className="text-sm font-normal text-gray-400">/día</span>
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default MotoCard;