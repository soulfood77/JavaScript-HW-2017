/*Write a method GetMax() with two parameters that returns the larger of two integers.
Write a program that reads 3 integers from the console and prints the largest of them using the method GetMax().
On the first line you will receive 3 integers separated by spaces
Print the largest of them*/

function GetMax(input){
    let i,
        maxNum = Number.NEGATIVE_INFINITY,
        numArr = input[0].split(" ");
    
    for (i = 0; i < numArr.length; i++){
        if(maxNum < +numArr[i]){
            maxNum = numArr[i];
        }
    }
    console.log(maxNum);

}

// ZERO TESTS
//GetMax(['8 3 6']);
GetMax(['-7 -19 -19']);