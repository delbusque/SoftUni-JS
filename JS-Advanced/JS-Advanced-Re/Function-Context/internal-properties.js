let person = {
    firstName: 'Ivan',
    age: 20,
    talk(message) {
        return `${this.firstName} is saying ${message}`;
    }
}
Object.defineProperty(person, 'firstName', {
    writable: false
})

Object.defineProperty(person, 'firstName', {
    value: 'Gosho'
})

person.firstName = 'Harry';

Object.defineProperty(person, 'age', {
    enumerable: false
})

Object.defineProperty(person, 'lastName', {
    enumerable: false,
    value: 'Petrov'
})


person.town = 'Plovdiv';
Object.seal(person);
person.country = 'BG';
person.town = 'Sofia';


Object.freeze(person);
person.town = 'Pliska';

for (const key in person) {
    console.log(key);
    console.log(person[key])
}