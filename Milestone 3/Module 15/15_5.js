//Printing decreasing order

for(let i=10; i>=0; i--){
    console.log(i);
}

//Printing Even Numbers

console.log('Even Numbers : ');
for(let i=0; i<=10; i+=2){
    console.log(i);
}


//Printing Odd Numbers

console.log('Odd Numbers : ');
for(let i=1; i<=10; i+=2){
    console.log(i);
}

// sum of numbers from 1 - 20 that are divisible by 3

let sum = 0;
for (let i = 1; i <=20; i++) {
    if (i%3==0) {
        sum+=i;    
    }
}
console.log('Sum = ',sum);
