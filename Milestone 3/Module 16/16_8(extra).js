const bottle = {
    brand: 'Puma',
    price: 450,
    isNewArrival: true,
    unique: {
        colors: ['white', 'black', 'blue', 'pink'],
        size: '2 Liter',
        reusable: true
    }
}

console.log(bottle.brand);

//Accessing properties of object inside another object
console.log(bottle.unique.size);


//Changing values of properties of object inside another object
bottle.unique.colors[2] = 'Navy Blue'
console.log(bottle.unique.colors)