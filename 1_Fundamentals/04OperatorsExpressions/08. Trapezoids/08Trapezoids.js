let input;

function calcArea(input){
var a = +input[0],
    b = +input[1],
    h = +input[2],
    area;

    area = (a + b) * h / 2;
    return area.toFixed(7);
}

// input = ['5', '7', '12'];
// input = ['2', '1', '33'];
// input = ['8.5', '4.3', '2.7'];
// input = ['100', '200', '300'];
input = ['0.222', '0.333', '0.555']
calcArea(input);