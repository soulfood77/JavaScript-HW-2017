/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve() {
  function changeDisplay(event) {
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
    if (typeof selector === 'string') {
      selector = document.getElementById(selector);
      if (selector === null) {
        throw 'My grandmas bushes';
      }
    }
    else if (selector instanceof HTMLElement) {
      //everything's ok, do nothing
    }
    else {
      throw 'Wait grandma for beauty';
    }

    var foundButtons = selector.getElementsByClassName('button');
    //convert HTML Collection to array the old fashioned way
    //Array.from(foundBut)
    var convertedButtons = [].slice.apply(foundButtons);
    for (var button of convertedButtons) {
      button.innerHTML = 'hide';
      button.addEventListener('click', changeDisplay, false);
    };
  };
};

module.exports = solve;