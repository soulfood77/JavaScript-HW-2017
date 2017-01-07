/*Sort 3 real values in descending order. Use nested if statements.
Don’t use arrays and the built-in sorting functionality.

Input
The input will consist of an array containing three values represented as strings
Output
The output should be a single line containing three numbers separated by spaces 
*/

let input = 0;

// SUBMIT with ES 2015, not NodeJS !!
function sort3Nums(input) {
    let n1 = +input[0],
        n2 = +input[1],
        n3 = +input[2],
        largest = 0,
        middle = 0,
        smallest = Number.MAX_VALUE;

    if (n1 >= n2 && n1 >= n3) {
        largest = n1;
        if (n2 >= n3) {
            middle = n2;
            smallest = n3;
        }
        else {
            middle = n3;
            smallest = n2;
        }
    }
    if (n2 >= n3 && n2 >= n1) {
        largest = n2;
        if (n1 >= n3) {
            middle = n1;
            smallest = n3;
        }
        else {
            middle = n3;
            smallest = n1;
        }
    }
    if (n3 >= n1 && n3 >= n2) {
        largest = n3;
        if (n1 >= n2) {
            middle = n1;
            smallest = n2;
        }
        else {
            middle = n2;
            smallest = n1;
        }
    }

    return largest + " " + middle + " " + smallest;
}


// ZERO TESTS
input = ['5', '1', '2'];
input = ['-2', '-2', '1'];
input = ['-2', '4', '3'];
input = ['0', '-2.5', '5'];
input = ['-1.1', '-0.5', '-0.1']; //?
input = ['10', '20', '30'];
input = ['1', '1', '1'];
sort3Nums(input);