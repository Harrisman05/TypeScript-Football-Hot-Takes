console.log("testing");

const opinion_form = document.querySelector(".form_container")! as HTMLFormElement;

const player_input = document.querySelector("#player_input") as HTMLInputElement;
const opinion_input = document.querySelector("#opinion_input") as HTMLInputElement;
const contributor_input = document.querySelector("#contributor_input") as HTMLInputElement;
const opinion_sector = document.querySelector(".opinion_section")!;

// Adding form functionality for submittal

opinion_form.addEventListener('submit', (e: Event) => {

    e.preventDefault(); // prevent form submitting

    const createdNote = new OpinionTemplate(contributor_input.value, player_input.value, opinion_input.value); // create a new note instance 

    createdNote.renderOpinion(); // execute render method on newly created note

    contributor_input.value = '';
    player_input.value = '';
    opinion_input.value = '';

});

// Creating event handling for deleting a note

// As opinion containers are dynamically created, event listener must be added to parent div higher in the DOM tree. The event is then bubbled down and works - https://typeofnan.dev/how-to-bind-event-listeners-on-dynamically-created-elements-in-javascript/

opinion_sector.addEventListener('click', (e) => {

    const delete_button = e.target as HTMLButtonElement; // why this is needed https://www.designcise.com/web/tutorial/how-to-fix-property-does-not-exist-on-type-eventtarget-typescript-error
    
    if (delete_button.classList.contains('delete_button')) {
        delete_button.parentElement!.remove(); // if delete button is clicked, remove the parent element from the DOM (which is the container)
    }

});

class OpinionTemplate { // class template for creating instances of notes

    contributor: string;
    player_name: string;
    opinion_input: string;

    constructor(contributor:string, player_name: string, opinion_input: string) {
        this.contributor = contributor;
        this.player_name = player_name;
        this.opinion_input = opinion_input;
    }

    renderOpinion() { // method to create notes
        const opinion_container = document.createElement('div') as HTMLDivElement;
        opinion_container.className = "opinion_container"; 

        const contributor_div = document.createElement('div') as HTMLDivElement;
        const player_name_div = document.createElement('div') as HTMLDivElement;
        const opinion_text_div = document.createElement('div') as HTMLDivElement;

        const delete_button = document.createElement('button') as HTMLButtonElement;
        delete_button.className = "delete_button"

        player_name_div.textContent = "Player: " + this.player_name;
        opinion_text_div.textContent = "Opinion: " + this.opinion_input;
        contributor_div.textContent = "Contributor: " + this.contributor;
        delete_button.textContent = "Delete";

        opinion_container.append(contributor_div);
        opinion_container.append(player_name_div);
        opinion_container.append(opinion_text_div);
        opinion_container.append(delete_button);

        opinion_sector.append(opinion_container);

    }
}
