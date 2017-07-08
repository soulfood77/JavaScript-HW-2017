const express = require('express');
const app = express();

require('./config/app.config')(app);
require('./routes')(app);

// app.get('/404', (req, res) => {
//     return res.send('<h1>Error</h1>');
// });
// This get never fires because 
// all wrong urls are caught by the get('/:id')
// app.get('*', (req, res) => {
//     console.log('----- REDIRECTING -----');
//     res.redirect('/404');
// });

module.exports = app;
