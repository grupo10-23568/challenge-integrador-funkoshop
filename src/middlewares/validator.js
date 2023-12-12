const { validationResult } = require('express-validator');

// Middleware para validar la entrada de los datos de los usuarios
const validateInput = (req, res, next) => {
    // Utiliza express-validator para validar los usuarios
    const errors = validationResult(req);
    // Si hay errores, envía respuesta 400 con detalle de error
    if (!errors.isEmpty()) {
        res.status(400).send({ errors: errors.array() });
    }
    // Si no hay errores, continúa con la ruta
    next();
};

module.exports = validateInput;