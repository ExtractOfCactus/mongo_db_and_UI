var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require("path");
var MongoClient = require("mongodb").MongoClient
var db;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

app.get('/reviews', function(req, res) {
  db.collections('reviews').find().toArray(function(req, res) {
    res.json(reviews);
  });
});

app.post('/reviews', function(req, res) {
  db.collections('reviews').save(req.body, function(err, result){
    res.redirect('/');
  });
});

MongoClient.connect('mongodb://localhost:27017/fringe_reviews', function(err, database) {
  if (err) {
    console.log(err);
    return;
  }

  db = database;
  console.log("Connected to ye olde database...")

  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});


app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');

});
