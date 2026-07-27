// fetch is a function which gives us a promise to give data
 // .then gives us a response but not the exact data we want
// next .then gives us the data we want

const result = fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json()).then((data) => console.log(data))


