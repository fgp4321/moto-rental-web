import React from 'react';
import MotoCard from './MotoCard';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const MotoGrid = ({ motos, loading }) => {
  if (loading) {
    return <p className="text-center w-full">Cargando motos...</p>;
  }

  if (motos.length === 0) {
    return <p className="text-center w-full">No se encontraron motos con los filtros seleccionados.</p>;
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {motos.map(moto => (
        <MotoCard key={moto.id} moto={moto} />
      ))}
    </motion.div>
  );
};

export default MotoGrid;