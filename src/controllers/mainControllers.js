// Controladores principales para la vista de la aplicación

const LicenceService = require('../services/licenceService');
const ItemsService = require('../services/itemServices');

const mainControllers = {
    // Muestra la página principal de la aplicación
    homeView: async (req, res) => {
        try {
            // req.session.count = req.session.count ? ++req.session.count : 1;
            // console.log(req.session.count);

            // Obtiene todas las licencias disponibles
            const licences = await LicenceService.getAllItemsLicences();

            // Obtiene todos los productos disponibles
            const items = await ItemsService.getAllItems();
            const { data: itemsData } = items;

            // Renderiza la vista principal con las licencias
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

    // Define items para la vista de slider para la vista dinámica de los productos
    sliderView: async (req, res) => {
        try {
            // Obtiene los productos
            const items = await ItemsService.getAllItems();
            const { data } = items;

            // Renderiza la vista del slider con los elementos dinámicos
            res.render('partials/sliders', {
                view: {},
                items: data
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener elementos para el slider');
        }
    },

    // Muestra la vista de Contacto
    contactView: (req, res) => {
        res.render('contact', {
            view: {
                title: "Contact | Funkoshop"
            },
        })
    },

    // Vistas futuras de About y FAQs
    aboutView: (req, res) => res.send('Route a About'),
    faqsView: (req, res) => res.send('Route a FAQs')
}

module.exports = mainControllers;
