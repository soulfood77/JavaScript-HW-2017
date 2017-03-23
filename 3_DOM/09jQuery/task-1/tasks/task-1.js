function solve() {

  return function (selector) {

    var $mainDiv = $("<div>")
      .addClass("dropdown-list");

    var $select = $(selector)
      .hide()
      .appendTo($mainDiv)

    $("<div>")
      .addClass("current")
      .attr("data-value", $select.children().first().val())
      .html($select.children().first().html())
      .click(function () {
        $options.toggle();
        $(this).html("Select a value");
      })
      .appendTo($mainDiv);

    var $options = $("<div>")
      .addClass("options-container")
      .css('position', 'absolute')
      .hide()
      .on("click", ".dropdown-item", makeSelection)
      .appendTo($mainDiv);

    $select
      .children() 
      .each(function (i) {
        $("<div>")
          .addClass("dropdown-item")
          .attr("data-value", $(this).val())
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