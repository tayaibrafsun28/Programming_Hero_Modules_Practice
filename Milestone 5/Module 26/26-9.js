// (for...in) - for object elements

const player1 = {
    name: 'Neymar',
    age: 34,
    number: 10,
    country: 'Brazil',
    club: 'Santos'
}

for (element in player1){
    const value = player1[element]
    console.log(element, value)
}

    console.log('\n')


// (for...in) - for object elements

const arr = [10, 20, 30, 40]

for (element of arr){
    console.log(element)
}