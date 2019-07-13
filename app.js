   
//console.log('%c Loading...', 'color: red');

const animal = {
    name: 'Bob',
    legs: 4,
    type: 'canine',
    energy: 5
}

//destructoring
function feed(animal) {
    const { name, legs, energy } = animal;

    return `Feed ${name} ${legs} ${energy}`;
}

console.log(feed(animal));
