function KONPOT(args){
    let initial = args.join('');
    let result = '';
    let minified = '';    
    //console.log(initial);
    result = initial.replace(/(\s+)/g, '').replace(/(;+)/g, ';').replace(/;}/g, '}').replace(/};/g, '}').replace(/;{/g, '{').replace(/{;/g, '{').replace(/^;/, '');
    //console.log(result);
    minified = result.replace(/(\w)(\w+)/g, '$1');
    console.log(minified);
    let len = minified.length;

 console.log(len);
}

// ZERO TESTS
// KONPOT([
//     'hello;',
//     '{this; is',
//     ' ; an;;;example;',
//     '}',
//     'of;',
//     '{',
//     'KONPOT;',
//     '{',
//     'Some_numbers;',
//     '42;5;3}',
//     '_}'
// ])

// KONPOT([
//     '; ;;;jGefn4E5Pvq    ;;  ;  ; ;',
//     'tQRZ5MMj26Ov { {    {;    ;;    5OVyKBFu7o1T2 ;szDVN2dWhex1V;1gDdNdANG2',
//     ';    ;    ;  ;; jGefn4E5Pvq   ;;    ;p0OWoVFZ8c;;}    ;  ; ;',
//     '5OVyKBFu7o1T2   ;  szDVN2dWhex1V ;    ;tQRZ5MMj26Ov    ;  ;   };',
//     '1gDdNdANG2    ;   p0OWoVFZ8c ;  jGefn4E5Pvq ;; {;Z9n;;',
//     ';1gDdNdANG2;   ;;    ;   ;jGefn4E5Pvq    ;; ;;p0OWoVFZ8c;;    ;;',
//     ';',
//     'tQRZ5MMj26Ov  ;',
//     '{    ;szDVN2dWhex1V;   ;',
//     ';   jGefn4E5Pvq   ;  ;  } }}'
// ]);

KONPOT([
    '1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11; 12; 13; 14;',
    '15; 16; 17; 18; 19; 20; 21; 22; 23; 24; 25; 26; 27; 28;',
    '29; 30; 31; 32; 33; 34; 35; 36; 37; 38; 39; 40; 41; 42;',
    '43; 44; 45; 46; 47; 48; 49; 50; 51; 52; 53; 54; 55; 56;',
    '57; 58; 59; 60; 61; 62; 63; 64; 65; 66; 67; 68; 69; 70;'
])