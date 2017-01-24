/*Write a program that finds the index of given element X in a sorted array of N integers by using the Binary search algorithm.
On the first line you will receive the number N
On the next N lines the numbers of the array will be given
On the last line you will receive the number X
Print the index where X is in the array
If there is more than one occurence print the first one
If there are no occurences print -1*/


// ONE WRONG ANSWER!!
function binSear(input) {
    let midPoint,
        searNum = +input[input.length - 1],
        slicedArr = input.slice(1, input.length - 1), //remove first and last items from array
        start = 0,
        end = slicedArr.length - 1;

		console.log('Start:' + start);
		console.log('End:' + end);
		console.log('Arr:');
		console.log(slicedArr);
		console.log('Search:' + searNum);
		

		var pass = 1;
		
    while (start <= end) {
		
		
        midPoint = Math.round((end + start) / 2);
		
		console.log('S' + start);
		console.log('E' + end);
		console.log('M' + midPoint);
		console.log('-----------------   ' + pass);
		pass++;
		
        if (+slicedArr[midPoint] < searNum) {
            start = midPoint + 1;
        }
        else if (+slicedArr[midPoint] > searNum) {
            end = midPoint - 1;
        }
        else if (+slicedArr[midPoint] === searNum) {
            return midPoint;
        }
    }
    return -1;
}

// ZERO TESTS
//binSear(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);
x = binSear(['4', '0', '0', '0', '0', '0']);
console.log('> INDEX: ' + x);
//tried to trim array start and end with splice but it affects the original array  trimArr = input.splice(1, +input[0]) .splice(start index, length of items to be moved to new array)
