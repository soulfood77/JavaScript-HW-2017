import * as requester from "requester";

const LOCALSTORAGE_AUTHKEY_NAME = "authKey";
const LOCALSTORAGE_USERNAME_NAME = "username";

export function getUsers() {
    return requester.get("api/users");
}

export function getTodos() {
    return requester.get("api/todos");
}

export function getEvents() {
    return requester.get("api/events");
}

export function register(username, password) {
    const options = {
        body: {
            username,
            passHash: password // TODO Hash pass here
        }
    };

    return requester.post("api/users", options) //setLocalItem(response.result)
        .then(response => {
                const user = response.result;
                setLocalStorage(user);
                // Check: can we return the whole user -> one line:
                // return setLocalStorage(response.result);
                return {
                    username: user.username
                }
            },
            error => console.log(error.responseText));
}

export function login(username, password) {
    const options = {
        body: {
            username: username,
            passHash: password // TODO Hash pass here
        }
    };

    return requester.put("api/users/auth", options)
        .then(response => {
                return setLocalStorage(response.result);
            },
            error => console.log(error.responseText));
}

export function logout() {
    localStorage.removeItem(LOCALSTORAGE_USERNAME_NAME);
    localStorage.removeItem(LOCALSTORAGE_AUTHKEY_NAME);
}

// Check if this should be in this file/module
function setLocalStorage(user) {
    localStorage.setItem(LOCALSTORAGE_USERNAME_NAME, user.username);
    localStorage.setItem(LOCALSTORAGE_AUTHKEY_NAME, user.authKey);
    return user;
}