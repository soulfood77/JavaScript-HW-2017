import * as data from 'data';
import { load as loadTemplate } from 'templates';

const $appContainer = $('#app-container');

export function load() {
    loadTemplate('events').then(template => {
        $appContainer.html(template());
    })

    Promise.all([
            loadTemplate("events"),
            data.getEvents()
        ])
        .then(([template, events]) => {
            $appContainer.html(template(events));
        });

}

export function newEvent() {
    loadTemplate("eventNew")
        .then(template => $appContainer.html(template()));
}

export function add() {
    const event = {
        title: $("#title").val(),
        date: $("#date").val(),
        description: $("#description").val(),
        category: $("#category").val(),
        users: $("#users").val()
    }
    console.log(event);
    if (event.title === "" || event.date === "") {
        // TODO Empty fields validation
        console.log("empty fields");
    } else {
        data.addEvent(event)
            .then(response => {
                console.log("events.js add received response from data.addEvent");
                console.log(response);
                load();
            })
    }
}