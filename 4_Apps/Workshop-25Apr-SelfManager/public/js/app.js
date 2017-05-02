import 'jquery';
import { MyRouter } from 'myRouter';
import * as homeController from 'homeController';
import * as todosController from 'todosController';
import * as eventsController from 'eventsController';

const router = new MyRouter();

router
    .on('', () => location.hash = '/home') //Test if this works
    .on('/', () => location.hash = '/home')
    .on('/home', homeController.get)
    .on('/todos', todosController.get)
    .on('/events', eventsController.get);

function test() {
    console.log('hi there!');
}
console.log('Lovely!');

$(window).on('load', () => router.navigate())
$(window).on('hashchange', () => router.navigate());