const express = require('express');
const shopControllers = require('../controllers/shopControllers');
const router = express.Router();


// Configuración de las rutas de la tienda (shop)
router.get('/', shopControllers.shopView);
router.get('/item/:id', shopControllers.itemView);
router.post('/item/:id/add', shopControllers.addToCart);
router.get('/cart', shopControllers.cart);
router.get('/cart/count', shopControllers.getCartCount);

router.get('/page/:page', shopControllers.shopView); //Ruta para paginación

router.post('/cart/updateQuantity/:productId/:action', shopControllers.updateQuantity);
router.post('/cart/delete/:id', shopControllers.deleteCart);
router.post('/cart/checkout', shopControllers.checkout);

module.exports = router;
// router.get('/', (req, res) => res.send('Route a página Shop'));
// router.get('/item/:id', (req, res) => res.send(`Route a un producto por su ID:${req.params.id}`));
// router.post('/item/:id/add', (req, res) => res.send('Route agregar un producto al carrito'));
// router.get('/cart', (req, res) => res.send('Route a página de carrito'));
// router.post('/cart', (req, res) => res.send('Route para ir al checkout'));