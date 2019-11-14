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