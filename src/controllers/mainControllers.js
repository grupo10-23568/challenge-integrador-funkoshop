const LicenceService = require('../services/licenceService');
const ItemsService = require('../services/itemServices');

const mainControllers = {
    homeView: async (req, res) => {

        // req.session.count = req.session.count ? ++req.session.count : 1;
        // // console.log(req.session.count);

        const licences = await LicenceService.getAllItemsLicences();
        const items = await ItemsService.getAllItems();
        const { data: itemsData } = items;
        res.render('home', {
            view: {
                title: "Home | Funkoshop"
            },
            collections: licences.data,
            sliderTitle: 'Ultimos lanzamientos',
            enableGlide: true,
            items: itemsData,
        })
    },

    // Definido items para la vista de los sliders

    sliderView: async (req, res) => {
        const items = await ItemsService.getAllItems();
        const { data } = items;
        res.render('../views/partials/sliders', {
            view: {},
            items: data
        });

    },

    contactView: (req, res) => {
        res.render('contact', {
            view: {
                title: "Contact | Funkoshop"
            },
        })
    },

    aboutView: (req, res) => res.send('Route a About'),
    faqsView: (req, res) => res.send('Route a FAQs')
}

module.exports = mainControllers;
