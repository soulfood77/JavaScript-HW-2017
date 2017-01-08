/*Write a method that returns the maximal element in a portion of array of integers starting at given index.
Using it write another method that sorts an array in ascending / descending order. 
Write a program that sorts a given array.
On the first line you will receive the number N - the size of the array
On the second line you will receive N numbers separated by spaces - the array
Print the sorted array
Elements must be separated by spaces*/

function solve(input) {
    let i, j, maxNum, maxNumArr, maxIndex,
        sortedArr = [],
        length = input[0],
        numArr = input[1].split(' ').map(Number);


    function getMax(numArr) {
        maxIndex = 0;
        maxNum = numArr[0];
        for (i = 0; i < numArr.length; i += 1) {
            if (maxNum < numArr[i]) {
                maxIndex = i;
                maxNum = numArr[i];
            }
        }
        maxNumArr = numArr.splice(maxIndex, 1);
        return maxNum = maxNumArr[0];
    }

    function sortArr(numArr) {
        for (j = length - 1; j >= 0; j -= 1) {
            sortedArr[j] = getMax(numArr);
        }
        return sortedArr;
    }

    sortArr(numArr);    
    console.log(sortedArr.join(" "));
}

// ZERO TESTS
solve(['6', '3 4 1 5 2 6']);
//solve(['10', '36 10 1 34 28 38 31 27 30 20']);