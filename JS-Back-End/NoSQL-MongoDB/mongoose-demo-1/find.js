const dbInit = require('./config/dbConfig');
const Person = require('./models/Person');

// dbInit().then(() => Person.find().then(people => console.log(people)));


dbInit();

Person.find({ age: 22 }).then(people => console.log(people));



async function getPeople() {

    let people = await Person.find();

    people.filter(p => p.age > 22).forEach(p => p.isExcellent = 5.5)

    people.forEach(p => console.log(`${p.greet()}. I have excellent grade -> ${p.isExcellent} -> ${p.grade}`));

}

getPeople();



