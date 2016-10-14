var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var data = require('./data.js')

var app = express();

app.use(bodyParser.json());

app.get('/data', function(req, res, next) {
	var query = Object.keys(req.query)[0];
	data = req.query[query] ? data.filter(function(elem) {
		return elem[query] === req.query[query]
	}) : data;
	res.status(200).json(data);
})

app.get('/data/:id', function(req, res, next) {
	res.status(200).json(data[req.params.id])
})


app.delete('/data/:id', function(req, res, next) {
	data.splice(req.params.id,1);
	res.status(200).json(data);
})

app.delete('/data', function(req, res, next) {
	var query = Object.keys(req.query)[0];
	data = data.filter(function(elem) {
		return elem[query] != req.query[query]
	});
	res.status(200).json(data);	
})


app.put('/data/:id', function(req, res, next) {
	data[req.params.id] = req.body;
	res.status(200).json(data);
})

app.put('/data', function(req, res, next) {
	var query = Object.keys(req.query)[0];
	data.forEach( function(elem, idx, arr) {
		if (elem[query] == req.query[query]) {
			arr[idx] = req.body;
		};
	});
	res.status(200).json(data);
})


app.post('/data', function(req, res, next) {
	data.push(req.body);
	res.status(200).json(data);
})

app.listen(port, function() {
	console.log('Listening on port',port);
})