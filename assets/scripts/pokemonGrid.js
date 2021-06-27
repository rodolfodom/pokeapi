import { getData } from "./getData.js";
import { generateCard } from "./cardGenerator.js";

const d = document,
conatiner = d.querySelector(".cards");

export async function generateGrid(url) {
    const data = await getData(url),
    results = data.results,
    fragment = d.createDocumentFragment();

    for (let i = 0; i < results.length; i++) {
        const pokemonData = await getData(results[i].url),
        card = generateCard(pokemonData);
        fragment.appendChild(card);
    }

    conatiner.appendChild(fragment);
} 
