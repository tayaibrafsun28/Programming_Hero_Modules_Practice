const phones = [
    {id:1, brand: 'Xiaomi', price:21500},
    {id:2, brand: 'Realme', price:14500},
    {id:3, brand: 'Xiaomi', price:29499},
    {id:4, brand: 'Samsung', price:35000},
    {id:5, brand: 'iPhone', price:180500},
];


function matchPhones(phones, search){
    const match = [];
    for(const phone of phones){
        if (phone.brand.toLowerCase().includes(search.toLowerCase())) {
            match.push(phone);
        }
    }

    return match;
};

const match = matchPhones(phones, 'xiaomi');
console.log(match)