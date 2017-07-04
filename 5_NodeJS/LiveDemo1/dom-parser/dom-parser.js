const jsdom = require('jsdom');


// must fix
const initDomParser = (html) => {
    return new Promise((resolve) => {
        jsdom.env('', (err, window) => {
            if (err) {
                console.log(err);
                return;
            }

            const $ = require('jquery')(window);
            $('html').html(html);

            resolve($);
        });
    });
};

module.exports = initDomParser;