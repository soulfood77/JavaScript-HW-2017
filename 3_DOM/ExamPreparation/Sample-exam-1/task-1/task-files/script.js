function createCalendar(selector, events) {
    const daysInWeek = 7;
    const daysInMonth = 30;
    const weeksCount = (daysInMonth / 7) + 1 | 0;
    const daysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const element = document.querySelector(selector);

    const cal = document.createDocumentFragment();
    const tab = document.createElement("table");
    const row = document.createElement("tr");
    const cell = document.createElement("td");

    tab.style.borderCollapse = "collapse";
    cell.style.border = "1px solid black";
    cell.style.padding = "4px";

    for (let week = 0; week < weeksCount; week += 1) {
        const row1 = document.createElement("tr");
        const row2 = document.createElement("tr");

        for (let day = 1; day <= daysInWeek; day += 1) {
            const td1 = cell.cloneNode(true);
            const td2 = cell.cloneNode(true);
            td1.style.backgroundColor = "#999";
            td2.style.height = "90px";
            td2.style.verticalAlign = "top";

            // Could be better done with event listener on the table using its target
            td1.onmouseover = function() {
                td1.style.backgroundColor = "blue";
                td1.style.cursor = "pointer";
            }
            td1.onmouseout = function() {
                td1.style.backgroundColor = "#999";
                td1.style.cursor = "initial";
            }
            td2.onmouseover = function() {
                td1.style.backgroundColor = "blue";
                td2.style.cursor = "pointer";
            }
            td2.onmouseout = function() {
                td1.style.backgroundColor = "#999";
                td2.style.cursor = "initial";
            }
            td1.onmousedown = function() {
                td1.style.backgroundColor = "green";
                td2.style.backgroundColor = "green";
            }
            td2.onmousedown = function() {
                td1.style.backgroundColor = "green";
                td2.style.backgroundColor = "green";
            }
            td1.onmouseup = function() {
                td1.style.backgroundColor = "#999";
                td2.style.backgroundColor = "#FFF";
            }
            td2.onmouseup = function() {
                td1.style.backgroundColor = "#999";
                td2.style.backgroundColor = "#FFF";
            }

            const date = day + (daysInWeek * week);
            if (date > daysInMonth) {
                break;
            }

            const text = daysNames[day - 1] + " " + date + " June 2014";
            td1.innerText = text;
            row1.appendChild(td1);

            // If event exists fill td2 with info
            const foundEvent = events.find(ev => ev.date == date);
            if (foundEvent) {
                const textEvent = foundEvent.hour + " " + foundEvent.title;
                td2.innerText = textEvent;
            }
            row2.appendChild(td2);
        }

        tab.appendChild(row1);
        tab.appendChild(row2);
    }

    cal.appendChild(tab);
    console.log(element);
    element.appendChild(cal);
}