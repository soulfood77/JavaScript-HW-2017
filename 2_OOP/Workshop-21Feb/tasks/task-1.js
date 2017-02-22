// Workshop 21 February 2017
function solve() {
	// ID Generator
	const getNextId = (function () {
		let id = 0;
		return function () {
			id += 1
			return id;
		};
	}());
	const validator = {
		checkString: function (str, type) {
			if (typeof str !== 'string' || str === '') {
				throw `${type} must be a non-empty string`;
			}
			else if (str.length < 3 || str.length > 25) {
				throw `${type} should be a string between 3 and 35 characters long`;
			}
		},
		checkNumber: function (num) {
			if (typeof num !== 'number' || num < 0) {
				throw 'Number must be larger than 0';
			}
		},
		checkRating: function (rat) {
			this.checkNumber(rat);
			if (rat < 1 || rat > 5) {
				throw 'Rating must be between 1 and 5';
			}
		}
	}
	class Player {
		constructor(name) {
			validator.checkString(name, 'Name');
			this._name = name;
			this.playlists = [];
		}
		get name() {
			return this._name;
		}
		addPlaylist(playlistToAdd) {
			// validate properties or check for instance?
			if (!(playlistToAdd instanceof Playlist)) {
				throw 'Argument error - not a playlist';
			}
			validator.checkString(playlistToAdd.name, 'Name');
			validator.checkNumber(playlistToAdd.id);
			this.playlists.push(playlistToAdd);
			return this;
		}
		getPlaylistById(id) {
			const playlistFound = this.playlists.filter(i => i.id === id);
			if (playlistFound.length < 1) {
				return null;
			}
			return playlistFound[0];
		}
		removePlaylist(value) {
			let idIndex;
			if (typeof value === 'number') {
				idIndex = this.playlists.findIndex(i => i.id === value);
			}
			else {
				idIndex = this.playlists.findIndex(i => i.id === value.id);
			}
			if (idIndex < 0) {
				throw 'No playlist with the provided ID found in player playlists';
			}
			this.playlists.splice(idIndex, 1);
			return this;
		}
		listPlaylists(page, size) {
			if (typeof page !== 'number' || page < 0) {
				throw 'Argument error - page';
			}
			else if (typeof size !== 'number' || size <= 0) {
				throw 'Argument error - size';
			}
			else if ((page * size) >= this.playlists.length) {
				throw 'Error - size/pages too large';
			}
			page = size < this.playlists.length ? page : 0;
			const len = ((page + 1) * size) < this.playlists.length ? ((page + 1) * size) : this.items.length;
			const paginated = [];
			for (let i = (page * size); i < len; i += 1) {
				paginated.push(this.playlists[i]);
			}
			return paginated;
		}
		contains(playable, playlist) {
			const playlistFound = this.playlists.filter(p => p.id === playlist.id);
			if (playlistFound.length < 1) {
				return 'No such playlist';
			};
			const songsFound = playlistFound.filter(p => playable.id);
			if (songsFound.length > 0) {
				return true;
			}
			return false;
		}
		search(pattern) {
			validator.checkString(pattern);
			const result = [];
			let listOK = {};
			for(let list of this.playlists){
				for(let item of list.items){
					if (item.title.includes(pattern) && !listOK.name && !listOK.id) {
						listOK.name = list.name;
						listOK.id = list.id;						
						result.push(listOK);
					}
				}
			}
			return result;
		}
	}
	class Playlist {
		constructor(name) {
			validator.checkString(name, 'Name');
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
			// TODO: check if this id already exists
			// actually, validations are not required in the task
			validator.checkString(playable.title, 'Title');
			//validator.checkString(playable.author, 'Author'); //comment-out to pass listPlayables test
			validator.checkNumber(playable.id);

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
			validator.checkString(title, 'Title');
			this._title = title;
			validator.checkString(title, 'Author');
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
			validator.checkNumber(length);
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
			validator.checkRating(imdbRating);
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

// TEST PLAYER
function testPlayer() {
	const testPlayer = solve();
	const playerWM = testPlayer.getPlayer('WM player');
	const playlist1 = testPlayer.getPlaylist('Native American Music');
	for (let i = 0; i < 8; i += 1) {
		playlist1.addPlayable({ id: (i + 1), title: 'Indian' + (9 - (i % 10)) });
	};

	const playlist3 = testPlayer.getPlaylist('Bulgarian Music');
	for (let i = 0; i < 2; i += 1) {
		playlist3.addPlayable({ id: (i + 1), title: 'Gaidi' + (9 - (i % 10)) });
	};
	playerWM.addPlaylist(playlist1);
	playerWM.addPlaylist(playlist3);
	console.log('Count of playlists in player: ' + playerWM.playlists.length);
	console.log(playerWM.getPlaylistById(2).id, playerWM.getPlaylistById(2).name);;
	const song2 = { id: 5, title: 'Horo' };
	playlist3.addPlayable(song2);
	const testContains = playerWM.contains(song2, playlist3);
	console.log(testContains);

	playerWM.removePlaylist(playlist1);
	console.log('Count of playlists in player: ' + playerWM.playlists.length);

	const testSearch = playerWM.search('dia');
	console.log(testSearch);
}

// TEST AUDIO
function testAudio() {
	const testAudio = solve();
	const song1 = testAudio.getAudio('indian music', 'Maya', 5);
	console.log(song1.play());
}

// TEST PLAYLIST
function testPlaylist() {
	const testPlaylist = solve();
	const playlist2 = testPlaylist.getPlaylist('Rock and roll');
	const playable = { id: 1, title: 'Banana Rock', author: 'Wombles' };

	const result1 = playlist2.addPlayable(playable).getPlayableById(1);
	console.log(result1);
	console.log(playlist2.items); //Check if items are accessible from outside
	playlist2.removePlayable(playable);
	console.log(playlist2.items);

	for (let i = 0; i < 35; i += 1) {
		playlist2.addPlayable({ id: (i + 1), title: 'Rock' + (9 - (i % 10)) });
	};
	const result2 = playlist2.listPlayables(3, 10);
	console.log(result2);
}

//testPlayer();
//testAudio();
//testPlaylist();

console.log('The End');