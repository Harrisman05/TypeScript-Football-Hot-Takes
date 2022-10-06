// How to set-up typescript project for imports

import { OpinionTemplate } from "./classes/opinion_template.js";
import { onInputChange, removeAutocomplete } from "./functions/players_autocomplete.js";
import { textareaResize } from "./functions/textarea_resize.js";

const body = document.querySelector("body") as HTMLBodyElement;
const opinion_form = document.querySelector(".form_container")! as HTMLFormElement;

const player_input = document.querySelector("#player_input") as HTMLInputElement;
const opinion_input = document.querySelector("#opinion_input") as HTMLInputElement;
const contributor_input = document.querySelector("#contributor_input") as HTMLInputElement;
const opinion_section = document.querySelector(".opinion_section")! as HTMLElement;

opinion_input.defaultValue = "Default";
contributor_input.defaultValue = "Default";

// Adding form functionality for submittal

// const dummynote = new OpinionTemplate("conta", "Sewy", "goat");
// dummynote.renderOpinion(opinion_section);

opinion_form.addEventListener('submit', (e: Event) => {

    e.preventDefault(); // prevent form submitting

    const createdNote = new OpinionTemplate(contributor_input.value, player_input.value, opinion_input.value); // create a new note instance 

    createdNote.renderOpinion(opinion_section); // execute render method on newly created note, append to opinion_section

    contributor_input.value = 'default';
    player_input.value = 'default';
    opinion_input.value = 'default';

});

// Creating event handling for deleting a note

// As opinion containers are dynamically created, event listener must be added to parent div higher in the DOM tree. The event is then bubbled down and works - https://typeofnan.dev/how-to-bind-event-listeners-on-dynamically-created-elements-in-javascript/

opinion_section.addEventListener('click', (e) => {

    const delete_button = e.target as HTMLButtonElement; // why this is needed https://www.designcise.com/web/tutorial/how-to-fix-property-does-not-exist-on-type-eventtarget-typescript-error
    
    if (delete_button.classList.contains('delete_button')) {
        delete_button.parentElement!.remove(); // if delete button is clicked, remove the parent element from the DOM (which is the container)
    }

});

// Creating autocomplete table when an value input is made on player field

player_input.addEventListener("input", onInputChange);

// Adding autocomplete if user clicks on any part of webpage

body.addEventListener("click", removeAutocomplete);

// run textareaResize function

textareaResize();


