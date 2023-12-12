const { getAll } = require('../models/itemModel');

const ItemsService = require('../services/itemServices');
const CategoryService = require('../services/categoryService');
const LicenceService = require('../services/licenceService');

// Controladores relacionados con la administración (CRUD) de productos
const adminControllers = {
    // Muestra la vista principal del panel de administración
    adminView: async (req, res) => {
        try {
            const { data } = await ItemsService.getAllItems();
            res.render('./admin/admin', {
                view: {
                    title: 'Administración de productos | Funkoshop'
                },
                items: data
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener productos para la vista de administración');
        }
    },

    // Obtiene todos los productos
    itemsView: async (req, res) => {
        try {
            let data = await getAll();

            if (data.isError) {
                data = 'Hubo un error';
            }

            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener productos para la vista de administración');
        }
    },

    // Muestra la vista de creación de productos nuevos
    createView: async (req, res) => {
        try {
            const { data: categories } = await CategoryService.getAllItemsCategories();
            const { data: licences } = await LicenceService.getAllItemsLicences();

            res.render('./admin/create', {
                view: {
                    title: 'Crear Producto | Admin Funkoshop'
                },
                categories,
                licences
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener datos para la vista de creación');
        }
    },

    // Crea un producto nuevo y redirige a la vista de administración de productos
    createItem: async (req, res) => {
        try {
            const item = req.body;
            const files = req.files;
            await ItemsService.createItem(item, files);
            res.redirect('/admin');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear un nuevo producto');
        }
    },

    // Crea varios productos al mismo tiempo...(no implementado)
    bulkCreate: async (req, res) => {
        try {
            const items = req.body;
            const result = await ItemsService.create(items.map(el => Object.values(el)));
            res.send(result);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al realizar la creación masiva de productos');
        }
    },

    // Muestra la vista de edición de productos existentes y obtiene los datos del producto a editar
    editView: async (req, res) => {
        try {
            const id = req.params.id;

            console.log('ID recibido:', id);

            const { data: categories } = await CategoryService.getAllItemsCategories();
            const { data: licences } = await LicenceService.getAllItemsLicences();
            const { data } = await ItemsService.getItem(id);

            //console.log(categories, licences);

            res.render('./admin/edit', {
                view: {
                    title: `Editar Producto #${id} | Admin Funkoshop`
                },
                item: data[0],
                categories,
                licences
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener datos para la vista de edición');
        }
    },

    // Edita un producto existente y redirige a la vista de administración de productos
    editItem: async (req, res) => {
        try {
            const id = req.params.id;
            const item = req.body;
            const files = req.files;

            await ItemsService.editItem(item, files, id);
            res.redirect('/admin');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al editar el producto');
        }
    },

    // Elimina un producto existente y redirige a la vista de administración de productos
    deleteItem: async (req, res) => {
        try {
            const id = req.params.id;

            await ItemsService.deleteItem(id);
            res.redirect('/admin');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al eliminar el producto');
        }
    },

    // Muestra la vista de inicio de sesión
    loginView: (req, res) => res.render('./auth/login', {
        view: {
            title: 'Login | Funkoshop'
        }
    }),
}

module.exports = adminControllers;
