const leader = true;
const coLeader = true;
let price = 100;

if (!leader || coLeader) {
    price = price+200;
}

else{
    price=price-50;
}

console.log(price);