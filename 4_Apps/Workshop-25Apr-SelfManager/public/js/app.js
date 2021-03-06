import 'jquery';
import { MyRouter } from 'myRouter';
import * as homeController from 'homeController';
import * as todosController from 'todosController';
import * as eventsController from 'eventsController';
import * as userController from 'userController';

const router = new MyRouter();

router
    .on('', homeController.load)
    .on('/', homeController.load)
    .on('/home', homeController.load)
    .on('/todos', todosController.load)
    .on('/newTodo', todosController.newTodo)
    .on('/addTodo', todosController.add)
    .on('/events', eventsController.load)
    .on('/newEvent', eventsController.newEvent)
    .on('/addEvent', eventsController.add)
    .on('/auth', userController.load)
    .on('/register', userController.register)
    .on('/login', userController.login)
    .on('/logout', userController.logout);

// Doesnt work: window.on load event is already executed
$(window).on('load', () => router.navigate());
$(window).on('hashchange', () => router.navigate());

router.navigate();

// TODOs:
// Fix exports and imports to not use *
// All errors to use toastr instead clg
// Should all promises have error clause?