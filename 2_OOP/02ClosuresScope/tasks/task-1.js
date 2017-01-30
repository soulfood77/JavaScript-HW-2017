/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
	var library = (function () {
		var books = [];
		var categories = [];

		function listBooks() {
			let result = [];
			books.sort((a, b) => a.ID - b.ID);

			if (arguments.length === 0) {
				result = books;
			}			
			else if (arguments[0].author){
				result = books.filter(book => book.author === arguments[0].author);				
			}
			else if (arguments[0].category){
				result = books.filter(book => book.category === arguments[0].category);
			}
				return result;
		}

		function addBook(book) {
			book.ID = books.length + 1;

			// title between 2 and 100 chars long and unique
			if (!book.title || book.title.length < 2 || book.title.length > 100) {
				throw 'Book title should be between 2 and 100 characters long';
			}
			if (books.findIndex(b => b.title === book.title) !== -1) {
				throw 'This title already exists';
			}
			// author non-empty and unique (must be an error in the task text)
			if (!book.author) {
				throw 'Book author cannot be empty';
			}
			// ISBN either 10 or 13 long and unique
			if (book.isbn.length !== 10 && book.isbn.length !== 13) {
				throw 'ISBN should be 10 or 13 digits long';
			}
			if (books.findIndex(b => b.isbn === book.isbn) !== -1) {
				throw 'This ISBN already exists';
			}
			// category between 2 and 100 chars long
			if (!book.category || book.category.length < 2 || book.category.length > 100) {
				throw 'Book category should be between 2 and 100 characters long';
			}
			if (categories.indexOf(book.category) === -1) {
				categories.push(book.category);

			}

			books.push(book);
			return book;
		}

		function listCategories() {
			return categories;
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());
	return library;
}
module.exports = solve;

// TESTS

// var lib = solve();

// var boo2 = {
// 	title: 'BOOK # Finn',
// 	isbn: '7234567890',
// 	author: 'Mark Twain',
// 	category: 'Another Category'
// };

// var book3 = {
// 	title: 'Farenheit 451',
// 	isbn: '9001234567890',
// 	author: 'Ray Bradbury',
// 	category: 'Fiction'
// };

// var book4 =   {
//     ID: 1,
//     author: "John Doe",
//     category: "Book Category",
//     isbn: "1234567890123",
//     title: "BOOK #"
//   };

// lib.books.add(boo2);
// lib.books.add(book3)
// lib.books.add(book4);
// console.log('============== Books created successfully ==============');

// console.log(lib.books.list());
// console.log('============== Books listed successfully ==============');

// console.log(lib.categories.list());
// console.log('============== Categories listed successfully ==============');

// console.log(lib.books.list({ author: 'Ray Bradbury' }));
// console.log('============== Author listed successfully ==============');

// console.log(lib.categories.list({ category: 'Book Category' }));
// console.log('============== Category listed successfully ==============');

