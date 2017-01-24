/*Write a script that asks for a digit (0-9), and depending on the input, shows the digit as a word (in English).
Print not a digit in case of invalid input.
Use a switch statement.

Input
The input will consist of an array containing a single string
Output
The output should be a single line
*/

function convertDigitToWord (input){
    let digit = input[0];

    switch (digit) {
        case "0": return "zero";
        case "1": return "one";
        case "2": return "two";
        case "3": return "three";
        case "4": return "four";
        case "5": return "five";
        case "6": return "six";
        case "7": return "seven";
        case "8": return "eight";
        case "9": return "nine";
        default: return "not a digit";
    }
}

// ZERO TESTS
digitToWord(['2']);
digitToWord(['1']);
digitToWord(['0']);
digitToWord(['5']);
digitToWord(['-0.1']);
digitToWord(['9']);
digitToWord(['10']);