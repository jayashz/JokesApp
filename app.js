const api_url = 'https://api.chucknorris.io/jokes/random';
const jokelist= document.getElementById('list');


getjoke();
async function getjoke(){
    const list= document.createElement('li');
    let jokes = await joke(api_url);
    list.textContent=jokes;
    jokelist.appendChild(list);

}

async function joke(url){
    const response= await fetch(url);
    var theJoke= await response.json();
    return theJoke.value;

}
