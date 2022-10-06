export class OpinionTemplate {
    constructor(contributor, player_name, opinion_input) {
        this.contributor = contributor;
        this.player_name = player_name;
        this.opinion_input = opinion_input;
    }
    renderOpinion(opinion_section) {
        const opinion_container = document.createElement('div');
        opinion_container.className = "opinion_container";
        const contributor_div = document.createElement('div');
        const player_name_div = document.createElement('div');
        const opinion_text_div = document.createElement('div');
        const delete_button = document.createElement('button');
        delete_button.className = "delete_button";
        player_name_div.textContent = "Player: " + this.player_name;
        opinion_text_div.textContent = "Opinion: " + this.opinion_input;
        contributor_div.textContent = "Contributor: " + this.contributor;
        delete_button.textContent = "Delete";
        opinion_container.append(player_name_div);
        opinion_container.append(opinion_text_div);
        opinion_container.append(contributor_div);
        opinion_container.append(delete_button);
        opinion_section.append(opinion_container);
    }
}
