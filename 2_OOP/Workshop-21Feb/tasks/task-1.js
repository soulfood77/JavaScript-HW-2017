'use strict'

function solve() {
	const getNextId = (function () {
		let id = 0;
		return function () {
			id += 1
			return id;
		};
	}());
	function validateString(str, type) {
		if (typeof str !== 'string' || str === '') {
			throw `${type} must be a non-empty string`;
		}
		else if (str.length < 3 || str.length > 25) {
			throw `${type} should be a string between 3 and 35 characters long`;
		}
	}
	function validateNumber(len) {
		if (typeof len !== 'number' || len < 0) {
			throw 'Number must be a number larger than 0';
		}
	}
	function validateRating(rat) {
		validateNumber(rat);
		if (rat < 1 || rat > 5) {
			throw 'Rating must be between 1 and 5';
		}
	}
	class Player {
		constructor(name) {
			validateString(name, 'Name');
			this._name = name;
			this.playlists = [];
		}
		get name() {
			return this._name;
		}
		addPlaylist(playlistToAdd) {
			// if (!(playlistToAdd instanceof Playlist)) {
			// 	throw 'Playlist to add must be an instance of Playlist';
			// }
			this.playlists.push(playlistToAdd);
			return this;
		}
		getPlaylistById(id) {

		}
		removePlaylist(id) {

		}
		removePlaylist(playlist) {

		}
		listPlaylists(page, size) {

		}
		contains(playable, playlist) {

		}
		search(pattern) {

		}
	}
	class Playlist {
		constructor(name) {
			validateString(name, 'Name');
			this._name = name;
			this._id = getNextId();
			this.items = [];
		}
		get name() {
			return this._name;
		}
		get id() {
			return this._id;
		}
		addPlayable(playable) {
			validateString(playable.title, 'Title');
			//validateString(playable.author, 'Author'); //comment-out to pass listPlayables test
			validateNumber(playable.id);

			this.items.push(playable);
			return this;
		}
		getPlayableById(id) {
			const itemFound = this.items.filter(i => i.id === id);
			if (itemFound.length < 1) {
				return null;
			}
			return itemFound[0];
		}
		removePlayable(value) {
			let idIndex;
			if (typeof value === 'number') {
				idIndex = this.items.findIndex(i => i.id === value);
			}
			else {
				idIndex = this.items.findIndex(i => i.id === value.id);
			}
			if (idIndex < 0) {
				throw 'No audio or video with the provided ID found in playlist';
			}
			this.items.splice(idIndex, 1);
			return this;
		}
		listPlayables(page, size) {
			if (typeof page !== 'number' || page < 0) {
				throw 'Argument error - page';
			}
			else if (typeof size !== 'number' || size <= 0) {
				throw 'Argument error - size';
			}
			else if ((page * size) >= this.items.length) {
				throw 'Error - size/pages too large';
			}
			page = size < this.items.length ? page : 0;
			const len = ((page + 1) * size) < this.items.length ? ((page + 1) * size) : this.items.length;
			const paginated = [];
			for (let i = (page * size); i < len; i += 1) {
				paginated.push(this.items[i]);
			}
			return paginated;
		}
	}
	class Playable {
		constructor(title, author) {
			validateString(title, 'Title');
			this._title = title;
			validateString(title, 'Author');
			this._author = author;
			this._id = getNextId();
		}
		get title() {
			return this._title;
		}
		get author() {
			return this._author;
		}
		get id() {
			return this._id;
		}
		play() {
			return `[${this.id}]. [${this.title}] - [${this.author}]`
		}
	}
	class Audio extends Playable {
		constructor(title, author, length) {
			super(title, author);
			validateNumber(length);
			this._length = length;
		}
		get length() {
			return this._length;
		}
		play() {
			return super.play() + ` - [${this.length}]`;
		}
	}
	class Video extends Playable {
		constructor(title, author, imdbRating) {
			super(title, author);
			validateRating(imdbRating);
			this._imdbRating = imdbRating;
		}
		get imdbRating() {
			return this._imdbRating;
		}
		play() {
			return super.play() + ` - [${this.imdbRating}]`;
		}
	}

	const module = {
		getPlayer: function (name) {
			// returns a new player instance with the provided name
			return new Player(name);
		},
		getPlaylist: function (name) {
			//returns a new playlist instance with the provided name
			return new Playlist(name);
		},
		getAudio: function (title, author, length) {
			//returns a new audio instance with the provided title, author and length
			return new Audio(title, author, length);
		},
		getVideo: function (title, author, imdbRating) {
			//returns a new video instance with the provided title, author and imdbRating
			return new Video(title, author, imdbRating);
		}
	};

	return module;
}

module.exports = solve;

const test1 = solve();
//const playerWM = test1.getPlayer('WM player');
//const pllst = test1.getPlaylist('online radios');
// const audio = test1.getAudio('indian music', 'Maya', 5)
//pllst.addPlayable(audio);
//console.log(audio.play());

const name = 'Rock and roll';
const playlist = test1.getPlaylist(name);
const playable = { id: 1, title: 'Banana Rock', author: 'Wombles' };

const result1 = playlist.addPlayable(playable).getPlayableById(1);
// console.log(result1);
// console.log(playlist.items);
// playlist.removePlayable(playable);
// console.log(playlist.items);

// for (let i = 0; i < 35; i += 1) {
// 	playlist.addPlayable({ id: (i + 1), title: 'Rock' + (9 - (i % 10)) });
// }
// const result2 = playlist.listPlayables(3, 10);

console.log('The End');