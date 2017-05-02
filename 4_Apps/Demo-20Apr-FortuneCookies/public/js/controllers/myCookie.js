import * as data from 'data';

export function get(params) {
    return data.getMyCookie('api/my-cookie')
        .then(console.log('got my cookie'));
}