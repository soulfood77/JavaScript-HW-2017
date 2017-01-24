/*Write a program that compares two char arrays lexicographically (letter by letter).

On the first line you will receive the first char array as a string
On the second line you will receive the second char array as a string

Print < if the first array is lexicographically smaller
Print > if the second array is lexicographically smaller
Print = if the arrays are equal*/

//!!! BGCoder problem with this task
function compareLex(charArrs) {
    var char, longer,
        str1 = charArrs[0],
        str2 = charArrs[1];

    if (str1 < str2) {
        longer = str2;
    }
    else {
        longer = str1;
    }

    for(char = 0; char < longer.length; char += 1){
        if(str1[char] < str2[char]){
            return "<";
        }
        else if(str1[char] > str2[char]){
            return ">";
        }
    }
    return "="; 
}

// ZERO TESTS
compareLex(['hello', 'halo']);
compareLex(['food', 'food']);
compareLex(['myname isSlimShady', 'm8ynameis']);