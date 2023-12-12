const express = require('express');
const router = express.Router();
const validateInput = require('../middlewares/validator');
const { body } = require('express-validator');

const {
    loginView,
    loginUser,
    registerView,
    registerUser,
    logoutUser
} = require('../controllers/authControllers');

// Ruta temporal para probar la conexión a la base de datos. Eliminar después de la prueba.
const loginValidation = [
    body('email')
        .isEmail()
        .withMessage('Necesito que ingrese un correo válido'),
    body('password')
        .isLength({ min: 6 })
        .isAlphanumeric()
        .withMessage('La contraseña debe tener al menos 6 caracteres y contener letras y números.')
];
router.post('/temp', (req, res) => {
    console.log(req.body);
    res.send('¡Funciona!');
});

// Configuración de las rutas de autenticación
router.get('/login', loginView);
router.post('/login', loginValidation, validateInput, loginUser);
router.get('/register', registerView);
router.post('/register', registerUser);
router.get('/logout', logoutUser);

module.exports = router;