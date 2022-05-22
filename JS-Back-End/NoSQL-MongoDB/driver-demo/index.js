const mongodb = require('mongodb');

const client = new mongodb.MongoClient('mongodb://localhost:27017');

client.connect()
    .then(() => {
        const db = client.db('test');
        const collection = db.collection('cubes');

        return collection.find({}).toArray();
    })
    .then(data => console.log(data))