var http = require('http');

var server = http.createServer(function (req, res) {
  var name = req.url.split('=');
  res.writeHead(200);
  res.end('Hello ' + name[1]);
});

server.listen(3000);

console.log('Server running at port 3000');

// -- OTHER SOLUTION --
// var http = require('http');
// var url = require('url');
// var querystring = require('querystring');

// var server = http.createServer(function (req, res) {
//   var query = url.parse(req.url).query;
//   var parsed = querystring.parse(query);
//   res.writeHead(200);
//   res.end('Hello ' + parsed.username);
// });

// server.listen(3000);

// console.log('Server running at port 3000');
