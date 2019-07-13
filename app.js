//output a color to the console 
//console.log('%c Loading...', 'color: red');

//create a simple object
const animal = {
    name: 'Bob',
    legs: 4,
    type: 'canine',
    energy: 5
}

const p = { name: 'Picture' };
const s = { energy: 50, speed: 30 };

//use the spread 
const ps = { ...p, ...s};

let xyz = [ 'one', 'two', 'three', 'four'];

//spread operator to insert xyz array and appendd the data
let newxyz = [...xyz, 'Bob', 'John'];

console.log(newxyz);

console.log(ps);

//destructoring
function feed(animal) {
    const { name, legs, energy } = animal;

    return `Feed ${name} ${legs} ${energy}`;
}

console.log(feed(animal));
