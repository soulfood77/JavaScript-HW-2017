function binarySearch(args) {
    let numbers = args.map(Number),
        length = numbers.shift(),
        searchedNum = numbers.pop(),
        firstMet = false,
        startIndex = 0,
        endIndex = length - 1,
        middleIndex;

    // just in case
    numbers.sort(function(a, b) {
        return a - b;
    });
        
    while (startIndex <= endIndex) {
        middleIndex = (startIndex + endIndex) / 2 | 0;
        if (numbers[0] === searchedNum) {
            return '0'; //BGCoder expects '0' , not number 0
        }
        if (numbers[middleIndex] === searchedNum) {

            for (let i = middleIndex; i > startIndex; i--) {
                if (numbers[i] === searchedNum) {
                    return i;
                }
            }

            return middleIndex;            
        }

        if (numbers[startIndex] > searchedNum || numbers[endIndex] < searchedNum) {
           return -1;
        }

        if (numbers[middleIndex] < searchedNum) {
            startIndex = middleIndex + 1;
        } else if (numbers[middleIndex] > searchedNum) {
            endIndex = middleIndex - 1;
        }        
    }   
}

// console.log(binarySearch(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']));
// console.log(binarySearch(['11', '1', '2', '4', '8', '31', '31', '31', '64', '77', '99', '100','31']));
// console.log(binarySearch(['11', '1', '2', '4', '8', '29', '30', '31', '31', '77', '99', '100','31']));
// console.log(binarySearch(['11', '1', '2', '4', '31', '31', '32', '33', '34', '77', '99', '100','31']));
 console.log(binarySearch(['10', '1', '2', '4', '8', '31', '31', '31', '64', '77', '99', '31']));
// console.log(binarySearch(['10', '1', '2', '4', '8', '30', '31', '31', '64', '77', '99', '31']));
// console.log(binarySearch(['10', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32']));
// console.log(binarySearch(['2', '3', '3', '3']));
// console.log(binarySearch(['1', '1', '1']));
// console.log(binarySearch(['1', '1', '2']));
