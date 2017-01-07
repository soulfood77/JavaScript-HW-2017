/*Write a script that shows the sign (+, - or 0) of the product of three real numbers,
without calculating it. Use a sequence of if operators.
Input
The input will consist of an array containing three values - a, b and c represented as strings
Output
The output should be a single line containing +, - or 0*/

let input = 0;

// SUBMIT with ES 2015, not NodeJS !!
function getSign(input) {
    let a = +input[0],
        b = +input[1],
        c = +input[2];

    if (a === 0 || b === 0 || c === 0) {
        return "0";
    }
    if (a < 0 && b < 0 && c < 0) {
        return "-";
    }
    if (a < 0 && b > 0 && c > 0) {
        return "-";
    }
    if (a > 0 && b < 0 && c > 0) {
        return "-";
    }
    if (a > 0 && b > 0 && c < 0) {
        return "-";
    }
    else {
        return "+";
    }
}

// ZERO TESTS
input = ['5', '2', '2'];
input = ['-2', '-2', '1'];
input = ['-2', '4', '3'];
input = ['0', '-2.5', '4'];
input = ['-1', '-0.5', '-5.1'];
getSign(input);