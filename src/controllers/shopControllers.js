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
};

module.exports = shopControllers;