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
module.exports = function () {
  const VALIDATOR = {
    isDefined: function (arg) {
      if (arg === undefined) {
        throw 'Function argument is missing / undefined';
      }
      return true;
    },
    isString: function (str) {
      if (typeof str !== 'string') {
        throw 'Not a string';
      }
      if (str === '') {
        throw 'Empty string not valid';
      }
      return true;
    },
    isNumber: function (num) {
      if (typeof num !== 'number') {
        throw 'Not a number';
      }
    },
    isArray: function (arr) {
      if (!Array.isArray(arr)) {
        throw 'Not an array';
      }
    },
    strOrDom: function (arg) {
      if (VALIDATOR.isString(arg)) {
        const result = document.getElementById(arg);
        if (result === null){
          throw 'No such Id';
        }
        return result;
      }
      else if (arg instanceof HTMLElement) {
        return arg;
      }
      throw 'Not a string or DOM element';
    }
  }
  return function (element, contents) {
    VALIDATOR.isDefined(element);
    // if an id is provided, select the element
    element = VALIDATOR.strOrDom(element);

    VALIDATOR.isDefined(contents);
    VALIDATOR.isArray(contents);
    contents.forEach(item => VALIDATOR.isString(item) || VALIDATOR.isNumber(item));

    const frag = document.createDocumentFragment();
    const div = document.createElement('div');
    contents.forEach(item => {
      div.innerText = item;
      frag.appendChild(div.cloneNode(true));
    });
    element.innerHTML = '';
    element.appendChild(frag);
  };
};

//TEST VALIDATION
//test('root', ['mam', 'pap', 'String']);