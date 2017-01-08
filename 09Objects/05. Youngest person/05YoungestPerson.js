function naiStariatPopitalDiadoSi(args) {
    var i, person,
        minIndex = 0,
        people = [];

    for (i = 0; i < args.length; i += 3) {
        person = makePerson(args[i], args[i + 1], args[i + 2]);
        people.push(person);
    }

    function makePerson(name, surname, age) {
        return {
            name: name,
            surname: surname,
            age: +age,
        }
    }

    for (i = 0; i < people.length; i += 1) {
        if (people[i].age < people[minIndex].age) {
            minIndex = i;
        }
    }
    console.log(people[minIndex].name, people[minIndex].surname);
}

// Zero tests
// naiStariatPopitalDiadoSi([
//     'Penka', 'Hristova', '61',
//     'System', 'Failiure', '88',
//     'Bat', 'Man', '16',
//     'Malko', 'Kote', '72'
// ])

naiStariatPopitalDiadoSi([
  'Gosho', 'Petrov', '32',
  'Bay', 'Ivan', '81',
  'John', 'Doe', '42'
])