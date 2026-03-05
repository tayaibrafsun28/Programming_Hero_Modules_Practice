// here num2 = 2 is the default parameter

function add(num1, num2 = 2) {
    total = num1 + num2;
    console.log(total);
}

add(12)


// here last = '' is the default parameter

function fullName(first, last = '') {
    fullName = first +' '+ last;
    console.log(fullName)
}

fullName('Tayaib', 'Rafsun')

