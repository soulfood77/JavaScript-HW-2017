let input;

function Div75(input){
    var num = +input[0],
    result = "";

    if(num % 5 === 0 && num % 7 === 0){
        result = "true " + num;
    }
    else{
        result = "false " + num;
    }
    return result;
}

//TESTS
 input = ['5'];
 Div75(input);