/*Write a program that finds the most frequent number in an array of N elements.
On the first line you will receive the number N
On the next N lines the numbers of the array will be given
Print the most frequent number and how many time it is repeated
Output should be REPEATING_NUMBER (REPEATED_TIMES times)*/

function findMostFrequentNum(input) {
    var i, j, number, temp1, temp2,
        counter = 0,
        maxOccur = 1,
        length = input[0];

    for (i = 1; i <= length; i++) {
        for (j = 1; j <= length; j++) {
            temp1 = input[i];
            temp2 = input[j];
            if (input[i] === input[j]) {
                counter++;
            }
        }
        if(maxOccur < counter){
            maxOccur = counter;
            number = input[i];
        }
        counter =0;
    }
    console.log(number + ' (' + maxOccur + ' times)');

}

// ZERO TESTS
findMostFrequentNum(['13', '4', '1', '1', '1', '2', '3', '1', '4', '1', '2', '4', '9', '3']);