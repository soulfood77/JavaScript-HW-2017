import * as data from "data";
import { load as loadTemplate } from "templates";

const $appContainer = $("#app-container");


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

    data.register($username, $password)
        .then(result => {
                console.log(result);
                login();
            },
            error => console.log(error.responseText));
}

export function login() {
    const $username = $("#input-username").val();
    const $password = $("#input-password").val();

    data.login($username, $password)
        .then(result => {
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