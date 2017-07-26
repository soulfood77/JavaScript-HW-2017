/* globals __dirname */

// Normal require
// require('./movies.extensions');
// require('./genres.extensions');

// Dynamic loading of extensions
// creates an absolute path to all files
// which contain .extensions in their name
// and requires them
// now we don't need to add new extensions explicitly

const path = require('path');

require('fs')
    .readdirSync(__dirname)
    .filter((file) => file.includes('.extensions'))
    .forEach((moduleName) => {
        const modulePath = path.join(__dirname, moduleName);
        require(modulePath);
    });
