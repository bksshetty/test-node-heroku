var http = require('http');
http.createServer(function (request, response) {
    var asdf;
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(4000);
console.log('Server running at http://127.0.0.1:4000/');
