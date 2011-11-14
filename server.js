var express = require('express'),
    server;

server = express.createServer();

server
    .use(express.static(__dirname + '/public'))
    // .listen(80);
	.listen(3000);

