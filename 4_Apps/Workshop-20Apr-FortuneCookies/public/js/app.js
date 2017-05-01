// SystemJS allows us to use ES2015 sytnax
// Import side effect of jquery which sets the $ in the global scope
import 'jquery';

import { MyRouter } from 'myRouter';
import { homeController } from 'homeController';
import { myCookieController } from 'myCookieController';

const router = new MyRouter();

router
    .on('', () => location.hash = '/home') // fix later
    .on('/', () => location.hash = '/home')
    .on('/home', homeController)
    .on('/home/:category', homeController)
    .on('/my-cookie', homeController);

$(window).on('load', () => router.navigate());
$(window).on('hashchange', () => router.navigate());