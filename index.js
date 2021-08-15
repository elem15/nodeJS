const http = require('http')
const fs = require('fs')
const path = require('path')


let server = http.createServer((req, res) => {
    let filePath = path.join
    // (__dirname, 'index.html')
    (__dirname, req.url == '/'? 'index.html': req.url)
    // console.log(req.url)
    let ext = path.extname(filePath)
    let contentType = 'text/html'
    if (!ext) {
        filePath += '.html'
    }
    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        case '.ico':
            contentType = 'image/png'
        default:
            contentType = 'text/html'
    }  

    fs.readFile(path.join(filePath), (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200, { 
                        'Content-Type': 'html/css'
                })
                    res.end(data);
                }
            })
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    })
})
server.listen(1337, () => {
    console.log('Server has been started...')
})   

// (function (exports, require, module, __dirname, __filename) {
// const chalk = require('chalk');
// const text = require('./data')

// console.log(chalk.blue(text));
// console.log(chalk.blue.bgRed.bold('Hello world!'));
// console.log(__filename)
// const path = require('path')
// console.log('Название файла:', path.basename(__filename))
// })