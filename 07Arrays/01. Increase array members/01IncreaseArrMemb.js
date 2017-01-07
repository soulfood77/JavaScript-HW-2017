function increaseArrNums(input){
    let i, 
        numArr = [''],
        N = +input[0];
    
    for(i = 0; i < N; i += 1){
        numArr[i] = i * 5;
        console.log(numArr[i]);
    }
}

// ZERO TESTS
increaseArrNums(['5']);