import {get as getRequst } from 'requester';
// Doesn't work
// import { Handlebars } from 'handlebars';

const cacheObj = {};

export function load(templateName) {
    if (cacheObj.hasOwnProperty(templateName)) {
        return Promise.resolve(cacheObj[templateName]);
    }

    return getRequst(`templates/${templateName}.handlebars`)
        .then(template => {
            const compiledTemplate = Handlebars.compile(template);
            cacheObj[templateName] = compiledTemplate;
            return Promise.resolve(compiledTemplate);
        })
}