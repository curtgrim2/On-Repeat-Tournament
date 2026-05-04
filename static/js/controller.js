/*Problem: We need to node.js to help assist in the automation of the game
Gameplan:*/

var express = require('express');//pulls express library that gets used in app variable
var http = require('http'); //builds server
var fs  = require('fs'); //handling files
var app = express();

var server = http.createServer(app);
var io = require('socket.io')(server);
var path = require('path');
app.use(express.static(path.join(__dirname,'./static'))); //serves static files from the static folder



