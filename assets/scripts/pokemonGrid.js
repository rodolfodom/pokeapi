import { getData } from "./getData.js";
import { generateCard } from "./cardGenerator.js";

const d = document,
conatiner = d.querySelector(".cards"),
loadMoreButton = d.getElementById("load-more"),
loaderHTML = '<img class="d-none" class="loader" src="./assets/svg/Ellipsis-1.4s-78px.svg" alt="">';

export async function generateGrid(url) {
    loadMoreButton.innerHTML = loaderHTML;
    const data = await getData(url),
    results = data.results,
    fragment = d.createDocumentFragment();
    loadMoreButton.dataset.next = data.next;


    for (let i = 0; i < results.length; i++) {
        const pokemonData = await getData(results[i].url),
        card = generateCard(pokemonData);
        fragment.appendChild(card);
    }

    conatiner.appendChild(fragment);
    loadMoreButton.innerText = "Cargar mas..."

} 
