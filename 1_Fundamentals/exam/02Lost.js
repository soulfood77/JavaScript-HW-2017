function findME(args) {
    let sizes = args[0].split(' ').map(Number),
        rows = sizes[0],
        cols = sizes[1];
    args.shift();

    let maze = [];
    for (let i = 0; i < rows; i += 1) {
        maze[i] = args[i].split(' ').map(Number);
    }

    let me = {
        row: (rows / 2) | 0,
        col: (cols / 2) | 0
    }
    
    while (true) {
        if (me.row === 0 || me.col === cols - 1 || me.row === rows - 1 || me.col === 0) {
            return `No rakiya, only JavaScript ${me.row} ${me.col}`;
        }
        
        let up = maze[me.row - 1][me.col];
        let right = maze[me.row][me.col + 1];
        let down = maze[me.row + 1][me.col];
        let left = maze[me.row][me.col - 1];
        let myPos = convertDecToBin(maze[me.row][me.col]);

        // up
        if (myPos[3] === '1' && up !== 0) {
            maze[me.row][me.col] = 0;
            me.row -= 1;
        }
        // right
        else if (myPos[2] === '1' && right !== 0) {

            maze[me.row][me.col] = 0;
            me.col += 1;
        }
        // down
        else if (myPos[1] === '1' && down !== 0) {
            maze[me.row][me.col] = 0;
            me.row += 1;
        }
        // left
        else if (myPos[0] === '1' && left !== 0) {
            maze[me.row][me.col] = 0;
            me.col -= 1;
        }
        else {
            return `No JavaScript, only rakiya ${me.row} ${me.col}`;
        }
    }

    function convertDecToBin(num) {
        switch (num) {
            case 0: return "0000";
            case 1: return "0001";
            case 2: return "0010";
            case 3: return "0011";
            case 4: return "0100";
            case 5: return "0101";
            case 6: return "0110";
            case 7: return "0111";
            case 8: return "1000";
            case 9: return "1001";
            case 10: return "1010";
            case 11: return "1011";
            case 12: return "1100";
            case 13: return "1101";
            case 14: return "1110";
            case 15: return "1111";
            default: return "not a digit";
        }
    }
}

// ZERO TESTS
findME([
    '5 7',
    '9 5 3 11 9 5 3',
    '10 11 10 12 4 3 10',
    '10 10 12 7 13 6 10',
    '12 4 3 9 5 5 2',
    '13 5 4 6 13 5 6'
]);