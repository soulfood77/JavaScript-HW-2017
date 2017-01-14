var arr = [1, 5, 20, 21, 56, 12, 78, 32, 3]

// FILTER

console.log(arr.filter(x => x % 2 === 1));

// MAP built-in
//callback
function shiftLeft(x, i, arr) {
    if (i + 1 === arr.length) {
        return arr[0];
    }
    return arr[i + 1];
}

const shifted = arr.map(shiftLeft);

console.log(shifted);

// REDUCE built-in - takes index and next index, sums all the numbers in the array, starting from zero (initial)

console.log(arr.reduce((x, y) => x + y, 0));

// FILTER Override

Array.prototype.filter = function (callbackFunction) {
    let filteredArr = [];
    const len = this.length;
    for (let i = 0; i < len; i += 1) {
        if (callbackFunction(this[i], i, this)) {
            filteredArr.push(this[i]);
        }

    }
    return filteredArr;
}

// MAP Override

Array.prototype.map = function (transform) {
    let mappedArr = [];
    const len = this.length;
    for (let i = 0; i < len; i += 1) {
        mappedArr.push(transform(this[i], i, this));
    }
    return mappedArr;
}


// REDUCE Override

Array.prototype.reduce = function (aggregate, initial) {
    const len = this.length;
    let startIndex = 0;
    if (typeof initial === 'undefined') {
        initial = this[0];
        startIndex = 1;
    }
    for (let i = 0; i < len; i += 1) {
        initial = aggregate(initial, this[i], i, this);
    }
    return initial;
}

console.log([1, 2, 3].reduce((x, y) => x + y, 0));

// REDUCE right

Array.prototype.reduceRight = function (aggregate, initial) {
    const len = this.length;
    let startIndex = 0;
    if (typeof initial === 'undefined') {
        initial = this[0];
        startIndex = len - 2;
    }
    for (let i = len - 1; i >= 0; i -= 1) {
        initial = aggregate(initial, this[i], i, this);
    }
    return initial;
}

console.log([1, 2, 3].reduceRight((x, y) => x + ' ' + y, ''));

// SCAN left

Array.prototype.scanLeft = function (aggregate, initial) {
    const len = this.length;
    let array = [];
    let startIndex = 0;
    if (typeof initial === 'undefined') {
        initial = this[0];
        startIndex = 1;
    }
    array.push(initial)
    for (let i = startIndex; i < len; i += 1) {
        initial = aggregate(initial, this[i], i, this);
        array.push(initial);
    }
    return array;
}
console.log([1, 2, 3, 4, 5, 6].scanLeft((x, y) => x + y, 0));

// Method chaining

array
    .map((_, i) => i + 1)
    .scanLeft((x, y) => x + y)
    .filter(x => x % 2 === 1)
    .map(x => x * x)
    .forEach(x => console.log(x));

// same as:

let accum = 0;
for (let i = 0; i < arr.length; i += 1) {
    accum += i + 1;
    if (accum % 2 === 1) {
        console.log(accum * accum);
    }
}

// forEach Override

Array.prototype.forEach = function(fun){
    const len = this.length;
    for(let i = 0; i < len; i += 1){
        fun(this[i], i, this);
    }
}