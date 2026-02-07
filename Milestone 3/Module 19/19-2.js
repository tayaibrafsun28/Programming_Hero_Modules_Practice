const arr = [12,21,15,19,35,2,45,9,24,2,45,33];
let temp = arr[0];

for(let i = 0; i<arr.length; i++){
    if(temp<arr[i+1]){
        temp = arr[i+1];
    }
}

console.log(temp);