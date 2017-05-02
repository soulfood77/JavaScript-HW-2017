// SystemJS allows us to use ES2015 sytnax
// Import side effect of jquery which sets the $ in the global scope
import 'jquery';

import { MyRouter } from 'myRouter';
import * as homeController from 'homeController';
import * as myCookieController from 'myCookieController';
import * as userController from 'userController';

const router = new MyRouter();

router
    .on('', () => location.hash = '/home') // fix later
    .on('/', () => location.hash = '/home')
    .on('/home', homeController.get)
    .on('/home/:category', homeController.get)
    .on('/my-cookie', homeController.get)
    .on('/auth', userController.get)
    .on('/register', userController.register)
    .on('/login', userController.login)
    .on('/logout', userController.logout);

$(window).on('load', () => router.navigate());
$(window).on('hashchange', () => router.navigate());


// remaining TODO:
// pass x-auth-key pass as header
// create other templates