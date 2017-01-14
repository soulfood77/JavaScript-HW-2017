function playGameOfTrolls(args) {
    let r, c, i, who, where, whoName,
        sizes = args[0].split(' ').map(Number),
        rows = sizes[0],
        cols = sizes[1],
        startCoord = args[1].split('/[; ]/g').map(Number),
        instructions = args.splice(2, args.length);

    let troll1  = {
            row: startCoord[0],
            col: startCoord[1],
            trapped: false
        },
        troll2 = {
            row: startCoord[2],
            col: startCoord[3],
            trapped: false
        },
        princess = {
            row: startCoord[4],
            col: startCoord[5],
            trapped: false
        };

    for (r = 0; r < rows; r++) {
        traps[r] = [];
    }

   

   
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