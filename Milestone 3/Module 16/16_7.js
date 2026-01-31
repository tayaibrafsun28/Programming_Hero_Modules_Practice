const student = {
    name: 'Tayaib',
    age: 24,
    isStudent:true,
    isMarried: false,
    CGPA: 3.64,
    deperment: 'CSE',
    'visied places': ["Rangamati", "Cox's Bazar", "Saint Martin"]
}

const boyos = student.age //Accessing object properties using DOT Notation
console.log(boyos)

const naam = student['name'] //Accessing object properties using Bracket Notation
console.log(naam)

/* 
This wll give error
 const ghursi = student.'visied places'
 console.log(ghursi); 
 
*/

const ghursi = student['visied places']
console.log(ghursi);

student.isMarried = true; // Changing the value of a property of an object
console.log(student.isMarried);