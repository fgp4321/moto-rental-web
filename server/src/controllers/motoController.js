const db = require('../config/db');

// --- OBTENER TODAS LAS MOTOS ---
const getMotos = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM motos ORDER BY created_at DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener las motos:', error);
    res.status(500).json({ msg: 'Error del servidor' });
  }
};

module.exports = {
  getMotos,
};