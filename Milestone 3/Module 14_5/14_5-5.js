const names = ['Abul', 'Babul', ' Kabul'];

// Find if an element is available in the array

const find = names.includes('Abul');
const find2 = names.includes('Ibul');

console.log(find);
console.log(find2);


// Find index of an element of an array

const findIndex = names.indexOf('Babul');
console.log(findIndex);

// Find index of an element of an array

const checkArray = Array.isArray(names);
console.log(checkArray);
