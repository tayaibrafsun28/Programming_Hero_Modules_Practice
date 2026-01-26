//Use of break in loop

for (let i = 1; i <=20; i++) {
    console.log(i);
    if (i>=10) {
        break;    
    }
}

// USe of continue in loop

let i =0;
while(i <15){
    i++;
    if(i%3!==0){
        continue; // continue mane skip kora
    }
    console.log(i);
}