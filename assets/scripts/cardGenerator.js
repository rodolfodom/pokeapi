const d = document,
  template = d.getElementById("poke-card-template").content;

export function generateCard(json) {
  const pokemonName = json.name,
    pokemonID = json.id,
    pokemonPicture = json.sprites.other["official-artwork"].front_default;

  template.querySelector(".poke-picture").src = pokemonPicture;
  template.querySelector(".poke-picture").alt = pokemonName;
  template.querySelector(".poke-picture").dataset.pokeID = pokemonID;
  template.querySelector(".poke-name").textContent = pokemonName;
  template.querySelector(".poke-name").dataset.pokeID = pokemonID;
  template.querySelector(".poke-ID").textContent = pokemonID;
  template.querySelector(".poke-ID").dataset.pokeID = pokemonID;
  template.querySelector(".poke-card").dataset.pokeID = pokemonID;

  const clone = d.importNode(template, true);

  return clone;
}
