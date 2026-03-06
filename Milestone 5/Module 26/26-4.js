// Function declaration

function sum(n1, n2) {
    const sum = n1 + n2;
    return sum;    
}

console.log('Sum: ',sum(2,2));

// Function expression

const diff = function (n3, n4) {
    return n3 - n4;    
}
console.log('Difference: ', diff(8,3));

// Arrow function

const multi = (n5, n6) => n5*n6;

console.log('Multiplication: ', multi(2,3));


