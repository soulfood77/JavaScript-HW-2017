const initParser = require('../../dom-parser');
const { DETAILS } = require('../../selectors');
const { Movie } = require('../movie.model');

// dynamic add static method to the movie class
// Movie.prototype.newMethod - instance method
// Movie.newMethod - static method
Movie.fromHtml = (html) => {
    return initParser(html)
        .then(($) => {
            const titleAndYear = $(DETAILS.TITLE_SELECTOR).html();
            const title = titleAndYear.substring(0, titleAndYear
                .indexOf('&nbsp;<span '));
            const posterImgUrl = $(DETAILS.POSTER_IMG_URL).attr('src');

            return new Movie(title, posterImgUrl);
        });
};
