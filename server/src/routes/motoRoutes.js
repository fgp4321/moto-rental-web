const express = require('express');
const router = express.Router();
const { getMotos } = require('../controllers/motoController');

// @ruta    GET /api/motos
// @desc    Obtener todas las motos
// @acceso  Público
router.get('/', getMotos);

module.exports = router;