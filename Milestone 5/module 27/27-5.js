// Explore Closure

function outer() {
    function inner() {
        console.log('Hello Bai');        
    }
    
    return inner;
}

const calling = outer();
calling();