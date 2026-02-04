// Function return using object creation

function tenTimes (num){
    const result = num*10;
    return {result, num};
    
}

const output = tenTimes(7);
console.log('The given number is: ', output.num);
console.log('Ten times of the given number is: ', output.result);



// Function return using array

function square (num){
    const sqr = num*num;
    return [num, sqr];
}

const [a,b] = square(9);
console.log('The given number is: ',a);
console.log('Square of the given number is: ',b);