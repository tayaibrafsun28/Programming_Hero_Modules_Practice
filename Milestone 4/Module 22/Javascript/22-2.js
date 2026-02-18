const car = {
    name: 'Fortuner',
    brand: 'Toyota',
    engine: function(status){
        console.log('Engine status : ', status);
    }
}



const licollection = document.getElementsByTagName('li');
console.log(licollection); 

for(const li of licollection){
    console.log(li.innerText);
}

const idh1 = document.getElementById('h1');
console.log(idh1.innerText);
idh1.innerText = "HELLO BAI";