let example1 = [5, 7, "a"];

example1.push("B", "G");
example1.pop();

example1.forEach((element) => {
    console.log(element + ' ' + typeof element);
});


let example2 = example1;    // pass by reference
let example3 = [...example1];
let example4 = example1.map((element) => {
    return element;
});

example2.push("FUCK");

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);