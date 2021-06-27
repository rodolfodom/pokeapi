import { generateGrid } from "./pokemonGrid.js";

const searchButton = document.getElementById("search");


const baseURL = ()=>{
    let arrValue = [];
    let parameter = document.getElementById("pokemon").value;
    if(parameter == ""){
        document.getElementById("error").style.display = "block";
        setTimeout(function(){
            document.getElementById("error").style.display = "none";
        }, 2000);
    }else{
        const url = "https://pokeapi.co/api/v2/pokemon/" + parameter.toLowerCase();
    fetch(url)
        .then((response => response.json()))
        .then(myJson => {
            document.getElementById("pokeinfo").style.display = "flex";
            document.getElementById("image").src = myJson.sprites.other["official-artwork"].front_default;
            if(myJson.sprites.other["official-artwork"].front_default == null){
                document.getElementById("image").src = myJson.sprites.front_default;
            };
            arrValue.push(myJson.name);
            arrValue.push(myJson.id);
            arrValue.push(myJson.height);
            let info = ["nombre", "ID", "altura"];
            for(let i = 0; i < info.length; i++){
                document.getElementById(info[i]).innerHTML = arrValue[i];
            }
        })
        .catch(function(error){
            document.getElementById("error").style.display = "block";
            setTimeout(function(){
                document.getElementById("error").style.display = "none";
            }, 2000);
        });
    };
}

document.addEventListener("DOMContentLoaded", ()=>{
    generateGrid("https://pokeapi.co/api/v2/pokemon");
    searchButton.addEventListener("click", baseURL);
});

