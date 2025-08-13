import React, { useState, useEffect } from 'react'; // <-- 1. Importa useState y useEffect
import axios from 'axios'; // <-- 2. Importa axios
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MotoCard from '../components/MotoCard';
import FeaturedBikes from '../components/FeaturedBikes'; // <-- Nuevo componente
import Footer from '../components/Footer'; // <-- Importamos el Footer

const HomePage = () => {
  // 3. Crea un estado para guardar las motos
  const [motos, setMotos] = useState([]);

  // 4. Usa useEffect para pedir los datos a la API cuando el componente se monta
  useEffect(() => {
    const fetchMotos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/motos');
        // Filtramos para mostrar solo las 3 primeras como destacadas
        setMotos(response.data.slice(0, 3)); 
      } catch (error) {
        console.error("Error al obtener las motos destacadas:", error);
      }
    };

    fetchMotos();
  }, []); // El array vacío asegura que se ejecuta solo una vez

  return (
    <div className="bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        {/* Pasamos las motos al componente FeaturedBikes */}
        <FeaturedBikes motos={motos} />
        {/* Aquí podríamos añadir la sección "HowItWorks" en el futuro */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;