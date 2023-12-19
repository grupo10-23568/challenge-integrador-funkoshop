const ItemModel = require('../models/itemModel');

// Obtenemos todos los productos de la base de datos
const getAllItems = async () => {
    return await ItemModel.getAll();
}

// Obtenemos los productos x su id
const getOne = async (id) => {
    return await ItemModel.getOne({ product_id: id });
}

const getItem = async (id) => {
    return await ItemModel.getItem({ product_id: id });
}

// Obtenemos los productos de una categoría (licencia)
const getLicences = async (licence_id) => {
    return await ItemModel.getLicences(licence_id);
}

// Obtenemos los productos nuevos basados en la fecha de creación para mostrar en slider /home
const getNewItems = async () => {
    try {
        const allItems = await ItemModel.getAll();

        // Filtra los productos para obtener solo los que son 'nuevos'
        const newItems = allItems.data.filter(item => esNuevo(item.create_time));

        return {
            isError: false,
            data: newItems
        };
    } catch (error) {
        console.error('Error en getNewItems:', error);
        return {
            isError: true,
            message: 'Error al obtener productos nuevos.'
        };
    }
};

// Establecemos cuándo un producto será 'nuevo'
const esNuevo = (fechaCreacion) => {
    const mesEnMilisegundos = 30 * 24 * 60 * 60 * 1000; // 30 días

    // Calculamos la fecha actual menos un mes
    const haceUnMes = new Date() - mesEnMilisegundos;

    // Comparamos la fecha de creación con la fecha actual menos un mes
    return new Date(fechaCreacion) > haceUnMes;
};

// Creamos un nuevo producto en la base de datos
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

// Editamos un producto en la base de datos
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

// Eliminamos un producto de la base de datos
const deleteItem = async (id) => {
    return await ItemModel.deleteItem({ product_id: id });
}


// Agregamos producto al carrito
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

// Actualizamos la cantidad de un producto en el carrito
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

// Eliminamos un producto del carrito
const deleteCart = async (productId) => {
    try {
        // Eliminamos el producto del carrito en la base de datos
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

// Configuramos la paginación de productos
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
    getNewItems,
};
