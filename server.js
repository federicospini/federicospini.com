var express = require('express');
var server;

server = express();

server
    .use(express.static(__dirname + '/public'))
    .listen(9001);

