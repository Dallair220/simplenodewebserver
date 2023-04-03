var http = require('http');
var { readFileSync } = require('fs');

var server = http.createServer(function (req, res) {
  var indexHTML = readFileSync('./index.html');
  res.writeHead(200);
  res.end(indexHTML);
});

server.listen(3000);

console.log('Server running at port 3000');

//  var txt = readFileSync('./tmp.txt', 'utf8');
