var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var port = 3000;
var app = express();

app.use(bodyParser.json());

app.use(session({
  secret: 'qwertyuiop',
  saveUninitialized: true,
  resave: true
}));

app.get('/favorites', function(req, res, next) {
  res.status(200).json(req.session.favorites || 'no favorites yet');
});

app.post('/favorites', function(req, res, next) {
  if (!req.session.favorites) {
    req.session.favorites = [];
  }
  req.session.favorites.push(req.body);
  res.status(200).json(req.session.favorites);
});

app.listen(port, function() {
  console.log('listening to port ', port);
});