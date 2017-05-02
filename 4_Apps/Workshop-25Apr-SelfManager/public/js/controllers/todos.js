import * as data from 'data';
import { load as loadTemplate } from 'templates';

const $appContainer = $('#app-container');

export function get() {
    Promise.all([
            loadTemplate('todos'),
            data.getTodos()
        ])
        .then((template, todos) => {
                console.log(todos);
                $appContainer.html(template());
            },
            errorMsg => {
                $appContainer.html(errorMsg.responseText);
            });
}