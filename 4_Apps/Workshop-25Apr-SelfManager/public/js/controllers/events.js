import * as data from 'data';
import { load as loadTemplate } from 'templates';

const $appContainer = $('#app-container');

export function get() {
    loadTemplate('events').then(template => {
        $appContainer.html(template());
    })
}