function onFindButtonClick() {
    findSmallest(window);
    findBiggest(window);
    findSmallest(navigator);
    findBiggest(navigator);
    findSmallest(document);
    findBiggest(document);
}

function findSmallest(object) {
    var smallest = 'zzz';
    for (var property in object) {
        if (String(property) < smallest) {
            smallest = String(property);
        }
    }
    console.log('The smallest lexicographically property in ' + object + ' is "' + smallest + '"');
}
function findBiggest(object) {
    var biggest = 'aaa';
    for (var property in object) {
        if (String(property) > biggest) {
            biggest = String(property);
        }
    }
    console.log('The biggest lexicographically property in ' + object + ' is "' + biggest + '"');
}
//Source: https://github.com/asenval/JavaScriptI/blob/master/HW5%20-%20Loops/04.Smallest%20and%20largest%20property%20in%20document%2C%20window%20and%20navigator%20objects.html