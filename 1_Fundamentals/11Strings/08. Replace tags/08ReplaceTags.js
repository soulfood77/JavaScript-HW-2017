function replaceTags(args){
    let str = args[0];
    let result = str.replace(/(<a href=\")(.*?)(\">)(.*?)(<\/a>)/g, "[$4]($2)"); //$4 takes the 4th match group, $2 takes the 2nd match group
    
    console.log(result);
}

// ZERO TESTS
replaceTags([ '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>' ]);

//RegEx is from C#2 forum