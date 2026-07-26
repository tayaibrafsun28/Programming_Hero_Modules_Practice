// Callback function

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

function sayGiveMoney() {
    console.log("Give me $100!");
}

greet("Alice", sayBye); // Sends sayBye as callback function
greet("Alice", sayGiveMoney); // Sends sayGiveMoney as callback function