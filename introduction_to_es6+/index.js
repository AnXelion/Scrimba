// hoisting
if (false) {
    var example = 5;
}

console.log(example)

/*
var example;

if (false) {
    example = 5;
}

*/

const example2 = 5;
// example2 = 6;   // error
console.log(example2);

const example3 = [];
example3.push(1);   // ok
// example[0] = 5;  // error

const example4 = {};
example4.firstName = 'Johnny';
