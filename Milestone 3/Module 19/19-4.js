const phones = [
    {name:'Samsung', price:50000, color:'black'},
    {name:'iPhone', price:83000, color:'white'},
    {name:'Walton', price:15000, color:'black'}
]

function maxPrice(phones){
    let temp=phones[0];

    for(let i=0; i<phones.length; i++){
        if(temp.price<phones[i].price){
            temp=phones[i];
        }
    }

    return temp.name;
}

const maximumPrice = maxPrice(phones);
console.log('Maxium price is of : '+maximumPrice);

