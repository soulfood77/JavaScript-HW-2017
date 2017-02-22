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
	function validateNumberRange(number, min, max){
		if(typeof number !== 'number'){
			throw 'Must provide a number';
		}
		if(number <= min || number > max){
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
		get duration(){
			return this._duration;
		}
		set duration(duration){
			validateNumberRange(duration, 0);
			this._duration = duration;
		}
		get rating(){
			return this._rating;
		}
		set rating(rating){
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
		get name(){
			return this._name;
		}
		set name(name){
			validateString(name, 2, 40);
			this._name = name;
		}
		add(...items) {
			if(Array.isArray(items[0])){
				items = items[0];
			}
			if(items.length === 0){
				throw 'No items were passed';
			}
			// tova pyk koi mi go izmisli!? 
			items.forEach(item => {
				if(item !== 'object'){
					throw 'All items must be objects';
				}
				validateString(item.name, 2, 40);
				validateString(item.description);
				validateNumberRange(item.id, 0);
			});

			this._items.push(...items);

			return this;
		}
		find(id) {
			if(typeof id !== 'number'){
				throw 'Must provide an ID number';
			}
			return this._items.find(x => x.id === id) || null;			
		}
		find(options) {

		}
		search(pattern) {

		}
	}
	class BookCatalog extends Catalog {
		constructor(name) {
			super(name);
		}
		add(...items) {

		}
		add(itemArr) {

		}
		getGenres() {

		}
		find(options) {

		}
	}
	class MediaCatalog extends Catalog {
		constructor(name) {
			super(name);
		}
		add(...items) {

		}
		add(mediaArr) {

		}
		getTop(count) {

		}
		getSortedByDuration() {

		}
		find(options) {

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

const test1 = solve();
const book1 = test1.getBook('Fahrenheit 451', '9781439142', 'Science Fiction', 'Books are outlawed and firemen burn them')
const media1 = test1.getMedia('Life Is Beautiful', 4, 116, 'When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.')
//const 
//console.log('Beauty is in the eye of the beholder. The end!');
