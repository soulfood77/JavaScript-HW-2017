import * as data from "data";
import { load as loadTemplate } from "templates";

const $appContainer = $("#app-container");

export function load() {

    Promise.all([
            loadTemplate("todos"),
            data.getTodos()
        ])
        .then(([template, todos]) => {
            $appContainer.html(template(todos))

            $("#home").removeClass("active");
            $("#todos").addClass("active");
            $("#events").removeClass("active");
        });
}

export function newTodo() {
    loadTemplate("todoNew")
        .then(template => $appContainer.html(template()));
}

export function add() {
    const todo = {
        text: $("#text").val(),
        category: $("#category").val()
    }
    if (todo.text === "" || todo.category === "") {
        // TODO Empty fields validation is not complete
        // TODO Find a better way to do this
        $("#txt-group").removeClass("has-warning");
        $("#txt-group").removeClass("has-success");
        $("#txt-group").addClass("has-error");
        $("#txt-ok").addClass("hidden");
        $("#txt-nb").addClass("hidden");
        $("#txt-err").removeClass("hidden");
        $("#txt-help").removeClass("hidden");
        console.log("empty fields");
    } else {
        $("#txt-group").removeClass("has-warning");
        $("#txt-group").addClass("has-success");
        $("#txt-ok").removeClass("hidden");
        $("#txt-nb").addClass("hidden");
        $("#txt-err").addClass("hidden");
        $("#txt-help").addClass("hidden");
        data.addTodo(todo)
            .then(response => {
                load();
            })
    }
}