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
  const VALIDATOR = {
    isDefined: function (arg) {
      if (arg === undefined) {
        throw 'Function argument is missing / undefined';
      }
      return true;
    },
    isString: function (str) {
      if (typeof str !== 'string') {
        return false;
      }
      return true;
    },
    isNumber: function (num) {
      if (typeof num !== 'number') {
        return false;
      }
      return true;
    },
    isArray: function (arr) {
      if (!Array.isArray(arr)) {
        throw 'Not an array';
      }
    },
    strOrDom: function (element) {
      if (VALIDATOR.isString(element)) {
        const result = document.getElementById(element);
        if (result === null) {
          throw 'No such Id';
        }
        return result;
      }
      else if (element instanceof HTMLElement) {
        return element;
      }
      throw 'Not a string or DOM element';
    },
    strOrNum: function (item) {
      if (!VALIDATOR.isString(item) && !VALIDATOR.isNumber(item)) {
        throw 'Must be string or number';
      }
    }
  };

  return function (element, contents) {
    const frag = document.createDocumentFragment();
    const div = document.createElement('div');
    var divElement;

    VALIDATOR.isDefined(element);
    VALIDATOR.isDefined(contents);

    // if an id is provided, select the element
    element = VALIDATOR.strOrDom(element);
    VALIDATOR.isArray(contents);

    for (var item of contents) {
      VALIDATOR.strOrNum(item);
      divElement = div.cloneNode(true);
      divElement.innerHTML = item;
      frag.appendChild(divElement);
    };

    element.innerHTML = '';
    element.appendChild(frag);
  };
};

module.exports = solve;

//TEST VALIDATION
//test('root', ['mam', 'pap', 'String']);
//test('root', [1, 2, 3, 4, 6, 8]);