const CategoryModel = require('../models/categoryModel');

const getAllItemsCategories = async () => {
    return await CategoryModel.getCatagories();
}

module.exports = {
    getAllItemsCategories,
}
