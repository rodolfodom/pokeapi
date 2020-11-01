const baseURL = ()=>{
    let arrValue = [];
    let parameter = document.getElementById("pokemon").value;
    url = "https://pokeapi.co/api/v2/pokemon/" + parameter;
    fetch(url)
        .then((response => response.json()))
        .then(myJson => {
            document.getElementById("pokeinfo").style.display = "flex";
            document.getElementById("image").src = myJson.sprites.front_default;
            arrValue.push(myJson.name);
            arrValue.push(myJson.id);
            arrValue.push(myJson.height);
            
            let info = ["nombre", "ID", "altura"];
            for(let i = 0; i <= info.length; i++){
                document.getElementById(info[i]).innerHTML = arrValue[i];
            }
        })
}


