import * as data from "data";
import { load as loadTemplate } from "templates";

const $appContainer = $("#app-container");
const LOCALSTORAGE_AUTH_KEY_NAME = "authKey";
const AUTH_KEY_HEADER = "x-auth-key";

export function get() {
    loadTemplate("auth").then(template => {

        // Why are we able to get the users?
        data.getUsers()
            .then(users => console.log(users));

        $appContainer.html(template());
    })
}

export function register() {
    const $username = $("#input-username").val();
    const $password = $("#input-password").val();
    const passHash = $password; // TODO: Hash pass

    data.register($username, passHash)
        .then(result => {
                localStorage.setItem(LOCALSTORAGE_AUTH_KEY_NAME, result.result.authKey);
                console.log(result);
                login();
            },
            error => console.log(error.responseText));
}

export function login() {
    const $username = $("#input-username").val();
    const $password = $("#input-password").val();
    const passHash = $password; // TODO: Hash pass
    const key = localStorage.getItem(LOCALSTORAGE_AUTH_KEY_NAME);

    data.login($username, passHash, key)
        .then(result => {
                //localStorage.setItem(LOCALSTORAGE_AUTH_KEY_NAME, result.result.authKey);
                $("#auth-btn").addClass("hidden");
                $("#logout-btn").removeClass("hidden");
                location.href = "#/home";
            },
            error => console.log(error.responseText));
}

export function logout() {
    localStorage.removeItem(LOCALSTORAGE_AUTH_KEY_NAME);
    $("#auth-btn").removeClass("hidden");
    $("#logout-btn").addClass("hidden");
    location.href = "#/home";
}