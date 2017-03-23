/* globals $ */

/* 

Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:   
  * The UL must have a class `items-list`
  * Each of the LIs must:
    * have a class `list-item`
    * content "List item #INDEX"
      * The indices are zero-based
  * If the provided selector does not selects anything, do nothing
  * Throws if
    * COUNT is a `Number`, but is less than 1
    * COUNT is **missing**, or **not convertible** to `Number`
      * _Example:_
        * Valid COUNT values:
          * 1, 2, 3, '1', '4', '1123'
        * Invalid COUNT values:
          * '123px' 'John', {}, [] 
*/

function solve() {
  function isValidSelector(selector) {
    if (selector != null && selector != undefined && typeof selector == 'string') {
      return true;
    }
    else {
      return false;
    }
  }
  function isValidCount(count) {
    if (count > 0 && typeof count == 'number') {
      return true;
    }
    else {
      return false;
    }
  }
  return function (selector, count) {
    if (isValidSelector(selector) && isValidCount(count)) {
      var $items = $(selector);

      var $newUL = $("<ul>").addClass("items-list");

      for (var i = 0; i < count; i += 1) {
        var $newLI = $("<li>").addClass("list-item").html("List item #" + i);
        $newUL.append($newLI);
      }

      $items.append($newUL);
    }
    else{
      throw 'Invalid argument(s)';
    }
  };
};

module.exports = solve;