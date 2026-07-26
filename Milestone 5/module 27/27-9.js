// Filter in js
const friends1 = ['Adib','Shimanto', 'Ema', 'Junaid'];
const friend = friends1.filter( frnds => frnds.length<4 || frnds.includes('Sh'));
console.log(friend);

// Find in js - gives just 1st output matched with 
const friends2 = ['Adib','Abir', 'Abrar', 'Azmi'];
const frnd = friends2.find( frnds => frnds.includes('A'));
console.log(frnd);