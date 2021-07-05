export async function getData(url){
    const response = await fetch(url);
    const data = response.json();
    return data;
}

