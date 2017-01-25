/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function sum() {
	return function solve(numArr) {
		if (numArr.length === 0) {
			return null;
		}
		if (numArr.some(x => isNaN(x))) {
			throw 'Something is wrong!';
		}
		let result = numArr.reduce((x, y) => (+x) + (+y));
		return result;
	};
}

module.exports = sum;

//Comment out the outer function 'sum' and module.exports and uncomment one of the tests below to debug in VSCode
//Edited tests-task-1.js file line 2 - added brackets
//console.log(solve([1, 2, 3]));
//console.log(solve([]));
//console.log(solve(["1", "John"]));