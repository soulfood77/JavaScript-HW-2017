import * as data from "data";
import { load as loadTemplate } from "templates";

const $appContainer = $("#app-container");

export function load() {

    Promise.all([
            loadTemplate("todos"),
            data.getTodos()
        ])
        .then(([template, todos]) => {
                $appContainer.html(template(todos));
                console.log(todos.result);
            },
            errorMsg => {
                console.log(errorMsg.responseText);
            });
}

export function newTodo() {
    loadTemplate("todoNew")
        .then(template => $appContainer.html(template()));
}

export function add() {
    // TODO Empty fields validation
    const todo = {
        text: $("#todo-text").val(),
        category: $("#todo-category").val()
    }

    data.addTodo(todo)
        .then(response => {
            console.log("todo.js add received response from data.addTodo");
            console.log(response);
            load();
        })
}