const http = require('http');
const fs = require('fs');

let ind = 1;

let app = http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write('<h2>Home page</h2> <a href="/cats"><strong>Cats</strong></a> <a href="./cat.jpg">A single cat</a>')
            res.end();
            break;

        case '/cats':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            let result = fs.readFileSync('./views/cats.html');
            res.write(result)
            res.end();
            break;

        case '/cat.jpg':
            let catStream = fs.createReadStream('./cat.jpg')
            catStream.pipe(res)
                //catStream.on('data', (chunk) => {
                //    res.write(chunk)
                //})
                //catStream.on('end', () => {
                //    res.end();
                //})
            break;

        default:
            res.write('node.js says Error 404');
            res.end();
            break;
    }
})

app.listen(3000);
console.log('Node.js is running on port 3000...');