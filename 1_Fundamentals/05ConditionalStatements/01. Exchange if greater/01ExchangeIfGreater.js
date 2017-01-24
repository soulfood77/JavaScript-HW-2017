/*Write an if statement that takes two double variables a and b 
and exchanges their values if the first one is greater than the second.
As a result print the values a and b, separated by a space.

Input
The input will consist of an array containing two values - a and b represented as strings

Output
The output should be a single line containing two numbers
*/
let input = 0; 


// SUBMIT with ES 2015, not NodeJS !!
function exchangeGreater(input) {    
    let a = +input[0],
        b = +input[1],
        temp;

    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }
    console.log(`${a} ${b}`);
}

// ZERO TESTS
input = ['5', '2'];
input = ['3', '4'];
input = ['5.5', '4.5'];
exchangeGreater(input);