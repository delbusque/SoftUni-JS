let person = {
    name: 'Ivan',
    age: 20,
    talk(message) {
        return `${this.name} is saying ${message}`;
    }
}

let anotherPerson = {
    name: 'Gosho',
    age: 30,
    talk(message) {
        return `${this.name} is saying ${message}`;
    }
}

let talkTwo = person.talk.bind(anotherPerson);

function greet(message) {
    return `${this.name}, who is ${this.age} is saying ${message}`;
}

function greetTwo(message, day) {
    return `${this.name}, who is ${this.age} is saying ${message} on ${day}`;
}

console.log(talkTwo('Helllllooooo World...'))
console.log(person.talk('Hi...'))
console.log(greet.call(anotherPerson, 'Hello World'))

console.log(greet.call(person, 'Hello'));
console.log(greetTwo.apply(person, ['Hello', 'Monday']));