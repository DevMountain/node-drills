var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var data = require('./data.js')

var app = express();

app.use(bodyParser.json());

app.get('/data', function(req, res, next) {
	res.status(200).json(data);
})

app.post('/data', function(req, res, next) {
	data.push(req.body);
	res.status(200).json(data);
})

app.listen(port, function() {
	console.log('Listening on port',port);
})