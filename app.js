var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connec to mongoose
mongoose.connect('mongodb://localhost:/bookstore')
var db = mongoose.connection;

app.get('/', function(req,res){
  res.send('Please use api/books or api/genres');
});

app.listen(3000);
console.log('Hey every clap your hands');
