export class OpinionTemplate { // class template for creating instances of notes

    contributor: string;
    player_name: string;
    opinion_input: string;

    constructor(contributor:string, player_name: string, opinion_input: string) {
        this.contributor = contributor;
        this.player_name = player_name;
        this.opinion_input = opinion_input;
    }

    renderOpinion(opinion_section: HTMLElement) { // method to create notes
        const opinion_container = document.createElement('div') as HTMLDivElement;
        opinion_container.className = "opinion_container"; 

        const note_top_strip = document.createElement('div') as HTMLDivElement;
        note_top_strip.className = "note_top_strip";

        const player_label = document.createElement('div') as HTMLDivElement;
        const player_name_div = document.createElement('div') as HTMLDivElement;
        const opinion_label = document.createElement('div') as HTMLDivElement;
        const opinion_text_div = document.createElement('div') as HTMLDivElement;
        const contributor_label = document.createElement('div') as HTMLDivElement;
        const contributor_div = document.createElement('div') as HTMLDivElement;

        const delete_button = document.createElement('button') as HTMLButtonElement;
        delete_button.className = "delete_button"

        player_label.textContent = "Player:"
        player_name_div.textContent = this.player_name;
        opinion_label.textContent = "Opinion:"
        opinion_text_div.textContent = this.opinion_input;
        contributor_label.textContent = "Contributor:"
        contributor_div.textContent = this.contributor;
        delete_button.textContent = "Delete";

        opinion_container.append(note_top_strip, player_label, player_name_div, opinion_label, opinion_text_div, contributor_label, contributor_div,delete_button);
        
        opinion_section.append(opinion_container);

    }
}