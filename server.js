process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
// var express = require('data');

var app = express();
// var app = express(vegetables, fruits, farmLands); 

app.listen(5000);
module.exports = app;

console.log('Server running at http://localhost:5000/');
