const express = require('express');
const cors = require('cors');
require('dotenv').config();

// --- INICIALIZACIÓN ---
const app = express();
const PORT = process.env.PORT || 3001;

// --- MIDDLEWARES ---
// CORS: Permite peticiones desde tu frontend
app.use(cors());
// Permite al servidor entender JSON que venga en el body de las peticiones
app.use(express.json());

// --- RUTAS ---
// Le decimos a nuestra app que use las rutas de usuario
// para cualquier petición que empiece con "/api/users"
app.use('/api/users', require('./src/routes/userRoutes'));

app.use('/api/motos', require('./src/routes/motoRoutes'));



// --- INICIAR SERVIDOR ---
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});