var http = require('http');
var { readFileSync } = require('fs');

var server = http.createServer(function (req, res) {
  var html;
  if (req.url === '/gummersbach') {
    html = readFileSync('./gummersbach.html');
  } else {
    var html = readFileSync('./index.html');
  }
  res.writeHead(200);
  res.end(html);
});

server.listen(3000);

console.log('Server running at port 3000');
