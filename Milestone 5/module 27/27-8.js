// Map function

const arr = [2,3,4,5];

const sqrIt = num => num * num;
const sqr = arr.map(sqrIt);
console.log(sqr);

// Another declaration method

const double = arr.map(num => num *2);
console.log(double);

// Accessing 1st letter of the names

const friends = ['Adib','Shimanto', 'Ema', 'Junaid'];
const first = friends.map( frnds => frnds[1]);
console.log(first);