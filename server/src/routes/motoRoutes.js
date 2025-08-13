const express = require('express');
const router = express.Router();
const { getMotos, getUniqueBrands, getUniqueCategories } = require('../controllers/motoController');

// @ruta    GET /api/motos
// @desc    Obtener todas las motos
// @acceso  Público
router.get('/', getMotos);

router.get('/brands', getUniqueBrands);
router.get('/categories', getUniqueCategories);

module.exports = router;