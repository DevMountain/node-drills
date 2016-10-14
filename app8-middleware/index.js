var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var port = 3000;
var data = require('./data.js')

var app = express();

var requireAuth = function(req, res, next) {
  if (!req.session.currentUser) {
    return res.status(403).end();
  }
  return next();
}

app.use(bodyParser.json());

app.use(session({
  secret: 'qwertyuiop',
  saveUninitialized: true,
  resave: true
}));

app.use(function(req, res, next) {
	console.log(req.session);
	next();
})

app.post('/login', function(req, res, next) {
	req.session.currentUser = req.body.username;
	res.status(200).send('logged in');
})

app.get('/data', function(req, res, next) {
	res.status(200).json(data);
})

app.post('/data', requireAuth, function(req, res, next) {
	data.push(req.body);
	res.status(200).json(data);
})

app.listen(port, function() {
	console.log('Listening on port',port);
})