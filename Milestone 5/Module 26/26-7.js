// Freeze and Seal

const student = {name: 'Tayaib', id: 22201064, dept: 'CSE'};

delete student.dept;

Object.seal(student); // Allow modification but no add or delete

student.name = 'Tayaib Rafsun';

Object.freeze(student);  // Doesn't allow modification, add or delete

delete student.id;

console.log(student);