let input;

function checkPoint(input){
var x = +input[0],
    y = +input[1],

    //Check if point is in circle
    xCir = 1,
    yCir = 1,
    rCir = 1.5,
    a = x - xCir,
    b = y - yCir,
    c = Math.sqrt((a * a) + (b * b)),
    inCircle = "inside circle";
    
    if(c > rCir){
        inCircle = "outside circle";
    }

    //Check if point is in square 
var left = -1,
    top = 1,
    right = left + 6,
    bottom = top - 2,
    inRectangle = "inside rectangle";

    if(y > top || y < bottom){
        inRectangle = "outside rectangle";
    }
    if(x > right || x < left){
        inRectangle = "outside rectangle";
    }

    return inCircle + " "+ inRectangle;
}

// ZERO TESTS
// input = ['2.5', '2'];
// input = ['0', '1'];
// input = ['2.5', '1'];
input = ['1', '2'];
checkPoint(input);