/*Write a program that finds the length of the maximal sequence of equal elements in an array of N integers.
On the first line you will receive the number N
On the next N lines the numbers of the array will be given
Print the length of the maximal sequence*/

function findMaxSeq(inArr) {
    let i,
        length = +inArr[0],
        counter = 1,
        maxSeq = 1;

    for (i = 1; i < length; i++) { //why length and not length - 1?? Because we start from index 1, not from 0!
        if (+inArr[i] == +inArr[i + 1]) { // works in BGCoder regardless if comparing numbers or strings, VSCode gives strange results when comparing strings
            counter++;
            if (counter > maxSeq) {
                maxSeq = counter;
            }
        }
        else {
            counter = 1;
        }
    }
    return maxSeq;
}

// ZERO TESTS
//findMaxSeq(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);
findMaxSeq(['100', '0', '0', '-22321', '0', '3432452435', '-22321', '-22321', '-22321', '13455', '5408', '13455', '13', '16345', '345', '2', '67', '0', '13', '98', '16345', '68765', '548', '987', '-22321', '1']);
//findMaxSeq(['10\n36\n10\n1\n34\n28\n38\n31\n27\n30\n20']);