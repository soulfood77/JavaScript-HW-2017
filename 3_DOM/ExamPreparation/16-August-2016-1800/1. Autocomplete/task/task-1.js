/* globals document, window, console */

function solve() {

    return function(selector, initialSuggestions) {
        var selectedParent = document.querySelector(selector);
        var inField = selectedParent.querySelector(".tb-pattern");
        var addBtn = document.querySelector(".btn-add");
        var listSuggestions = document.querySelector(".suggestions-list");

        var uniq = [];

        inField.addEventListener("input", loadSuggestions);
        addBtn.addEventListener("click", addNewSuggestion);
        listSuggestions.addEventListener("click", fillSuggestion);

        function loadSuggestions(event) {
            var inputTxt = event.target.value;
            listSuggestions.innerHTML = "";

            if (inputTxt && initialSuggestions !== undefined && initialSuggestions.length > 0) {

                // Remove duplicating items
                for (var i = 0; i < initialSuggestions.length; i += 1) {
                    var itemLow = initialSuggestions[i].toLowerCase();
                    var uniqLow = uniq.map(val => val.toLowerCase());
                    if (uniqLow.indexOf(itemLow) === -1) {
                        uniq.push(initialSuggestions[i]);
                    }
                }

                // Create all suggestions list
                uniq.forEach(sug => {
                    listSuggestions.innerHTML += "<li class='suggestion'><a href='#' class='suggestion-link'>" + sug + "</a></li>";
                })

                // Filter suggestions on input
                var foundSuggestion = uniq
                    .filter(sug => sug
                        .toLowerCase()
                        .includes(inputTxt.toLowerCase()));

                var sugList = document
                    .querySelectorAll(".suggestion")
                    .forEach(sug => {
                        console.log(inputTxt);
                        console.log(sug.innerText.toLowerCase().includes(inputTxt.toLowerCase()));

                        if (!sug.innerText.toLowerCase().includes(inputTxt.toLowerCase())) {
                            sug.style.display = "none";
                        } else {
                            sug.style.display = "block";
                        }
                    });

                // if (foundSuggestion.length) {
                //     for (var i = 0; i < sugList.length; i += 1) {
                //         for (var j = 0; j < foundSuggestion.length; j += 1) {
                //             if (sugList[i].innerText === foundSuggestion[j]) {
                //                 sugList.style.display = "none";
                //             }
                //         }
                //     }

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