import * as data from 'data';
import { load as loadTemplate } from 'templates';

const $appContainer = $('#app-container');
const LOCALSTORAGE_AUTH_KEY_NAME = 'authkey';
const AUTH_KEY_HEADER = 'x-auth-key';

export function get(params) {
    const { category } = params;

    loadTemplate('auth')
        .then(template => {
            $appContainer.html(template());
        })
}

export function login() {
    const username = $("#input-username").val();
    const password = $("#input-password").val();
    const passHash = password; // HASH ME

    data.login(username, passHash)
        .then(
            result => {
                localStorage.setItem(LOCALSTORAGE_AUTH_KEY_NAME, result.result.authKey);
                $('#auth-btn').addClass('hidden');
                $('#logout-btn').removeClass('hidden');
                //toastr.success(`User ${username} logged in successfully`);
                location.href = '#/home';
                console.log(result)
            },
            errorMsg => {
                //toastr.error(errorMsg);
                console.log(error)
            });
}

export function register() {
    const username = $("#input-username").val();
    const password = $("#input-password").val();
    const passHash = password; // HASH ME

    data.register(username, passHash)
        .then(
            result => {
                //toastr.success(`User ${username} registered successfully`);
                login()
            },
            errorMsg => console.log(error));
}

export function logout() {
    localStorage.removeItem(LOCALSTORAGE_AUTH_KEY_NAME);
    $('#auth-btn').removeClass('hidden');
    $('#logout-btn').addClass('hidden');
    // toastr.success('Logged out');
    location.href = '#/home';
}