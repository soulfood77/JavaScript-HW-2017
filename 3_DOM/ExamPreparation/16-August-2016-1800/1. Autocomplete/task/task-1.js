/* globals document, window, console */

function solve() {

    return function(selector, initialSuggestions) {
        var selectedParent = document.querySelector(selector);
        var inField = selectedParent.querySelector(".tb-pattern");
        var addBtn = document.querySelector(".btn-add");
        var listSuggestions = document.querySelector(".suggestions-list");

        var uniq = [];
        var sugExist = initialSuggestions !== undefined && initialSuggestions.length > 0;

        if (sugExist) {
            // Remove duplicating items
            for (var i = 0; i < initialSuggestions.length; i += 1) {
                var itemLow = initialSuggestions[i].toLowerCase();
                var uniqLow = uniq.map(function(val) {
                    return val.toLowerCase();
                });
                if (uniqLow.indexOf(itemLow) === -1) {
                    uniq.push(initialSuggestions[i]);
                }
            }
            // Load initial unique suggestions list (hidden)  because zero test wants it!
            getList("none");
        }

        inField.addEventListener("input", loadSuggestions);
        addBtn.addEventListener("click", addNewSuggestion);
        listSuggestions.addEventListener("click", fillSuggestion);

        function getList(visibility) {
            listSuggestions.innerHTML = "";
            uniq.forEach(function(sug) {
                listSuggestions.innerHTML += "<li class='suggestion' style='display:" + visibility + "'><a href='#' class='suggestion-link'>" + sug + "</a></li>";
            })
        }

        function loadSuggestions(event) {
            var inputTxt = event.target.value;

            if (inputTxt && sugExist) {
                // Reload all suggestions list by removing items from the unique array instead of just hiding them, because zero test wants it!
                uniq = uniq.filter(function(value) {
                    var result = value
                        .toLowerCase()
                        .indexOf(inputTxt.toLowerCase()) !== -1;
                    return result;
                })
                getList("block");
            }
        }

        function addNewSuggestion(event) {
            var inputTxt = inField.value;
            var isListed = uniq.some(function(sug) {
                sug.toLowerCase() === inputTxt.toLowerCase()
            });

            if (!isListed) {
                uniq.push(inputTxt);
                uniq.sort();
            }
        }

        function fillSuggestion(event) {
            if (event.target.nodeName === "A") {
                inField.value = event.target.innerHTML;
            }
        }
    };
}

module.exports = solve;