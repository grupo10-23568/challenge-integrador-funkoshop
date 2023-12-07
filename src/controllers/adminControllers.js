const { getAll } = require('../models/itemModel');

const ItemsService = require('../services/itemServices');
const CategoryService = require('../services/categoryService');
const LicenceService = require('../services/licenceService');


const adminControllers = {

    adminView: async (req, res) => {
        const { data } = await ItemsService.getAllItems();
        res.render('./admin/admin',
            {
                view: {
                    title: 'Administración de productos | Funkoshop'
                },
                items: data
            });
    },


    itemsView: async (req, res) => {
        let data = await getAll();

        if (data.isError) {
            data = 'Hubo un error';
        }

        res.send(data);
    }, // *borrar

    createView: async (req, res) => {
        const { data: categories } = await CategoryService.getAllItemsCategories();
        const { data: licences } = await LicenceService.getAllItemsLicences();

        res.render('./admin/create', {
            view: {
                title: 'Crear Producto | Admin Funkoshop'
            },
            categories,
            licences
        });
    },

    createItem: async (req, res) => {
        const item = req.body;
        const files = req.files;
        await ItemsService.createItem(item, files);
        res.redirect('/admin');
    },


    bulkCreate: async (req, res) => {
        const items = req.body;
        const result = await ItemsService.create(items.map(el => Object.values(el)));
        res.send(result);
    },


    editView: async (req, res) => {
        const id = req.params.id;
        console.log('ID recibido:', id);
        const { data: categories } = await CategoryService.getAllItemsCategories();
        const { data: licences } = await LicenceService.getAllItemsLicences();
        const { data } = await ItemsService.getItem(id);
        console.log(categories, licences);
        res.render('./admin/edit', {
            view: {
                title: `Editar Producto #${id} | Admin Funkoshop`
            },
            item: data[0],
            categories,
            licences
        });
    },

    editItem: async (req, res) => {
        const id = req.params.id;
        const item = req.body;
        const files = req.files;

        await ItemsService.editItem(item, files, id);
        res.redirect('/admin');
    },

    deleteItem: async (req, res) => {
        const id = req.params.id;

        await ItemsService.deleteItem(id);
        res.redirect('/admin');
    },

    loginView: (req, res) => res.render('./auth/login', {
        view: {
            title: 'Login | Funkoshop'
        }
    }),
}

module.exports = adminControllers;
