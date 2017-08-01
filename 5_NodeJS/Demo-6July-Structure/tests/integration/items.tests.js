//const { init } = require('../../app/app');
const request = require('supertest');

//const { expect } = require('chai');

describe('/items test', () => {
    const connectionString = 'mongodb://localhost/items-db-test';
    let app = null;

    beforeEach(() => {
        // init app, dont mock
        // don't test separate components, test the whole app
        return Promise.resolve()
            .then(() => require('../../db').init(connectionString))
            .then((db) => require('../../data').init(db))
            .then((data) => require('../../app').init(data))
            .then((_app) => {
                app = _app;
            });
    });

    describe('GET /items', () => {
        it('expect to return 200', (done) => {
            // const data = {
            //     items: {
            //         getAll() {
            //             return Promise.resolve([]);
            //         },
            //     },
            // };
            // ! init returns a promise!!
            // const app = require('../app'); won't work
            // init(data)
            //     .then((app) => {

            request(app)
                .get('/items')
                .expect(200) // Todo fix ERROR why?
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    // expects here
                    return done();
                });
            // });
        });
    });
});
