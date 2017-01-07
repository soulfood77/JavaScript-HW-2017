/*Sorting an array means to arrange its elements in increasing order. 
Write a program to sort an array. 
Use the Selection sort algorithm: Find the smallest element, move it at the first position, 
find the smallest from the rest, move it at the second position, etc.
On the first line you will receive the number N
On the next N lines the numbers of the array will be given
Print the sorted array
Each number should be on a new line*/

function selectionSort(input) {
    let i, j, k,
        //input = args[0].split('\n'), //old input
        minValue = Number.MAX_VALUE,
        length = +input[0];

    // loop through the array
    for (i = 1; i <= length; i++) {
        //find min value
        for (j = 1; j <= length; j++) {
            if (input[j] < minValue) {
                minValue = input[j];
            }
        }
        //output min value
        console.log(minValue);
        //clear min value from array
        for (k = 1; k <= length; k++) {
            if (input[k] === minValue) {
                input[k] = Number.MAX_VALUE;
                break;
            }
        }
        //reset min value
        minValue = Number.MAX_VALUE;
    }
}

// ZERO TESTS
//selectionSort(['6', '3', '4', '1', '5', '2', '6']);
//selectionSort(['10\n36\n10\n1\n34\n28\n38\n31\n27\n30\n20']); //test with old input, still doesn't work