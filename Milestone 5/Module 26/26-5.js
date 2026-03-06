// Spread operator

const para = [10,43,21];

function sum(x, y, z) {
    return x+y+z;
}

console.log('Sum: ',sum(...para));


// Another example

const arr1 = [1,2,3,4];
const arr2 = [-1, -2, 0, ...arr1, 5, 6];

console.log(arr1);
console.log(arr2);