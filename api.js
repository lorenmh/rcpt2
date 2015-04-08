var http = require('http');
var url_parser = require('url');
var child_process = require('child_process');
var spawn = child_process.spawn;

api = http.createServer(function(req, res) {
  var process, data;

  process = spawn('sh', [
    'ocr.sh',
    '-l', 'eng',
    '-psm', '4',
    req.url.substr(1)
  ] );
  
  process.stdout.on('data', function(d) {
    data = d;
  });
  
  process.stdout.on('close', function() {
    res.writeHead(200, { 'Content-Type': 'application/json' }); 
    res.end(data);
  });
  
  
});

api.listen(3000, 'localhost');

console.log('Server running');
