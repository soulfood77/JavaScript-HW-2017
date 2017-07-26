const { Movie } = require('../models/movie.model');

// get a movie and get the movie data
const parseMovie = (url) => {
    return fetch(url)
        .then((response) => {
            // response has status property
            if (!response.ok) {
                throw new Error('Invalid url');
            }

            return response.text();
        })
        .then((html) => {
            // console.log(html);
            const movie = Movie.fromHtml(html);
            return movie;
            // })
            // .then((movie) => {
            //     console.log(movie);
        });
};

module.exports = { parseMovie };
