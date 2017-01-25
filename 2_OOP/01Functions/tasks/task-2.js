/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes() {
	return function solve(num1, num2) {
		num1 = +num1;
		num2 = +num2;

		if (isNaN(num1) || isNaN(num2)) {
			throw 'NOOOOO! Something is wrong!';
		}

		let primes = [];

		for (let k = num1; k <= num2; k += 1) {
			if (isPrime(k)) {
				primes.push(k);
			}
		}
		return primes;

		function isPrime(number) {
			let maxDiv = Math.round(Math.sqrt(num2)); //round to int

			if (number < 2) {
				return false;
			}
			if (number === 2) {
				return true;
			}

			for (let i = 2; i <= maxDiv; i += 1) {
				if (number % i === 0) {
					return false;
				}
			}
			return true;
		}
	};
}

module.exports = findPrimes;

// ZERO TESTS - comment out lines the outer function 'findPrimes' and module.exports and uncomment one of the lines below to debug/test in VSCode
// Edited tests-task-2.js file line 4 - added brackets
// solve(1, 5); //[2, 3, 5]
// solve(0, 5); //[2, 3, 5]
// solve("1", "5"); //[2, 3, 5]
// solve(); //throw error
// solve(1); //throw error
// solve("Frisbi") //thrwo error
// solve(258, 262) //[](empty array)