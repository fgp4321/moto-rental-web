import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lenis from '@studio-freight/lenis';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedBikes from '../components/FeaturedBikes';
import Footer from '../components/Footer';

const HomePage = () => {
  const [motos, setMotos] = useState([]);

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

  // --- Efecto para pedir los datos de las motos ---
  useEffect(() => {
    const fetchMotos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/motos');
        setMotos(response.data.slice(0, 3));
      } catch (error) {
        console.error("Error al obtener las motos destacadas:", error);
      }
    };
    fetchMotos();
  }, []);

  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <FeaturedBikes motos={motos} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;