function reverseString(args) {
    let str = args[0].split(''),
        result = str.reverse();    

    console.log(result.join(''));

}

reverseString(['sample']);