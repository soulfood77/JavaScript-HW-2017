let input = 0;

function PointInCircle(coords) {
    var x = Math.abs(coords[0]),
        y = Math.abs(coords[1]),
        radius = 2,
        distance = Math.sqrt((x * x) + (y * y));

    if (distance <= radius) {
        return 'yes ' + distance.toFixed(2);
    }
    else {
        return 'no ' + distance.toFixed(2);
    }
}

// TESTS
input = ['-1.5', '-1.5'];
input = ['100', '-30'];
input = ['0', '0'];
input = ['0.2', '-0.8'];
input = ['0.9', '-1.93'];
input = ['1', '1.655'];
input = ['0', '1'];
PointInCircle(input);