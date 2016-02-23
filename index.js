// var proxy = require('express-http-proxy');

// var app = require('express')();
 
// app.use('/proxy', proxy('www.google.com', {
//   forwardPath: function(req, res) {
//     return require('url').parse(req.url).path;
//   }
// }));

// var port = process.env.PORT || 5000;

// app.listen(port, function() {
//   console.log("Listening on " + port);
// });

var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
httpProxy.createProxyServer({target:'http://localhost:80'}).listen(8000); // See (†)
//
// Create your target server
//
// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
//   res.end();
// }).listen(5000);

