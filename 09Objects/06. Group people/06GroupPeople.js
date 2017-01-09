
function group(peopleArr) {
    let result = {}, 
        len = peopleArr.length;

    for (const person of peopleArr) {
        if (!result.hasOwnProperty(person.age)) {
            result[person.age] = [ person ];
            
        } else{
            result[person.age].push(person);
        }
    }

    return result;
}

var people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 },
    { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
    { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
    { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];

var groupedByAge = group(people);

console.log(groupedByAge);