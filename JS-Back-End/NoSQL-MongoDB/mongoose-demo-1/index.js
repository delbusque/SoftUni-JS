const mongoose = require('mongoose');
const dbInit = require('./config/dbConfig');
const Person = require('./models/Person');

dbInit().then(() => {
    console.log('Connected to DB !');
    // 1st way for making a db entry 
    // let person = new Person({
    //     name: 'Polina',
    //     age: 22
    // })

    // person.save().then(() => console.log('Person saved in DB !'));

    // 2nd and most popular way for making a db entry 
    Person.create({ name: 'Milena', age: 30, sport: 'Soccer', grade: 2, food: 'Vegan', locations: ['Varna', 'Plovdiv', 'Lom'] })
        .then(data => console.log('Person saved in DB ! as:', data));

});