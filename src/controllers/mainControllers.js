const LicenceService = require('../services/licenceService');
const ItemsService = require('../services/itemServices');

const mainControllers = {
    homeView: async (req, res) => {
        try {
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
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener datos para la vista principal');
        }
    },

    // Definido items para la vista de los sliders

    sliderView: async (req, res) => {
        try {

            const items = await ItemsService.getAllItems();
            const { data } = items;

            // Renderizar la vista parcial del slider con los elementos dinámicos
            res.render('partials/sliders', {
                view: {},
                items: data
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener elementos para el slider');
        }
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
