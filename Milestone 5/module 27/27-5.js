// Explore Closure

function outer() {
    function inner() {
        console.log('Hello Bai \n');        
    }
    
    return inner;
}

const calling = outer();
calling();

// Closure function counter example

const counter = (owner) => {
    let count = 0;

    const increment = () =>{
        count = count + 1;
        console.log('Value of counter for : ', owner, count);
    }

    return increment;
}

const rahimCounter = counter('Rahim')
const karimCounter = counter('Karim')

rahimCounter()
rahimCounter()
rahimCounter()
rahimCounter()

karimCounter()
karimCounter()
karimCounter()

rahimCounter()
rahimCounter()