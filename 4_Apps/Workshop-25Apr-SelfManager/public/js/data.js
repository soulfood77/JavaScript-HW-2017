import * as requester from "requester";

const LOCALSTORAGE_AUTHKEY = "x-auth-key";
const LOCALSTORAGE_USERNAME = "username";
const options = {};

export function getUsers() {
    // Used in home to getLoggedUser
    getLoggedUser();

    return requester.get("api/users");
}

export function getTodos() {
    getLoggedUser();

    return requester.get("api/todos", options);
}

export function getEvents() {
    getLoggedUser();

    return requester.get("api/events", options);
}

export function addTodo(todo) {
    getLoggedUser();
    options.body = todo;

    return requester.post("api/todos", options)
        .then(response => {
            return response.result;
        });
}

export function addEvent(event) {
    getLoggedUser();
    options.body = event;

    return requester.post("api/events", options)
        .then(response => {
            return response.result;
        });
}

export function register(username, password) {
    options.body = {
        username,
        passHash: password // TODO Hash pass here
    };

    return requester.post("api/users", options)
        .then(response => setLocalStorage(response.result));
}

export function login(username, password) {
    options.body = {
        username,
        passHash: password // TODO Hash pass here
    };

    return requester.put("api/users/auth", options)
        .then(response => setLocalStorage(response.result));
}

export function logout() {
    localStorage.removeItem(LOCALSTORAGE_USERNAME);
    localStorage.removeItem(LOCALSTORAGE_AUTHKEY);
    options.headers = {};
}

// Check if this should be in this file/module
function setLocalStorage(user) {
    localStorage.setItem(LOCALSTORAGE_USERNAME, user.username);
    localStorage.setItem(LOCALSTORAGE_AUTHKEY, user.authKey);
    getLoggedUser();
    return user;
}

export function getLoggedUser() {
    options.body = {
        username: localStorage.getItem("username")
    };
    options.headers = {
        "x-auth-key": localStorage.getItem(LOCALSTORAGE_AUTHKEY)
    };

    if (options.body.username === 'undefined') {
        console.log("No user logged in");
    }
    return options;
}