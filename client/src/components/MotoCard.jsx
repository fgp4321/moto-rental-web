import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MotoCard = ({ name, brand, imageUrl }) => {
  return (
    // Envolvemos la tarjeta en motion.div y le pasamos las variantes
    <motion.div variants={cardVariants} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700">
      <div className="overflow-hidden">
        <img src={imageUrl} alt={`Moto ${name}`} className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out" />
      </div>
      <div className="p-4 text-white">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-slate-400">{brand}</p>
      </div>
    </motion.div>
  );
};

export default MotoCard;