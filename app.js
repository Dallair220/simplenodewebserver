var http = require('http');
var { readFileSync } = require('fs');

var server = http.createServer(function (req, res) {
  if (req.url === '/gummersbach') {
    var html = readFileSync('./gummersbach.html');
  } else {
    var html = readFileSync('./index.html');
  }
  var css = readFileSync('./style.css');
  res.writeHead(200);
  res.end('<style>' + css + '</style>' + html);
});

server.listen(3000);

console.log('Server running at port 3000');
