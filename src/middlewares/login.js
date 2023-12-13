// Middleware que verifica si el usuario está autentificado

const isLogged = (req, res, next) => {
    // Si está logueado, continúa con la ruta
    if (req.session.isLogged) {
        return next();
    }
    // Si no lo está, devuelve mensaje
    return res.status(401).send('Necesitas loguearte para ingresar');
}

module.exports = {
    isLogged
}