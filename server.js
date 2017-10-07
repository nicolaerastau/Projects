//  var http = require('http');
// var server = http.createServer(function (request, response) {
//   router.css(request, response);
//   router.home(request, response);
//   router.user(request, response);
// });
// server.listen(3000);
//
// function css (request, response) {
//   if (request.url.indexOf(".css") !== -1){
//     var file = fs.readFileSync(`.${request.url}`, {'encoding' : 'utf8'});
//     response.writeHead(200, {'Content-Type' : 'text/css'});
//     response.write(file);
//     response.end();
//   }
// }



 // const http = require('http');
// const fs = require('fs');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// fs.readFile('index.html', (err, html) => {
//       if(err){
//           throw err;
//        }
//       const server = http.createServer((request,response) => {
//       response.statusCode = 200;
//       response.setHeader('Content-type', 'text/html');
//       response.write(html);
//       response.end();
//       });
//
//       server.listen(port, hostname, () => {
//          console.log('Server started on port '+port);
//
//       });
//  });
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Angular-animate/index.html');
// }).listen(8081);



// //Lets require/import the HTTP module
// var http = require('http');
//
// //Lets define a port we want to listen to
// const PORT=8080;
//
// //We need a function which handles requests and send response
// function handleRequest(request, response){
//   response.end('It Works!! Path Hit: ' + request.url);
// }
//
// //Create a server
// var server = http.createServer(handleRequest);
//
// //Lets start our server
// server.listen(PORT, function(){
//   //Callback triggered when server is successfully listening. Hurray!
//   console.log("Server listening on: http://localhost:%s", PORT);
// });





// http.createServer(function (req, res) {
//   //Open a file on the server and return it's content:
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);



// var http = require('http');
// var fs = require('fs');
//       function onRequest(request, response) {
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         fs.readFile('./index.html', null, function(error, data){
//           if (error) {
//              response.writeHead(404);
//              response.write('File not found!');
//           } else {
//              response.write(data);
//           }
//            response.end();
//         });
//        }
//
//        function css (request, response) {
//      if (request.url.indexOf(".css") !== -1){
//        var file = fs.readFileSync(`.${request.url}`);
//        response.writeHead(200, {'Content-Type' : 'text/css'});
//        response.write(file);
//        response.end();
//      }
//    }
// http.createServer(onRequest,css).listen(8000);

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    console.log('request ', request.url);

    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';

    var extname = String(path.extname(filePath)).toLowerCase();
    var contentType = 'text/html';
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.svg': 'application/image/svg+xml'
    };

    contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                response.end();
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');
