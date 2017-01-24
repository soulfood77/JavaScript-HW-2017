function bit3 (input){
    var bin = parseInt(input, 10),
        mask = 1 << 3,       
        result = bin & mask,
        bit = result >> 3;

        return bit;  
}

// TEST
bit3(['1024']);