function greet(name) {
    return `Hello ${name}`;
};

let person = {
    first: 'Ivan',
    last: 'Nenkov',
    age: 300,
    talk: () => 'Speaking ...',
    greet,
};

let person2 = Object.assign({}, person);
person2.first = "Jack";

Object.keys(person).forEach(key => {
    console.log(`${key} ---> ${person[key]}`)
});

if (person.hasOwnProperty('first')) {
    console.log(person.first)
};

Object.values(person).forEach(value => {
    if (value == 'Ivan') {
        console.log('Yesss')
    }
})

console.log(person.talk());
console.log(person2);

let currAge = 'age';
console.log(person[currAge]);

let namee = 'first';
console.log(`The hot-stepper: ${person[namee]} is ${person[currAge]}.`);

namee = 'last';
console.log(`The hot-stepper: ${person[namee]} is ${person[currAge]}.`);