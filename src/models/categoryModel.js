const { conn } = require('../config/conn');

// Obtiene todas las categorías de la base de datos
const getCatagories = async () => {
    try {
        // Consulta sql para obtener todas las categorías
        const [rows] = await conn.query('SELECT * FROM category;');
        // Recibe respuesta exitosa con los datos
        const response = {
            isError: false,
            data: rows
        };

        return response;
    } catch (e) {
        // Respuesta en caso de error
        const error = {
            isError: true,
            message: `No pudimos recuperar los datos ${e}.`
        };

        return error;
    } finally {
        // Libera la conexión después de ejecutar la consulta
        await conn.releaseConnection();
    }
}

module.exports = {
    getCatagories
}
