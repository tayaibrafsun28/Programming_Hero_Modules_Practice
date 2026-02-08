// Problem - 01 

function newPrice(currentPrice , discount ) {
    if(typeof(currentPrice)==="number" && typeof(discount)==="number"){
        let discountedPrice = currentPrice - (currentPrice*discount)/100;
        return discountedPrice.toFixed(3);
    }

    else{
        return 'Invalid';
    }
}



