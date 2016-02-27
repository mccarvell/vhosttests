'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({port: 3002});

server.route({
    method: "GET",
    path: '/',
    handler: function(request, reply){
        reply('app2');
    }
});

server.start(function(err){
    console.log('server started on port 3002');
});