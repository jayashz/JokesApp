const api_url = 'https://api.chucknorris.io/jokes/random';
const jokelist= document.getElementById('list');

const loading=document.getElementById('center');

window.onload=()=>{
    loading.style.display='flex';
    getjoke();
}
async function getjoke(){
    
    loading.style.display='flex';
    const list= document.createElement('li');
    let jokes = await joke(api_url);
    list.textContent=jokes;
    jokelist.appendChild(list);
}

async function joke(url){
    const response= await fetch(url);
    if(response.status==200){
        
        loading.style.display='none';
        var theJoke= await response.json();
        return theJoke.value;
    }
}
