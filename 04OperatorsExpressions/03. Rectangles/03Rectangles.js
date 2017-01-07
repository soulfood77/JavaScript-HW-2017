let input = 0;

function rectCalc(input){
    var w = +input[0],
    h = +input[1],
    area = w * h,
    perimeter = (w * 2) + (h * 2);

    return area.toFixed(2) + " " + perimeter.toFixed(2);    
}

// TESTS
input = [ '5', '5' ];
rectCalc(input);