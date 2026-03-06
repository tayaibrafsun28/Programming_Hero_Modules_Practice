// Filter in js
const friends = ['Adib','Shimanto', 'Ema', 'Junaid'];
const first = friends.filter( frnds => frnds.length<4 || frnds.includes('Sh'));
console.log(first);