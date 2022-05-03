const fs = require('fs');
const zlib = require('zlib');

const readableStream = fs.createReadStream('./index.html', {
    encoding: 'utf8',
    highWaterMark: 100000
});

const writableStream = fs.createWriteStream('./output.txt')

readableStream.on('data', (chunk) => {
    writableStream.write(chunk);
})

readableStream.on('end', () => {
    console.log('Stream Ended')
    writableStream.end()
})

const gzibStream = zlib.createGzip();
const writableZipStream = fs.createWriteStream('./zipout.gzip')

readableStream.pipe(gzibStream).pipe(writableZipStream)