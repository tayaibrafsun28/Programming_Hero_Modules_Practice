const cls = document.getElementsByClassName('players');

// Applying style using JS

for(const pl of cls){
    console.log(cls);
    pl.style.backgroundColor = 'gold';
    pl.style.border = '3px solid red';
    pl.style.padding = '50px';
}


// Showing the Childs of a node in console
const bdPlayers = document.getElementById('bd').childNodes;
console.log(bdPlayers);


// Adding a new element in HTML using JS
const newChild = document.createElement('li');
newChild.innerText = 'Pele'

const interPlayer = document.getElementById('international');
interPlayer.append(newChild);