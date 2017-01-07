/*Write a script that finds the biggest of three numbers. Use nested if statements.
Input
The input will consist of an array containing three values represented as strings
Output
The output should be a single line containing a number*/

let input = 0;

// SUBMIT with ES 2015, not NodeJS !!
function findLargest(input) {
    let a = +input[0],
        b = +input[1],
        c = +input[2];

    if (a >= b && a >= c) {
        return `${a}`; // must return a string value, otherwise 0 is not recognised in output
    }
    if (b >= c && b >= a) {
        return `${b}`;
    }
    if (c >= a && c >= b) {
        return `${c}`;
    }
}

// ZERO TESTS
input = ['5', '2', '2'];
input = ['-2', '-2', '1'];
input = ['-2', '4', '3'];
input = ['0', '-2.5', '5'];
input = ['-0.1', '-0.5', '-1.1'];
findLargest(input);