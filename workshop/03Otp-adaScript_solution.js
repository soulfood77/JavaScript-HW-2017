// state machine design pattern

function solve(args) {
    let enumName;
    let namesList = [];
    let usedValues = {};
    let result = [];

    function assignValues(){
        
    }

    args.forEach(function (line) {
        line = line.trim();
        if (line === '</>') {
            let currentValue = 0;
            namesList.forEach(function (item) {
                if (item.value < 0) {
                    while (usedValues[currentValue]) {
                        currentValue += 1;
                    }
                    item.value = currentValue;
                    currentValue += 1;
                }
                result.push(`${item.name} = ${item.value} :: ${enumName}`)
            });
        }
        else if (line[0] === '<') {
            enumName = line.substring(1, line.length - 1);
        }
        else {
            const spl = line.split(/[=;]/g);
            const name = spl[0].trim();
            let value = -1;
            if (spl.length === 3) {
                value = +spl[1].trim();
                usedValues[value] = true;
            }
            namesList.push({
                name: name,
                value: value
            })
        }
    });

    console.log(result.sort().join('\n'));

}

solve([
    '<Fruit>',
    '  Apple;',
    '  Banana;',
    '  Pineapple;',
    '</>',
    '<Vegetable>',
    '  Cucumber = 1;',
    '  Cabage;',
    '</>'
])