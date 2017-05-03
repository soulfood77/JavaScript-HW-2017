import * as requester from "requester";

export function getUsers() {
    return requester.get("api/users");
}

export function getTodos() {
    return requester.get("api/todos");
}

export function getEvents() {
    return requester.get("api/events");
}

export function register(username, passHash) {
    const body = {
        username,
        passHash
    }
    return requester.post("api/users", body);
}

export function login(username, passHash, key) {
    const body = {
        username: username,
        passHash: passHash
    };
    const headers = {
        "x-auth-key": key
    };
    return requester.put("api/users/auth", body, headers);
}