function solve() {
  function showDropdown() {
    $(".options-container").toggle();
    $(".current").html("Select an option");
  }

  function makeSelection(event) {
    var newCurrent = event.target.innerHTML;
    $(".current").html(newCurrent);
    $(".options-container").hide();
  }

// must fix
  return function (selector) {
    var $select = $(selector)
      .hide();

    var $newDiv = $("<div>")
      .addClass("dropdown-list")
      .append($select);

    var prevSibling = $select.prev();


    var $current = $("<div>")
      .addClass("current")
      .attr("data-value", "")
      .html("Option 1")
      .on("click", showDropdown);

    var $options = $("<div>")
      .addClass("options-container")
      .css({ position: 'absolute' })
      .hide()
      .on("click", makeSelection);

    for (var i = 0; i < 5; i += 1) {
      var $text = $select.children().get(i).innerHTML;
      var $newItem = $("<div>")
        .addClass("dropdown-item")
        .attr("data-value", "value-" + (i + 1))
        .attr("data-index", i)
        .html($text);

      $options.append($newItem);
    }

    $newDiv
      .append($current)
      .append($options);

    $("body").append($newDiv);
  };
}

module.exports = solve;