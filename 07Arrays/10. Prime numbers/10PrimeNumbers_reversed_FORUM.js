/*Write a program that finds all prime numbers in the range [1 ... N]. 
Use the Sieve of Eratosthenes algorithm. 
On the first line you will receive the number N
Print the biggest prime number which is <= N*/

function sieveEratos(N) {
    let i, divider, isPrime;

    for (i = N; i >= 0; i--) {
        isPrime = true;

        for (divider = 2; divider < Math.sqrt(N); divider++) {
            if (i % divider === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
            return;
            //return i;
        }
    }
}

// ZERO TESTS
//sieveEratos(30); //29
//sieveEratos(13); //13
//sieveEratos(126); //113
sieveEratos(26); //23
