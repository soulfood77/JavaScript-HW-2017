function solve(args) {
    var i, pointA, pointB, line, len, a, b, c,
        linesArr = [],
        input = args.map(Number);

    for (i = 0; i < input.length; i += 4) {
        pointA = makePoint(input[i], input[i + 1]);
        pointB = makePoint(input[i + 2], input[i + 3]);

        line = makeLine(pointA, pointB);
        linesArr.push(line);
        console.log(line.len.toFixed(2));
    }

    console.log(checkTriangle(linesArr[0].len, linesArr[1].len, linesArr[2].len));

    function makePoint(x, y) {
        return {
            x: x,
            y: y
        }
    }

    function makeLine(pointA, pointB) {
        return {
            pointA: pointA,
            pointB: pointB,
            len: calcLength(pointA, pointB)
        }
    }

    function calcLength(pointA, pointB) {
        a = Math.abs(pointA.x - pointB.x);
        b = Math.abs(pointA.y - pointB.y);
        c = Math.sqrt((a * a) + (b * b));
        return c;
    }

    function checkTriangle(a, b, c) {
        if ((a + b) > c && (a + c) > b && (b + c) > a) {
            return 'Triangle can be built';
        }
        else {
            return 'Triangle can not be built';
        }
    }
}

// ZERO TESTS
// solve([
//     '5', '6', '7', '8',
//     '1', '2', '3', '4',
//     '9', '10', '11', '12'
// ]);

solve([
    '7', '7', '2', '2',
    '5', '6', '2', '2',
    '95', '-14.5', '0', '-0.123'
]);

// solution help from Daniela_Popova https://github.com/DanielaPopova/TelerikAcademy_Homeworks/blob/master/JS%20Fundamentals/07.%20UsingObjects/01.PlanarCoordinates.js