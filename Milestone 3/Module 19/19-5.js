const phones = [
    {name:'Samsung', price:57500, color:'black', quantity: 3},
    {name:'iPhone', price:85000, color:'black', quantity: 10},
    {name:'Walton', price:5000, color:'black', quantity: 23},
    {name:'Realme', price:34000, color:'black', quantity: 17},
    {name:'Redmi', price:27000, color:'black', quantity: 33},
]

function totalPrice(phones){
    let total=0;

    for(let i=0; i<phones.length; i++){
        total=total + phones[i].price*phones[i].quantity
    }

    return total;
}

const totalStockPrice = totalPrice(phones);
console.log('Total stock price is: '+ totalStockPrice);

