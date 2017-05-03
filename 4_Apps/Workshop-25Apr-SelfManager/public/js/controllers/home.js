import * as data from "data";
import { load as loadTemplate } from "templates";

const $appContainer = $("#app-container");

export function load() {

    loadTemplate("home")
        .then(template => {
            // Calling data.getUsers to set the options object there to the local storage values (i.e. remembering logged in user)
            // TODO login button to change to logout when user is already in localstorage
            // TODO display name of logged user
            data.getUsers();
            $("#home").addClass("active");
            $("#todos").removeClass("active");
            $("#events").removeClass("active");
            $appContainer.html(template());
        });
}