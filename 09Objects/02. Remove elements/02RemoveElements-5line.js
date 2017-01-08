// 5-line solution. Arrow functions were introduced with ES6 and won't work in BGCoder JavaScript(NodeJS) version

function removeElements(args) {
    const remVal = args[0];
    var result = args.filter(x => x !== remVal);
    result.forEach(x => console.log(x))
}

// ZERO TESTS
removeElements(['1', '2', '3', '2', '1', '2', '3', '2']);