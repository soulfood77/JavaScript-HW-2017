/*Write a method that returns the index of the first element in array that is larger than its neighbours,
or -1, if there is no such element.
On the first line you will receive the number N - the size of the array
On the second line you will receive N numbers sepated by spaces - the array
Print the index of the first element that is larger than its neighbours or -1 if none are*/

function findFirstLarger(input) {
    let i,
        numArr = input[1].split(' ').map(Number);

    for (i = 1; i < numArr.length - 1; i++) {
        if (numArr[i] > numArr[i - 1] && numArr[i] > numArr[i + 1]) {
            return i;
        }
    }
    return -1;    
}

// ZERO TEST
findFirstLarger(['6', '-26 -25 -28 31 2 27'])