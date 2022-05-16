const fs = require('fs')
const fsPromises = require('fs/promises');
const db = require('../db.json');

const getCat = (catName, view, res) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        let catData = JSON.parse(data);
        let cat = catData.cats.find(c => c.name == catName);

        res.render(view, {
            cat
        })
    })
}

const addCat = (data) => {
    db.cats.push(data);
    let result = JSON.stringify(db, '', 2);

    return fsPromises.writeFile('./db.json', result)
}

const addBreed = (data) => {
    db.breeds.push(data.breed)
    let result = JSON.stringify(db, '', 2);

    return fsPromises.writeFile('./db.json', result)

}

const dbService = {
    getCat,
    addCat,
    addBreed
}

module.exports = dbService;