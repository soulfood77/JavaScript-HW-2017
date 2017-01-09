/*Write a function that checks if a given object contains a given property.
var obj  = …;
var hasProp = hasProperty(obj, 'length');*/

function hasProperty(obj, val){
    for(let prop in obj){
        if(prop === val){
            return 'yes';
        }
    }
    return 'no';
}

var obj = {
    name: 'Who\'s bad',
    age: 22,
    length: 12345
};
var searchProp = 'length';

var hasProp = hasProperty(obj, searchProp);
console.log(hasProp);

console.log(obj.hasOwnProperty(searchProp));
