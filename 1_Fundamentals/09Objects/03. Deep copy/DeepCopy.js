//Write a function that makes a deep copy of an object.
//The function should work for both primitive and reference types.

function deepCopy(obj){
    let copied = {};

    if(obj === null || typeof obj !== 'object'){
        return obj;
    }

    if(Array.isArray(obj)){
        return obj.slice();
    }

    for(let prop in obj){
        if(obj.hasOwnProperty(prop) && typeof obj[prop] !== 'object'){            //Use hasOwnProperty instead of (prop !== 'undefined')
            copied[prop] = obj[prop];
        } 
        else if(obj[prop] === Object(obj[prop])){
            copied[prop] = deepCopy(obj[prop]); // Using recursion YEYY!! If property is an object call deepCopy to get a copy of the object, the if(Array) above copies arrays, COOL!
        }
    }
    return copied;
}

//Extended solution of Daniela Popova https://github.com/DanielaPopova/TelerikAcademy_Homeworks/blob/master/JS%20Fundamentals/07.%20UsingObjects/03.DeepCopy.js

// shallow copies:
// Object.assign(newPerson, person);
//var anotherPerson = Object.create(person);

// TEST COPY ARRAY

// var catsArr = ['Rizho', 'Pepi', 'Fastachka'];
// console.log(Array.isArray(catsArr));
// console.log(typeof catsArr);

// var copyCatsArr = deepCopy(catsArr)
// console.log(catsArr);

// copyCatsArr[1] = 'Pepi e mnogo sladka';
// console.log(copyCatsArr);
// console.log(catsArr);


// TEST COPY OBJECT WITH REFERENCE TYPE PROPERTIES (objects, not functions)
var person = {
    name: 'Viktoria',
    surname: 'Petkova',
    age: 12,
    cats: ['Bagira', 'Muncho', 'Shano'],
    parents: { name: 'Rada', phone: 0889121023},
    toString: function(){
        return this.name + ' ' + this.surname;
    }
}
console.log('1-person-BEFORE changes', person);

var copiedPerson = deepCopy(person);

person.name = 'Alex';
person.cats[1] = 'Angel';
person.parents.name = 'Bogdana';

console.log('1-person-AFTER changes', person);
console.log('2-copied-person - should have the same values as person-before changes', copiedPerson);

console.log(typeof person.cats);
console.log(typeof person.toString);