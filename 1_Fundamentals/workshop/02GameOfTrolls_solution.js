function playGameOfTrolls(args) {
    let r, c, i, who, where, whoName,
        sizes = args[0].split(' ').map(Number),
        rows = sizes[0],
        cols = sizes[1],
        playerCoord = args[1].split('/[; ]/g').map(Number),
        instructions = args.splice(2, args.length);

    let trollN = {
        row: playerCoord[0],
        col: playerCoord[1],
        trapped: false
    },
        trollW = {
            row: playerCoord[2],
            col: playerCoord[3],
            trapped: false
        },
        princess = {
            row: playerCoord[4],
            col: playerCoord[5],
            trapped: false
        };

    let traps = [];
    for (let i = 0; i < rows; i += 1) {
        let row = new Array(cols);
        row.fill(false);
        traps.push(row);
    }

    args.shift();
    args.shift();

    args.forEach(function (command) {
        if (command === 'lay trap') {
            traps[princess.row][princess.col] = true;
        }
        else {
            let spl = command.split(' ');
            let unitToMove;
            if (spl[1][0] === 'L')//check first letter of second item in array which is the name of the player to move
            {
                unitToMove = princess;
            }
            else if (spl[1][0] === 'W') {
                unitToMove = trollN;

            }
            else if (spl[1][0] === 'M') {
                unitToMove = trollW;
            }
            else {
                // shouldn't happen
            }

            //check for trapped
            if(unitToMove.trapped){
                continue;
            }
            //do move
            if (spl[2] === 'u' && unitToMove.row > 0) {
                unitToMove.row -= 1;
            }
            else if (spl[2] === 'd' && unitToMove.row < rows - 1) {
                unitToMove.row += 1;
            }
            else if (spl[2] === 'l' && unitToMove.col > 0) {
                unitToMove.col -= 1;
            }
            else if (spl[2] === 'r' && unitToMove.col < cols - 1) {
                unitToMove.col += 1;
            }


            //check for end of game 
            if(princess.row === rows -1 && princess.col === cols -1){
                console.log(`Lsjtujzbo is saved! ${trollW.row} ${trollW.col} ${trollN.row} ${trollN.col}`);
            }
            else if(trollN.trapped && trollW.trapped){
                console.log(`Lsjtujzbo is saved! ${trollW.row} ${trollW.col} ${trollN.row} ${trollN.col}`);
            }


        }

    });
}

playGameOfTrolls([
    '5 5', // R C dimensions
    '1 1;0 1;2 3', //Rw Cw;Rn Cn;Rl Cl - pair of coordinates, separated by a ; = starting coordinates of Wboup, Nbslbub and Lsjtujzbo.
    'mv Lsjtujzbo d', // from here on first is command, second is name, third is direction
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Wboup r',
    'mv Wboup r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d'
]);