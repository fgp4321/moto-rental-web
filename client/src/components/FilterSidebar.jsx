import React from 'react';

const FilterSidebar = ({ filters, setFilters, brands, categories }) => {
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSortChange = (e) => {
    const [sortBy, order] = e.target.value.split('-');
    setFilters(prevFilters => ({
      ...prevFilters,
      sortBy,
      order,
    }));
  };

  return (
    <aside className="w-full md:w-1/4 lg:w-1/5">
      <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 sticky top-24">
        <h2 className="text-2xl font-heading mb-6">Filtros</h2>
        
        {/* Filtro por Marca */}
        <div className="mb-4">
          <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-300">Marca</label>
          <select name="brand" id="brand" value={filters.brand} onChange={handleInputChange} className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-white/50 focus:outline-none">
            <option value="all">Todas</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* Filtro por Categoría */}
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-300">Categoría</label>
          <select name="category" id="category" value={filters.category} onChange={handleInputChange} className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-white/50 focus:outline-none">
            <option value="all">Todas</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Ordenar por */}
        <div className="mb-4">
          <label htmlFor="sort" className="block mb-2 text-sm font-medium text-gray-300">Ordenar por</label>
          <select name="sort" id="sort" onChange={handleSortChange} defaultValue="price_per_day-asc" className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-white/50 focus:outline-none">
            <option value="price_per_day-asc">Precio: Menor a Mayor</option>
            <option value="price_per_day-desc">Precio: Mayor a Menor</option>
            <option value="year-desc">Año: Más Nuevas Primero</option>
            <option value="year-asc">Año: Más Antiguas Primero</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;