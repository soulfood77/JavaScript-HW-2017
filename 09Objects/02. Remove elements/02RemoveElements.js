function removeElements(args) {
    const remVal = args[0];
    var result = [];    

    //callback
    function checkForRemoval(val) {
        return val !== remVal;
    }
    //override
    Array.prototype.remove = function(callbackFunction){
        for(var i = 0; i < this.length; i += 1){
            if(callbackFunction(this[i])){
                result.push(this[i]);
            }
        }
        return result;
    }
    // remove values
    args.remove(checkForRemoval);
    // print to console
    for(var value of result){
        console.log(value);
    }
}

// ZERO TESTS
//removeElements(['1', '2', '3', '2', '1', '2', '3', '2']);
removeElements([
  '_h/_',
  '^54F#',
  'V',
  '^54F#',
  'Z285',
  'kv?tc`',
  '^54F#',
  '_h/_',
  'Z285',
  '_h/_',
  'kv?tc`',
  'Z285',
  '^54F#',
  'Z285',
  'Z285',
  '_h/_',
  '^54F#',
  'kv?tc`',
  'kv?tc`',
  'Z285'
])

