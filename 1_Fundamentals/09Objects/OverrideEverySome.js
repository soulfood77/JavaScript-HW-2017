let args = ['1', '2', '3', '2', '1', '2', '3', '2'];

//callback
function areSmallerThan10(x) {
    return x < 10;
}
console.log(args.every(areSmallerThan10));
console.log(args.every(x => x < 10));

//override for current object args
args.every = function (isOk) { // replace args with Array.prototype to override for all every methods
    for (const x of this) {
        if (!isOk(x)) {
            return false;
        }
    }
    return true;
}

//callback with more parameters
Array.prototype.every = function (callbackFunction) {
    for (let i = 0; i < this.length; i += 1) {
        if (!callbackFunction(this[i], i, this)) { // <<NB!!
            return false;
        }
    }
    return true;
}
//using for in loop, must be careful for index to be a number, not a string
Array.prototype.some = function (callbackFunction){
    for(const i in this){
        if(callbackFunction(this[i], +i, this)){
            return true;
        }
    }
    return false;
}

function isIncreasing(val, indx, arr) {
    if (+indx === 0) {
        return true;
    }
    return arr[indx - 1] < val;
}
console.log([1, 2, 3, 4].every(isIncreasing));
console.log(args.some(isIncreasing));


//******** FILTER ********
console.log(args.filter(x => x % 2 === 1));