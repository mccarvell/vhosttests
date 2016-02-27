'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({port: 3001});

server.route({
    method: "GET",
    path: "/",
    handler: function(request, reply) {
        reply('app1');
    }
});

server.start(function(err){
    console.log("server running at port 3001");
});