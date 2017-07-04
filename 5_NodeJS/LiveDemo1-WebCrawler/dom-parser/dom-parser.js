const { JSDOM } = require('jsdom');

// must fix
const initDomParser = (html) => {
    return new Promise((resolve) => {
        const dom = new JSDOM(html);
        const $ = require('jquery')(dom.window);

        resolve($);
    });
};

module.exports = initDomParser;
