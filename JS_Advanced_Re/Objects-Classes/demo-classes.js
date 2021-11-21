class Person {

    static type = 'Homo Sapiens';

    hair = 'bold';

    constructor(firstName, lastName, currentAge) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = currentAge;
    };

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    };

    get currentAge() {
        return this.age;
    }
    set currentAge(value) {
        if (value > 18 && value < 120) {
            this.age = value;
        }
    };

    greet() {
        console.log('Hi...  ' + this.type)
    }

    static breath() {
        console.log('Breathing ... ' + this.type)
    }


}

let newPerson = new Person('Neiko', 'Neikov', 20);

console.log(newPerson);
console.log(newPerson.firstName);
console.log(newPerson.fullName);


console.log(newPerson.age);
newPerson.greet();

Person.breath();
console.log(Person.type);
console.log(newPerson.hair);