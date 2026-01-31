const nums1 = [1,2,3,4,5];
const naams = ['Ema', 'Shima', 'Juna'];
console.log(nums1);


// Using reverse function
console.log(nums1.reverse());

// Using unshift

console.log(naams) //Orignal array

const rev_naams = [];
for(let i=0; i<naams.length; i++){
    rev_naams.unshift(naams[i]); // here we are accessing elements of nums2 one by one. And each time adding the new element in index 0
}
console.log(rev_naams);