const student = {
    name: 'Tayaib', 
    id: 22201064, 
    dept: 'CSE',
    graduate: false,
};

console.log('Student: ',student, typeof student);

const strStudent = JSON.stringify(student);
console.log('strStudent: ',strStudent, typeof strStudent);

const objStudent = JSON.parse(strStudent);
console.log('objStudent: ', objStudent, typeof objStudent);




