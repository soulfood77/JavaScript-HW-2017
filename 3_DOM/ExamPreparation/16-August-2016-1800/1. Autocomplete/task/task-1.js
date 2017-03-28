/* globals document, window, console */

function solve() {

    return function(selector, initialSuggestions) {
        var selectedParent = document.querySelector(selector);
        var inField = selectedParent.querySelector(".tb-pattern");
        var addBtn = document.querySelector(".btn-add");
        var listSuggestions = document.querySelector(".suggestions-list");

        inField.addEventListener("input", loadSuggestions);
        addBtn.addEventListener("click", addNewSuggestion);
        listSuggestions.addEventListener("click", fillSuggestion);

        function loadSuggestions(event) {
            var inputTxt = event.target.value;
            listSuggestions.innerHTML = "";

            // if (inputTxt && initialSuggestions !== undefined && initialSuggestions.length > 0) {
            //     // check if includes works in BGCoder
            //     var foundSuggestion = initialSuggestions.filter(sug => sug.toLowerCase().includes(inputTxt.toLowerCase()));

            //     if (foundSuggestion.length) {
            //         foundSuggestion.forEach(sug => {
            //             listSuggestions.innerHTML += "<li class='suggestion'><a href='#' class='suggestion-link'>" + sug + "</a></li>";
            //             // var newLi = document.createElement("li");
            //             // newLi.className = "suggestion";
            //             // var newA = document.createElement("a");
            //             // newA.className = "suggestion-link";
            //             // newA.innerHTML = sug;
            //             // newLi.appendChild(newA);
            //             // listSuggestions.appendChild(newLi);
            //         })
            //     }
            // }
        }

        function addNewSuggestion(event) {
            var inputTxt = inField.value;
            var isListed = initialSuggestions.some(function(sug) {
                sug.toLowerCase() === inputTxt.toLowerCase();
            });

            if (!isListed) {
                initialSuggestions.push(inputTxt);
                initialSuggestions.sort();
            }


        }

        function fillSuggestion(event) {
            inField.value = event.target.innerHTML;
        }
    };
}


module.exports = solve;