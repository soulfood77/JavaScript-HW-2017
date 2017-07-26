require('./polyfills');
require('./models/extensions');

const { parseMovie } = require('./parsers/movie.parser');
const { parseGenre } = require('./parsers/genre.parser');

// get the books and add books to queue
const genresUrl = 'https://www.imdb.com/genre/';
const genres = ['action', 'animation', 'fantasy'];


// Promise.all([
//     parseMovie('http://www.imdb.com/title/tt1979376'),
//     parseMovie('http://www.imdb.com/title/tt2250912/'),
// ]).then(([m1, m2]) => {
//     console.log(m1);
//     console.log(m2);
// });

const moviesIds = [];

// genres.forEach((genre) => {
//     const url = genresUrl + genre;
//     parseGenre(url)
//         .then((gen) => {
//             // from array to elements
//             moviesIds.push(...gen.moviesIds);
//             console.log(gen);
//         });
// });

// Another option:
// Array of promises using map() and returning a promise
// Ако искаме да работи с различни страници, трябва да кажем
// че за всеки жанр искаме 1,2,3,4 до 100тна страница с for
// става цикъл в цикъл
// With queue

const movies = [];

const loadMovie = (queue) => {
    if (queue.isEmpty()) {
        return Promise.resolve();
    }

    const id = queue.pop();
    const url = 'http://www.imdb.com/title/' + id;
    return parseMovie(url)
        .then((movie) => {
            // here be database in a real project
            movies.push(movie);
            console.log(movie);
        })
        .then(() => {
            return loadMovie(queue);
        });
};

const loadMovies = (q) => {
    const PARALLEL_LOADS = 16;

    return Promise.all(
            // duck typing if some object has length
            // then it is an array
            Array.from({ length: PARALLEL_LOADS })
            .map((_) => loadMovie(queue)))
        .then(() => {
            console.log(movies);
        });
};

const queue = require('./queue').getQueue();

// put this in a method returning Promise.all
// to be able to call it for speed test
Promise.all(
    genres.map((genre) => {
        const url = genresUrl + genre;
        return parseGenre(url)
            .then((g) => {
                // spread operator - array to elements                    
                // moviesIds.push(...g.moviesIds);
                queue.pushMany(...g.moviesIds);
            });
    })).then(() => {
    // console.log(moviesIds.join(', '));
    // while (!queue.isEmpty()) {
    //     console.log(queue.pop());
    // }

    // make groups of movies by 4
    return loadMovies(queue);
});
