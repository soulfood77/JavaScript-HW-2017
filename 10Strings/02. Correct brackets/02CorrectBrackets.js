function correctBrackets(args) {
    let left = 0, right = 0,
        str = args[0],
        len = str.length;

    for (let i = 0; i < len; i++) {
        if(str[i] === '('){
            left += 1;
        }
        if(str[i]===')'){
            right += 1;
        }
    }

    if (left === right) {
        console.log('Correct');
    }
    else{
        console.log('Incorrect');
    }
}

// ZERO TESTS
//correctBrackets(['((a+b)/5-d)']);
correctBrackets([ ')(a+b))' ]);