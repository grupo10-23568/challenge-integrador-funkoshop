const { conn } = require('../config/conn');

// Obtenemos las licencias disponibles en la bd
const getLicences = async () => {
    try {
        const [rows] = await conn.query('SELECT * FROM licence;');
        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos recuperar los datos ${e}.`
        };
        return error;
    }
};

// Obtenemos una licencia específica según el id
const getLicence = async (id) => {
    try {
        const [rows] = await conn.query('SELECT * FROM licence WHERE licence_id = ?', id);
        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos recuperar los datos ${e}.`
        };
        return error;
    }
};

module.exports = {
    getLicences,
    getLicence
}
