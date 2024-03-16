//create web server
var http = require('http');
var server = http.createServer(function(req, res) {
  // Set the response status code to 200 (OK)
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Send a response body
  res.end('Hello World\n');
});
// Listen on port 3000, IP defaults to