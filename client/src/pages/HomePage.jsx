import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MotoCard from '../components/MotoCard';

// Datos de ejemplo para las motos
const featuredMotos = [
  { id: 1, name: 'Iron 883', brand: 'Harley-Davidson', imageUrl: 'https://images.unsplash.com/photo-1621115163395-5867b244797a?q=80&w=1932' },
  { id: 2, name: 'Scout Bobber', brand: 'Indian', imageUrl: 'https://images.unsplash.com/photo-1629892695279-3669d455f524?q=80&w=2070' },
  { id: 3, name: 'Bonneville Bobber', brand: 'Triumph', imageUrl: 'https://images.unsplash.com/photo-1625039010359-2193f0e0f399?q=80&w=1974' },
];

const HomePage = () => {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <Hero />

      {/* --- Sección de Motos Destacadas --- */}
      <section id="featured-bikes" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Nuestras Joyas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMotos.map(moto => (
              <MotoCard
                key={moto.id}
                name={moto.name}
                brand={moto.brand}
                imageUrl={moto.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Aquí irían los otros componentes como HowItWorks y Footer */}
    </div>
  );
};

export default HomePage;