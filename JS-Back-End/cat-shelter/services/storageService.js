const db = require('../db.json')
const fs = require('fs/promises');

const saveCat = (data) => {
    db.cats.push(data);
    let result = JSON.stringify(db, '', 2);

    return fs.writeFile('./db.json', result)
}

const storageService = {
    saveCat
}

module.exports = storageService;