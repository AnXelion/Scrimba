let example1 = [5, 7, "a"];

example1.push("B", "G");
example1.pop();

example1.forEach((element) => {
    console.log(element + ' ' + typeof element);
});

console.log(example1);