const name1 = 'Tayaib';
const name2 = 'Rafsun';

// Adding 2 array -CONCAT

const naam = name1.concat(' ').concat(name2)
console.log(naam);


// Slicing array - SLICE

const part = name1.slice(1,4);
console.log(part);


// Split an Sentence - SPLIT

const sentence = 'I am a good boy'; 
console.log(sentence.split(" ")); // This splits the sentence where white space is found

const friends = 'Tayaib,Shimanto,Ema,Junaid'; 
console.log(friends.split(",")); // This splits the sentence where comma , is found

//Join string elements of an array - JOIN

const friends2 = ['Tayaib','Shimanto','Ema','Junaid']; 
console.log(friends2.join(" - ")); // This joins the elements of the array with -
console.log(friends2.join(" || ")); // This joins the elements of the array with ||


// Find if an element is available in the string - INCLUDES

const name3 = 'Neymar';
console.log(name3.includes('x'));
console.log(name3.includes('y'));

