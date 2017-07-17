// const db = require('./db').init();
// const data = require('./data').init(db);
// const app = require('./data').init(data);

// app.listen(3001, () => console.log('Listening at 3001'));

// Use async operations, 
// declare an async function with Promise.resolve 
// for clarity (what happens after what)
// extract this to a separate library later

const async = () => {
    return Promise.resolve();
};

const config = require('./config');

async().then(() => require('./db').init(config.connectionString))
    .then((db) => require('./data').init(db))
    .then((data) => require('./app').init(data))
    .then((app) => {
        app.listen(config.port,
            () => console.log(`Listening at ${config.port}`));
    });
