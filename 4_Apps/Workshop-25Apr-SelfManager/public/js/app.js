import { MyRouter } from 'myRouter';
import 'jquery';

const router = new MyRouter();

router.on('/home', test)
    .on('/todos', test)
    .on('/events', test);

function test() {
    console.log('hi there!');
}
console.log('Lovely!');

$(window).on('load', () => router.navigate())
$(window).on('hashchange', () => router.navigate());