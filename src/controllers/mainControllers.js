const LicenceService = require('../services/licenceService');

const mainControllers = {
    homeView: async (req, res) => {

        // req.session.count = req.session.count ? ++req.session.count : 1;
        // // console.log(req.session.count);

        const licences = await LicenceService.getAllItemsLicences();
        res.render('home', {
            view: {
                title: "Home | Funkoshop"
            },
            collections: licences.data,
            sliderTitle: 'Ultimos lanzamientos',
            enableGlide: true
        })
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
