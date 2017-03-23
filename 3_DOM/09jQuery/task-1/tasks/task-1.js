function solve() {

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
      .click(function () {
        $options.toggle();
        $(this).html("Select an option");
      })
      .appendTo($mainDiv);

    // OPTIONS
    var $options = $("<div>")
      .addClass("options-container")
      .css('position', 'absolute')
      .hide()
      .on("click", ".dropdown-item", makeSelection)
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


    function makeSelection(event) {
      $(".current")
        .html($(this).html())
        .attr("data-value", $(this).attr("data-value"));
      $options.hide();
    }

    $("body").append($mainDiv);

  };
}

module.exports = solve;

// Optimisation of code help from https://telerikacademy.com/Forum/Questions/207342/10-jQuery-Plugins-Task-1-Dropdown-list