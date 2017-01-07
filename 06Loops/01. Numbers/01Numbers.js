/*Implement a javascript function that accepts an array with a single element - positive integer N as string and 
prints all the numbers from 1 to N inclusive, on a single line, separated by a whitespace.
The input will consist of an array with a single element - the number N.
The output should consist of a single line - the numbers from 1 to N, separated by a whitespace.*/

function printNums1toN (input){
    let numN = +input[0],
    result = "",
    i;

    for (i = 1; i <= numN; i++) {
        result += i + " ";
    }
    return result;
}

//ZERO TEST
printNums1toN(['10']);