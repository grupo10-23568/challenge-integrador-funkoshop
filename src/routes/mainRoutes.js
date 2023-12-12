const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');


// Configuración de las rutas de la aplicación
router.get('/home', mainControllers.homeView);
router.get('/contact', mainControllers.contactView);
router.get('/slider', mainControllers.sliderView);
router.get('/about', mainControllers.aboutView);
router.get('/faqs', mainControllers.faqsView);

module.exports = router;

