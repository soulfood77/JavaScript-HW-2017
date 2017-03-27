function solve() {
    return function(selector, tabs) {
        var element = document.querySelector(selector);

        var frag = document.createDocumentFragment();

        var ulNav = document.createElement("ul");
        ulNav.className = "tabs-nav";

        var ulCont = document.createElement("ul");
        ulCont.className = "tabs-content";

        var len = tabs.length;

        for (var i = 0; i < len; i += 1) {
            // Navigation tabs
            var newLiNav = document.createElement("li");
            ulNav.appendChild(newLiNav);

            var newA = document.createElement("a");
            newA.setAttribute("href", "#");
            newA.className = "tab-link";
            newA.setAttribute("tab-index", i);
            newA.innerHTML = tabs[i].title;
            newLiNav.appendChild(newA);

            // Content
            var newLiCont = document.createElement("li");
            newLiCont.className = "tab-content";
            if (i === 0) {
                // classList doesn't work in BGCoder
                newLiCont.className += " visible";
                // newLiCont.classList.add("visible");
            }

            var newP = document.createElement("p");
            newP.innerHTML = tabs[i].content;
            newLiCont.appendChild(newP);

            var newButton = document.createElement("button");
            newButton.className = "btn-edit";
            newButton.innerHTML = "Edit";
            newLiCont.appendChild(newButton);

            ulCont.appendChild(newLiCont);
        }

        frag.appendChild(ulNav);
        frag.appendChild(ulCont);

        // Check
        ulNav.addEventListener("click", showBook);

        ulCont.addEventListener("click", editCont);

        var contents = ulCont.getElementsByClassName("tab-content");

        function showBook(event) {
            var clickedItemIndex = +event.target.getAttribute('tab-index');

            var len = contents.length;
            for (var i = 0; i < len; i += 1) {
                if (i === clickedItemIndex) {
                    contents[i].className = "tab-content visible";
                    // contents[i].classList.remove("visible");
                } else {
                    contents[i].className = "tab-content";
                    // contents[i].classList.add("visible");
                }
            }
        }

        function editCont(e) {
            var parent = e.target.parentElement;

            if (e.target.innerHTML === "Edit") {
                var newTextArea = document.createElement("textarea");
                newTextArea.className = "edit-content";
                newTextArea.innerHTML = parent.firstChild.innerHTML;
                parent.appendChild(newTextArea);
                e.target.innerHTML = "Save";
            } else if (e.target.innerHTML === "Save") {
                parent.firstChild.innerHTML = parent.lastChild.value;
                parent.lastChild.remove();
                e.target.innerHTML = "Edit";
            }
        }

        element.appendChild(frag);
    }
}

// submit the above!

if (typeof module !== 'undefined') {
    module.exports = solve;
}