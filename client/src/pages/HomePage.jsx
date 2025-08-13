import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lenis from '@studio-freight/lenis';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedBikes from '../components/FeaturedBikes';
import Footer from '../components/Footer';

const HomePage = () => {
  const [featuredBikes, setFeaturedBikes] = useState([]);

  // --- Efecto para el scroll suave ---
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    }
  }, []); // El array vacío asegura que se ejecuta solo una vez

  // --- useEffect para pedir los datos de las motos DESTACADAS ---
  useEffect(() => {
    const fetchFeaturedBikes = async () => {
      try {
        // --- ¡CAMBIO CLAVE! ---
        // Apuntamos al nuevo endpoint y ya no necesitamos .slice()
        const response = await axios.get('http://localhost:3001/api/motos/featured');
        setFeaturedBikes(response.data);
      } catch (error) {
        console.error("Error al obtener las motos destacadas:", error);
      }
    };
    fetchFeaturedBikes();
  }, []);

  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        {/* Pasamos las motos destacadas al componente */}
        <FeaturedBikes motos={featuredBikes} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;