function solve() {

    return function(selector, defaultLeft, defaultRight) {
        var sel = document.querySelector(selector);
        var dfrag = document.createDocumentFragment();
        var colContainer = document.createElement("div");
        colContainer.className = "column-container";

        var inField = document.createElement("input");
        inField.setAttribute("size", "40");
        inField.setAttribute("autofocus", "");

        var addButton = document.createElement("button");
        addButton.innerHTML = "Add";
        addButton.addEventListener("click", addItem);

        var left = document.createElement("div");
        left.className = "column";
        left.innerHTML = "<div class='select'>" +
            "<input type='radio' name='column-select' id='select-left-column' checked='checked'>" +
            "<label for='select-left-column'>Add here</label></div>";

        var right = document.createElement("div");
        right.className = "column";
        right.innerHTML = "<div class='select'>" +
            "<input type='radio' name='column-select' id='select-right-column'>" +
            "<label for='select-right-column'>Add here</label></div>";

        colContainer.appendChild(left);
        colContainer.appendChild(right);

        var olL = document.createElement("ol");
        // Check if left exists
        if (defaultLeft !== undefined && defaultLeft.length > 0) {
            for (var i = 0; i < defaultLeft.length; i += 1) {
                var newLi = document.createElement("li");
                newLi.className = "entry";
                newLi.innerHTML = "<img class='delete' src='imgs/Remove-icon.png'>" + defaultLeft[i];

                olL.appendChild(newLi);
            }
        }
        left.appendChild(olL);

        var olR = document.createElement("ol");
        // Check if right exists
        if (defaultRight !== undefined && defaultRight.length > 0) {
            for (var i = 0; i < defaultRight.length; i += 1) {
                var newLi = document.createElement("li");
                newLi.className = "entry";
                newLi.innerHTML = "<img class='delete' src='imgs/Remove-icon.png'>" + defaultRight[i];
                olR.appendChild(newLi);
            }
        }
        right.appendChild(olR);

        dfrag.appendChild(colContainer);
        dfrag.appendChild(inField);
        dfrag.appendChild(addButton);
        sel.appendChild(dfrag);

        function addItem(event) {
            var but = document.querySelectorAll("[type='radio']");
            var inValue = event.target.previousSibling.value.trim();
            var olists = document.getElementsByTagName("ol");
            if (!inValue) {
                return;
            }
            if (but[0].checked === true) {
                olists[0].innerHTML += "<li class='entry'><img class='delete' src='imgs/Remove-icon.png'>" + inValue + "</li>";
            } else {
                olists[1].innerHTML += "<li class='entry'><img class='delete' src='imgs/Remove-icon.png'>" + inValue + "</li>";
            }
            event.target.previousSibling.value = "";
            addDelete();
        }

        function removeItem(event) {
            var test = document.querySelector("#root>input");
            test.value = event.target.parentElement.innerText;
            event.target.parentElement.remove();
        }

        function addDelete() {
            var delImgs = document.getElementsByClassName("delete");
            for (var i = 0; i < delImgs.length; i += 1) {
                delImgs[i].addEventListener("click", removeItem);
            }
        }
        addDelete();
    };
}

// SUBMIT THE CODE ABOVE THIS LINE

if (typeof module !== 'undefined') {
    module.exports = solve;
}