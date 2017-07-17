const attachTo = (app, data) => {
    app.get('/items/form', (req, res) => {
        return res.render('items/form');
    });

    app.get('/items', (req, res) => {
        return data.items.getAll()
            .then((items) => {
                return res.render(('items/all'), {
                    context: items,
                });
            });
    });

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
