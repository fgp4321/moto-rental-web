const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// --- REGISTRO DE UN NUEVO USUARIO ---
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // 1. Validación básica de entrada
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Por favor, introduce todos los campos' });
  }

  try {
    // 2. Comprobar si el usuario ya existe
    const userExists = await db.query('SELECT * FROM users WHERE email = $1', [email]);

    if (userExists.rows.length > 0) {
      return res.status(409).json({ msg: 'El correo electrónico ya está en uso' }); // 409 Conflict
    }

    // 3. Encriptar (hashear) la contraseña
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // 4. Guardar el nuevo usuario en la base de datos
    const newUser = await db.query(
      'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email',
      [name, email, passwordHash]
    );

    // 5. Responder al frontend
    res.status(201).json({
      msg: 'Usuario registrado con éxito',
      user: newUser.rows[0],
    });

  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ msg: 'Error del servidor' });
  }
};

// --- LOGIN DE UN USUARIO EXISTENTE ---
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // 1. Validación básica de entrada
  if (!email || !password) {
    return res.status(400).json({ msg: 'Por favor, introduce todos los campos' });
  }

  try {
    // 2. Buscar al usuario por su email
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ msg: 'Credenciales inválidas' }); // Unauthorized
    }
    const user = result.rows[0];

    // 3. Comparar la contraseña introducida con la hasheada en la BBDD
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ msg: 'Credenciales inválidas' }); // Unauthorized
    }

    // 4. Si la contraseña es correcta, crear un JSON Web Token (JWT)
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '8h' }, // El token expirará en 8 horas
      (err, token) => {
        if (err) throw err;
        // 5. Enviar el token al frontend
        res.status(200).json({ token });
      }
    );

  } catch (error) {
    console.error('Error en el login:', error);
    res.status(500).json({ msg: 'Error del servidor' });
  }
};


module.exports = {
  registerUser,
  loginUser,
};