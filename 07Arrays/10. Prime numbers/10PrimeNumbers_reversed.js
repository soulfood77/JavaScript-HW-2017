/*Write a program that finds all prime numbers in the range [1 ... N]. 
Use the Sieve of Eratosthenes algorithm. 
On the first line you will receive the number N
Print the biggest prime number which is <= N*/

function sieveEratos(N) {
    let i, j, k, n,
        valArr = new Array();

    for (i = 2; i <= Math.sqrt(N); i++) {
        if (N % i != 0) {
            n = Math.floor(N / i) * i;
        }
        else {
            n = N;
        }
        if (valArr[i] != false) {
            for (k = (n - (i * i)) / i; k >= 0; k--) {
                j = (i * i) + k * i;
                if (valArr[j] != false) {
                    valArr[j] = false;
                }
                if (j < N) {
                    break;
                }
            }
        }
    }
    for (i = valArr.length; i >= 2; i--) {
        if (valArr[i] != false) {
            console.log(i);
            break;
            //return i;
        }
    }
}

// ZERO TESTS
//sieveEratos(30); //29
//sieveEratos(13); //13
sieveEratos(126); //113
//sieveEratos(26); //23