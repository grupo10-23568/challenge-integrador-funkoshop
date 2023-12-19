const LicenceModel = require('../models/licenceModel');

// Obtenemos todas las licencias de productos
const getAllItemsLicences = async () => {
    return await LicenceModel.getLicences();
}

// Obtenemos la licencia de un producto por su id
const getLicence = async (id) => {
    return await LicenceModel.getLicence(id);
};


module.exports = {
    getAllItemsLicences,
    getLicence
}