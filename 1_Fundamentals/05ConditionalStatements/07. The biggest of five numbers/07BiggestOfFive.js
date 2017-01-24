/*Write a script that finds the biggest of given 5 variables. Use nested if statements.
The input will consist of an array containing five values represented as strings
The output should be a single line containing the answer*/

function findLargestOf5 (input){
    let n1 = +input[0],
        n2 = +input[1],
        n3 = +input[2],
        n4 = +input[3],
        n5 = +input[4];

    if (n1 >= n2 && n1 >= n3 && n1 >= n4 && n1 >= n5){
        return `${n1}`; // must return a string value, otherwise 0 is not recognised in output
    }
    if (n2 > n1 && n2 >= n3 && n2 >= n4 && n2 >=n5){
        return `${n2}`;
    }
    if (n3 > n1 && n3 > n2 && n3 >= n4 && n3 >= n5){
        return `${n3}`;
    }
    if (n4 > n1 && n4 > n2 && n4 > n3 && n4 >= n5){
        return `${n4}`;
    }
    if (n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4){
        return `${n5}`;
    }
}

// ZERO TESTS
findLargestOf5(['5', '2', '2', '4', '1']);
findLargestOf5(['-2', '-22', '1', '0', '0']);
findLargestOf5(['-2', '4', '3', '2', '0']);
findLargestOf5(['0', '-2.5', '0', '5', '5']);
findLargestOf5(['-3', '-0.5', '-1.1', '-2', '-0.1']);