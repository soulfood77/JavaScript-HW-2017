const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./routes/server.routes')(app);
require('./routes/api.routes')(app);

app.listen(3001, () => console.log('Server working at 3001'));
