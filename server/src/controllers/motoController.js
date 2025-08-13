const db = require('../config/db');

// --- OBTENER TODAS LAS MOTOS (CON FILTROS Y ORDENACIÓN) ---
const getMotos = async (req, res) => {
  try {
    // Extraemos los parámetros de la query de la URL
    const { brand, category, sortBy, order = 'asc', minPrice, maxPrice } = req.query;

    let query = 'SELECT * FROM motos WHERE 1=1';
    const queryParams = [];
    let paramIndex = 1;

    // --- Construcción dinámica de la query ---

    // Filtro por marca
    if (brand) {
      query += ` AND brand = $${paramIndex++}`;
      queryParams.push(brand);
    }
    // Filtro por categoría
    if (category) {
      query += ` AND category = $${paramIndex++}`;
      queryParams.push(category);
    }
    // Filtro por rango de precios
    if (minPrice) {
      query += ` AND price_per_day >= $${paramIndex++}`;
      queryParams.push(minPrice);
    }
    if (maxPrice) {
      query += ` AND price_per_day <= $${paramIndex++}`;
      queryParams.push(maxPrice);
    }

    // Ordenación
    // Whitelist para evitar inyección SQL en la ordenación
    const allowedSortBy = ['price_per_day', 'year', 'engine_size_cc'];
    const allowedOrder = ['asc', 'desc'];

    if (allowedSortBy.includes(sortBy) && allowedOrder.includes(order.toLowerCase())) {
      query += ` ORDER BY ${sortBy} ${order.toUpperCase()}`;
    } else {
      // Orden por defecto si no se especifica o es inválido
      query += ' ORDER BY created_at DESC';
    }

    const result = await db.query(query, queryParams);
    res.status(200).json(result.rows);

  } catch (error) {
    console.error('Error al obtener las motos:', error);
    res.status(500).json({ msg: 'Error del servidor' });
  }
};

// --- OBTENER MARCAS ÚNICAS ---
const getUniqueBrands = async (req, res) => {
  try {
    const result = await db.query('SELECT DISTINCT brand FROM motos ORDER BY brand ASC');
    // Mapeamos para devolver un array de strings, ej: ["Harley-Davidson", "Indian"]
    res.json(result.rows.map(row => row.brand));
  } catch (error) {
    console.error('Error al obtener las marcas:', error);
    res.status(500).json({ msg: 'Error del servidor' });
  }
};

// --- OBTENER CATEGORÍAS ÚNICAS ---
const getUniqueCategories = async (req, res) => {
  try {
    const result = await db.query('SELECT DISTINCT category FROM motos ORDER BY category ASC');
    res.json(result.rows.map(row => row.category));
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
    res.status(500).json({ msg: 'Error del servidor' });
  }
};


// Al final del archivo, actualiza el export
module.exports = {
  getMotos,
  getUniqueBrands,
  getUniqueCategories,
};