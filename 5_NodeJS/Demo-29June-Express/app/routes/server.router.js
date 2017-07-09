const { Router } = require('express');

const items = [{
        id: 1,
        name: 'Cuki',
    },
    {
        id: 2,
        name: 'John',
    },
];

const attachRoutes = (app) => {
    const router = new Router();

    router
        .get('/', (req, res) => {
            console.log('---- ex ALL ----');
            res.render('items/all', {
                model: items,
            });
        })
        // form can be shown dynamically 
        // as modal window with javascript - api.router?
        .get('/form', (req, res) => {
            return res.render('items/form');
        })
        .get('/:id', (req, res) => {
            const id = parseInt(req.params.id, 10);
            const item = items.find((i) => i.id === id);
            if (!item) {
                // here we can use redirect
                // because we're not doing ajax
                console.log('----- WRONG ID -----');
                return res.redirect('/404');
            }
            return res.render('items/details', {
                model: item,
            });
        })
        .post('/', (req, res) => {
            const item = req.body;
            console.log(item);
            item.id = items.length + 1;
            // hash password
            items.push(item);
            return res
                .status(201)
                .redirect('/items');
        });

    app.use('/items', router);
};

module.exports = attachRoutes;
