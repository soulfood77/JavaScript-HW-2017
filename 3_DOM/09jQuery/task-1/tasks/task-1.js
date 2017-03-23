function solve() {
  function showDropdown() {
    $(".options-container").toggle();
    $(".current").html("Select an option");
  }

  function makeSelection(event) {
    var newCurrent = event.target.innerHTML;
    $(".current")
      .html(newCurrent)
      .attr("data-value", "aou");
    $(".options-container")
      .hide();
  }

  // must fix
  return function (selector) {

    // MAIN
    var $mainDiv = $("<div>")
      .addClass("dropdown-list");

    // SELECT
    var $select = $(selector)
      .hide()
      .appendTo($mainDiv)

    // CURRENT
    $("<div>")
      .addClass("current")
      .attr("data-value", "")
      .html($select.children().first().html())
      .on("click", showDropdown)
      .appendTo($mainDiv);

    // OPTIONS
    var $options = $("<div>")
      .addClass("options-container")
      .css('position', 'absolute')
      .hide()
      .on("click", makeSelection)
      .appendTo($mainDiv);

    // ITEMS
    $select
      .children()
      .each(function (i) {
        $("<div>")
          .addClass("dropdown-item")
          .attr("data-value", $(this).attr('value'))
          .attr("data-index", i)
          .html($(this).html())
          .appendTo($options);
      });

    var $body = $("body")
      .after($mainDiv);
  };
}

module.exports = solve;

// Optimisation of code help from https://telerikacademy.com/Forum/Questions/207342/10-jQuery-Plugins-Task-1-Dropdown-list