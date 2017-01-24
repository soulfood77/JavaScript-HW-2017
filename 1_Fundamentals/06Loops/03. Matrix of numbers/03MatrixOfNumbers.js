/*Write a javascript function that prints a matrix like in the examples below by a given integer N. Use two nested loops.
Challenge: achieve the same effect without nested loops.
The input array will contain a single number as string, the integer N.*/

function printMatrixOfNums(input){
    let size = +input[0],
        result = "",
        i,
        row;

    for(row = 0; row < size; row++){
        for (i = row + 1; i <= size + row; i++){
            result += i + " ";
        }
        console.log(result);
        result = "";
    }
}

// ZERO TESTS
printMatrixOfNums(['5']);
