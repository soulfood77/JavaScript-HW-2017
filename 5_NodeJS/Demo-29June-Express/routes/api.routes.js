const items = [{
    id: 1,
    name: 'Cuki',
}];

const attach = (app) => {
    app.get('/api/items', (req, res) => {
        res.send(items);
    });

    app.post('/api/items', (req, res) => {
        const item = req.body;
        item.id = items.length + 1;
        items.push(item);
        res.status(201)
            .send(item);
    });
};

module.exports = attach;
