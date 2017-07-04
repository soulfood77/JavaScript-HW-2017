require('./polyfills');


// get the books and add books to queue
const searchUrl = 'https://www.imdb.com/search/title?genres/';
const genres = ['action'];

// get a book and get the book data
const getMovieData = (url) => {
    return new Promise((resolve, reject) => {
        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Invalid url');
                }

                return response.text();
            })
            .then((html) => {
                const $ = require('./dom-parser')(html);
                console.log(html);
            })
            .then(($) => {
                const title = $('title').title();
                //...
            });
    });
}

getMovieData('http://www.imdb.com/title/tt2345759/');