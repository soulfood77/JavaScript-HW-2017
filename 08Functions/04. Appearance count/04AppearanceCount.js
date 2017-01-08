/*Write a method that counts how many times given number appears in a given array.
Write a test program to check if the method is working correctly.
On the first line you will receive a number N - the size of the array
On the second line you will receive N numbers separated by spaces - the numbers in the array
On the third line you will receive a number X
Print how many times the number X appears in the array*/

function countRepNum(input) {
    let i,
        repCount = 0,
        numArr = input[1].split(' ').map(Number),
        searchNum = +input[2];

    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] === searchNum) {
            repCount++;
        }
    }
    console.log(repCount);
}

// ZERO TEST
countRepNum(['8', '28 6 21 6 -7856 73 73 -56', '73']);