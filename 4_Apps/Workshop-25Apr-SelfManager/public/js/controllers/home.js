import * as data from "data";
import { load as loadTemplate } from "templates";

const $appContainer = $("#app-container");
const $home = $("#home");

export function load() {
    // Fix active class to be removed when other menu items clicked
    loadTemplate("home")
        .then(template => {
            // Calling data.getUsers to set the options object there to the local storage values (i.e. remembering logged in user)
            data.getUsers();
            $home.addClass("active");
            $appContainer.html(template());
        });
}