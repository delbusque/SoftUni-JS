const mongodb = require('mongodb');

const client = new mongodb.MongoClient('mongodb://localhost:27017');

client.connect()
    .then(() => {
        const db = client.db('mongotest');
        const collection = db.collection('people');

        return collection.find({ age: 21 }).toArray();
    })
    .then(data => console.log(data))