function noDupli(arr){
    const newArr = [];
    for(let i=0; i<arr.length; i++){
        if(newArr.includes(arr[i])===false){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

const arr = noDupli([2,5,5,3,2,8,7,8,2,1,0,1,6,5,6,9,4,9]);
console.log(arr);