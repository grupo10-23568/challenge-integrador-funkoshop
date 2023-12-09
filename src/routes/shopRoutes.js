const express = require('express');
const shopControllers = require('../controllers/shopControllers');
const cartControllers = require('../controllers/cartControllers');
const router = express.Router();

router.get('/', shopControllers.shopView);
router.get('/item/:id', shopControllers.itemView);
router.post('/item/:id/add', cartControllers.addToCart);
router.get('/cart', cartControllers.cart);
router.post('/cart', cartControllers.checkout);
router.delete('/cart/:id/delete', cartControllers.deleteCartItem);



module.exports = router;
// router.get('/', (req, res) => res.send('Route a página Shop'));
// router.get('/item/:id', (req, res) => res.send(`Route a un producto por su ID:${req.params.id}`));
// router.post('/item/:id/add', (req, res) => res.send('Route agregar un producto al carrito'));
// router.get('/cart', (req, res) => res.send('Route a página de carrito'));
// router.post('/cart', (req, res) => res.send('Route para ir al checkout'));