const ItemsService = require('../services/itemServices');

const shopControllers = {
    shopView: async (req, res) => {
        try {
            const { page = 1, limit = 9 } = req.query;

            // Obtener los datos paginados
            const paginatedItems = await ItemsService.getPaginated(page, limit);
            const { data, totalPages } = paginatedItems;

            res.render('../views/shop/shop', {
                view: {
                    title: "Shop | Funkoshop"
                },
                items: data,
                totalPages,
                currentPage: parseInt(page),
            });
        } catch (error) {
            console.error('Error en shopView:', error);
            res.status(500).send('Error interno del servidor');
        }
    },

    itemView: async (req, res) => {
        const id = req.params.id;
        const itemResponse = await ItemsService.getItem(id);
        const allItemsResponse = await ItemsService.getAllItems();

        const { data: item } = itemResponse;
        const { data: allItems } = allItemsResponse;

        // Filtra los items para incluir solo aquellos de la misma licencia que el item individual
        const relatedItems = allItems.filter(i => i.licence_id === item[0].licence_id && i.product_id !== item[0].product_id);

        res.render('./shop/item', {
            view: {
                title: "Items | Funkoshop"
            },
            item: item[0],
            enableGlide: true,
            sliderTitle: 'Productos Relacionados',
            items: relatedItems
        });
    },

    addToCart: async (req, res) => {
        const id = req.params.id;
        const item = await ItemsService.getItem(id);
        // console.log(item);

        if (item.data.length > 0) {
            // Agrega el item al carrito directamente en el controlador
            req.session.cart = req.session.cart || [];
            req.session.cart.push(item.data[0]);

            res.send(`Item ${item.data[0].product_name} agregado al carrito.`);
        } else {
            res.send('No se encontró el item para agregar al carrito.');
        }
    },

    cart: (req, res) => {
        // Renderiza la página cart.ejs con los elementos del carrito almacenados en la sesión
        const cartItems = req.session.cart || [];

        res.render('../views/shop/cart', {
            view: {
                title: "Carrito | Funkoshop"
            },
            cart: cartItems
        });
    },

    checkout: (req, res) => {

        const data = req.body;
        res.send(data);
    }
};

module.exports = shopControllers;