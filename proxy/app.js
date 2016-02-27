var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

//
// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
var server = http.createServer(function(req, res) {
    // You can define here your custom logic to handle the request
    // and then proxy the request.
    var endpoints = {
        "domain1.localhost:1337": "http://localhost:3001",
        "domain2.localhost:1337": "http://localhost:3002",
        "domain3.localhost:1337": "http://localhost:3003"
    };
    debugger;
    proxy.web(req, res, { target: endpoints[req.headers.host] });
});

console.log("listening on port 1337")
server.listen(1337);