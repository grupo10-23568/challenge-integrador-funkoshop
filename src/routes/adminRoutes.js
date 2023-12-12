const express = require('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFiles');
const { isLogged } = require('../middlewares/login');
const adminControllers = require('../controllers/adminControllers');

// router.use(isLogged);

// Configuramos las rutas necesarias para las vistas de administración
router.get('/', isLogged, adminControllers.adminView);
router.get('/create', isLogged, adminControllers.createView);
router.post('/create', isLogged, uploadFiles.array('images', 2), adminControllers.createItem);
router.post('/create/bulk', isLogged, adminControllers.bulkCreate);
router.get('/edit/:id', isLogged, adminControllers.editView);
router.put('/edit/:id', isLogged, adminControllers.editItem);
router.delete('/delete/:id', isLogged, adminControllers.deleteItem);

module.exports = router;