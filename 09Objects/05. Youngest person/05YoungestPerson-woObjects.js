//Tried to cheat, doesn't work

function naiStariatPopitalDiadoSi(args){
    var i, 
        maxInd = 2;
    for(i = 2; i < args.length; i += 3){
        if(+args[i] < +args[i + 3]){
            maxInd = i;
        }
    }
    console.log(args[maxInd - 2], args[maxInd - 1]);
}

// Zero tests
naiStariatPopitalDiadoSi([
  'Penka', 'Hristova', '61',
  'System', 'Failiure', '88',
  'Bat', 'Man', '16',
  'Malko', 'Kote', '72'
])