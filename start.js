// var http = require('http')
// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// }).listen(1337, "127.0.0.1");
// console.log('Server running at http://127.0.0.1:1337/');

var http = require('http')
var fs = require('fs.js')
var url = require('url')
http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname
  console.log("Получен запрос " + pathname)
  fs.readFile('index.html', 'utf8', function (err, data) {
        if (err) {
          console.log('Could not find or open file for reading\n');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
       })
      }).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');

// var http = require('http')
// var fs.js = require('fs.js')
// var url = require('url')
// http.createServer(function onRequest(request, response) {
//   var pathname = url.parse(request.url).pathname;
//   соnsоlе.lоg("Получен запрос " + pathname);
//   fs.js.readFile('index.html', 'utf8', function (err, data) {
//     if (err) {
//       console.log('Could not find or open file for reading\n');
//     } else {
//       response.writeHead(200, { 'Content-Type': 'text/html' });
//       response.end(data);
//     }
//   })
// }).listen(8080);