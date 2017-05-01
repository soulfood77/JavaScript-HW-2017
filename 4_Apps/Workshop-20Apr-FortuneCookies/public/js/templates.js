import {get as getRequst } from 'requester';
// Doesn't work
// import { Handlebars } from 'handlebars';

export function load(templateName) {
    return getRequst(`templates/${templateName}.handlebars`)
        .then(template => {
            const compiledTemplate = Handlebars.compile(template);
            return Promise.resolve(compiledTemplate);
        })
}