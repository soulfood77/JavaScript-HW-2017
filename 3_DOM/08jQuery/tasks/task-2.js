/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
  function isValidSelector(selector) {
    if (selector != null && selector != undefined &&
      typeof selector == 'string' && $(selector).length) {
      return true;
    }
    else {
      return false;
    }
  }

  // code from previous HW
  // review if jQuery possible here
  function changeDisplay(event) {
    if (event.target.className !== 'button') {
      return;
    }
    var next = event.target.nextElementSibling;
    while (next !== null && next.className !== 'button') {
      if (next.className === 'content') {
        if (next.style.display === '') {
          next.style.display = 'none';
          event.target.innerHTML = 'show';
        }
        else if (next.style.display === 'none') {
          next.style.display = '';
          event.target.innerHTML = 'hide';
        }
        break;
      }
      next = next.nextElementSibling;
    }
  }

  return function (selector) {
    if (isValidSelector(selector)) {
      var $items = $(selector);

      $(selector).find(".button").html("hide").on("click", changeDisplay);
    }
    else {
      throw "Argument error";
    }
  };
};

module.exports = solve;