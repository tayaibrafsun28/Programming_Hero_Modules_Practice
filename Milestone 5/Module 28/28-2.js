const student = {
    name: 'Tayaib', 
    id: 22201064, 
    dept: 'CSE',
    graduate: false,
};

// Normal object

console.log('Student: ',student, typeof student);

// Transfer object to JSON string

const strStudent = JSON.stringify(student);
console.log('strStudent: ',strStudent, typeof strStudent);

// Transfer JSON string to object

const objStudent = JSON.parse(strStudent);
console.log('objStudent: ', objStudent, typeof objStudent);




