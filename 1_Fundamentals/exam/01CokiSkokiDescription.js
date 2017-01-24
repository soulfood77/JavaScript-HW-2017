function calculateSkoki(args) {
    let numbers = args.map(Number); //convert to number
    let len = numbers.shift(); // get first element and remove it 
    let result = 0;
    if (numbers[0] % 2 !== 0) {
        result = 1;
    }

    for (let i = 0; i < len; i += 1) {
        if (numbers[i] % 2 !== 0) { // odd 
            result *= numbers[i];
            //console.log(result);
        }
        else { // even
            result += numbers[i];
            i += 1;
            //console.log(result);
        }
        result %= 1024;
    }
    console.log(result);
}

// ZERO TESTS
// calculateSkoki([
//     '10',
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '0'
// ]);

calculateSkoki([
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9'
]);