const { Pool } = require('pg');
require('dotenv').config();

// Creamos un "pool" de conexiones. Es más eficiente que crear una conexión
// para cada consulta a la base de datos.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Exportamos un objeto con un método `query` para poder usarlo
// en otros archivos de forma sencilla.
module.exports = {
  query: (text, params) => pool.query(text, params),
};