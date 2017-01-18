function formatWithPlaceholders(args) {
    let person = JSON.parse(args[0]);
    let result = args[1];
    let match;

    for (let prop in person) {
        match = new RegExp('#{' + prop + '}', 'gi');
        result = result.replace(match, person[prop]);
    }
    console.log(result);
}

// ZERO TESTS
//formatWithPlaceholders([
//'{ "name": "John" }',
//"Hello, there! Are you #{name}?"
//]);

formatWithPlaceholders([
    '{ "name": "John", "age": 13 }',
    "My name is #{name} and I am #{age}-years-old"
]);

// Properties in string and in object might be in different order!
// How to pass a variable to a RegExp? From Daniela Popva