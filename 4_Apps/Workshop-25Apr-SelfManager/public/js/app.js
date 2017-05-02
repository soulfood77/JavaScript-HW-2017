import 'jquery';
import { MyRouter } from 'myRouter';
import * as homeController from 'homeController';
import * as todosController from 'todosController';
import * as eventsController from 'eventsController';
import * as userController from 'userController';

const router = new MyRouter();

router
    .on('', () => location.hash = '/home') //Test if this works
    .on('/', () => location.hash = '/home')
    .on('/home', homeController.get)
    .on('/todos', todosController.get)
    .on('/events', eventsController.get)
    .on('/auth', userController.get)
    .on('/register', userController.register)
    .on('/login', userController.login)
    .on('/logout', userController.logout);

$(window).on('load', () => router.navigate())
$(window).on('hashchange', () => router.navigate());