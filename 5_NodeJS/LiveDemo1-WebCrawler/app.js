require('./polyfills');

// get the books and add books to queue
const searchUrl = 'https://www.imdb.com/search/title?genres=';
const genres = ['action'];

// get a book and get the book data
const getMovieData = (url) => {
    return new Promise((resolve, reject) => {
        return fetch(url)
            .then((response) => {
                // response has status property
                if (!response.ok) {
                    throw new Error('Invalid url');
                }

                return response.text();
            })
            .then((html) => {
                // requiring a module with parameter
                return require('./dom-parser')(html);
            })
            .then(($) => {
                const title = $('title').html();
                console.log(title);
            });
    });
};

getMovieData('http://www.imdb.com/title/tt2345759/');
