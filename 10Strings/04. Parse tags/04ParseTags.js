// BG Coder 50/100 time limit
function parseTags(args) {
    let splitTxt = args[0].replace(/\\/g).split(/[<>]/g).filter(n => n); //filter removes empty entries
    let upStart = -1, upEnd = -1, loStart = -1, loEnd = -1;

    while (true) {
        upStart = splitTxt.indexOf('upcase', upStart + 1);
        upEnd = splitTxt.indexOf('/upcase', upEnd + 1);
        loStart = splitTxt.indexOf('lowcase', loStart + 1);
        loEnd = splitTxt.indexOf('/lowcase', loEnd + 1);

        if (upStart < loStart && loStart < upEnd && loStart !== -1) {
            splitTxt = toUp(upStart, upEnd, splitTxt);
        }
        else if (loStart < upStart && upStart < loEnd && upStart !== -1) {
            splitTxt = toLo(loStart, loEnd, splitTxt);
        }
        else if (loStart !== -1 && (upStart === -1 || upStart > loEnd)) {
            splitTxt = toLo(loStart, loEnd, splitTxt);
        }
        else if (upEnd !== -1 && (loStart === -1 || loStart > upEnd)) {
            splitTxt = toUp(upStart, upEnd, splitTxt);
        }
        if (upStart === -1 && loStart === -1) {
            break;
        }
    }

    splitTxt = splitTxt.filter(tagsToRemove);

    console.log(splitTxt.join(''));

    // functions
    function tagsToRemove(value) {
        let removeArr = ['lowcase', '/lowcase', 'upcase', '/upcase', 'orgcase', '/orgcase']
        if (removeArr.indexOf(value) !== -1) {
            return false;
        }        
        else {
            return true;
        }
    }

    function toUp(start, end, strArr) {
        for (let i = start + 1; i < end; i++) {
            if (strArr[i] === 'orgcase') {
                i = strArr.indexOf('/orgcase');
                continue;
            }
            else if (strArr[i] !== 'lowcase' && strArr[i] !== '/lowcase') {
                strArr[i] = strArr[i].toUpperCase();
            }
        }
        return strArr;
    }

    function toLo(start, end, strArr) {
        for (let i = start + 1; i < end; i++) {
            if (strArr[i] === 'orgcase') {
                i = strArr.indexOf('/orgcase');
                continue;
            }
            else if (strArr[i] !== 'upcase' && strArr[i] !== '/upcase') {
                strArr[i] = strArr[i].toLowerCase();
            }
        }
        return strArr;
    }
}

// ZERO TESTS
parseTags(['We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.']);
//parseTags(['<upcase><lowcase>MAMA<orgcase>hIhII</orgcase></lowcase></upcase>']);
//parseTags(['We are <orgcase>liViNg</orgcase> in a <upcase>yellow <lowcase>submarine</lowcase> something else</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.'])