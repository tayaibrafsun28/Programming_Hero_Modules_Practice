function oddAvg(nums){
    const oddArr = [];
    let sum = 0;
    for (let i = 0; i<nums.length; i++){
        if(nums[i]%2!==0){
            oddArr.push(nums[i]);
        }
    }

    for (let i = 0; i<oddArr.length; i++){
        sum = sum+oddArr[i];
    }

    const avgOdd = sum/oddArr.length;
    return avgOdd;
}

const nums = [42,13,58,65,81,96,7,105];
const avg = oddAvg (nums);
console.log(avg);