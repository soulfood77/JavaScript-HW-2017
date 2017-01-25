// function myFunction() {
//     console.log(this);    
// }

// myFunction(1, 'asd', 42, {name: 'Evlogi'});

function findMax(arr) {
    let maxValue = arr[0];
    arr.forEach((val) => maxValue = Math.max(maxValue, val));
    return maxValue;
}

console.log(findMax([3,2,5,7,7]));