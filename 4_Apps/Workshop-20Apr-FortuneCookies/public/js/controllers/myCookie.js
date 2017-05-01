import * as data from 'data';

export function myCookieController(params) {
    return data.getMyCookie('api/my-cookie')
        .then(console.log('got my cookie'));
}