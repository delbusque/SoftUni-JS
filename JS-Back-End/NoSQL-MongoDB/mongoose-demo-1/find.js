const dbInit = require('./config/dbConfig');
const Person = require('./models/Person');

// dbInit().then(() => Person.find().then(people => console.log(people)));


dbInit();

Person.find({ age: 30 }).then(people => console.log(people));



async function getPeople() {

    let people = await Person.find();

    people.filter(p => p.age > 22).forEach(p => p.isExcellent = 5.5)

    people.forEach(p => console.log(`${p.greet()}. I have excellent grade -> ${p.isExcellent} -> ${p.grade}`));

}

getPeople();


async function getPerson() {
    let person = await Person.findOne({ sport: 'Soccer' });

    console.log(person);
}

getPerson()


Person.findById('628f3457b79a7c446b441464').then(person => console.log(person));

