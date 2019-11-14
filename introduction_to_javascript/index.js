let example1 = {
    firstName: 'Johnny',
    lastName: 'Liu',
    address: {
        city: 'Taipei',
        district: 'unknown'
    },
    age: 27,
    interest: ['guitar', 'video games']
};

example1.age = 28;

console.log(example1);
console.log(example1.hasOwnProperty('firstName'));
console.log(example1.hasOwnProperty('surname'));


let example2 = example1;    // pass by reference
example2.abc = "abc";

console.log(example1);
console.log(example2);  

let example3 = Object.assign({}, example1); // create a new object based on an exsiting one
delete example3.firstName;
console.log(example1);
console.log(example3);