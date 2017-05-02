import * as requester from 'requester';

export function getUsers() {
    return requester.get('api/users');
}

export function getTodos() {
    return requester.get('api/todos');
}

export function getEvents() {
    return requester.get('api/events');
}