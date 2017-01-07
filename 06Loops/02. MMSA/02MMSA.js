/*Implement a javascript function that accepts an array of floating-point numbers as strings and 
returns the minimal, the maximal number, the sum and the average of all numbers 
(displayed with 2 digits after the decimal point).

The array that will be passed as a parameter to your function will contain the numbers of the sequence.
You output must always consist of exactly 4 lines - the minimal element on the first line, 
the maximal on the second, the sum on the third and the average on the fourth, in the following format:
min=3.00
max=6.00
sum=9.00
avg=4.50*/

function printMMSA(input) {
    var valNum = 0,
        minVal = +input[0], //Number.MAX_VALUE causes 2 wrong answers
        maxVal = +input[0], //Number.MIN_VALUE causes 2 wrong answers
        avgVal = 0,
        sumVal = 0,
        i;

    for (i = 0; i < input.length; i += 1) {
        valNum = +input[i];
        sumVal += valNum;

        if(valNum >= maxVal){
            maxVal = valNum;
        }
        if(valNum <= minVal){
            minVal = valNum;
        }
    }
    avgVal = sumVal / input.length;

    console.log("min=" + minVal.toFixed(2));
    console.log("max=" + maxVal.toFixed(2));
    console.log("sum=" + sumVal.toFixed(2));
    console.log("avg=" + avgVal.toFixed(2));
}

// ZERO TESTS
// printMMSA(['2', '5', '1']);
// printMMSA(['2', '-1', '4']);
printMMSA(['50', '-98', '1', '3', '34', '78', '21', '0', '-66', '-1000', '345']);

// help from Daniela Popova on GitHub https://github.com/DanielaPopova/TelerikAcademy_Homeworks/blob/master/JS%20Fundamentals/04.%20Loops/03.MMSA.js