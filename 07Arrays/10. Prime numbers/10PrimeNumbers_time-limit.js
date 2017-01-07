/*Write a program that finds all prime numbers in the range [1 ... N]. 
Use the Sieve of Eratosthenes algorithm. 
On the first line you will receive the number N
Print the biggest prime number which is <= N*/

function sieveEratos(N) {
    let i, j, k,
        valArr = new Array();

    //Let A be an array of Boolean values, indexed by integers 2 to n, initially all set to true.
    for (i = 0; i <= N; i++) {
        valArr[i] = true;
    }

    //for i = 2, 3, 4, ..., not exceeding √n:
    for (i = 2; i <= Math.sqrt(N); i++) {
        // if A[i] is true:
        if (valArr[i] === true) {
            //for j = i^2, i^2+i, i^2+2i, i^2+3i, ..., not exceeding n :
            for (k = 0, j = 0; j <= N; k++) {
                j = (i * i) + k * i;
                valArr[j] = false;
            }
        }
    }
    // Output: the largest i for which A[i] is true.
    for (i = valArr.length - 1; i >= 2; i--) {
        if (valArr[i] === true) {
            return i;
        }
    }
}

// ZERO TESTS
sieveEratos(13); //13
//sieveEratos(126); //113
//sieveEratos(26); //23
