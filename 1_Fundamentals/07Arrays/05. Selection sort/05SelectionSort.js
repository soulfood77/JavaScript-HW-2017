/*Sorting an array means to arrange its elements in increasing order. 
Write a program to sort an array. 
Use the Selection sort algorithm: Find the smallest element, move it at the first position, 
find the smallest from the rest, move it at the second position, etc.
On the first line you will receive the number N
On the next N lines the numbers of the array will be given
Print the sorted array
Each number should be on a new line*/

function selectionSort(args) {
    let i, j, k, minValue,
        //input = args[0].split('\n'), //old input
        input = args.map(Number),
        length = +input[0];

    // loop through the array
    for (i = 1; i <= length; i++) {
        //reset min value
        minValue = Number.MAX_VALUE;
        //loop to find min value
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
    }
}

// ZERO TESTS
//selectionSort(['6', '3', '4', '1', '5', '2', '6']);
selectionSort(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']);