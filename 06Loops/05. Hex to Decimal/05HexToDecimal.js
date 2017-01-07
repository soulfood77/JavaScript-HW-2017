/*Using loops implement a javascript function that converts a hex number number to its decimal representation.
The input will consists of a single line containing a single hexadecimal number as string.
The output should consist of a single line - the decimal representation of the number as string.*/

function convertHexToDec(input){
    let hexStr = input[0],
        decVal = 0,
        i,
        result = 0;

    for (i = 0; i < hexStr.length; i++) {
        switch (hexStr[hexStr.length - 1 - i]) {
            case "0": decVal = 0; break;
            case "1": decVal = 1; break;
            case "2": decVal = 2; break;
            case "3": decVal = 3; break;
            case "4": decVal = 4; break;
            case "5": decVal = 5; break;
            case "6": decVal = 6; break;
            case "7": decVal = 7; break;
            case "8": decVal = 8; break;
            case "9": decVal = 9; break;
            case "A": decVal = 10; break;
            case "B": decVal = 11; break;
            case "C": decVal = 12; break;
            case "D": decVal = 13; break;
            case "E": decVal = 14; break;
            case "F": decVal = 15; break;
            default: break;
        }        
        result += decVal * Math.pow(16, i);        
    }
    return result;
}

// ZERO TESTS
convertHexToDec(['FE']); //254
convertHexToDec(['1AE3']); //6883
convertHexToDec(['4ED528CBB4']); //338583669684