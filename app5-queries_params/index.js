var express = require('express');
var port = 3000;
var data = require('./data.js')

var app = express();

app.use(express.json());




app.listen(port, function() {
	console.log('Listening on port',port);
})
