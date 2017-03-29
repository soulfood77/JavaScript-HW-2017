function solve() {

    return function(selector, rows, columns) {
        var $selection = $(selector);

        var $table = $("<table>")
            .addClass("spreadsheet-table");

        var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var row = 0; row <= rows; row += 1) {
            var $tr = $("<tr>");
            for (var col = 0; col <= columns; col += 1) {
                var $cell = $("<td>")
                    .addClass("spreadsheet-item")
                    .addClass("spreadsheet-cell");

                var $th = $("<th>")
                    .addClass("spreadsheet-item")
                    .addClass("spreadsheet-header")
                    // Header row
                if (row === 0 && col > 0) {
                    $th
                        .text(letters[col - 1])
                        .appendTo($tr);
                }
                // Header column
                else if (row > 0 && col === 0) {
                    $th
                        .text(row)
                        .appendTo($tr);
                }
                // First cell
                else if (row === 0 & col === 0) {
                    $th
                        .appendTo($tr);
                }
                // Everything else
                else {
                    var $span = $("<span>");
                    var $input = $("<input>");

                    $cell
                        .append($span)
                        .append($input)
                        .appendTo($tr);
                }
                $cell.click(makeSelected);
                $cell.dblclick(startEdit);
            }
            $tr.appendTo($table);
        }


        function makeSelected(event) {

            // Why th doesn't work!?

            $("th").removeClass("selected");
            $("td").removeClass("selected");


            var $target = $(event.target);
            $target
                .addClass("selected");

            $target
                .parent()
                .find("th")
                .first()
                .addClass("slected");
        }

        function startEdit(event) {
            var $target = $(event.target);
            $target.addClass("editing");
            $target.children().last().value = $target.children().first().html();
        }

        $selection.append($table);
    };
}

// SUBMIT THE CODE ABOVE THIS LINE

if (typeof module !== 'undefined') {
    module.exports = solve;
}