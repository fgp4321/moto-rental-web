const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// @ruta    POST /api/users/register
// @desc    Registrar un nuevo usuario
// @acceso  Público
router.post('/register', registerUser);


// @ruta    POST /api/users/login
// @desc    Iniciar sesión y obtener token
// @acceso  Público
router.post('/login', loginUser);


module.exports = router;