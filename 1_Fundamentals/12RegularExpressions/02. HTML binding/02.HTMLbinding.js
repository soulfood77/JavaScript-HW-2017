function bindHTML(args){
    let person = JSON.parse(args[0]);
    let text = args[1];
    let result;

    result = text.replace(/>(.*?)</, `>${person.name}<`);

    // for(const prop in person){        
    //     match = new RegExp('data-bind-' + prop, 'gi');
    //     if (text.hasOwnProperty(match)) {
            
    //     }
    // }


    console.log(result);

}

// ZERO TESTS
// bindHTML([
//     '{ "name": "Steven" }',
//     '<div data-bind-content="name"></div>'
// ]);

bindHTML([
    '{ "name": "Elena", "link": "http://telerikacademy.com" }',
    '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
]);