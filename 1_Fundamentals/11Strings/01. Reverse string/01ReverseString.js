function reverseString(args) {
    let str = args[0].split(''),
        len = str.length,
        result = [];    

        for (let i = 0; i < len; i++) {
            result[i] = str[len -i- 1];           
        }

    console.log(result.join(''));
}

reverseString(['sample']);