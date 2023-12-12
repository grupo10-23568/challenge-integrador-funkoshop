const CategoryModel = require('../models/categoryModel');

// Obtenemos todas las categorías de productos
const getAllItemsCategories = async () => {
    return await CategoryModel.getCatagories();
}

module.exports = {
    getAllItemsCategories,
}
