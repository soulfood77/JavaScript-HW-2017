/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/
function solve() {

  return function (element, contents) {
    const frag = document.createDocumentFragment();
    const div = document.createElement('div');
    var divClone;    

    if (typeof element === 'string') {
      element = document.getElementById(element);
      if (element === null) {
        throw 'No such Id';
      }
    }
    else if (element instanceof HTMLElement) {
      element = element;
    }
    else {
      throw 'Element is not a string';
    }

    //lambdas don't work in BGCoder, works in Mocha
    //contents.some(item => typeof item !== 'string' && typeof item !== 'number'))
    if (!Array.isArray(contents) || contents.some(function(item){
      return typeof item !== 'string' && typeof item !== 'number';
    })) {
      throw 'Error in array';
    }

    //lambdas don't work in BGCoder, works in Mocha
    //contents.forEach(item =>
    for (var item of contents) {
      divClone = div.cloneNode(true);
      divClone.innerHTML = item;
      frag.appendChild(divClone);
    };

    element.innerHTML = '';
    element.appendChild(frag);
  };
}

module.exports = solve;

//TEST VALIDATION
//test('root', ['mam', 'pap', 'String']);
//test('root', [1, 2, 3, 4, 6, 8]);