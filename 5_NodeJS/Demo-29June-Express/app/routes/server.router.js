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
            console.log('---- HOME ----');
            res.send('<h1>Home</h1>');
        })
        .get('/all', (req, res) => {
            console.log('---- ALL ----');
            res.render('all', {
                model: items,
            });
        })
        .get('/404', (req, res) => {
            return res.render('404');
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
            return res.render('details', {
                model: item,
            });
        });

    app.use('/', router);
};

module.exports = attachRoutes;
