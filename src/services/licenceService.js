const LicenceModel = require('../models/licenceModel');

const getAllItemsLicences = async () => {
    return await LicenceModel.getLicences();
}

const getLicence = async (id) => {
    return await licenceModel.getLicence(id);
};


module.exports = {
    getAllItemsLicences,
    getLicence
}