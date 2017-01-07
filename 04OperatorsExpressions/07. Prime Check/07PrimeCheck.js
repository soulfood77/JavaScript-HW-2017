let input = 0;

function checkIfPrime(input){
    var inNum = +input[0],
        maxDiv = Math.sqrt(inNum) | 0,
        i;

    if(inNum < 2){
        return false;
    }
    for(i = 2; i <= maxDiv; i++){
        if(inNum % i === 0){
            return false;
        }
    }    
    return true;
}
// ZERO TESTS
input = ['2'];
input = ['23'];
input = ['-3'];
input = ['0'];
input = ['1'];
checkIfPrime(input)