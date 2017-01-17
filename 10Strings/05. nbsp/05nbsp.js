function replaceNBSP(args){
    let input = args[0].replace(/ /g, '&nbsp;');

    console.log(input);
}

// ZERO TESTS
// replaceNBSP([ 'hello world' ]);
replaceNBSP([ 'This text contains 4 spaces!!' ]);