function solve() {
	// ID GENERATOR
	const getNextId = (function () {
		let id = 0;
		return function () {
			id += 1
			return id;
		};
	}());

	function validateString(str, min, max) {
		if (typeof str !== 'string' || str === '') {
			throw 'Must provide non-empty string';
		}
		else if (min !== undefined && max !== undefined) {
			validateNumberRange(str.length, min, max);
		}
	}
	function validateISBN(isbn) {
		let test1 = isbn.length;
		if (typeof isbn !== 'string' || isbn.length !== 10 && isbn.length !== 13) {
			throw 'ISBN must be a string and 10 or 13 digits long';
		}
		if (!/^\d+$/.test(isbn)) {
			throw 'ISBN must contain only digits';
		}
	}
	function validateNumberRange(number, min, max) {
		if (typeof number !== 'number') {
			throw 'Must provide a number';
		}
		if (number < min || number > max) {
			throw `Min (${min}) or max (${max}) size exceeded`;
		}
	}
	class Item {
		constructor(name, description) {
			this.name = name;
			this.description = description;
			this._id = getNextId();
		}
		get name() {
			return this._name;
		}
		set name(name) {
			validateString(name, 2, 40);
			this._name = name;
		}
		get description() {
			return this._description;
		}
		set description(description) {
			validateString(description);
			this._description = description;
		}
		get id() {
			return this._id;
		}
	}
	class Book extends Item {
		constructor(name, isbn, genre, description) {
			super(name, description);
			this.isbn = isbn;
			this.genre = genre;
		}
		get isbn() {
			return this._isbn;
		}
		set isbn(isbn) {
			validateISBN(isbn);
			this._isbn = isbn;
		}
		get genre() {
			return this._genre;
		}
		set genre(genre) {
			validateString(genre, 2, 20);
			this._genre = genre;
		}
	}
	class Media extends Item {
		constructor(name, rating, duration, description) {
			super(name, description);
			this.duration = duration;
			this.rating = rating;
		}
		get duration() {
			return this._duration;
		}
		set duration(duration) {
			validateNumberRange(duration, 1);
			this._duration = duration;
		}
		get rating() {
			return this._rating;
		}
		set rating(rating) {
			validateNumberRange(rating, 1, 5);
			this._rating = rating;
		}
	}
	class Catalog {
		constructor(name) {
			this.name = name;
			this._items = [];
			this._id = getNextId();
		}
		get name() {
			return this._name;
		}
		set name(name) {
			validateString(name, 2, 40);
			this._name = name;
		}
		get id() {
			return this._id;
		}
		get items() {
			return this._items;
		}
		add(...items) {
			if (Array.isArray(items[0])) {
				items = items[0];
			}
			if (items.length === 0) {
				throw 'No items were passed';
			}

			items.forEach(item => {
				if (typeof item !== 'object') {
					throw 'All items must be objects';
				}
				if (!(item instanceof Item)) {
					throw 'Argument error - not an item';
				}
				validateString(item.name, 2, 40);
				validateString(item.description);
				validateNumberRange(item.id, 0);
			});

			//items.forEach(item => this._items.push(item));
			this._items.push(...items);

			return this;
		} //up to here - demo solution Cuki 7.Feb
		find(idOrObject) {
			if (typeof idOrObject === 'number') {
				return this._items.find(x => x.id === idOrObject) || null;
			}
			else if (typeof idOrObject === 'object') {
				//test if this works and try chaining filter methods
				let result = [];
				if (idOrObject.id) {
					result = this._items.filter(i => i.id === idOrObject.id);
				}
				if (idOrObject.name && result.length === 0) {
					return this._items.filter(i => i.name === idOrObject.name);
				}
				else if (idOrObject.name && result.length > 0) {
					return result.filter(i => i.name === idOrObject.name);
				}
				return result;
			}
			throw 'Argument error - wrong ID number or options object';
		}
		search(pattern) {
			if (pattern === undefined || pattern === null || pattern === '') {
				throw 'Argument error - no search pattern';
			}
			let result = [];
			result = this._items.filter(i => {
				return (i.name.includes(pattern) || i.description.includes(pattern)); //i.name.indexOf(pattern) >= 0 // Cuki demo solution
			});
			return result;
		}
	}
	class BookCatalog extends Catalog {
		constructor(name) {
			super(name);
		}
		add(...items) {
			if (Array.isArray(items[0])) {
				items = items[0];
			}
			if (items.length === 0) {
				throw 'No books passed';
			}
			items.forEach(item => {
				if (!(item instanceof Book) || typeof item !== 'object') {
					throw 'Argument error - not a book';
				}
				validateISBN(item.isbn);
				validateString(item.genre, 2, 20);
			});

			return super.add(items);
		}
		getGenres() {
			// let result = [];
			// this._items.forEach(book => {
			// 	if (result.indexOf(book.genre) === -1) {
			// 		result.push(book.genre);
			// 	}
			// });			

			// return result.map(i => i.toLowerCase());

			//Cuki solution map a new array of genres, then filter that .sort().filter((genre, index, genres) => genre !== genres[index - 1])
			return this._items.map(book => book.genre.toLowerCase())
				.filter((genre, index, genres) => genres.indexOf(genre) === index);
		}
		find(idOrObject) {
			let result = super.find(idOrObject);
			if (typeof idOrObject === 'number') {
				return result;
			}
			if (result.length === 0) {
				return this._items.filter(b => b.genre === idOrObject.genre)
			}
			if (idOrObject.genre) {
				return result.filter(b => b.genre === idOrObject.genre);
			}
			return result;
		}
	}
	class MediaCatalog extends Catalog {
		constructor(name) {
			super(name);
		}
		add(...items) {
			if (Array.isArray(items[0])) {
				items = items[0];
			}
			if (items.length === 0) {
				throw 'No media passed';
			}
			items.forEach(item => {
				if (!(item instanceof Media) || typeof item != 'object') {
					throw 'Argument error - not media';
				}
				validateNumberRange(item.duration, 0);
				validateNumberRange(item.rating, 1, 5);
			});

			return super.add(items);
		}
		getTop(count) {
			if (typeof count !== 'number' || count <= 1) {
				throw 'Argument error - count must be a number larger than 1';
			}
			return this._items
				.sort((a, b) => a.rating - b.rating)
				.slice(0, count)
				.map(media => {
					return {
						name: media.name,
						id: media.id
					};
				});
		}
		getSortedByDuration() {
			return this._items
				.sort((a, b) => a.duration - b.duration || b.id - a.id);
		}
		find(idOrObject) {
			let result = super.find(idOrObject);
			if (typeof idOrObject === 'number') {
				return result;
			}
			if (result.length === 0) {
				return this._items.filter(m => m.rating === idOrObject.rating)
			}
			if (idOrObject.rating) {
				return result.filter(m => m.rating === idOrObject.rating);
			}
			return result;
		}
	}

	return {
		getBook: function (name, isbn, genre, description) {
			// return a book instance
			return new Book(name, isbn, genre, description);
		},
		getMedia: function (name, rating, duration, description) {
			// return a media instance
			return new Media(name, rating, duration, description);
		},
		getBookCatalog: function (name) {
			// return a book catalog instance
			return new BookCatalog(name);
		},
		getMediaCatalog: function (name) {
			// return a media catalog instance
			return new MediaCatalog(name);
		}
	};
}

module.exports = solve;

function testItems() {
	const test = solve();
	const book1 = test.getBook('Fahrenheit 451', '9781439142', 'Science Fiction', 'Books are outlawed and firemen burn them');
	const media1 = test.getMedia('Life Is Beautiful', 4, 116, 'When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.');
	console.log('breakpoint');
}
function testCatalog() {
	const test = solve();
	const bookCat = test.getBookCatalog('Books for Nadia');
	const book1 = test.getBook('Fahrenheit 451', '9781439142', 'Science Fiction', 'Books are outlawed and firemen burn them');
	const book2 = test.getBook('Fahrenheit 451', '9781439142', 'Science Fiction', 'Books are outlawed and firemen burn them');
	const book3 = test.getBook('Fahrenheit 451', '9781439142', 'Science Fiction', 'Books are outlawed and firemen burn them');
	const book4 = { id: 88, name: 'Finding Nemo', description: 'Not that easy', isbn: '9781439142', genre: 'Kids' };
	bookCat.add(book1, book2, book3);
	bookCat._items.push(book4);
	const gen = bookCat.getGenres();
	const found = bookCat.find({ id: 88 });
	console.log('breakpoint');
}

//testCatalog();

console.log('Beauty is in the eye of the beholder. The end!');

//Help filter unique values in array (doesn't work for object properties) http://stackoverflow.com/questions/1960473/unique-values-in-an-array
//Help sort objects by two properties http://stackoverflow.com/questions/4576714/sort-by-two-values-prioritizing-on-one-of-them