import * as data from 'data';
import { load as loadTemplate } from 'templates';

const $appContainer = $('#app-container');
const $home = $('#home');

export function get() {
    // Fix active class to be removed when other menu items clicked
    loadTemplate('home').then(template => {
        $home.addClass('active');
        $appContainer.html(template());
    });
}