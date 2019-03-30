var express = require('express');

var port = 3000;
var app = express();

app.use(express.json());




app.listen(port, function() {
  console.log('listening to port ', port);
});
