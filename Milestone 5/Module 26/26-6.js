// Object Destructuring

// const obj = {name: 'Tayaib', id: 22201064, dept: 'CSE'};

const {name, id, dept, year = '4th'} = {name: 'Tayaib', id: 22201064, dept: 'CSE'};


console.log(`
    My name is: ${name}, 
    ID: ${id}, 
    Depertment: ${dept}, 
    Year: ${year}
    `);


// Array Destructuring

const [a,b,c,d,e] = [1,2,3,4,5];

console.log(a,c,e);

