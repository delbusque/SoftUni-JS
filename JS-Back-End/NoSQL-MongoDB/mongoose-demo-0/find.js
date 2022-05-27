const initDb = require('./dbConfig');
const Fiat = require('./models/Fiat');
const Person = require('./models/Person');
const Cube = require('./models/Cube')

initDb();

Person.find().then(persons => persons.forEach(p => console.log(p.greet())))

async function getPeople() {
    const people = await Person.find();

    const teenagers = people.filter(p => p.isTeenager)
    teenagers.forEach(f => console.log(f.greet() + ' - ' + f.isTeenager))
}

getPeople()