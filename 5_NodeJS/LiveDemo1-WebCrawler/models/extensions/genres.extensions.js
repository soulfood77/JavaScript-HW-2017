const initParser = require('../../dom-parser');
// const { CATEGORY } = require('../../selectors');
const { Genre } = require('../genre.model');

Genre.fromHtml = (html) => {
    return initParser(html)
        .then(($) => {
            const name = $('#header h1').html();
            const moviesIds = [];
            $('table.results tbody td.image a')
                .each((_, el) => {
                    const href = $(el).attr('href');
                    const id = href.substr('/title/'.length);
                    moviesIds.push(id);
                });
            return new Genre(name, moviesIds);
        });
};
