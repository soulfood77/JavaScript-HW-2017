const attach = (app) => {
    app.get('/', (req, res) => {
        console.log('---- HOME ----');
        res.send('<h1>Home</h1>');
    });

    app.get('/all', (req, res) => {
        console.log('---- ALL ----');
        res.send(`<h1>All</h1>
    <ul>
        <li><a href="#item-1">Go to item 1</a></li>
        <li><a href="#item-2">Go to item 2</a></li>
    </ul>`);
    });
};

module.exports = attach;
