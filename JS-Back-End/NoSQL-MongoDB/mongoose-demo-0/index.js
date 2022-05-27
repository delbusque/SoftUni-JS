const initDb = require('./dbConfig');
const Person = require('./models/Person');
const Cube = require('./models/Cube')
const Fiat = require('./models/Fiat');


initDb()
    .then(() => {
        // let person = new Person({
        //     name: 'Kalinka',
        //     age: 20
        // })

        // person.save().then(() => console.log('Person saved !'));
        Person.create({
            name: "Sofka",
            age: 21,
            phone: '1277777777777773456'
        }).then(person => {
            console.log('Person created !');
            console.log(person);
        });

        Cube.create({
            name: "Funny cube",
            difficulty: 4
        }).then(data => {
            console.log('Cube created !');
            console.log(data);
        });

        Fiat.create({
            model: "Grande Punto",
            year: 2006
        }).then(fiat => {
            console.log('Fiat created !');
            console.log(fiat);
        })
    })