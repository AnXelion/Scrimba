import {Animal, Cat} from './animal.js';

let cat = new Cat('Cat', 4, true);

cat.makeNoise('Meow!');
console.log(cat.type);


console.log(Animal.return10());