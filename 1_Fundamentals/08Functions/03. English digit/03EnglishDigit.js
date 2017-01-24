/*Write a method that returns the last digit of given integer as an English word.
Write a program that reads a number and prints the result of the method.
On the first line you will receive a number
Print the last digit of the number as an English word*/

function convertLastDigitToWord(input) {
    let numStr = input[0];

    switch (numStr[numStr.length - 1]) {
        case '0': return 'zero';
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '5': return 'five';
        case '6': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return 'nine';
        default:
    }
}

// ZERO TEST
convertLastDigitToWord(['42']);