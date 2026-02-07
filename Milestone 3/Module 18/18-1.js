function inchToFeet(inch){
    const rem = inch%12;
    const feet = (inch-rem)/12;
    return {rem, feet};
}

const height = inchToFeet(63);
console.log('Hight : '+ height.feet +' Feet '+ height.rem +' Inch ');