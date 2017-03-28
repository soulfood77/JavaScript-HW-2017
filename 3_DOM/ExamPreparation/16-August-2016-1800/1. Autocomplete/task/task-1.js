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
                var uniqLow = uniq.map(val => val.toLowerCase());
                if (uniqLow.indexOf(itemLow) === -1) {
                    uniq.push(initialSuggestions[i]);
                }
            }
            // Load initial suggestions list because zero test wants it!
            getList();
        }

        inField.addEventListener("input", loadSuggestions);
        addBtn.addEventListener("click", addNewSuggestion);
        listSuggestions.addEventListener("click", fillSuggestion);

        function getList() {
            listSuggestions.innerHTML = "";
            uniq.forEach(sug => {
                listSuggestions.innerHTML += "<li class='suggestion' style='display:none'><a href='#' class='suggestion-link'>" + sug + "</a></li>";
            })
        }

        function loadSuggestions(event) {
            var inputTxt = event.target.value;

            if (inputTxt && sugExist) {
                // Reload all suggestions list
                getList();
                // Filter suggestions on input
                document
                    .querySelectorAll(".suggestion")
                    .forEach(sug => {
                        console.log(sug.innerText);
                        if (!sug.innerText.toLowerCase().includes(inputTxt.toLowerCase())) {
                            console.log("hiding", sug.innerText);
                            sug.style.display = "none";
                        } else {
                            console.log("showing", sug.innerText);
                            sug.style.display = "block";
                        }
                    });
            }
        }

        function addNewSuggestion(event) {
            var inputTxt = inField.value;
            var isListed = uniq.some(sug => sug.toLowerCase() === inputTxt.toLowerCase());

            if (!isListed) {
                uniq.push(inputTxt);
                uniq.sort();
            }
        }

        function fillSuggestion(event) {
            inField.value = event.target.innerHTML;
        }
    };
}

module.exports = solve;