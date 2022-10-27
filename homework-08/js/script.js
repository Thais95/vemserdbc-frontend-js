const pokeAPI = 'https://pokeapi.co/api/v2/';
const pokemonContainer = document.getElementById('pokemon-select');
const imageField = document.getElementById('pokemon-img');
const minPoke = 1;
const maxPoke = 800;
const image = new Image();

newRound(minPoke, maxPoke);

async function showPokemonById(id) {
    const response = await fetch(pokeAPI + `pokemon/${id}`);
    const data = await response.json();

    image.src = data.sprites.other['official-artwork'].front_default;
    image.style.filter = 'brightness(0)';

    imageField.innerHTML='';
    imageField.appendChild(image);
}

async function getAllPokemon(max) {
    const response = await fetch(pokeAPI + `pokemon?limit=${max}`);
    const data = await response.json();
    return data;
}

async function newRound(min, max) {
    const allPokemon = await getAllPokemon(max);
    const correctId = randomId(min, max);
    const options = [];

    options.push({name: allPokemon.results[correctId-1].name, correct: true})

    for (i = 0; i < 3; i++) {
        options.push({
            name: allPokemon.results[randomId(min, max)].name, correct: false
        })
    }

    showPokemonById(correctId);
    createButtons(options, options[0].name.split('-')[0]);    
}

function createButtons(options, name) {
    pokemonContainer.innerHTML = '';
    const shuffled = options.sort(() => Math.random() - 0.5);
    
    for (const pokemon of shuffled) {
        pokemonContainer.insertAdjacentHTML('beforeend', `
            <button id="${pokemon.name}" class="btn" type="button">
                ${pokemon.name}
            </button>
        `);

        document.getElementById(pokemon.name).onclick = () => {
            checkResponse(pokemon.correct, name)
        }
    }
}

function checkResponse(correct, name) {
    pokemonContainer.innerHTML = '';
    
    if (correct) {
        image.style.filter = 'drop-shadow(20px 20px 50px rgba(17, 255, 17, 0.498))';
        pokemonContainer.insertAdjacentHTML('beforeend', `
            <span class="right-answer">Correto, parabéns!</span>
        `);
    } else {
        image.style.filter = 'drop-shadow(20px 20px 50px rgba(255, 17, 17, 0.498))';
        pokemonContainer.insertAdjacentHTML('beforeend', `
            <span class="wrong-answer">Errado! O pokémon era <span class="poke-name">${name}</span> :(</span>
        `);
    }

    pokemonContainer.insertAdjacentHTML('beforeend', `
        <button class="btn" type="button" onclick="newRound(${minPoke}, ${maxPoke})">
            Jogar Novamente
        </button>
    `);
}

function randomId(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}