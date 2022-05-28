const dbInit = require('./config/dbConfig');
const Person = require('./models/Person')

dbInit();

Person.updateMany({ sport: 'Soocer' }, { $set: { sport: 'Soccer' } }).then(res => console.log(res));


async function setNewProp() {
    await Person.updateOne({ _id: '628f3457b79a7c446b441464' }, { $set: { pet: 'Cat' } }, { strict: false })
        .then(res => console.log(res));
};

setNewProp();

Person.findByIdAndDelete('628f60c2e05e6fcad4be2f23').then(person => console.log(person));

Person.countDocuments().then(console.log);

Person.countDocuments({ age: { $gt: 30 } }).then(console.log);
Person.countDocuments({ age: { $gte: 30 } }).then(console.log);

Person.countDocuments({ name: 'Kubrat' }).then(console.log);

Person.countDocuments({ sport: "Soccer" }, (err, count) => console.log('%d', count));