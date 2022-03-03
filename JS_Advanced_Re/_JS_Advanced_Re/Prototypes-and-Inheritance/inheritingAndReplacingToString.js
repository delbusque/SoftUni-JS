function solve() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    Person.prototype.toString = function() {
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
    }

    class Teacher extends Person {

        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    Teacher.prototype.toString = function() {
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
    }
    Student.prototype.toString = function() {
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email}, course: ${this.course})`
    }

    let person = new Student('Who', '@gmail', 'Alg');
    console.log(person.toString());

    return {
        Person,
        Teacher,
        Student
    }
}

solve();