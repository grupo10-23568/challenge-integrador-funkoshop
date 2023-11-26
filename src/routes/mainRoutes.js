const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get('/home', mainControllers.homeView);
router.get('/contact', mainControllers.contactView);
router.get('/about', mainControllers.aboutView);
router.get('/faqs', mainControllers.faqsView);

module.exports = router;

