var express = require('express');
var bodyParser = require('body-parser');

var port = 3000;
var app = express();

app.use(bodyParser.json());




app.listen(port, function() {
  console.log('listening to port ', port);
});