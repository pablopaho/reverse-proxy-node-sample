var http = require('http'),
    httpProxy = require('http-proxy');

var app = require('express')();
var port = process.env.PORT || 5001;

 app.listen(port, function() {
   console.log("Listening on " + port);
 });

var proxy = new httpProxy.createProxyServer();
app.get('/blog*', function (req, res, next) {
    proxy.web(req, res, {
        target: 'http://localhost:5000'
    });
});
