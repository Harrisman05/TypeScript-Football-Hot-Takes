let football_players: string[] = [
    'Robert Lewandowski',
    'Lionel Messi',
    'Mohamed Salah',
    'Karim Benzema',
    'Jorginho',
    'Kylian Mbappe',
    'Erling Haaland',
    'Cristiano Ronaldo',
    'N’Golo Kante',
    'Kevin De Bruyne',
    'Romelu Lukaku',
    'Gianluigi Donnarumma',
    'Neymar',
    'Ruben Dias',
    'Harry Kane',
    'Bruno Fernandes',
    'Federico Chiesa',
    'Joshua Kimmich',
    'Luis Suarez',
    'Edouard Mendy',
    'Pedri',
    'Leonardo Bonucci',
    'Sadio Mane',
    'Giorgio Chiellini',
    'Phil Foden',
    'Nicolo Barella',
    'Mason Mount',
    'Thomas Muller',
    'Raheem Sterling',
    'Lautaro Martinez',
    'Vinicius Junior',
    'Angel Di Maria',
    'Jan Oblak',
    'Trent Alexander-Arnold',
    'Ilkay Gundogan',
    'Manuel Neuer',
    'Marco Verratti',
    'Achraf Hakimi',
    'Son Heung-min',
    'Luka Modric',
    'Serge Gnabry',
    'Alphonso Davies',
    'Virgil van Dijk',
    'Marquinhos',
    'Bernardo Silva',
    'Rodrigo De Paul',
    'Kai Havertz',
    'Antonio Rudiger',
    'Memphis Depay',
    'Cesar Azpilicueta',
    'Gerard Moreno',
    'Emiliano Martinez',
    'Thibaut Courtois',
    'Simon Kjaer',
    'David Alaba',
    'Zlatan Ibrahimovic',
    'Dusan Vlahovic',
    'Thiago Silva',
    'Declan Rice',
    'Riyad Mahrez',
    'Jack Grealish',
    'Lorenzo Insigne',
    'Joao Cancelo',
    'Leon Goretzka',
    'Toni Kroos',
    'Ciro Immobile',
    'Alisson Becker',
    'Casemiro',
    'Paul Pogba',
    'Reece James',
    'Marcos Llorente',
    'Jude Bellingham',
    'Leonardo Spinazzola',
    'Kyle Walker',
    'Ederson',
    'Antoine Griezmann',
    'Kasper Schmeichel',
    'Luke Shaw',
    'Patrik Schick',
    'Roberto Firmino',
    'Marcelo Brozovic',
    'Sergio Busquets',
    'Duvan Zapata',
    'Joao Felix',
    'Burak Yilmaz',
    'Mikel Oyarzabel',
    'Luis Diaz',
    'Diogo Jota',
    'Dusan Tadic',
    'Dani Olmo',
    'Julian Alvarez',
    'Rodri',
    'Sebastien Haller',
    'Keylor Navas',
    'Bukayo Saka',
    'Joakim Maehle',
    'Fabinho',
    'Gavi',
    'Youri Tielemans',
    'Pierre-Emile Hojbjerg',
    ];

// Creating autocomplete - https://www.youtube.com/watch?v=OXd_wv7Qi4g&ab_channel=Devistry

const player_input = document.querySelector("#player_input") as HTMLInputElement;

export function onInputChange() {
    
    removeAutocomplete();
    
    const value:string = player_input.value.toLowerCase(); // convert input to lower case

    if (value.length === 0) return; // return early to prevent this
    
    const filtered_names: string[] = [];

    // prevent whole list from showing up, as empty string and value will be the same in forEach loop below and every player will be added to filtered name and pushed to array

    

    // everytime this forEach loop runs, the filtered array is updated with names that start with whatever is being typed

    football_players.forEach((player_names) => {
        if(player_names.substring(0, value.length).toLowerCase() === value) {
            filtered_names.push(player_names)
        }
    });

    console.log(filtered_names);

    createAutocomplete(filtered_names);
    
}

function createAutocomplete(array: string[]) {
    const ulElement = document.createElement("ul") as HTMLElement;
    ulElement.className = "autocomplete_list"; // add class so CSS styles can be applied
    ulElement.id = "autocomplete_list";

    array.forEach((player_name) => {
        const listItem = document.createElement("li") as HTMLElement;

        const playerButton = document.createElement("button") as HTMLButtonElement;
        playerButton.textContent = player_name;
        playerButton.addEventListener("click", onPlayerClick);

        listItem.appendChild(playerButton);

        ulElement.appendChild(listItem);

    })

    const player_name_field = document.getElementById("player_name_field") as HTMLDivElement;

    player_name_field.append(ulElement);
}

export function removeAutocomplete() {
    const deleteUlElement = document.querySelector('#autocomplete_list');

    if (deleteUlElement) deleteUlElement.remove(); // if the list exists, delete it
}

function onPlayerClick(e: Event) {

    e.preventDefault();

    const buttonClicked = e.target as HTMLElement;
    player_input.value = buttonClicked.innerHTML; // update input field with player name

    removeAutocomplete();

}



