/*Write a method that checks if the element at given position in given array of integers 
is larger than its two neighbours (when such exist). 
Write program that reads an array of numbers and prints how many of them are larger than their neighbours.
On the first line you will receive the number N - the size of the array
On the second line you will receive N numbers separated by spaces - the array
Print how many numbers in the array are larger than their neighbours*/

function findLarger(input) {
    let i,
        counter = 0,
        numArr = input[1].split(' ').map(Number);

    for (i = 1; i < numArr.length - 1; i++) {
        if (numArr[i] > numArr[i - 1] && numArr[i] > numArr[i + 1]) {
            counter++;
        }
    }
    console.log(counter);
}

// ZERO TEST
findLarger(['6', '-26 -25 -28 31 2 27'])