// split functions to controller to be able to test
const attachTo = (app, data) => {
    const controller = require('./controller').init(data);

    app.get('/items/form', (req, res) => {
        return res.render('items/form');
    });

    app.get('/items', (req, res) => controller.getAll(req, res));

    app.post('/items', (req, res) => {
        const item = req.body;
        // server side validation
        return data.items.create(item)
            .then((dbItem) => {
                return res.redirect('/items/' + dbItem.id);
            })
            .catch((err) => {
                // connect-flash
                req.flash('error', err);
                return res.redirect('/items/form');
            });
    });
};

module.exports = { attachTo };
