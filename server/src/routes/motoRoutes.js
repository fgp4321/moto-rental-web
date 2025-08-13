const express = require('express');
const router = express.Router();
const { getMotos, getUniqueBrands, getUniqueCategories, getFeaturedBikes } = require('../controllers/motoController'); // <-- Importar la nueva función

// @ruta    GET /api/motos
// @desc    Obtener todas las motos
// @acceso  Público
router.get('/', getMotos);

router.get('/brands', getUniqueBrands);
router.get('/categories', getUniqueCategories);
// Debe ir ANTES de la ruta /:id para que no haya conflictos en el futuro
router.get('/featured', getFeaturedBikes);

module.exports = router;