const fs = require('fs');
const fspromises = require('fs/promises')

fs.readFile('./index.html', 'utf8', (err, text) => {
    console.log(text);
})

fspromises.readFile('./index-2.html', 'utf8').then(data => console.log(data))

async function readIt(path) {
    let text = await fspromises.readFile(path, 'utf8')
    console.log(text);
}

readIt('./index-2.html')

let filePath = 'document.txt';
let data = 'Some funny text'

fs.writeFile(filePath, data, (err) => console.log(err));

console.log('END');