export function pokemonDataTable(myJson) {
  let arrValue = [];
  document.getElementById("pokeinfo").style.display = "flex";
  document.getElementById("image").src =
    myJson.sprites.other["official-artwork"].front_default;
  if (myJson.sprites.other["official-artwork"].front_default == null) {
    document.getElementById("image").src = myJson.sprites.front_default;
  }
  arrValue.push(myJson.name);
  arrValue.push(myJson.id);
  arrValue.push(myJson.height);
  let info = ["nombre", "ID", "altura"];
  for (let i = 0; i < info.length; i++) {
    document.getElementById(info[i]).innerHTML = arrValue[i];
  }
}
