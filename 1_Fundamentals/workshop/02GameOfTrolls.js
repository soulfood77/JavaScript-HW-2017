function playGameOfTrolls(args) {
    let r, c, i, who, where, whoName,
        sizes = strToNumArr(args[0]),
        rows = sizes[0],
        cols = sizes[1],
        startingLocations = args[1].split(';'),
        locW = strToNumArr(startingLocations[0]), // Wtroll 1 1
        locN = strToNumArr(startingLocations[1]), // Ntroll 0 1
        locL = strToNumArr(startingLocations[2]), // Lprincess 2 3
        instructions = args.splice(2, args.length),
        ilen = instructions.length,
        line = [],
        field = [],
        characters = {
            Wtroll: locW,
            Nbslbub: locN,
            Lsjtujzbo: locL
        };

    for (r = 0; r < rows; r++) {
        field[r] = [];
    }

    for (i = 0; i < ilen; i++) {
        line = instructions[i].split(' ');
        whoName = line[1];
        who = characters[line[1]]; //who is an array
        where = line[2]; // string direction

        if (line[0] === 'mv') {
            move(whoName, who, where);
        }
        else if (line[0] === 'lay') {
            field[locL[0]][locL[1]] = 'trap';
        }

    }


    function strToNumArr(str) {
        let result = str.split(' ').map(Number);
        return result;
    }

    function move(whoName, who, where) {
        field[who[0]][who[1]] = null;

        if (where === 'd') {
            field[who[0] + 1][who[1]] = whoName;
            characters.whoName
        }
        else if (where === 'r') {
            field[who[0]][who[1] + 1] = whoName;
        }
        else if (where === 'l') {
            field[who[0] - 1][who[1]] = whoName;
        }
        else if (where === 'u') {
            field[who[0]][who[1] - 1] = whoName;
        }
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