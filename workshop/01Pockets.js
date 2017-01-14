function findPockets(args) {
    var i,
        result = 0,
        heights = args[0].split(' ').map(Number),
        len = heights.length;
    //your solution here

    for (i = 2; i < len - 2; i++) {
        if (heights[i] < heights[i + 1] && heights[i] < heights[i - 1]) {
            if (heights[i + 1] > heights[i + 2] && heights[i - 1] > heights[i - 2]) {
                result += heights[i];
            }
        }
    }

    console.log(result);
}

//findPockets(["53 20 1 30 2 40 3 10 1"]);
//findPockets(["53 20 1 30 30 2 40 3 10 1"]);
findPockets(["53 20 1 30 2 40 3 3 10 1"]);