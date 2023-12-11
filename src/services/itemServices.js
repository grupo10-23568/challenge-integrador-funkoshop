const ItemModel = require('../models/itemModel');

const getAllItems = async () => {
    return await ItemModel.getAll();
}

const getOne = async (id) => {
    return await ItemModel.getOne({ product_id: id });
}

const getLicences = async (licence_id) => {
    return await ItemModel.getLicences(licence_id);
}

const getItem = async (id) => {
    return await ItemModel.getItem({ product_id: id });
}

const createItem = async (item, files) => {
    const itemSchema = {
        product_name: item.name,
        product_description: item.description,
        price: item.price,
        stock: item.stock,
        discount: item.discount,
        sku: item.sku,
        dues: item.dues,
        image_front: '/' + files[0].filename,
        image_back: '/' + files[1].filename,
        licence_id: item.collection,
        category_id: item.category
    }
    return await ItemModel.createItem([Object.values(itemSchema)]);
}

const editItem = async (item, files, id) => {
    const itemSchema = {
        product_name: item.name,
        product_description: item.description,
        price: item.price,
        stock: item.stock,
        discount: item.discount,
        sku: item.sku,
        dues: item.dues,
        licence_id: item.collection,
        category_id: item.category
    };
    if (files && files[0] && files[1]) {
        // Verifica si existen archivos y están definidos antes de asignar las imágenes
        itemSchema.image_front = '/' + files[0].filename;
        itemSchema.image_back = '/' + files[1].filename;
    }

    return await ItemModel.editItem(itemSchema, { product_id: id });
}

const deleteItem = async (id) => {
    return await ItemModel.deleteItem({ product_id: id });
}

const addToCart = async (productId, quantity) => {
    try {
        const [rows] = await conn.query('INSERT INTO cart (product_id, quantity, created_at) VALUES (?, ?, current_timestamp());', [productId, quantity]);
        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos agregar el producto al carrito: ${e}`
        };
        return error;
    }
}

// Paginación de productos
const getPaginated = async (page, limit) => {
    try {
        const totalItemsResponse = await ItemModel.getAll();
        const totalItems = totalItemsResponse.data.length;

        const totalPages = Math.ceil(totalItems / limit);

        const offset = (page - 1) * limit;
        const response = await ItemModel.getPaginated(offset, limit);

        return {
            isError: false,
            data: response.data,
            totalPages
        };
    } catch (error) {
        console.error('Error en getPaginated:', error);
        return {
            isError: true,
            message: 'Error al obtener datos paginados.'
        };
    }
};

// Servicio para actualizar la cantidad de un producto en el carrito
const updateQuantity = async (productId, newQuantity) => {
    try {
        // Lógica para actualizar la cantidad en la base de datos
        await ItemModel.updateQuantity(productId, newQuantity);
        const response = {
            isError: false,
            message: `Cantidad actualizada exitosamente.`
        };
        return response;
    } catch (error) {
        const errorResponse = {
            isError: true,
            message: `Error al actualizar la cantidad: ${error}`
        };
        return errorResponse;
    }
};

// Servicio para eliminar un producto del carrito
const deleteCart = async (productId) => {
    try {
        // Lógica para eliminar el producto del carrito en la base de datos
        await ItemModel.deleteCart(productId);
        const response = {
            isError: false,
            message: `Producto eliminado exitosamente.`
        };
        return response;
    } catch (error) {
        const errorResponse = {
            isError: true,
            message: `Error al eliminar el producto del carrito: ${error}`
        };
        return errorResponse;
    }
};

module.exports = {
    getAllItems,
    getOne,
    getItem,
    createItem,
    editItem,
    deleteItem,
    getLicences,
    getPaginated,
    updateQuantity,
    deleteCart,
    addToCart,
};
