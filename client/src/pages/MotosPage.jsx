import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterSidebar from '../components/FilterSidebar'; 
import MotoGrid from '../components/MotoGrid';

const MotosPage = () => {
  const [motos, setMotos] = useState([]);
  const [filters, setFilters] = useState({
    brand: 'all',
    category: 'all',
    sortBy: 'price_per_day',
    order: 'asc',
  });
  const [loading, setLoading] = useState(true);
  const [availableBrands, setAvailableBrands] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);

  // useEffect para obtener las opciones de los filtros (marcas y categorías)
  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const [brandsRes, categoriesRes] = await Promise.all([
          axios.get('http://localhost:3001/api/motos/brands'),
          axios.get('http://localhost:3001/api/motos/categories')
        ]);
        setAvailableBrands(brandsRes.data);
        setAvailableCategories(categoriesRes.data);
      } catch (error) {
        console.error("Error al obtener las opciones de los filtros:", error);
      }
    };
    fetchFilterOptions();
  }, []);

  // useEffect para obtener las motos cada vez que los filtros cambian
  useEffect(() => {
    const fetchMotos = async () => {
      setLoading(true);
      try {
        // --- ¡LA CORRECCIÓN CLAVE! ---
        // Creamos un objeto de parámetros limpio, eliminando los filtros 'all'
        const cleanFilters = {};
        for (const key in filters) {
          if (filters[key] !== 'all' && filters[key] !== '') {
            cleanFilters[key] = filters[key];
          }
        }

        const params = new URLSearchParams(cleanFilters).toString();
        const response = await axios.get(`http://localhost:3001/api/motos?${params}`);
        setMotos(response.data);
      } catch (error) {
        console.error("Error al obtener el catálogo de motos:", error);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchMotos();
    }, 200); // Pequeño debounce para no saturar la API

    return () => clearTimeout(timer); // Limpieza del timer

  }, [filters]);

  return (
    <div className="bg-black min-h-screen text-white font-body">
      <Navbar />
      <main className="pt-24 container mx-auto px-4 min-h-[70vh]">
        <h1 className="text-4xl md:text-5xl font-heading font-bold my-8 text-center">Nuestro Catálogo</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <FilterSidebar 
            filters={filters} 
            setFilters={setFilters} 
            brands={availableBrands}
            categories={availableCategories}
          />
          <section className="w-full md:w-3/4 lg:w-4/5">
            <MotoGrid motos={motos} loading={loading} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MotosPage;