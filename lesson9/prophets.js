const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); //note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
};

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); //select output container element

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement("h2");
        let portrait = document.createElement('img');
        let bday = document.createElement('h3');
        let bplace = document.createElement('h3');

        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        bday.textContent = `${prophet.birthdate}`;
        bplace.textContent = `${prophet.birthplace}`;

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        cards.appendChild(h2);
        cards.appendChild(bday);
        cards.appendChild(bplace);
        cards.appendChild(portrait);

        cards.appendChild(card);
    });
}

