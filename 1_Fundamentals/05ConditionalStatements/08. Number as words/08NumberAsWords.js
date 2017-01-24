/*Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.
The input will consist of an array containing the number as a string
The output should be a single line containing the answer*/

function convertNumToWord(input) {
    let numStr = input[0],
        result = "";

    if (numStr.length === 1 && numStr === "0") {
        return "Zero";
    }
    // ONES
    switch (numStr[numStr.length - 1]) {
        case "1": result = "One"; break;
        case "2": result = "Two"; break;
        case "3": result = "Three"; break;
        case "4": result = "Four"; break;
        case "5": result = "Five"; break;
        case "6": result = "Six"; break;
        case "7": result = "Seven"; break;
        case "8": result = "Eight"; break;
        case "9": result = "Nine"; break;
        default: break;
    }

    if (numStr.length === 1) {
        return result;
    }
    else {
        result = result.toLowerCase();
    }
    // TENS
    if (numStr[numStr.length - 2] === "1") {
        switch (numStr[numStr.length - 1]) {
            case "0": result = "Ten"; break;
            case "1": result = "Eleven"; break;
            case "2": result = "Twelve"; break;
            case "3": result = "Thirteen"; break;
            case "4": result = "Fourteen"; break;
            case "5": result = "Fifteen"; break;
            case "6": result = "Sixteen"; break;
            case "7": result = "Seventeen"; break;
            case "8": result = "Eighteen"; break;
            case "9": result = "Nineteen"; break;
            default: break;
        }
    }

    switch (numStr[numStr.length - 2]) {
        case "2": result = "Twenty " + result; break;
        case "3": result = "Thirty " + result; break;
        case "4": result = "Forty " + result; break;
        case "5": result = "Fifty " + result; break;
        case "6": result = "Sixty " + result; break;
        case "7": result = "Seventy " + result; break;
        case "8": result = "Eighty " + result; break;
        case "9": result = "Ninety " + result; break;
        default: break;
    }

    if (numStr.length === 2) {
        return result;
    }
    else {
        result = result.toLowerCase();
        if (result.length > 1) {
            result = " and " + result;
        }
    }
    //HUNDREDS
    switch (numStr[numStr.length - 3]) {
        case "1": result = "One hundred" + result; break;
        case "2": result = "Two hundred" + result; break;
        case "3": result = "Three hundred" + result; break;
        case "4": result = "Four hundred" + result; break;
        case "5": result = "Five hundred" + result; break;
        case "6": result = "Six hundred" + result; break;
        case "7": result = "Seven hundred" + result; break;
        case "8": result = "Eight hundred" + result; break;
        case "9": result = "Nine hundred" + result; break;
        default: break;
    }

    return result;
}

//ZERO TESTS
convertNumToWord(['538']);
convertNumToWord(['0']);
convertNumToWord(['9']);
convertNumToWord(['10']);
convertNumToWord(['12']);
convertNumToWord(['19']);
convertNumToWord(['25']);
convertNumToWord(['98']);
convertNumToWord(['273']);
convertNumToWord(['400']);
convertNumToWord(['501']);
convertNumToWord(['617']);
convertNumToWord(['999']);