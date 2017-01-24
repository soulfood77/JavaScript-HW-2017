let input = 0;

// --------------------- SUBMIT FROM HERE ON ---------------------
function solve(args) {
    var num = +args[0];    
    if (num % 2 === 0)
    {
        console.log("even " + num);
    }
    else
    {
        console.log("odd " + num);
    }
}

// --------------------- NOT FOR SUBMISSION ---------------------
// TESTS
input = ['3']; 
solve(input);

// Code which doesn't work in BGCoder because SUBMIT with ES 2015, instead of NodeJS is not possible
function solve(args) {
    num = +args;    
    //console.log(args); // test if the argument is parsed to number    
    if (args % 2 === 0)
    {
        console.log(`even ${num}`);
    }
    else
    {
        console.log(`odd ${num}`);
    }
}
