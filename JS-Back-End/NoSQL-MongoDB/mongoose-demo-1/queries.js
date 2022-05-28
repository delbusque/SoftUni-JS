const dbInit = require('./config/dbConfig');
const Person = require('./models/Person')

dbInit()
    .then(() => {
        Person.find({
            $or: [
                { name: 'Kubrat' },
                { food: 'Vegan' }
            ]
        }).then(res => console.log(res));

        Person.where({ age: 19 }).or([{ food: 'Vegan' }, { sport: 'Soccer' }])
            .then(res => console.log(res));

        Person.where('age').gte(19).lt(21).or([{ food: 'Vegan' }, { sport: 'Soccer' }])
            .then(res => console.log(res));

        Person.find().or([{ food: 'Vegan' }, { sport: 'Soccer' }])
            .sort({ age: -1 })
            .skip(1).limit(2)
            .then(res => console.log(res));

    })
