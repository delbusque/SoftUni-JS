const fs = require('fs')

const getCat = (catName, view, res) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        let catData = JSON.parse(data);
        let cat = catData.cats.find(c => c.name == catName);

        res.render(view, {
            cat
        })
    })
}

module.exports = {
    getCat
}