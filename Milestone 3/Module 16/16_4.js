const sentence = 'I am Rafsun';
const sentence2 = 'I am Tayaib';
let reverse1 = '';

//Reverser manually

for(const i of sentence){
    reverse1 = i + reverse1;
}
    console.log(reverse1);


//Reverse using function

let reverse2 = sentence2.split('').reverse().join('');
console.log(reverse2)
