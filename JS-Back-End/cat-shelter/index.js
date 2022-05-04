const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const storageService = require('./services/storageService')

let app = http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            let content = fs.readFileSync('./views/home/index.html');
            //res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(content);
            res.end();
            break;

        case '/cats/add-breed':
            let addBreedContent = fs.readFileSync('./views/addBreed.html')
            res.write(addBreedContent);
            res.end()
            break;

        case '/cats/add-cat':
            if (req.method == 'GET') {
                fs.readFile('./views/addCat.html', 'utf8', (err, result) => {
                    if (err) {
                        res.statusCode = 404;
                        return res.end();
                    }
                    let breeds = ['Persian', 'Angor'];
                    let mappedBreeds = breeds.map(b => `<option value="${b}">${b}</option>`);
                    console.log(mappedBreeds);

                    result = result.replace('{{breeds}}', mappedBreeds)
                    res.write(result);
                    res.end()
                })
            } else if (req.method == 'POST') {
                let form = new formidable.IncomingForm();
                form.parse(req, (err, fields, files) => {

                    storageService.saveCat(fields)
                        .then(() => {
                            res.writeHead(302, {
                                'Location': '/'
                            })
                            res.end()
                        });
                })

            }
            break;

        case '/styles/site.css':
            let css = fs.readFileSync('./styles/site.css');
            //res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(css);
            res.end();
            break;

        case '/handlers/script.js':
            let js = fs.readFileSync('./js/script.js');
            //res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(js);
            res.end();
            break;

        default:
            res.statusCode = 404;
            res.end()
            break;
    }
})

app.listen(5000);
console.log('App is running on port 5000...');