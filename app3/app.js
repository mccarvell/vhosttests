'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({port: 3003});

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply){
        reply('app3');
    }
});

server.start(function(err){
    console.log('app3 listening on port 3003');
});