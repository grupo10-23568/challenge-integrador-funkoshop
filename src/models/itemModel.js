const { conn } = require('../config/conn');

const getAll = async () => {
    try {
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
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
    } finally {
        await conn.releaseConnection();
    }
}

const getOne = async (params) => {
    try {
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', params);
        const response = {
            isError: false,
            data: rows
        };

        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos recuperar los datos.`
        };

        return error;
    } finally {
        await conn.releaseConnection();
    }
}

const getItem = async (params) => {
    try {
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', params);
        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos recuperar los datos.`
        };
        return error;
    }
};

const getAllItemsLicences = async (licence_id) => {
    try {
        const [rows] = await conn.query('SELECT * FROM product WHERE licence_id = ?', licence_id);
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
}


const createItem = async (params) => {
    try {
        const [rows] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES ?;', [params]);

        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos crear los valores seleccionados por: ${e}`
        };
        return error;
    }
};

const editItem = async (params, id) => {
    try {
        const [rows] = await conn.query('UPDATE product SET ? WHERE ?;', [params, id]);
        const response = {
            isError: false,
            message: `El item fue modificado exitosamente.`,
            status: rows
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos modificar el item seleccionado, error: ${e}`
        };

        return error;
    }
};

const deleteItem = async (params) => {
    try {
        const [rows] = await conn.query('DELETE FROM product WHERE ?;', params);
        const response = {
            isError: false,
            data: rows,
            message: `Item borrado exitosamente.`
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos insertar los valores seleccionados por: ${e}`
        };
        return error;
    }
};

// Paginación de productos
const getPaginated = async (offset, limit) => {
    try {
        const [rows] = await conn.query(
            'SELECT product.*, category.category_name, licence.licence_name ' +
            'FROM (product LEFT JOIN category ON product.category_id = category.category_id) ' +
            'LEFT JOIN licence ON product.licence_id = licence.licence_id ' +
            'LIMIT ?, ?;',
            [offset, limit]
        );

        const response = {
            isError: false,
            data: rows
        };

        return response;
    } catch (error) {
        const errorResponse = {
            isError: true,
            message: `Error al obtener datos paginados: ${error}`
        };

        return errorResponse;
    }
};

const getTotalItems = async () => {
    try {
        const [rows] = await conn.query('SELECT COUNT(*) AS total FROM product');
        const response = {
            isError: false,
            data: rows[0].total
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `Error al obtener el total de elementos: ${e}`
        };
        return error;
    }
};


// Pagina de carrito
const updateQuantity = async (productId, newQuantity) => {
    try {
        const [rows] = await conn.query('UPDATE product SET quantity = ? WHERE product_id = ?;', [newQuantity, productId]);
        const response = {
            isError: false,
            message: `Cantidad actualizada exitosamente.`,
            status: rows
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `Error al actualizar la cantidad: ${e}`
        };
        return error;
    }
};

const deleteCart = async (productId) => {
    try {
        const [rows] = await conn.query('DELETE FROM product WHERE product_id = ?;', [productId]);
        const response = {
            isError: false,
            data: rows,
            message: `Producto eliminado exitosamente.`
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `Error al eliminar el producto del carrito: ${e}`
        };
        return error;
    }
};

module.exports = {
    getAll,
    getOne,
    getItem,
    createItem,
    editItem,
    deleteItem,
    getAllItemsLicences,
    getPaginated,
    getTotalItems,
    updateQuantity,
    deleteCart,
}
