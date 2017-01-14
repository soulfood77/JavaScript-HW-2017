function countSubstring(args){
let searchVal = new RegExp(args[0], 'gi'),
    str = args[1],

    result = str.match(searchVal);

    console.log(result.length); 
}

// ZERO TESTS
countSubstring([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);