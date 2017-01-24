let input = 0;

//use if statement to return 0 when number shorter than 3 digits
function thirdDig(input){
    var inStr = input[0];

    if(inStr.length < 3){
        return 'false 0';
    }
    else if(+inStr[inStr.length - 3] === 7){
        return true;
    }    
    else{
        return 'false ' + inStr[inStr.length - 3];
    }
}

// TESTS
input = ['5'];
input = ['701'];
input = ['877'];
thirdDig(input);

//calculate to output 0 when number shorter than 3 digits
function thirdDiv(input){
    var inNum = +input[0],
        i;

    for(i = 1; i < 3; i++){
        inNum /= 10;        
    }
    for(i = 1; i < 2; i++){
        inNum %= 10;
    }
    
    i = inNum | 0;

    if(i === 7){
        return true;
    }
    else{
        return 'false ' + i;
    }
}

input = ['877'];
thirdDiv(input);