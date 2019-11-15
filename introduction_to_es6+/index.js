let word1 = 'Johnny';
let word2 = 'Liu';
let num1 = 5;
let num2 = 6;

const fullName1 = word1 + ' ' + word2;
const fullName2 = `${num1 + num2} ${word1} ${word2}`;

console.log(fullName1);
console.log(fullName2);


let example = 'Hello \n' + 'world!';
console.log(example);
document.getElementById('example').innerText = example;

let example2 = `${word1} 
${word2}
`;
console.log(example2);
document.getElementById('example').innerText = example2;