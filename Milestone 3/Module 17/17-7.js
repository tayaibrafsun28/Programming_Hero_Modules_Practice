// Passing different type of parameter


// STRING

function countAlpha (str){
    return result = str.length;
}

const word = countAlpha('Tayaib');
console.log('Word Count: ',word);


// BOOLEAN

function operation (num1, num2, condition){
    if(condition===true){
        return sum = num1+num2
    }
    else{
        return sub = num1-num2
    }
}

const op1 = operation (10, 5, true);
console.log('Sum: ',op1);

const op2 = operation (15, 5, false);
console.log('Sub: ',op2);
