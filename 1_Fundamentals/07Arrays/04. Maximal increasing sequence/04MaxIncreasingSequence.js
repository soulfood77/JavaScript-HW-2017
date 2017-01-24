/*Write a program that finds the length of the maximal increasing sequence in an array of N integers.
On the first line you will receive the number N
On the next N lines the numbers of the array will be given
Print the length of the maximal increasing sequence*/

function findMaxIncrSeq(input) {
    let i,
        length = +input[0],
        count = 1,
        maxCount = 1;

    for (i = 1; i < length; i+=1) {
        if (+input[i] < +input[i + 1]) {
            count++;
            if (maxCount < count) {
                maxCount = count;
            }
        }
        else {
            count = 1;
        }
    }
    console.log(maxCount);
    //return maxCount;
}

// ZERO TESTS
// findMaxIncrSeq(['8', '7', '3', '2', '3', '4', '2', '2', '4']);
findMaxIncrSeq(['10', '2', '1', '1', '2', '3', '4', '5', '2', '2', '1']);
