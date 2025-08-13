import React from 'react';
import { motion } from 'framer-motion';
import MotoCard from './MotoCard'; // Suponiendo que MotoCard está en el mismo directorio

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Aplica un retraso entre la animación de cada hijo
    },
  },
};

const FeaturedBikes = ({ motos }) => {
  return (
    <section id="featured-bikes" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Nuestras Joyas
        </h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // <-- La magia del scroll
          viewport={{ once: true, amount: 0.2 }} // Se anima una vez, cuando el 20% es visible
        >
          {motos.map(moto => (
            <MotoCard
              key={moto.id}
              name={moto.model}
              brand={moto.brand}
              imageUrl={moto.image_url}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBikes;