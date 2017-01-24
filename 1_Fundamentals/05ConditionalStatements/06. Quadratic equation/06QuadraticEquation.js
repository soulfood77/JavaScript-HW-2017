/* Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots). Calculates and prints its real roots.
Note: Quadratic equations may have 0, 1 or 2 real roots.

Input
The input will consist of an array containing three values - a, b and c represented as strings
Output
The output should be a single line containing the real roots (see sample tests)
Print numbers with two digits of precision after the floating point
If there are two roots then x1 < x2
*/

function quadEquation(input) {
    let a = +input[0],
        b = +input[1],
        c = +input[2],
        discr = b * b - 4 * a * c, // discriminant
        x1 = 0,
        x2 = 0;

    if (discr < 0) {
        return "no real roots";
    }
    else if (discr === 0) {
        x1 = -1 * (b / (2 * a));
        return "x1=" + "x2=" + x1.toFixed(2);
    }
    else {        
        x1 = ((-1 * b) - Math.sqrt(discr)) / (2 * a);
        x2 = ((-1 * b) + Math.sqrt(discr)) / (2 * a);
        if(x1 < x2){            
        return "x1=" + x1.toFixed(2) + "; x2=" + x2.toFixed(2);
        }
        else{            
        return "x1=" + x2.toFixed(2) + "; x2=" + x1.toFixed(2);
        }
    }
}

// ZERO TESTS
// quadEquation(['2', '5', '-3']);
// quadEquation(['-1', '3', '0']);
// quadEquation(['5', '2', '8']);
// quadEquation(['0.2', '9.572', '0.2']);

quadEquation(['-0.5', '4', '-8']);

//About quadratic equations https://www.matematika.bg/algebra/quadratic-equation.html