// WRONG only zero test passes... why?
    //map with trim to remove empty space
    //join to get a string
    //replace everything between opening and closing tag with an empty string
// function extractText(args) {
//     let result = args.map(x => x.trim()).join('').replace(/<(.*?)>/g, '');

//     console.log(result);    
// }

function extractText(args) {
    let result = [];
    result = args.map(trimReplace).filter(n => n).join('');

    function trimReplace(line){
        line = line.replace(/<(.*?)>/ig, '').trim();
        return line;
    }

    console.log(result);    
}

// ZERO TESTS
extractText([
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
])