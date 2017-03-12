function solve() {
	// Your classes
	const VALIDATOR = {
		checkString: function (str) {
			if (typeof str !== 'string') {
				throw 'Argument error - not a string';
			}
		},
		checkSymbols: function (str) {
			const reg = new RegExp(/[^A-Za-z\d ]/);
			if (reg.test(str)) {
				throw 'Argument error - string contains invalid symbols';
			}
		},
		checkNumRange: function (num, min, max) {
			if (typeof num !== 'number' || num < min || num > max) {
				//check in BGCoder if this works with backticks
				throw 'Argument error - number exceeds min or max value';
			}
		},
		checkApp: function (app) {
			if (!(app instanceof App)) {
				throw 'Argument error - not an app';
			}
		}
	}
	class App {
		constructor(name, description, version, rating) {
			VALIDATOR.checkString(name);
			VALIDATOR.checkNumRange(name.length, 1, 24);
			VALIDATOR.checkSymbols(name);
			this._name = name;
			this.description = description;
			this.version = version;
			this.rating = rating;
		}
		get name() {
			return this._name;
		}
		get description() {
			return this._description;
		}
		set description(des) {
			VALIDATOR.checkString(des);
			this._description = des;
		}
		get version() {
			return this._version;
		}
		set version(ver) {
			VALIDATOR.checkNumRange(ver, 0);
			this._version = ver;
		}
		get rating() {
			return this._rating;
		}
		set rating(rat) {
			VALIDATOR.checkNumRange(rat, 1, 10);
			this._rating = rat;
		}
		//version or options
		release(numOrObject) {
			if (typeof numOrObject === 'number') {
				VALIDATOR.checkNumRange(numOrObject, this.version);
				this.version = numOrObject;
			}
			else if (typeof numOrObject === 'object') {
				VALIDATOR.checkNumRange(numOrObject.version, this.version);
				this.version = numOrObject.version;
			}
			if (numOrObject.hasOwnProperty('description')) {
				VALIDATOR.checkString(numOrObject.description);
				this.description = numOrObject.description;
			}
			if (numOrObject.hasOwnProperty('rating')) {
				VALIDATOR.checkNumRange(numOrObject.rating, 1, 10);
				this.rating = numOrObject.rating;
			}
		}
	}
	class Store extends App {
		constructor(name, description, version, rating) {
			super(name, description, version, rating);
			this._apps = [];
		}
		get apps() {
			return this._apps;
		}
		set apps(apps) {
			this._apps = apps;
		}
		uploadApp(app) {
			VALIDATOR.checkApp(app);
			const appIndex = this.apps.findIndex(a => a.name === app.name);
			if (appIndex === -1) {
				this.apps.push(app);
			}
			else if (app.version < this.apps[appIndex].version) {
				throw 'Passed app version is older';
			}
			else {
				this.apps.splice(appIndex, 1);
				this.apps.push(app);

				// this.apps[appIndex].version = app.version;
				// this.apps[appIndex].description = app.description;
				// this.apps[appIndex].rating = app.rating;
			}
			return this;
		}
		takedownApp(name) {			
			const appIndex = this.apps.findIndex(a => a.name === name);
			if (appIndex === -1) {
				throw 'App to remove not found';
			}
			else {
				this._apps.splice(appIndex, 1);
			}
			return this;
		}
		search(pattern) {
			const reg = new RegExp(pattern, 'i');
			return this.apps
				.filter(a => reg.test(a.name))
				.sort((a, b) => a.name.localeCompare(b.name));
		}
		listMostRecentApps(count) {
			count = count || 10;
			const indx = this.apps.length - count;
			return this.apps.slice(indx).reverse();
		}
		listMostPopularApps(count) {
			count = count || 10;
			return this.apps
				.slice()
				.sort((a, b) => b.rating - a.rating)
				.splice(0, count);
		}
	}
	class Device {
		constructor(hostname, apps) {
			VALIDATOR.checkString(hostname);
			VALIDATOR.checkNumRange(hostname.length, 1, 32);
			apps.forEach(app => VALIDATOR.checkApp(app));
			this._hostname = hostname;
			this._apps = apps;
		}
		get hostname() {
			return this._hostname;
		}
		get apps() {
			return this._apps;
		}
		set apps(apps) {
			this._apps = apps;
		}
		search(pattern) {
			// What if one store has new version and another store has an older version?
			const reg = new RegExp(pattern, 'i');
			const stores = this.apps.filter(ap => Array.isArray(ap.apps));
			const appsFound = [];
			for (let store of stores) {
				const found = store.search(pattern);
				appsFound.push(...found);
			}
			return appsFound
				.sort((a, b) => a.name.localeCompare(b.name))
				.sort((a, b) => b.version - a.version)
				.filter((app, index, self) => self.findIndex(a => app.name) === index);
		}
		install(name) {
			if (this.apps.findIndex(a => a.name === name) !== -1) {
				return this; //app already installed, do nothing
			}
			//TODO FIX SEARCH to return only one version of app
			const appsFound = this.search(name);
			if (appsFound.length === 0) {
				throw 'App not found in installed stores';
			}
			const app = appsFound[0];
			this.apps.push(app);
			return this;
		}
		uninstall(name) { // Test if this works
			VALIDATOR.checkString(name);
			const appIndex = this.apps.findIndex(a => a.name === name);
			if (appIndex === -1) {
				throw 'App to remove not found';
			}
			else {
				this.apps.splice(appIndex, 1);
			}
			return this;
		}
		listInstalled() {
			return this.apps.slice().sort((a, b) => a.name.localeCompare(b.name));
		}
		update() {
			this.apps
				.slice()
				.forEach(a => {
					const foundInStore = this.search(a.name);
					const appIndex = this.apps.indexOf(a);
					if (foundInStore.length > 0 && foundInStore[0].version > a.version) {
						this.apps.splice(appIndex, 1);
						this.apps.push(foundInStore[0]);
					}
				});
			return this;
		}
	}
	return {
		createApp(name, description, version, rating) {
			// returns a new App object
			return new App(name, description, version, rating);
		},
		createStore(name, description, version, rating) {
			// returns a new Store object
			return new Store(name, description, version, rating);
		},
		createDevice(hostname, apps) {
			// returns a new Device object
			return new Device(hostname, apps);
		}
	};
}

// Submit the code above this line in bgcoder.com
module.exports = solve;

// TESTS
function test1() {
	const test1 = solve();
	const myApp = test1.createApp('myApp', 'Flower power', 1, 3);
	const BBB_PlayStore = test1.createStore('A STORE', 'Webstore something', 1, 3);
	BBB_PlayStore.uploadApp(myApp);
	const myApp_v2 = test1.createApp('myApp', 'Flower power updated', 2, 4);
	BBB_PlayStore.uploadApp(myApp_v2);
	const myApp_v1 = test1.createApp('myApp', 'Flower power', 1, 4);

	// Test error older version
	// AAA_STORE.uploadApp(myApp_v1); 

	// Test remove app
	//AAA_STORE.takedownApp('myApp'); 

	// Test search 
	const r_search = BBB_PlayStore.search('app');

	// Test list most recent apps

	for (let i = 0; i < 15; i += 1) {
		const bestApp = test1.createApp('best App' + i, 'desx' + (i * 6), 1, ((i % 10) + 1));
		BBB_PlayStore.uploadApp(bestApp);
	}
	const bestApp6_v2 = test1.createApp('best App6', 'Even better now', 2, 3);
	BBB_PlayStore.uploadApp(bestApp6_v2);

	const r_recent = BBB_PlayStore.listMostRecentApps(6);

	const r_popular = BBB_PlayStore.listMostPopularApps(8);


	const CCC_GalaxyStore = test1.createStore('B GALAXY STORE', 'Some text', 1, 3);

	const appsForStore = [bestApp6_v2, BBB_PlayStore, myApp_v2, CCC_GalaxyStore]
	const AAA_DEVICE = test1.createDevice('Onufriis phone', appsForStore);
	const r_searchPhoneApps = AAA_DEVICE.search('est');
	const r_listInstalledApps = AAA_DEVICE.listInstalled();

	BBB_PlayStore.uploadApp(test1.createApp('Farmville', 'Game', 1, 8));

	//AAA_DEVICE.install('Farmville');

	CCC_GalaxyStore.uploadApp(test1.createApp('Calendar', 'Organisation', 2, 5));
	BBB_PlayStore.uploadApp(test1.createApp('Calendar', 'Organisation', 5, 5));

	AAA_DEVICE.install('Calendar');

	BBB_PlayStore.uploadApp(test1.createApp('Calendar', 'Organisation', 9, 5))

	AAA_DEVICE.update();
}

const world = solve();
const S_Galaxy = world.createStore("Store Galaxy", "Description Galaxy", 1, 5);
S_Galaxy.uploadApp(world.createApp('Calendar', 'Description', 1, 7));
S_Galaxy.uploadApp(world.createApp('Messenger', 'Descr', 3, 9));
S_Galaxy.uploadApp(world.createApp('Facebook', 'Descr F', 2, 2));
const S_Google = world.createStore("Store Google", "Description Google", 4, 10);
S_Galaxy.uploadApp(world.createApp('Facebook', 'Descr', 6, 8));
S_Galaxy.uploadApp(world.createApp('Farmville', 'Descr', 2, 1));

const Farmville = world.createApp('Farmville', 'Descr', 3, 1);
const Facebook = world.createApp('Facebook', 'Descr', 3, 8);
const defaultApps = [S_Galaxy, Farmville, S_Google, Facebook];
const D_Device = world.createDevice('Pepis phone', defaultApps);

D_Device.update();

const Gmail = world.createApp('Gmail', 'Descr', 42, 10);
S_Google.uploadApp(Gmail);
D_Device.install('Gmail');
D_Device.uninstall('Farmville');

S_Galaxy.takedownApp('Calendar');

const searchError = S_Galaxy.search('baba');

console.log(S_Google.listMostRecentApps(2));
console.log(S_Galaxy.listMostPopularApps(3));
console.log(D_Device.listInstalled());
console.log('The End!');