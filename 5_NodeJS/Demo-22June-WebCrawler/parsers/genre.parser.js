const { Genre } = require('../models/genre.model');

// get a book and get the book data
const parseGenre = (url) => {
    return fetch(url)
        .then((response) => {
            // response has status property
            if (!response.ok) {
                throw new Error('Invalid url');
            }

            return response.text();
        })
        .then((html) => {
            const genre = Genre.fromHtml(html);
            return genre;
        });
};

module.exports = { parseGenre };
